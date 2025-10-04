import Aside from "@/components/aside";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return ( 
    <div className="flex w-full overflow-x-hidden">
      <Aside />
      {children}
    </div>
  );
}