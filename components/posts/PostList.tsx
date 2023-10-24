import { post } from "@components/types";
import {
  BookmarkIcon,
  HeartIcon,
  ChatBubbleBottomCenterIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

type posts = { posts: post[] };

const PostList = ({ posts }: posts) => {
  return (
    <div className="bg-yellow-100 p-6 rounded-2xl grid md:col-span-9 gap-6 grid-cols-6">
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
                className="rounded-xl aspect-video"
              />
            </div>
            <div className="rounded-xl bg-gray-50 mt-2 p-2 flex flex-col gap-y-2">
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
                <div className={`flex items-center gap-x-2`}>
                  <button className="bg-gray-200 p-0.5 text-gray-500 rounded flex items-center gap-x-1 hover:bg-slate-500 hover:text-gray-100 transition-all">
                    <ChatBubbleBottomCenterIcon
                      className={`w-3 h-3 stroke-gray-400`}
                    />
                    <span className={` font-bold block text-xs`}>
                      {/* {toPersianDigits(post.commentsCount)} */}
                      {post.commentsCount}
                    </span>
                  </button>
                  <button
                    // onClick={() => likeHandler(post._id)}
                    className="bg-red-100 p-0.5 rounded flex items-center gap-x-1 text-red-500 hover:bg-red-500 hover:text-red-100 transition-all"
                  >
                    <HeartIcon className={`stroke-red-300 w-3 h-3`} />
                    <span className={`block font-bold text-xs`}>
                      {/* {toPersianDigits(post.likesCount)} */}
                      {post.likesCount}
                    </span>
                  </button>
                  <button
                    // onClick={() => bookmarkHandler(post._id)}
                    className="bg-blue-100 text-blue-500 p-0.5 rounded flex items-center gap-x-1 hover:bg-blue-500 hover:text-white transition-all"
                  >
                    <BookmarkIcon className={`stroke-blue-300 w-3 h-3`} />
                  </button>
                </div>

                <div className="flex items-center text-[10px] text-gray-400 font-bold">
                  <ClockIcon className="w-4 h-4 stroke-gray-400 ml-1" />
                  <span className="ml-1">زمان مطالعه:</span>
                  <span className="ml-1 leading-3">{post.readingTime}</span>
                  <span>دقیقه</span>
                </div>
              </div>

              <Link
                href={`/post/${post.title}`}
                className="w-full py-2 text-center bg-amber-400 rounded-lg hover:bg-amber-100 transition-all"
              >
                مطالعه
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
