/* eslint-env jquery */
import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";
function exploreComponent() {
    $('#wd-explore').append(`
   <div class="row mt-2">
    <div class = "col-2 col-sm-2 col-md-2 mt-1 mb-1">
        ${NavigationSidebar()}
    </div>
    <div class="col-10 col-sm-10 col-md-7 wd-text-centre wd-margin-top">
        ${ExploreComponent()}
    </div>
    <div class="col-0 col-sm-2 col-md-3 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block wd-text-centre">
        ${WhoToFollowList()}
    </div>
   </div>
    `);
 }
 $(exploreComponent);