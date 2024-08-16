import { FormProps } from "@/libs/definitions";
import { FC } from "react";
import Link from "next/link";

const Form: FC<FormProps> = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} </span>
        Post
      </h1>

      <p className='desc text-left max-w-md'>
        {type} and share amazing your amazing ideas.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex-col gap-7 glassmorphism '>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Post
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your prompt here...'
            required
            className='form_textarea'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag{" "}
            <span className='font-normal'>
              (#product, #web3, #ai, #tools, #idea)
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            required
            className='form_input'
          />
        </label>
        <div className='flex-end mx-3 m-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>
          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-orange-500 rounded-full text-white'>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
