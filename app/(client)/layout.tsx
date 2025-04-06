import Header from "@/components/ui/header";
import { CalendarCheck, MessageSquare } from "lucide-react";
import Sidebar from "@/components/ui/sidebar";

const itemsSidebar = [
  {
    name: "Messages",
    link: "/chat",
    icon: <MessageSquare />,
  },
  {
    name: "Schedule",
    link: "/schedule",
    icon: <CalendarCheck />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden w-full">
      <Sidebar items={itemsSidebar} />

      <div className="flex flex-col flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
}
