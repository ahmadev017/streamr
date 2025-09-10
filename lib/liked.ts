// lib/liked.ts
export type Song = {
  sr: string;
  image: string;
  title: string;
  artist: string;
  added: string;
  duration: string;
};

const SONGS: Song[] = [
  { sr: "1", image: "/trending/trending1.png", title:"Midnight Groove", artist:"Michael Jackson", added:"2023-08-15", duration:"3:45" },
  { sr: "2", image: "/trending/trending2.png", title:"Electric Dreams", artist:"Madonna", added:"2023-05-15", duration:"2:45" },
  { sr: "3", image: "/trending/trending3.png", title:"Silent Echoes", artist:"Britney Spears", added:"2024-03-15", duration:"2:25" },
  { sr: "4", image: "/trending/trending4.png", title:"Crimson Horizon", artist:"Taylor Swift", added:"2022-04-05", duration:"3:50" },
  { sr: "5", image: "/trending/trending2.png", title:"Velvet Shadows", artist:"Ariana Grande", added:"2025-08-07", duration:"3:05" },
  { sr: "6", image: "/trending/trending4.png", title:"Midnight Groove", artist:"Dua Lipa", added:"2025-08-09", duration:"2:55" },
];

const DELAY = 5000;

async function generateSongData(song: Song, delay: number): Promise<Song> {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * delay));
  return song;
}

// return list of promises (not resolved yet)
export const getLikedSongs = async (): Promise<Promise<Song>[]> => {
  "use server";
  return SONGS.map((song) => generateSongData(song, DELAY));
};

