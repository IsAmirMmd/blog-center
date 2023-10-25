declare module "@components/types" {
  export type Data = {
    data: {
      docs: post[];
    };
  };

  export type Categories = {
    data: Category[];
  };

  export type Category = {
    _id: string;
    englishTitle: string;
    title: string;
  };

  export type HomeProps = {
    data: Data;
    categories: Categories;
  };

  export type post = {
    hashId: string;
    _id: string;
    title: string;
    readingTime: string;
    likesCount: number;
    coverImage: string;
    commentsCount: number;
    author: {
      name: string;
      biography: string;
    };
    category: {
      englishTitle: string;
      title: string;
    };
    slug: string;
    isBookmarked: boolean;
    isLiked: boolean;
    createdAt: Date;
    comments: Comment[];
    related: post[];
  };

  export type Comment = {
    status: number;
    _id: number;
    writer: { _id: number; name: string };
    postId: number;
    responseTo: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
