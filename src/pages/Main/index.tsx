import AppLayout from "@/app/\bcomponents/layout/Layout";
import PageLayout from "@/app/\bcomponents/layout/subLayout";
import Button from "@/app/\bcomponents/ui/Button";
import styled from "@emotion/styled";
import Image from "next/image";
import { IconAuto } from "../../../public/icons";

const MainPage = () => {
  return (
    <PageLayout>
      <MainSection className="dark bg-[linear-gradient(#0f172a_70%,#2a3858_100%)] text-white">
        <section className="container mx-auto pt-[240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                The complete platform for building the Web
              </h1>
              <p className="text-lg text-slate-400">
                Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable.
                Open Source.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size={"sm"}
                  variant={"primary"}
                  onClick={() => (location.href = "/")}
                  value={""}
                  disabled={false}
                >
                  Get Started
                </Button>
                <Button
                  size={"sm"}
                  variant={"primary"}
                  onClick={() => (location.href = "/")}
                  value={""}
                  disabled={false}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://generated.vusercontent.net/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section className="container mx-auto pb-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                {/* <IconAuto /> */}
              </div>
              <h3 className="text-xl font-bold">Collaboration</h3>
              <p className="text-slate-400">Make collaboration seamless with built-in code review tools.</p>
            </div>
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                {/* <BotIcon className="h-6 w-6 text-primary-foreground" /> */}
              </div>
              <h3 className="text-xl font-bold">Automation</h3>
              <p className="text-slate-400">Automate your workflow with continuous integration.</p>
            </div>
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                {/* <ScaleIcon className="h-6 w-6 text-primary-foreground" /> */}
              </div>
              <h3 className="text-xl font-bold">Scale</h3>
              <p className="text-slate-400">Deploy to the cloud with a single click and scale with ease.</p>
            </div>
          </div>
        </section>
      </MainSection>
      <WorkSection className="py-24 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-50">Featured Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://generated.vusercontent.net/placeholder.svg"
                width={800}
                height={600}
                alt="Project 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-slate-50">Project 1</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://generated.vusercontent.net/placeholder.svg"
                width={800}
                height={600}
                alt="Project 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-slate-50">Project 2</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://generated.vusercontent.net/placeholder.svg"
                width={800}
                height={600}
                alt="Project 3"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-slate-50">Project 3</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://generated.vusercontent.net/placeholder.svg"
                width={800}
                height={600}
                alt="Project 4"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-slate-50">Project 4</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://generated.vusercontent.net/placeholder.svg"
                width={800}
                height={600}
                alt="Project 5"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-slate-50">Project 5</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="https://generated.vusercontent.net/placeholder.svg"
                width={800}
                height={600}
                alt="Project 6"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-slate-50">Project 6</h3>
              </div>
            </div>
          </div>
        </div>
      </WorkSection>

      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-50">
                Lorem Ipsum
                {/* Project 1: Web Publishing */}
              </h3>
              <p className="text-slate-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <div className="flex items-center space-x-4">
                <button className="text-white/80 border">View Project</button>
                <button className="text-white bg-white/20">Learn More</button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg"></div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:flex-row-reverse">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-50">
                Lorem Ipsum
                {/*Project 2: Product UI Develop*/}
              </h3>
              <p className="text-slate-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <div className="flex items-center space-x-4">
                <button className="text-[#eee] border">View Project</button>
                <button className="text-white bg-white/20">Learn More</button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg"></div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-50">
                Lorem Ipsum
                {/*Project 3: Design Style System*/}
              </h3>
              <p className="text-slate-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <div className="flex items-center space-x-4">
                <button className="text-[#eee] border">View Project</button>
                <Button
                  size={"sm"}
                  variant={"primary"}
                  onClick={() => (location.href = "/")}
                  value={""}
                  disabled={false}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg"></div>
          </div>
        </div>
      </section>
      <section className="relative h-[480px] flex items-center justify-center bg-slate-600">
        <div className="relative z-10 text-center space-y-4 text-slate-50">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Project Showcase</h2>
          <p className="text-xl md:text-2xl">Explore my latest projects.</p>
        </div>
      </section>
      <footer className="bg-slate-800 py-12">
        <div className="container mx-auto px-4 md:px-6 text-center text-slate-300">
          <p>&copy; 2024 Demo. All rights reserved.</p>
        </div>
      </footer>
    </PageLayout>
  );
};
export default MainPage;

export const MainSection = styled.div``;
export const WorkSection = styled.div``;
