import { getPlaylistSongs } from '@/lib/playlist'
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

const PlaylistTable = () => {
      const playlistSongs =getPlaylistSongs()
  return (
    <Table className='text-muted-foreground'>
        <TableCaption>A list of your liked songs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Song</TableHead>
            <TableHead className='hidden sm:table-cell'>Artist</TableHead>
            <TableHead className='hidden md:table-cell'>Date Added</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Play</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {playlistSongs.map((song, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{song.sr}</TableCell>
              <TableCell className="flex text-xs items-center gap-3">
                <Image
                  src={song.image}
                  alt={song.title}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                {song.title}
              </TableCell>
              <TableCell className='hidden sm:table-cell text-xs'>{song.artist}</TableCell>
              <TableCell className='hidden md:table-cell text-xs'>{song.added}</TableCell>
              <TableCell className='text-xs pl-4'>{song.duration}</TableCell>
              <TableCell>
                <div className='rounded-full flex p-1 bg-streamr w-8 h-8 items-center justify-center cursor-pointer'>
                    <FaPlay size={15} className='text-white'/>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}

export default PlaylistTable
