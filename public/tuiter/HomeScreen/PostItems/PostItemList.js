import items from "./items.js";
import PostItem from "./PostItem.js";

const PostItemList = () => {
    return(`

    <!-- <div class="ms-1 me-1"> -->
                ${
        items.map(p => {
            return(PostItem(p));
        }).join('')
    }
                <!-- </div> -->
    `);
}
export default PostItemList;