import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from '../appwrite/config';

function AllPosts(){
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, [])
  appwriteService.getPosts([]).then((posts) => {
    if(posts){
      setPosts(posts.documents)
    }
  })
  return(
    <div className="w-full py-7">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post)=>{
            <div key={post.key} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          })}
        </div>
      </Container>
    </div>
  )
}
export default AllPosts