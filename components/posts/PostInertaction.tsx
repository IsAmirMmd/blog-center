import { toPersianDigits } from "@/util/toPersian";
import { post } from "@components/types";
import {
  ChatBubbleBottomCenterIcon,
  BookmarkIcon,
  HeartIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as SolidHearIcon,
  BookmarkIcon as SolideBookmarkIcon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import { useRouter } from "next/router";

type PostProps = {
  post: post;
  isSmall: boolean;
  className: string;
};

const PostInteraction = ({ post, isSmall, className }: PostProps) => {
  const iconSize = isSmall ? "h-4 w-4" : "h-6 w-6";
  const numberSize = isSmall ? "text-xs" : "text-base";
  const router = useRouter();

  const likeHandler = (postId: number) => {
    axios
      .put(`/posts/like/${postId}`)
      .then(({ data }) => {
        // routerPush(router);
        // toast.success(data.message);
      })
      .catch((err) => {
        // toast.error(err?.response?.data?.message);
      });
  };

  const bookmarkHandler = (postId: number) => {
    axios
      .put(`/posts/bookmark/${postId}`)
      .then(({ data }) => {
        // toast.success(data.message);
        // routerPush(router);
      })
      .catch((err) => {
        // toast.error(err?.response?.data?.message);
      });
  };
  return (
    <div
      className={`flex items-center ${
        isSmall ? "gap-x-2" : "gap-x-4"
      } ${className}`}
    >
      <button className="bg-gray-200 text-gray-500 p-0.5 rounded flex items-center gap-x-1 hover:bg-gray-500 hover:text-white transition-all">
        <ChatBubbleBottomCenterIcon className={`${iconSize} stroke-current`} />
        <span className={`${numberSize} font-bold leading-3`}>
          {toPersianDigits(post.commentsCount)}
        </span>
      </button>
      <button
        onClick={() => likeHandler(parseInt(post._id))}
        className="bg-red-100 p-0.5 rounded flex items-center gap-x-1 text-red-500
      hover:bg-red-500 hover:text-red-100 transition-all  
      "
      >
        {post.isLiked ? (
          <SolidHearIcon className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stroke-cfill-current`} />
        )}
        <span className={`${numberSize} block font-bold leading-3`}>
          {toPersianDigits(post.likesCount)}
        </span>
      </button>
      <button
        onClick={() => bookmarkHandler(parseInt(post._id))}
        className="bg-blue-100 text-blue-500 p-0.5 rounded flex items-center gap-x-1
      hover:bg-blue-500 hover:text-white transition-all"
      >
        {post.isBookmarked ? (
          <SolideBookmarkIcon className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stroke-current`} />
        )}
      </button>
    </div>
  );
};

export default PostInteraction;
