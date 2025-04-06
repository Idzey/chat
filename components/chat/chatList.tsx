import { Clock3, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ChatList() {
  return (
      <div className="h-full overflow-y-auto scrollbar-thin">
        {[...Array(5)].map((_, index) => (
          <ChatListItem key={index} />
        ))}
      </div>
  );
}

function ChatListItem() {
  return (
    <div className="p-4 border-b border-faded_grey flex justify-between gap-4">
      <Avatar>
        <AvatarImage src="/test/avatar.png" />
        <AvatarFallback>Im</AvatarFallback>
      </Avatar>

      <div className="mt-1 flex flex-col gap-2">
        <p>Jennifer Markus</p>
        <p>Hey! Did you finish the Hi-FI wireframes for flora app design?</p>
        <div className="text-grey flex gap-1 items-center">
          <Clock3 size={18} />
          <span>Today | 05:30 PM</span>
        </div>
      </div>

      <Star className="text-blue cursor-pointer" size={28} />
    </div>
  );
}
