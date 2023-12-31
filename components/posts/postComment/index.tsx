import { Comment, post } from "@components/types";
import CommentForm from "./commentForm";
import React from "react";
import SignleComment from "./singleComment";
import ReplyComment from "./replyComment";

type props = {
  post: post;
};

const PostCommment = ({ post }: props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">نظرات</h2>
      {/* base form */}
      <CommentForm postId={post._id} responseTo={null} setOnreply={() => {}} />

      {/* comment list */}
      {post.comments.map((comment: Comment, index: number) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <React.Fragment key={comment._id}>
              <SignleComment comment={comment} postId={post._id} />
              <ReplyComment
                comments={post.comments}
                parentCommentId={comment._id}
                postId={post._id}
              />
            </React.Fragment>
          )
        );
      })}
    </div>
  );
};

export default PostCommment;
