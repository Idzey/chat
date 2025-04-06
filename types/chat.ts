import { IUserChat } from "./chatUser";
import { IMessage } from "./message";

interface IChat {
    id: string,
    name?: string,
    isGroup: boolean,
    createdAt: Date,

    users: IUserChat[],
    messages: IMessage[]

}

export type { IChat };