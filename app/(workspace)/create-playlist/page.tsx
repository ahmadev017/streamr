"use client";
import PrivacySection from '@/components/create-playlistpage/PrivacySection'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePlaylistFields, CreatePlaylistSchema } from '@/lib/zodSchema/schema';


const Page = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<CreatePlaylistFields>({
    resolver: zodResolver(CreatePlaylistSchema),defaultValues: {playlistName: "",bio: "",privacy: "option-one"}});

  const onSubmit = (data: CreatePlaylistFields) => {
    console.log("Form submitted:", data);
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className='p-4 flex py-4 flex-col gap-4 rounded-md overflow-y-auto overflow-hidden top-0 custom-scrollbar sm:h-[calc(100vh-115px)] h-[calc(100vh-200px)] '
    >
      <h1 className='text-lg font-bold'>Create Playlist</h1>
      <div className='flex flex-col gap-1'>
       <Input placeholder='Playlist Name' className='w-80' {...register("playlistName")}/>
       {errors.playlistName && <p className="text-red-500 text-xs pl-2">{errors.playlistName.message}</p>}
      </div>

      <div className='flex flex-col gap-1'>
       <Textarea placeholder='Bio' className='w-80' {...register("bio")}/>
       {errors.bio && <p className="text-red-500 text-xs pl-2">{errors.bio.message}</p>}
      </div>
      

      <h1 className='text-lg font-bold'>Privacy</h1>
      <div className='flex flex-col gap-1'>
       <PrivacySection register={register} errors={errors} />
       {errors.privacy && <p className="text-red-500 text-xs pl-2">{errors.privacy.message}</p>}
      </div>
      

      <Button size={'responsive'} radius={'lg'} type='submit' variant={'customOrange'} className='cursor-pointer' >Create</Button>
    </form>
  );
};

export default Page;

