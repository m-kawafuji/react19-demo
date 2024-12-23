"use server";

import { revalidatePath } from "next/cache";
import { createComment } from "./lib/comments";

export async function addComment(content: string) {
  await createComment(content);
  revalidatePath("/");
}
