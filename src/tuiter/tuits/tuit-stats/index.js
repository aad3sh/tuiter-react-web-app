import React, {}  from 'react';
import ConditionalLike from "../../conditional-like/conditional-like";
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
        <div className="container ps-5">
            <div className="row">
                <div className="col-sm">
                    <i className="fa-regular fa-comment"></i>
                    &nbsp;{post.replies}
                </div>
                <div className="col-sm">
                    <i className="fa-solid fa-retweet"></i>
                    &nbsp;{post.retuits}
                </div>
                <div className="col-sm">
                    <ConditionalLike tuit={post}/>
                </div>
                <div className="col-sm">
                    <i className="fa-solid fa-download"></i>
                </div>
            </div>
        </div>
    );
};
export default TuitStats;