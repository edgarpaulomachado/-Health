import { Metadata } from "next";
import fonts from "../../config/fonts";

export const metadata: Metadata = {
  title: "Home",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={fonts.fontClassNames}>
      {children}
    </div>
  );
}