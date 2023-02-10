import React from 'react'
import PostMain from './PostListMain'

const PostTemplate = () => {

  const postList = [
    {id:1, title: "Test1", userName:"1", createTime: "2023.01.01"},
    {id:2, title: "Test2", userName:"2", createTime: "2023.01.01"},
    {id:3, title: "Test3", userName:"3", createTime: "2023.01.01"},
    {id:4, title: "Test4", userName:"4", createTime: "2023.01.01"}
  ]
  return (
    <div>
      <PostMain
        postList={postList}  
      />
    </div>
  )
}

export default PostTemplate