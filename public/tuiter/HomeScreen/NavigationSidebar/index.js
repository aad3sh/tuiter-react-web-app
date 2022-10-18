const NavigationSidebar = () => {
    return(`
        <ul class="list-group" style="background-color: rgba(231, 233, 234, 0.1); color: white">
            <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
                <i class="fab fa-twitter fa-2x"></i>
            </li>
            <li class="list-group-item active" style="background-color: rgba(231, 233, 234, 0.1); color: white">
                <div class="grid">
                    <div class="row">
                        <div class="col col-md-1" style="float: left">
                            <i class="fa-solid fa-home"></i>
                        </div>
                        <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                            Home
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item">
                <div class="grid">
                    <div class="row">
                        <div class="col col-md-1" style="float: left">
                            <i class="fa-solid fa-hashtag"></i>
                        </div>
                        <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                        <a href="../explore/index.html">
                            Explore
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
                <div class="grid">
                    <div class="row">
                        <div class="col col-md-1" style="float: left">
                            <i class="fa-solid fa-bell"></i>
                        </div>
                        <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                            Notification

                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
                <div class="grid">
                    <div class="row">
                        <div class="col col-md-1" style="float: left">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                            Messages
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
                <div class="grid">
                    <div class="row">
                        <div class="col col-md-1" style="float: left">
                            <i class="fa-solid fa-bookmark"></i>
                        </div>
                        <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                            Bookmarks
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
                <div class="grid">
                    <div class="row">
                        <div class="col col-md-1" style="float: left">
                            <i class="fa-solid fa-list"></i>
                        </div>
                        <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                            Lists
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
                <div class="grid">
                    <div class="row">
                        <div class="col col-md-1" style="float: left">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                            Profile
                        </div>
                    </div>
                </div>
            </li>
            <li class="list-group-item" style="background-color: rgba(231, 233, 234, 0.1); color: white">
                <div class="grid">
                    <div class="row">
                        <div class="col col-md-1" style="float: left">
                            <i class="fa-solid fa-message"></i>
                        </div>
                        <div class="col d-none d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" style="float: left">
                            More
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <button class="rounded-button">Tweet</button>
    `);
   }
   export default NavigationSidebar;