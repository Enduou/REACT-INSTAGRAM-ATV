function Instagram({ profilePicture, centralPicture, username, location, likes, comments }) {
  return ( 
  <div className="instagram-post">
  <div className="user-info">
    <img src={profilePicture} alt="Profile" className="profile-picture" />
    <p className="username">{username}</p>
  </div>
  <img src={centralPicture} alt="Post" className="post-picture" />
  <div className="post-details">
    {location && <p className="location">{location}</p>}
    <div className="engagement">
      <p className="likes">{likes} Likes</p>
      <p className="comments">{comments} Comments</p>
    </div>
  </div>
</div>
    
  );
}

export default Instagram;