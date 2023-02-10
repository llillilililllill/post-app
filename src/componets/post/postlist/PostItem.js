import React from 'react'

const PostItem = ({ postList }) => {
  const {title, userName, createTime} = postList;


  return (
    <li>
      <a href=''>
        <span>{title}</span>
        <span>{userName}</span>
        <span>{createTime}</span>
      </a>
    </li>
  );
};

export default PostItem