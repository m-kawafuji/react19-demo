import { useFormStatus } from "react-dom";
import { addComment } from "@/actions";
import { useRef } from "react";

export default function CommentForm({
  onSubmit,
}: {
  onSubmit: (content: string) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  async function submitAction(formData: FormData) {
    const content = formData.get("content");

    if (typeof content === "string" && content.length > 0) {
      onSubmit(content);
      formRef.current?.reset();
      await addComment(content);
    }
  }

  return (
    <form ref={formRef} action={submitAction}>
      <Input name="content" />
      <Submit />
    </form>
  );
}

function Input({ name }: { name: string }) {
  const { pending } = useFormStatus();

  return <input type="text" name={name} disabled={pending} />;
}

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending" : "Send"}
    </button>
  );
}
