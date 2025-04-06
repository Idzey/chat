"use client";
import { EllipsisVertical, Mic, Plus, Search, Smile, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export default function Chat() {
  
  return (
    <div className="bg-backgroud_white h-full flex flex-col justify-between">
      <ChatMenu />
      <ChatBody />
      <ChatInput />
    </div>
  );
}

function ChatMenu() {
  return (
    <div className="py-4 px-6 border-b border-faded_grey flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarImage src="/test/avatar.png" />
          <AvatarFallback>Im</AvatarFallback>
        </Avatar>

        <p className="text-lg font-bold">Ammi Watts</p>
      </div>

      <div className="flex gap-4 items-center">
        <Button variant="outline" size="icon" className="cursor-pointer">
          <Star className="text-blue" />
        </Button>

        <Button variant="outline" size="icon" className="cursor-pointer">
          <Search />
        </Button>

        <Button variant="outline" size="icon" className="cursor-pointer">
          <EllipsisVertical />
        </Button>
      </div>
    </div>
  );
}

function ChatBody() {
  return (
    <div className="flex flex-col justify-end gap-4 p-6 grow overflow-y-auto">
      {[...Array(2)].map((_, index) => (
        <ChatMessage key={index} />
      ))}
    </div>
  );
}

function ChatMessage() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-1 w-fit max-w-5/12">
        <div className="bg-baby_blue flex py-4 px-6 rounded-full rounded-bl-sm">
          <p className="whitespace-pre-wrap break-words">
            Oh, hello! All perfectly. I will check it and get back to you soon
          </p>
        </div>
        <p className="text-grey ms-2">04:45 PM</p>
      </div>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="bg-white py-4 px-6 border-t border-faded_grey flex gap-12 justify-between items-center">
        <Button variant="outline" size="icon" className="cursor-pointer">
          <Smile className="text-blue scale-120" />
        </Button>

        <div className="relative flex-1 w-full">
          <Textarea
            minRows={1}
            maxRows={5}
            className="min-h-0 pr-10 bg-backgroud_white resize-none"
            placeholder="Write new message..."
          />
          <Button
            size="icon"
            className="w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer bg-blue rounded-full"
          >
            <Plus className="text-white" />
          </Button>
      </div>

      <div>
        <Button variant="outline" size="icon" className="cursor-pointer">
          <Mic className="text-blue scale-120" />
        </Button>
      </div>
    </div>
  );
}
