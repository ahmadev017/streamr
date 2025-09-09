import React from "react";

interface Props {
  activeTab: "all" | "public" | "private" | "creations" | "liked";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"all" | "public" | "private" | "creations" | "liked">
  >;
}

const ProfileNavs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const items = [
    { title: "All", active: "all" as const },
    { title: "Public", active: "public" as const },
    { title: "Private", active: "private" as const },
    { title: "My Creation", active: "creations" as const },
    { title: "Liked", active: "liked" as const },
  ];

  return (
    <div className="w-full flex items-center gap-5 sm:gap-10 sm:px-10 px-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative cursor-pointer pb-1"
          onClick={() => setActiveTab(item.active)}
        >
          <span
            className={`${
              activeTab === item.active
                ? "font-bold text-streamr"
                : "text-muted-foreground"
            }`}
          >
            {item.title}
          </span>
          {activeTab === item.active && (
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-streamr rounded-full"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileNavs;



