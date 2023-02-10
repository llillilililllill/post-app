import React from 'react'
import PostItem from './PostItem'

const PostMain = ({postList}) => {
  return (
    <ul className="post-list">
        {
            postList.map(post => 
            <PostItem 
                postList = {postList}
                />)
        }
    </ul>
  );
};

export default PostMain