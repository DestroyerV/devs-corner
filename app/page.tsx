import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <div className='head_text text-center  '>
        Discover & Share Your
        <br />
        <span className=' inline-flex flex-col h-[calc(var(--text-5xl)*(var(--leading-tight)))] md:h-[calc(var(--text-6xl)*(var(--leading-tight)))] overflow-hidden'>
          <ul className=' orange_gradient block animate-text-slide-5 text-center leading-tight [&_li]:block'>
            <li>Code</li>
            <li>Tips</li>
            <li>Achievements</li>
            <li>Knowledge</li>
            <li>Projects</li>
            <li aria-hidden='true'>Code</li>
          </ul>
        </span>
      </div>
      <p className='desc text-center'>
        Dev Corner is a community of developers to share their knowledge and
        experiences.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
