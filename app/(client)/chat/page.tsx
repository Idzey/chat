import Chat from "@/components/chat/chat";
import ChatList from "@/components/chat/chatList";
import SidebarChat from "@/components/chat/sidebarChat";

export default async function ChatPage() {
  return (
    <div className="w-full h-[calc(100vh-6.25rem)] flex">
      <div className="w-1/3 flex flex-col justify-between border-r border-faded_grey">
        <div className="flex flex-col">
          <SidebarChat />
        </div>

        <ChatList />
      </div>

      <div className="w-2/3 flex-1">
        <Chat />
      </div>
    </div>
  );
}

