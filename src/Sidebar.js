import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';
import SubscriptionsTwoToneIcon from '@material-ui/icons/SubscriptionsTwoTone';

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import ThumbUpaAltOutlinedIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarRow selected Icon={HomeTwoToneIcon} title="Home" />
            <SidebarRow Icon={WhatshotTwoToneIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsTwoToneIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
            <SidebarRow Icon={ThumbUpaAltOutlinedIcon} title="Liked " />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
        </div>
    )
}
export default Sidebar; 