const PostSummaryListItem = (post) => {
    return(`
        <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
                    <div class="grid">
                        <div class="row">
                            <div class="col-9 col-sm-9 col-md-10">
                                <div class="row different-width">
                                    <p class="text-header" style="float: left">${post.topic}
                                    </p>
                                </div>
                                <div class="row" style="float: left">
                                    <p class="text-title">
                                       ${post.userName} <i class="fa-solid fa-circle-check"></i>
                                    </p>
                                </div>
                                <div class="row text-news">
                                    <p class="text-content">${post.title}<br><br>
                                    </p>
                                </div>
                            </div>
                            <div class = "col-3 col-sm-3 col-md-2">
                                <img src=${post.image} class="news-image">
                            </div>
                        </div>
                    </div>
                </li>
    `);
   }
   export default PostSummaryListItem;