import React, { useCallback, useId } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const id = useId();
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        Title: post?.Title || "",
        slug: post?.$id || "",
        context: post?.context || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    try {
      if (post) {
        const file =
          data.image && data.image[0]
            ? await appwriteService.uploadFile(data.image[0])
            : null;

        if (file) {
          appwriteService.deleteFile(post.featureImage);
        }

        const updatedData = {
          ...data,
          featureImage: file ? file.$id : undefined,
        };

        // Check if 'post' and 'post.$id' are defined before trying to access them
        if (file && file.$id && post && post.$id) {
          const dbPost = await appwriteService.updatePost(
            post.$id,
            updatedData
          );

          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        }
      } else {
        const file =
          data.image && data.image[0]
            ? await appwriteService.uploadFile(data.image[0])
            : null;

        if(file) {
          const fileId = file.$id;
          const dbPost = await appwriteService.createPost({
            userid: userData.$id,
            ...data,
            featureImage: fileId,
          });

          if(dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "Title") {
        setValue("slug", slugTransform(value.Title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("Title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Context :"
          name="context"
          control={control}
          defaultValue={getValues("context")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Feature Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featureImage)}
              alt={post.Title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
