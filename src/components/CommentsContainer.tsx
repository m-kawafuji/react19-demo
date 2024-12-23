"use client";

import { use, useOptimistic } from "react";
import type { Comment } from "@/types";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

export default function Comments({
  commentsPromise,
}: {
  commentsPromise: Promise<Comment[]>;
}) {
  const comments = use(commentsPromise);
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment: string) => {
      return [...state, { id: "", content: newComment }];
    },
  );

  return (
    <>
      <CommentList comments={optimisticComments} />
      <CommentForm onSubmit={addOptimisticComment} />
    </>
  );
}
