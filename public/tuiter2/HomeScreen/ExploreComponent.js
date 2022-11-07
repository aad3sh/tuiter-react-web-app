import PostSummaryList from "./PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
        <div class="row wd-margin-top">
            <div class = "col-10 col-sm-10 col-md-11 col-lg-11">
                <input type="text" placeholder="&nbsp; &nbsp; &#xF002; &nbsp; &nbsp;&nbsp; Search Twitter" style="font-family:'Helvetica Neue',FontAwesome"
                       class="wd-search-field"/>
            </div>
            <div class = "col-1 col-sm-1 col-md-1">
                <i class="fa-solid fa-gear"></i>
            </div>
        </div>
        <div class="row text-centre wd-margin-top">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color: rgb(113, 118, 123)">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color: rgb(113, 118, 123)">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color: rgb(113, 118, 123)">New</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="color: rgb(113, 118, 123); border-bottom-color: #0d6efd; border-bottom-width: medium; color: white; font-weight: bold">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-none d-lg-block d-xl-block d-xxl-block">
                    <a class="nav-link" href="#" style="color: rgb(113, 118, 123)">Entertainment</a>
                </li>
            </ul>
        </div>
        <div class="row wd-margin-top">
            <ul class="list-group border-color">
                <li class="list-group-item featured-tweet">
                    <h2 class="featured-headline">SpaceX's Starship</h2>
                </li>
           ${PostSummaryList()}
        </ul>
        </div>
    `);
}
export default ExploreComponent;