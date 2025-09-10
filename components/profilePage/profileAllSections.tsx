import React from "react";
import ProfileAll from "./ProfileAll"; 
import ProfileSections from "./profileSections";
import { tab } from "@/app/(workspace)/profile/page";

interface Props {
  activeTab: tab;
  publicPlaylists: any[];
  privatePlaylists: any[];
  userCreations: any[];
  liked: any[];
}

const ProfileAllSections: React.FC<Props> = ({activeTab,publicPlaylists,privatePlaylists,userCreations,liked,}) => {
  return (
    <div className="mt-4">
      {activeTab === "all" && <ProfileAll />}
      {activeTab === "public" && <ProfileSections data={publicPlaylists} title="Public Playlists" pl={2} />}
      {activeTab === "private"&&<ProfileSections data={privatePlaylists} title="Private Playlists" pl={2}/>}
      {activeTab === "creations"&&<ProfileSections data={userCreations} title="My Creations" pl={2} />}
      {activeTab === "liked"&&<ProfileSections data={liked} title="Liked Songs" pl={2} />}
    </div>
  );
};

export default ProfileAllSections;

