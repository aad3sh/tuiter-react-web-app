import React, {}  from 'react';
import {useSelector} from "react-redux";
import PostItem from "./post-item";

const PostItemList = () => {
    const itemsArray = useSelector(state => state.tuits)
    return(
       <ul className="list-group">
         {
           itemsArray.map(post =>
             <PostItem
               key={post._id} post={post}/> )
         }
       </ul>
     );
};
export default PostItemList;