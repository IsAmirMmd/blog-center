import React from "react";
import SignleComment from "./singleComment";
import { Comment } from "@components/types";

type props = {
  parentCommentId: number;
  comments: Comment[];
  postId: number;
};

const ReplyComment = ({ parentCommentId, comments, postId }: props) => {
  return comments.map((comment: Comment) => {
    return (
      parentCommentId == comment.responseTo && (
        <div className="mr-2 md:mr-5" key={comment._id}>
          <React.Fragment key={comment._id}>
            <SignleComment comment={comment} postId={postId} />
            <ReplyComment
              comments={comments}
              parentCommentId={comment._id}
              postId={postId}
            />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
