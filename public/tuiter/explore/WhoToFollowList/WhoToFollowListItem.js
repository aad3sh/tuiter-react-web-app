const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item change-background">
                <div class="grid">
                    <div class="row">
                        <div class="col col-md-2">
                            <img src=${who.avatarIcon} class="sidebar-images">
                        </div>
                        <div class="col col-md-6">
                        <div class="row">
                        <h6 class="title-header" style="margin-left: 5px;">${who.userName} <i class="fa-solid fa-circle-check"></i>
                        </h6>
                        </div>
                        <div class="row">
                        <h6 class="title-caption" style="margin-left: 5px;">@${who.handleName}</h6>
                        </div>
                        </div>
                        <div class="col col-md-4">
                            <button class="rounded-button" style="background-color: white; color: black; font-weight: bold">Follow</button>
                        </div>
                    </div>
                </div>
            </li>
    `);
   }
   export default WhoToFollowListItem;