import { IUserChat } from "./chatUser";
import { Status } from "./status";

interface IUser {
    id: string,
    username: string,
    name: string,
    email: string,
    about: string,
    avatar: string,
    status: Status,

    chats: IUserChat[]
}

export type { IUser };