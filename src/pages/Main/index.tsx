import PageLayout from "@/src/app/\bcomponents/layout/subLayout";
import PostItemComponent from "@/src/app/\bcomponents/postItem";
import Button from "@/src/app/\bcomponents/ui/Button";
import { archivePosts } from "@/src/app/lib/data";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { PostList } from "../archive";

export const MainSection = styled.div`
  background-image: linear-gradient(#1e63cc, #dee4ed);
  div.bg {
    background-image: radial-gradient(#96b0e345, #87e79d45);
    padding: 240px 0 120px;
  }
`;
export const WorkSection = styled.div``;

const MainPage = () => {
  return (
    <PageLayout>
      <MainSection className="">
        <div className="bg">
          <section className="container mx-auto">
            <div className="flex max-lg:flex-col gap-8 lg:grid-cols-2 items-center justify-between">
              <div className="space-y-4 !w-fit">
                <h1 className="font-extrabold !leading-tight text-white text-4xl sm:text-5xl lg:text-6xl uppercase">
                  <span className="text-[#D9EBE3]">hello. </span>Interpreting user
                  <br /> <span className="text-[#D9EBE3]">needs through</span> design <br /> Strategic Product
                  <span className="text-[#D9EBE3]"> Designer</span>
                  <br />
                  Seungyeon Son.
                </h1>
              </div>
              <div className="!w-fit">
                <p className="w-fit text-5xl leading-tight text-[#91b9df] text-right">
                  ABOUT <br /> UI/UX DESIGN <br /> UI DEVELOP
                </p>
                {/* <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                /> */}
              </div>
            </div>
            <div className="my-24">
              <p className="text-lg text-[#dde0df] mb-10">
                Beautifully designed components that you can copy and paste into your apps. <br />
                Accessible. Customizable. Open Source.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="primary" value="" disabled={false}>
                  <a href="/archive">View Works</a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </MainSection>
      <WorkSection className="md:py-36 bg-[#eaf4ff]">
        <div className="container mx-auto md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-[#36548f]">Featured Work</h2>
          <PostList>
            {archivePosts.map((post) => (
              <PostItemComponent key={post.id} post={post} />
            ))}
          </PostList>
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

      <section className="py-24 bg-white">
        <div className="container mx-auto max-lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800">
                Lorem Ipsum
                {/* Project 1: Web Publishing */}
              </h3>
              <p className="text-slate-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <div className="flex items-center space-x-4">
                <Button size="sm" variant="primary" value="" disabled={false}>
                  View Project
                </Button>
                <Button size="sm" variant="primary" value="" disabled={false}>
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
export default MainPage;
