import React from 'react';
import "../CSS/videoRow.css";

const VideoRow = ({ subs, views, img, timestamp, description, channel, title }) => {
    return (
        <>
            <div className="videoRow">
                <img src={img} alt="Code with harry" />
                <div className="videoRow_text">
                    <h3>{title}</h3>
                    <p className='videoRow_headline'>
                        {channel} |<span className='videosRow_subscribers'>
                            <span className='vidoeRow_subs'> {subs}</span>
                            Subscribers </span>| {views} Views | {timestamp}
                    </p>
                    <p className='video_description'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default VideoRow