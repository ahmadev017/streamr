import LikedPageInfo from '@/components/liked/LikedPageInfo'
import LikedTable from '@/components/liked/LikedTable'
import { SidebarTrigger } from '@/components/ui/sidebar'


const Page = () => {


  return (
    <div className="p-2 flex flex-col gap-4 rounded-md overflow-y-auto overflow-hidden top-0 custom-scrollbar sm:h-[calc(100vh-115px)] h-[calc(100vh-200px)] ">
      <div className="sm:block hidden md:hidden">
        <SidebarTrigger />
      </div>
      <LikedPageInfo/>
      <LikedTable/>
      
     
    </div>
  )
}

export default Page


