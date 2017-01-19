import React from 'react';

const Profile = ({host}) => {

  return (
    <div className='host-profile'>
      <h1 className='host-page-title'>{host.username}{"'"}s Host Page</h1>
      <h2>{`${host.city}, ${host.state}, ${host.zip}`}</h2>
      <h2>{host.email}</h2>
      <h2>{host.status}</h2>
    </div>
  )
};

export default Profile;
