import HomeContent from '@/components/reusable/HomeContent'
import LikeAddBtn from '@/components/song/LikeAddBtn'
import SongInfo from '@/components/song/SongInfo'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { getRecomended } from '@/lib/home'


const page =async () => {
  const recomendedData =await getRecomended();
  return (
    <div className="p-2 py-6 flex flex-col gap-6 rounded-md overflow-y-auto overflow-hidden top-0 custom-scrollbar sm:h-[calc(100vh-115px)] h-[calc(100vh-200px)]">
      <div className="sm:block hidden md:hidden">
        <SidebarTrigger />
      </div>
      <SongInfo/>
      <LikeAddBtn/>
      <HomeContent title="Recommended" data={recomendedData} pl={2} />
    </div>
  )
}

export default page
