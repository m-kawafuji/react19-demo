"use client";

import { addComment } from "@/actions";
import type { Comment } from "@/types";
import { use } from "react";
import { useFormStatus } from "react-dom";

export default function Comments({
  commentsPromise,
}: {
  commentsPromise: Promise<Comment[]>;
}) {
  const comments = use(commentsPromise);

  async function submitAction(formData: FormData) {
    const content = formData.get("content");

    if (typeof content === "string" && content.length > 0) {
      await addComment(content);
    }
  }

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
      <form action={submitAction}>
        <input type="text" name="content" />
        <Submit />
      </form>
    </div>
  );
}

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending" : "Send"}
    </button>
  );
}
