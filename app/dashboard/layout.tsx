import Aside from "@/components/aside";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return ( 
    <div className="flex w-full overflow-x-hidden">
      <Aside />
      {/* when Aside is fixed we offset the content by the Aside width (w-64) to prevent overlap */}
      <main className="flex-1 min-h-screen bg-transparent ml-64">
        {children}
      </main>
    </div>
  );
}