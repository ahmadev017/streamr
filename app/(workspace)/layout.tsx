
import { SidebarProvider } from "@/components/ui/sidebar";
import Provider from "./Provider";



const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    
      <Provider>
      {children}
      </Provider>
  );
};

export default layout;

