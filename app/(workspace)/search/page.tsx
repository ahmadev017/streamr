import Results from "@/components/searchPage/Results";
import SearchBar from "@/components/searchPage/SearchBar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getSearch } from "@/lib/Search";

const Page = () => {
  const searchData = getSearch();
  return (
    <div className="p-2 py-6 flex flex-col gap-8 rounded-md overflow-y-auto overflow-hidden top-0 custom-scrollbar sm:h-[calc(100vh-115px)] h-[calc(100vh-200px)]">
      <div className="sm:block hidden md:hidden">
        <SidebarTrigger />
      </div>
      <SearchBar />
      <div className="mx-4 w-full h-[0.5px] dark:bg-[#524f4f] bg-[#d9d4d4]" />
      <div className="flex flex-col gap-4">
        {searchData.map((item, index) => (
          <Results key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
