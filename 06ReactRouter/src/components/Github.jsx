import React from "react";
import { useLoaderData } from "react-router-dom";
export const githubInfoLoader = async () =>{
  const res = await fetch('https://api.github.com/users/UdaiChauhan284')
  return res.json();
}
export function Github(){
  const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-400 text-yellow-500 p-4 text-3xl'>Github Name : {data.name}
    <img src={data.avatar_url} alt="user profile"></img>
    Github Public Repo: {data.public_repos}
    </div>
  )
}

