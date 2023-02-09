import React from 'react';
import "../CSS/ChannelRow.css";
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const ChannelRow = ({ img, channel, subs, noOfVideos, description, Verified }) => {
    return (
        <>
            <div className="channelRow">
                <Avatar className="channelRow_logo" src={img} />
                <div className="channelRow_text">
                    <h4>{channel} {Verified && <VerifiedIcon />}</h4>
                    <p>{subs} Subscribers | {noOfVideos} videos</p>
                    <h6>Decription</h6>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default ChannelRow