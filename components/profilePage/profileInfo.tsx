"use client"
import { getProfileInfo } from '@/lib/profile';
import { ImagePlus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { SidebarTrigger } from '../ui/sidebar';

const ProfileInfo = () => {
    const [isEdit, setIsEdit] = useState(false);
  const profileInfo = getProfileInfo();

  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    
    <div className='bg-streamr/10 p-3 '>
      <div className="sm:block hidden md:hidden">
        <SidebarTrigger />
      </div>
    <div className="sm:p-6 sm:py-6 w-full rounded-t-md flex items-center justify-between">
      
        <div className="flex gap-3">
          {/* Profile Image */}
          <div className="overflow-hidden rounded-full">
            {isEdit ? (
              <label
                htmlFor="image"
                className="relative bg-streamr/30 w-24 h-24 rounded-full flex items-center justify-center cursor-pointer"
              >
                {preview ? (
                  <Image
                    src={preview}
                    alt="profile preview"
                    width={96}
                    height={96}
                    className="object-cover rounded-full"
                  />
                ) : (
                  <ImagePlus className="w-8 h-8 text-white" />
                )}
                <input
                  type="file"
                  id="image"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            ) : (
              <Image
                src={preview || profileInfo.image}
                alt="profile"
                width={96}
                height={96}
                className="object-cover rounded-full"
              />
            )}
          </div>

          {/* Name + Email */}
          {isEdit ? (
            <div className="flex flex-col justify-center gap-1">
              <Input
                type="text"
                defaultValue={profileInfo.name}
                className="h-8"
              />
              <Input
                type="text"
                defaultValue={profileInfo.username}
                className="h-8"
              />
            </div>
          ) : (
            <div className="flex flex-col justify-center">
              <h2 className="text-lg font-semibold">{profileInfo.name}</h2>
              <p className="text-sm text-gray-500">{profileInfo.username}</p>
            </div>
          )}
        </div>

        {/* Action button */}
        {isEdit ? (
          <Button
            onClick={() => setIsEdit(false)}
            variant={"customOrange"}
            size={"responsive"}
            className="cursor-pointer bottom-0 right-0"
          >
            Save edit
          </Button>
        ) : (
          <Button
            onClick={() => setIsEdit(true)}
            variant={"customOrange"}
            size={"responsive"}
            className="cursor-pointer bottom-0 right-0"
          >
            Edit Profile
          </Button>
        )}
      </div>
      </div>
  )
}

export default ProfileInfo
