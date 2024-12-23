import { Suspense } from "react";
import CommentsContainer from "@/components/CommentsContainer";
import { getComments } from "@/lib/comments";

export default function Home() {
  const commentsPromise = getComments();

  return (
    <main>
      <h1>React 19</h1>
      <h2>Comments</h2>
      <Suspense fallback={<p>Loading comments...</p>}>
        <CommentsContainer commentsPromise={commentsPromise} />
      </Suspense>
    </main>
  );
}
