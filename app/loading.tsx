import Image from "next/image";

const Loading = () => {
  return (
    <div className='flex items-center justify-center'>
      <Image
        src='/assets/icons/loader.svg'
        width={50}
        height={50}
        alt='loader'
      />
    </div>
  );
};

export default Loading;
