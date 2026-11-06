

const Parallax = () => {
  return (
    <div className="h-[300px] bg-[url('/images/bg4.jpg')] bg-fixed bg-cover bg-center">
      <div className="bg-black/70">
              <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center h-[300px]">


            <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
              Discover Your Next Adventure
            </h1>
            <p className="mt-4 max-w-xl text-center text-lg text-white">
              Find inspiration, explore new places, and make every moment count.
            </p>
            <a href="/projects" className="px-4  py-3 text-white bg-light-orange hover:bg-dark-orange transition mt-2">Go to Project</a>


        </div>
      </div>
      </div>
    </div>
  );
};

export default Parallax;