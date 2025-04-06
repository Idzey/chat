import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export default function Header() {
    return (
        <header className="h-25 border-b border-faded_grey">
                <div className="flex justify-between p-6">
                    <h1 className="text-4xl font-bold">Messages</h1>

                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <p className="text-sm font-bold">Ammi Watts</p>
                            <p className="text-xs text-grey">My settings</p>
                        </div>
                        <Avatar>
                            <AvatarImage src="/test/avatar.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>
    )
}