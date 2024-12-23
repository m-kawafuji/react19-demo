import { Suspense } from "react";
import Comments from "@/components/Comments";
import { getComments } from "@/lib/comments";

export default function Home() {
  const commentsPromise = getComments();

  return (
    <main>
      <h1>React 19</h1>
      <h2>Comments</h2>
      <Suspense fallback={<p>Loading comments...</p>}>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </main>
  );
}
