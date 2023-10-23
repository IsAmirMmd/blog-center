import PostList, { post } from "@/components/posts/PostList";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useState } from "react";

type Data = {
  data: {
    docs: post[];
  };
};

type Categories = {
  data: Category[];
};

type Category = {
  _id: string;
  englishTitle: string;
  title: string;
};

type HomeProps = {
  data: Data;
  categories: Categories;
};

export default function Home({ data, categories }: HomeProps) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <main className="grid gap-4 md:grid-cols-12 md:grid-rows-[50px_minmax(300px,_1fr)] mx-auto bg-gray-50 px-4 py-2 min-h-screen container lg:max-w-screen-xl">
      <div className="hidden md:block md:row-span-2 md:col-span-3">
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* accordion header */}
          <div
            className="flex justify-between p-4 cursor-pointer bg-yellow-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>دسته بندی مقالات</span>
            <ChevronDownIcon
              className={`stroke-yellow-500 w-6 h-6 transition-all ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          {/* accordion content */}
          <ul
            className={`transition-all ${
              isOpen ? "block" : "hidden"
            } [&_a]:pr-4 [&_a]:block [&>*]:py-2 [&>*]:transition-all hover:[&>*]:bg-amber-100`}
          >
            <li>
              <Link href="#">همه مقالات</Link>
            </li>
            {categories.data.map((category: Category) => (
              <li key={category?._id}>
                <Link href={`/blogs/${category?.englishTitle}`}>
                  {category?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-yellow-100 px-4 py-2 rounded-2xl hidden md:flex items-center gap-x-2 md:col-span-9">
        <AdjustmentsHorizontalIcon className="stroke-yellow-950 w-6" />
        <p className="ml-8">مرتب سازی بر اساس</p>
        <ul className="flex items-center gap-x-4">
          <li className="cursor-pointer py-4 block ">پر بازدیدترین</li>
          <li className="cursor-pointer py-4 block ">پر بازدیدترین</li>
          <li className="cursor-pointer py-4 block ">پر بازدیدترین</li>
        </ul>
      </div>
      <PostList posts={data.data.docs} />
    </main>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  const { data } = await axios.get(
    "http://localhost:5000/api/posts?page=1&limit=10"
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
