export const getPlaylistInfo = () => {
  return {
    name: "Chill Beats",
    likes: "120",
    createdBy: "Sophia",
    createrProfile:"/profile.png",
    profileUrl:"/profile",
    bio:"A collection of heart-touching melodies for the days when words aren’t enough."
  };
};

export const getPlaylistSongs = () => {
  return [
    { sr: "1", image: "/recomended/recomended2.png", title:"Midnight Groove", artist:"Michael Jackson", added:"2023-08-15", duration:"3:45" },
    { sr: "2", image: "/recomended/recomended1.png", title:"Electric Dreams", artist:"Madonna", added:"2023-05-15", duration:"2:45" },
    { sr: "3", image: "/recomended/recomended3.png", title:"Silent Echoes", artist:"Britney Spears", added:"2024-03-15", duration:"2:25" },
    { sr: "4", image: "/recomended/recomended4.png", title:"Crimson Horizon", artist:"Taylor Swift", added:"2022-04-05", duration:"3:50" },
    { sr: "5", image: "/recomended/recomended1.png", title:"Velvet Shadows", artist:"Ariana Grande", added:"2025-08-07", duration:"3:05" },
    { sr: "6", image: "/recomended/recomended4.png", title:"Midnight Groove", artist:"Dua Lipa", added:"2025-08-09", duration:"2:55" },
  ];
};
