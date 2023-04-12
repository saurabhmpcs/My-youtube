import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return null; // or some other fallback
  }

  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div>
      <img src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
