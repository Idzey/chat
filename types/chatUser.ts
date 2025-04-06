import { IChat } from "./chat";
import { IUser } from "./user";

interface IUserChat {
    id: string,
    user: IUser,
    chat: IChat

}

export type { IUserChat };