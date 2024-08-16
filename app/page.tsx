import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <div className='head_text text-center  '>
        Discover & Share Your
        <br />
        <span className=' inline-flex flex-col h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden'>
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
