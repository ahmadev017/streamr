import { getPrivatePlaylists, getProfileInfo, getPublicPlaylists, getUserCreations } from '@/lib/profile';
import React from 'react'
import HomeContent from '../reusable/HomeContent';

const ProfileAll = () => {
  const publicPlaylists = getPublicPlaylists();
      const privatePlaylists = getPrivatePlaylists();
      const userCreations = getUserCreations();
          const profileInfo = getProfileInfo();
      
        const fullName = profileInfo.name;
      
      const firstName = fullName.split(" ")[0];
  return (
    <div className="flex flex-col gap-2">
        <HomeContent title="Public Playlists" data={publicPlaylists} pl={2} />
        <HomeContent title="Private Playlists" data={privatePlaylists} pl={30} />
        <HomeContent title="Liked Songs" data={publicPlaylists} pl={2} />
        <HomeContent title={firstName + "'s Creations"} data={userCreations} pl={2} />
        
      </div>
  )
}

export default ProfileAll
