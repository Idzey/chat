"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { JSX, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

interface SidebarProps {
  items: { name: string; icon: JSX.Element; link: string }[];
}

export default function Sidebar({ items }: SidebarProps) {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  console.log("session", !session?.user);

  return (
    <div className="px-10 py-6 bg-backgroud_white">
      <Image
        src="/logo.svg"
        alt="Workhubs"
        width={150}
        height={100}
        className="mb-10 cursor-pointer"
      />

      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <Link href={item.link} key={index}>
            <SidebarItem link={item.link} name={item.name} icon={item.icon} />
          </Link>
        ))}
        {session?.user && (
          <div onClick={() => setLogoutOpen(true)}>
            <SidebarItem name="Logout" icon={<LogOut />} />
          </div>
        )}
        {!session?.user && (
          <>
            <div onClick={() => router.push("/auth/signup")}>
              <SidebarItem name="Sign up" icon={<UserPlus />} />
            </div>
            <div onClick={() => router.push("/auth/login")}>
              <SidebarItem name="Login" icon={<LogIn />} />
            </div>
          </>
        )}
      </div>

      <LogoutModal open={logoutOpen} setOpen={setLogoutOpen} />
    </div>
  );
}

function SidebarItem({
  name,
  link,
  icon,
}: {
  name: string;
  link?: string;
  icon: JSX.Element;
}) {
  const pathname = usePathname();
  return (
    <>
      <div
        className={clsx(
          "flex gap-3 items-center cursor-pointer px-4 py-3 rounded-xl text-xl",
          {
            "bg-blue text-white": pathname == link,
          }
        )}
      >
        <div className={clsx(pathname == link ? "text-white" : "text-blue")}>
          {icon}
        </div>
        {name}
      </div>
    </>
  );
}

function LogoutModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Are you sure you want to log out?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-4 justify-end">
          <DialogTrigger>
            <div className="cursor-pointer p-2 rounded-xl">Cancel</div>
          </DialogTrigger>
          <div
            className="cursor-pointer bg-red text-white p-2 rounded-xl"
            onClick={() => signOut()}
          >
            Log out
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
