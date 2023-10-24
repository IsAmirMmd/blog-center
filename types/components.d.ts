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
    _id: string;
    title: string;
    readingTime: string;
    likesCount: number;
    commentsCount: number;
    author: {
      name: string;
    };
    category: {
      englishTitle: string;
    };
    slug: string;
  };
}
