import React from 'react';
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, Title, featureImage}){
  return (
    <Link to={'/post/${$id}'}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center md-4'>
          <img src={appwriteService.getFilePreview(featureImage)} alt={Title} className='rounded-xl'></img>
        </div>
        <h2 className='text-xl font-semibold'>{Title}</h2>
      </div>
    </Link>
  )
}
export default PostCard 