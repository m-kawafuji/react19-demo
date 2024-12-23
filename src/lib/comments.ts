import { v4 as uuidv4 } from "uuid";
import type { Comment } from "@/types";
import { sleep } from "./sleep";

const comments = new Map<Comment["id"], Comment>();

seed(10);

function seed(amount: number) {
  for (let i = 0; i < amount; i++) {
    const id = uuidv4();
    comments.set(id, { id, content: `Comment ${i + 1}` });
  }
}

export async function getComments() {
  await sleep(1000);
  return Array.from(comments.values());
}

export async function createComment(content: string) {
  const id = uuidv4();
  const comment: Comment = { id, content };
  comments.set(id, comment);
  await sleep(1000);
  return comment;
}
