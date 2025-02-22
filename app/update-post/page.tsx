"use client";

import { FC, FormEvent, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@/components/Form";
import { Post } from "@/libs/definitions";

const EditPrompt: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [post, setPost] = useState<Post>({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/post/${promptId}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("Prompt ID not found");

    try {
      const response = await fetch(`/api/post/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default EditPrompt;
