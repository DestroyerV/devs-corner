"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { use } from "react";

import Profile from "@/components/Profile";

const UserProfile = ({ params }: { params: Promise<{ id: string }> }) => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  const unwrappedParams = use(params);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${unwrappedParams?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (unwrappedParams?.id) fetchPosts();
  }, [unwrappedParams.id]);

  return (
    <Profile
      name={name ?? "Unknown"}
      desc={`Welcome to ${name}'s personalized profile page.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
