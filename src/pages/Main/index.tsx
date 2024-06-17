import Image from "next/image";

const IndexPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative h-[100dvh] flex items-center justify-center">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center space-y-4 text-gray-50">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Lorem Ipsum</h1>
            <p className="text-xl md:text-2xl">Lorem Ipsum</p>
            {/* <p className="text-xl md:text-2xl">UI Developer &amp; Publisher</p> */}
          </div>
        </section>
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-50">Featured Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  width={800}
                  height={600}
                  alt="Project 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-gray-50">Project 1</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  width={800}
                  height={600}
                  alt="Project 2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-gray-50">Project 2</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  width={800}
                  height={600}
                  alt="Project 3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-gray-50">Project 3</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  width={800}
                  height={600}
                  alt="Project 4"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-gray-50">Project 4</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  width={800}
                  height={600}
                  alt="Project 5"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-gray-50">Project 5</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg"
                  width={800}
                  height={600}
                  alt="Project 6"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-bold text-gray-50">Project 6</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative h-[100dvh] flex items-center justify-center">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/project-hero.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center space-y-4 text-gray-50">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Project Showcase</h2>
            <p className="text-xl md:text-2xl">Explore my latest projects.</p>
          </div>
        </section>
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-50">
                  Lorem Ipsum
                  {/* Project 1: Web Publishing */}
                </h3>
                <p className="text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="text-[#eee] border">View Project</button>
                  <button className="text-white bg-white/20" variant="secondary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src="/project-1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:flex-row-reverse">
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-50">
                  Lorem Ipsum
                  {/*Project 2: Product UI Develop*/}
                </h3>
                <p className="text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="text-[#eee] border">View Project</button>
                  <button className="text-white bg-white/20" variant="secondary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src="/project-2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-50">
                  Lorem Ipsum
                  {/*Project 3: Design Style System*/}
                </h3>
                <p className="text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="text-[#eee] border">View Project</button>
                  <button className="text-white bg-white/20" variant="secondary">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src="/project-3.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-400">
          <p>&copy; 2024 Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default IndexPage;

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
