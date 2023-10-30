import CategoryBarDesktop from "@/components/posts/CategoryBarDesktop";
import PostList from "@/components/posts/PostList";
import CategoryBar from "@/components/posts/categoryBar";
import SortBar from "@/components/posts/sortbar";
import Layout from "@/container/Layout/Layout";
import { HomeProps } from "@components/types";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import queryString from "query-string";

export default function CategoryPage({ data, categories }: HomeProps) {
  return (
    <Layout>
      <main className="grid gap-4 md:grid-cols-12 md:grid-rows-[56px_minmax(300px,_1fr)] mx-auto bg-[#EBF1F4] px-4 py-2 min-h-screen container lg:max-w-screen-xl">
        {/* category bar desktop */}
        <CategoryBarDesktop data={categories.data} />
        {/* category bar mobile */}
        <CategoryBar data={categories.data} />
        {/* sort bar desktop */}
        <SortBar />
        {/* post list */}
        <PostList data={data} posts={data.data.docs} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query, req } = context;

  const { data } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`,
    {
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie,
      },
    }
  );

  const { data: categories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );

  return {
    props: {
      data,
      categories,
    },
  };
}
