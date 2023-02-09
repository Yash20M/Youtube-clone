import React from 'react';
import Avatar from '@mui/material/Avatar';
import "../CSS/VideoCard.css";

const VideoCard = ({ image, title, channel, views, timeStamp , channelPix }) => {
    return (
        <>
            <div className="videoCard">
                <img src={image} alt="Thumbnail" className='video_thumbnail' />
                <div className="videoCard_info">
                    <Avatar
                        src={channelPix}
                        className="videoCard_avatar"
                    />
                    <div className="videoCard_text">
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>
                            {views} * {timeStamp}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCard;