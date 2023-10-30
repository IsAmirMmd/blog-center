import { toPersianDigits } from "@/util/toPersian";
import { Data, post } from "@components/types";
import {
  BookmarkIcon,
  HeartIcon,
  ChatBubbleBottomCenterIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import PostInteraction from "./PostInertaction";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import routerPush from "@/util/routerPush";

type Props = {
  posts: post[];
  data: Data;
};

const PostList = ({ posts, data }: Props) => {
  const router = useRouter();
  const pageHandler = (e: any, page: number) => {
    router.query.page = page.toString();
    routerPush(router);
  };

  return (
    <div className="flex rounded flex-col bg-[#ffc14d] p-6 md:col-span-9 ">
      <div className="grid gap-6 grid-cols-6">
        {posts.map((post: post) => {
          return (
            <div
              className="rounded-2xl p-4 bg-white col-span-6 md:col-span-3 lg:col-span-2 h-fit"
              key={post._id}
            >
              <div>
                <img
                  src="https://coderpad.io/wp-content/uploads/2023/04/IMG_2713-1024x683.png"
                  alt="react thumbnail"
                  className="rounded-xl aspect-video w-full"
                />
              </div>
              <div className="rounded-xl mt-2 p-2 flex flex-col gap-y-2">
                <p className="font-bold text-lg">{post.title}</p>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <img
                      src="https://coderpad.io/wp-content/uploads/2023/04/IMG_2713-1024x683.png"
                      className="rounded-full w-6 aspect-square ring-1 ring-yellow-100 ml-2"
                      alt="profile cover"
                    />
                    <span>{post?.author.name}</span>
                  </div>
                  <Link href={`/blogs/${post?.category?.englishTitle}`}>
                    <span className="bg-amber-400 text-xs rounded-3xl px-2 py-1 hover:bg-yellow-500 hover:text-white transition-all">
                      {post?.category?.englishTitle || "ناشناس"}
                    </span>
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                  <PostInteraction className="" isSmall={true} post={post} />

                  <div className="flex items-center text-[10px] text-gray-400 font-bold">
                    <ClockIcon className="w-4 h-4 stroke-gray-400 ml-1" />
                    <span className="ml-1">زمان مطالعه:</span>
                    <span className="ml-1 leading-3">
                      {toPersianDigits(parseInt(post.readingTime))}
                    </span>
                    <span>دقیقه</span>
                  </div>
                </div>

                <Link
                  href={`/posts/${post.hashId}/${post.slug}`}
                  className="w-full py-2 text-center bg-[#ffc14d] rounded-lg hover:bg-amber-100 transition-all"
                >
                  مطالعه
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/* pagination */}
      {data.data.totalPages > 1 && (
        <div className="flex justify-center items-center mt-auto">
          <Pagination
            dir="ltr"
            count={data.data.totalPages}
            page={data.data.page}
            color="primary"
            onChange={pageHandler}
          />
        </div>
      )}
    </div>
  );
};

export default PostList;
