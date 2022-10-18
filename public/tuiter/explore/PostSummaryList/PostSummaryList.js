import posts from "./posts.js";
import PostSummaryListItem from "./PostSummaryListItem.js";

const PostSummaryList = () => {
    return(`

    <!-- <div class="ms-1 me-1"> -->
                ${
                    posts.map(p => {
                        return(PostSummaryListItem(p));
                    }).join('')
                }
                <!-- </div> -->
    `);
}
export default PostSummaryList;