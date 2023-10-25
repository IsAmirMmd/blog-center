import axios from "axios";
import { FormEvent, useState } from "react";

type props = {
  postId: number;
  responseTo: number;
  setOnreply: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommentForm = ({ postId, responseTo, setOnreply }: props) => {
  const [commentValue, setCommentValue] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      content: commentValue,
      responseTo,
      postId,
    };

    axios
      .post("http://localhost:5000/api/post-comment/save-comment", data)
      .then((res) => {
        setCommentValue("");
        if (setOnreply) setOnreply((open) => !open);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form className="bg-yellow-100 mt-8 p-4 rounded-md">
      <h3 className="font-bold text-2xl mt-2">ارسال دیدگاه جدید</h3>

      <textarea
        className="p-4 rounded mt-4 mb-2 w-full border-none ring-1 ring-gray-300 shadow-sm focus:outline-none focus:ring-amber-500 transition-all focus:ring-2"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        placeholder="نظرت رو برام بنویس ..."
      />
      <button
        className=" mx-auto py-2 w-full sm:w-56 bg-amber-500 hover:bg-amber-100 hover:text-black transition-all rounded-lg text-white px-3 md:text-lg"
        onClick={submitHandler}
      >
        ارسال نظر
      </button>
    </form>
  );
};

export default CommentForm;
