import { Dispatch, FormEvent, MouseEventHandler, SetStateAction } from "react";
import "next-auth";

export type UserProps = {
  _id?: string;
  email: string;
  name: string;
  username: string;
  image?: string;
};

export type ProfileProps = {
  name: string;
  desc: string;
  data: Post[];
  handleEdit?: (post: Post) => void;
  handleDelete?: (post: Post) => void;
};

export type Post = {
  _id?: string;
  prompt: string;
  tag: string;
  creator?: UserProps;
};

export type PromptCardListProps = {
  data: Post[];
  handleTagClick: (tag: string) => void;
};

export type PromptCardProps = {
  post: Post;
  handleTagClick?: (tag: string) => void;
  handleEdit? : MouseEventHandler<HTMLParagraphElement>;
  handleDelete? : MouseEventHandler<HTMLParagraphElement>;
};

export type FormProps = {
  type: string;
  post: Post;
  setPost: Dispatch<SetStateAction<Post>>;
  submitting: boolean;
  handleSubmit: (e: FormEvent<Element>) => void;
};

declare module "next-auth" {
  interface Profile {
    picture?: string;
  }
}
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
