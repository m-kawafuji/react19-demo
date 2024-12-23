"use server";

import { revalidatePath } from "next/cache";
import { createComment } from "./lib/comments";

export async function addComment(content: string) {
  const comment = await createComment(content);
  revalidatePath("/");
  return comment;
}
