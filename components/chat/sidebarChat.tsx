"use client";
import { EllipsisVertical, Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import { Button } from "../ui/button";

export default function SidebarChat() {
  return (
    <>
      <SidebarChatInput />
      <SidebarChatHeader />
    </>
  );
}

function SidebarChatInput() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="p-4 border-b border-faded_grey">
      <div className="relative w-full">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-blue"
          size={18}
        />
        <Input
          className="pl-10 bg-backgroud_white"
          placeholder="Search or start a new chat"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

function SidebarChatHeader() {
  "use client";
  type SelectValue = "all" | "favorite" | "unread" | "";
  const [select, setSelect] = useState<SelectValue>("");

  return (
    <div className="flex justify-between items-center p-4 border-b border-faded_grey">
      <div className="flex items-center">
        <Select
          value={select}
          onValueChange={(value: SelectValue) => setSelect(value)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Messages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="favorite">Favorite</SelectItem>
            <SelectItem value="unread">Unread</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button variant="outline" size="icon" className="cursor-pointer">
        <EllipsisVertical className="text-blue" />
      </Button>
    </div>
  );
}
