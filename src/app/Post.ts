import { User } from "./User";

export interface Post
{
    id?: string;
    image: string;
    likes: number;
    publishDate: string;
    userId: number;
    text: string;

    owner: User;

    tags: []

}