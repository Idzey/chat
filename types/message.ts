import { IChat } from "./chat";

interface IMessage {
    id: string,
    senderId: string,
    value: string,
    readUsersId: string[],
    createdAt: Date,
    updatedAt: Date,

    chat: IChat

}

export type { IMessage };