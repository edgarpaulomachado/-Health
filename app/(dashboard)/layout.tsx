import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return ( 
    <div>
      {children}
    </div>
  );
}