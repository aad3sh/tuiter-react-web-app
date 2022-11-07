import React, {}  from 'react';
const TuitStats = (
    {
        post = {
            "replies": "0",
            "retuits": "0",
            "likes": "0",
        }
    }
) => {
    return(
        <div className="row-cols-auto ps-5">
            <a href="javascript:void(0);"><i className="fa-regular fa-comment"></i></a>
            &nbsp;{post.replies}&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="javascript:void(0);"><i className="fa-solid fa-retweet"></i></a>
            &nbsp;{post.retuits}&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="javascript:void(0);"><i className="fa-solid fa-heart"></i></a>
            &nbsp;{post.likes}&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="javascript:void(0);"><i className="fa-solid fa-download"></i></a>
        </div>
    );
};
export default TuitStats;