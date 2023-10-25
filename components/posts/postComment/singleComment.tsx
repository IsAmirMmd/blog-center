import { UserCircleIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import CommentForm from "./commentForm";
import { Comment } from "@components/types";

type props = {
  comment: Comment;
  postId: number;
};

const SignleComment = ({ comment, postId }: props) => {
  const [onReply, setOnreply] = useState(false);
  return (
    <div className="rounded-xl mb-8 overflow-hidden shadow-lg border border-gray-100 bg-white">
      <div className="flex items-center justify-start bg-[#ffc14d] px-4 py-2">
        <UserCircleIcon className="w-12 h-12 stroke-white" strokeWidth={1} />
        <div className="flex flex-col justify-between mr-4">
          <span className="block text-sm text-slate-700">
            {comment.writer?.name}
          </span>
          <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">
            {new Date(comment.createdAt).toLocaleDateString("fa-IR")}
          </span>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="mt-4 leading-10">{comment.content}</div>
        <button
          className="text-sm p-4 cursor-pointer text-blue-600"
          onClick={() => setOnreply(!onReply)}
        >
          {onReply ? "بیخیال" : "پاسخ به"}
        </button>

        {onReply && (
          <div className="mt-4">
            <span className="text-gray-500 text-sm">
              در حال پاسخ به {comment.writer?.name}
            </span>
            <CommentForm
              postId={postId}
              responseTo={comment._id}
              setOnreply={setOnreply}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignleComment;
