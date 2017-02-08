import React from 'react';

const Profile = ({host}) => {

  let hostImgStyle = {
    backgroundImage: `url(/assets/user${host.id%50}.png)`,
  };

  return (
    <div className='host-profile'>
      <h1 className='host-page-title'>{host.username}{"'"}s Host Page</h1>
      <div className='host-img-and-text'>
        <div className='host-profile-img' style={hostImgStyle}></div>
        <div className='host-profile-text-container'>
          <h2>{`${host.city} ${host.state}, ${host.zip}`}</h2>
          <h2>{host.email}</h2>
          <h2 className='host-profile-status'>{host.status}</h2>
        </div>
      </div>
    </div>
  )
};

export default Profile;
