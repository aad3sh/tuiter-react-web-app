import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`

    <!-- <div class="ms-1 me-1"> -->
    <ul class="list-group background-tabs">
            <li class="list-group-item change-background">
                <b style="float: left; font-size: medium">Who to follow</b>
            </li>
                ${
                    who.map(w => {
                        return(WhoToFollowListItem(w));
                    }).join('')
                }
                </ul>
                <!-- </div> -->
    `);
}
export default WhoToFollowList;