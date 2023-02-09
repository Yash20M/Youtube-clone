import React from 'react'
import Sidebar from './Sidebar';
import "../CSS/searchPage.css";
import FilterIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
    return (
        <>
            <div className="app_page">
                <Sidebar />
                <div className="searchPage">
                    <div className="searchPage_filter">
                        <FilterIcon className="" />
                        <h2>Filter</h2>
                    </div>
                    <hr />

                    <ChannelRow
                        img="https://yt3.ggpht.com/ytc/AMLnZu8dZQJYCt6Ffcd-pl113huuo_HJ3PpvgkyFk5FkrQ=s900-c-k-c0x00ffffff-no-rj"
                        channel="Code with Harry"
                        Verified
                        subs="50k"
                        noOfVideos={1028}
                        description="Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn. At Code With Harry, I provide a quick and to the point demo along with resources of anything and everything I teach. Source code and other resources are hosted on my website CodeWithHarry.com. I provide source code(if any) in the description of every video.
                        Quality programming videos in Hindi :)                            
                        Business enquiries: harry@codewithharry.com"
                    />

                    <hr />

                    <VideoRow
                        views="10.7k"
                        subs="592K"
                        description="Learn step by step the Next js Matery Course with me"
                        timestamp="20 days"
                        channel="Code with Harrry"
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodSbZRlfWKPwyLvXzkKwtlsY_A7HVwIMqrVSTAbHJYSkk7uj9HCgEXIxICgFm6Jb_FwE&usqp=CAU"
                        title="The Next Js Course"
                    />

                    <VideoRow
                        views="1.7k"
                        subs="592K"
                        description="The Advance JavaScript Course"
                        timestamp="10 days"
                        channel="Code with Harrry"
                        img="https://i.ytimg.com/vi/ER9SspLe4Hg/maxresdefault.jpg"
                        title="The Ultimate JavaScript Course"
                    />

                    <VideoRow
                        views="10.7k"
                        subs="592K"
                        description="React Course with Redux and Projects and MERN stack"
                        timestamp="12 weeks"
                        channel="Code with Harrry"
                        img="https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png"
                        title="Master React Step by Step - 2"
                    />
                    <VideoRow
                        views="10.7k"
                        subs="592K"
                        description="Lets build a protfoilio website using HTML. CSS and javaScript"
                        timestamp="2 month ago"
                        channel="Code with Harrry"
                        img="https://i.ytimg.com/vi/LpCFF2hzPzs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCo-VbyJ0kFc-Lo0WhXDVy26vCxow"
                        title="Lets Build a Portfolio website"
                    />
                </div>
            </div>


        </>
    )
}

export default SearchPage;