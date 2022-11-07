const PostItem = (post) => {
    return(`
        <li class="list-group-item" style="background: black; color: white; border-bottom-color: grey; border-width: 0.5px;">
                    <div class="grid">
                    <div class="col-12 col-md-12">
                    <div class="row">
                            <div class = "col-2 col-sm-2 col-md-1">
                                        <img src=${post.image} class="sidebar-images">
                            </div>
                            <div class="col-8 col-sm-8 col-md-8">
                                <div class="row different-width">
                                    <p class="text-title">
                                       ${post.userName} <i class="fa-solid fa-circle-check"></i>
                                    </p>
                                </div>
                                <p class="text-header" style="float: left">@${post.handleName} ${post.time}
                                    </p>
                                <div class="row" style="float: left">
                                    
                                </div>
                                <div class="row text-news">
                                    <p style="color: white;font-weight: lighter">${post.title}<br><br>
                                    </p>
                                </div>
                                <div class="row">
                                    <div class="col-8 col-md-8" style="border-style: solid; border-radius:20px;border-width: 0.5px; border-color: grey">
                                    <div class="row"> 
                                    <img src=${post.image} class = "text-item-image">
                                    </div>
                                    <hr>
                                    <div class="row">
                                    <p style="color: white;font-weight: lighter">${post.title}<br><br>
                                    </p>
                                    </div>
</div>
<div class="row" style="margin-top: 5px;">
                                    <span style="color: lightgray">
                                    <a href="#" style="color: lightgray"><i class="fa-regular fa-comment" style="color: lightgray" ></i></a>
                                    &nbsp;&nbsp;${post.comments}&nbsp;&nbsp;
                                    <a href="#" style="color: lightgray"><i class="fa-solid fa-retweet" style="color: lightgray"></i></a>
                                    &nbsp;&nbsp;${post.retweets}&nbsp;&nbsp;
                                    <a href="#" style="color: lightgray"><i class="fa-regular fa-heart" style="color: lightgray"></i></a>
                                    &nbsp;&nbsp;${post.likes}&nbsp;&nbsp;
                                    <a href="#" style="color: lightgray"><i class="fa-solid fa-download" style="color: lightgray"></i></a>
</span>
                                    </div>         
                                </div>
                            </div>
                        </div>
                    </div>
</div>
                </li>
    `);
}
export default PostItem;