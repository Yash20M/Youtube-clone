import React from 'react';
import "../CSS/Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import Trending from '@mui/icons-material/Whatshot';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import History from '@mui/icons-material/History';
import YourVideos from '@mui/icons-material/OndemandVideo';
import WatchLater from '@mui/icons-material/WatchLater';
import LikedVideos from '@mui/icons-material/ThumbUpAltOutlined';
import ShowMore from '@mui/icons-material/ExpandMoreOutlined';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <SidebarRow selected title="Home" Icon={HomeIcon} />
        <SidebarRow title="Trending" Icon={Trending} />
        <SidebarRow title="Subscription" Icon={SubscriptionIcon} />
        <hr />
        <SidebarRow  title="Library" Icon={VideoLibraryIcon} />
        <SidebarRow title="History" Icon={History} />
        <SidebarRow title="Your Videos" Icon={YourVideos} />
        <SidebarRow title="Watch Later" Icon={WatchLater} />
        <SidebarRow title="Liked Videos" Icon={LikedVideos} />
        <SidebarRow title="Show More" Icon={ShowMore} />
        <hr />
      </div>
    </>
  )
}

export default Sidebar;