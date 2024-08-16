import { FC } from "react";
import PromptCard from "./PromptCard";
import { ProfileProps } from "@/libs/definitions";
import { useRouter } from "next/navigation";

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}: ProfileProps) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} </span>
        Profile
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={handleEdit ? () => handleEdit(post) : undefined}
            handleDelete={handleDelete ? () => handleDelete(post) : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
