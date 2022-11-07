import React, {}  from 'react';
const PostItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "tesla.jpg"
   }
 }
) => {
  const imageBorder = {
    "border-radius": "3%"
  }
  const indicator = post.liked;
  var type = "fa-regular";
  if(indicator==true){
     type = "fa-solid";
  }
return(
  <li className="list-group-item">
      <div className="row">
        <div className="col-1 mt-1 mb-1 me-2">
          <img className="rounded-circle" height={48} width={48} src={require(`../images/${post.image}`)} alt="side-icon"/>
        </div>
        <div className="col-8 mt-1 mb-1">
          <div className="fw-bold">{post.userName}</div>
          <div>{post.handle}&nbsp;.&nbsp;{post.time}</div>
        </div>
        <div className="col-12 ps-5">
          <div>{post.tuit}</div>
          <div className="mt-2 mb-2"><img style={imageBorder} height={'80%'} width={'90%'} src={require(`../images/${post.image}`)} alt="side-icon"/></div>
        </div>
        <div className="ps-5">
          <a href="javascript:void(0);"><i className="fa-regular fa-comment"></i></a>
          &nbsp;{post.replies}&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="javascript:void(0);"><i className="fa-solid fa-retweet"></i></a>
          &nbsp;{post.retuits}&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="javascript:void(0);"><i className="fa-solid fa-heart"></i></a>
          &nbsp;{post.likes}&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="javascript:void(0);"><i className="fa-solid fa-download"></i></a>            
        </div>
      </div>
  </li>
);
};
export default PostItem;