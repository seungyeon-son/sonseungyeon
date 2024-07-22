import PageLayout from "@/src/app/\bcomponents/layout/subLayout";
import styled from "styled-components";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/src/app/\bcomponents/ui/Card";
import { Footer } from "@/src/app/\bcomponents/ui/Footer";
import { JSX, SVGProps } from "react";
import Image from "next/image";

const PageHeader = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: aliceblue;
  mix-blend-mode: difference;
  padding-top: 120px;
  max-width: 480px;
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  p:first-of-type {
    font-size: 13px;
    color: #9c9c9c;
  }
  p:last-of-type {
    font-size: 14px;
    color: #bbbbbb;
  }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150svh;
`;

const BriefcaseIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
};

const AboutPage = () => {
  return (
    <PageLayout>
      <Panel className="">
        <PageHeader>
          <p>About</p>
          <h1>John Doe</h1>
          <p>Full-Stack Developer</p>
          <p>
            Im a passionate full-stack developer with over 8 years of experience in building scalable and user-friendly
            web applications. My goal is to create innovative solutions that drive business success.
          </p>
        </PageHeader>
        <main className="text-slate-300">
          <div className="flex flex-col items-center justify-center gap-6 px-4 py-16 md:px-6 bg-slate-500/20">
            <div className="rounded-full !w-32 h-32 overflow-hidden border-2 border-slate-400">
              <Image src="/placeholder.svg" width={128} height={128} alt="Profile Picture" />
            </div>
            <div className="text-center space-y-2 items-center flex flex-col">
              <h1 className="text-4xl font-bold">John Doe</h1>
              <p className="text-xl text-primary-foreground">Full-Stack Developer</p>
              <p className="max-w-[600px] text-muted-foreground">
                Im a passionate full-stack developer with over 8 years of experience in building scalable and
                user-friendly web applications. My goal is to create innovative solutions that drive business success.
              </p>
            </div>
          </div>
          <section className="container mx-auto md:py-24 lg:py-32 ">
            <div className="grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 w-px bg-muted-foreground/20" />

                {/* B안 */}
                <h2 className="text-2xl font-bold">Work Experience</h2>
                <div className="mt-4 grid gap-6">
                  <div className="grid grid-cols-[auto_1fr] items-start gap-4">
                    <div className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                      2020 - Present
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">Software Engineer</h3>
                        <span className="rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          Current
                        </span>
                      </div>
                      <p className="text-muted-foreground">Acme Inc, San Francisco</p>
                      <p>
                        Developed and maintained complex web applications using React, Node.js, and MongoDB.
                        Collaborated with cross- functional teams to deliver high-quality features and ensure smooth
                        deployments.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[auto_1fr] items-start gap-4">
                    <div className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                      2017 - 2020
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-lg font-semibold">Frontend Developer</h3>
                      <p className="text-muted-foreground">Widgets Inc, New York</p>
                      <p>
                        Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.
                        Collaborated with UX designers to ensure a seamless and intuitive user experience.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[auto_1fr] items-start gap-4">
                    <div className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                      2015 - 2017
                    </div>
                    <div className="grid gap-2">
                      <h3 className="text-lg font-semibold">Intern, Software Development</h3>
                      <p className="text-muted-foreground">Techno Solutions, Chicago</p>
                      <p>
                        Participated in the development of various web applications, gaining hands-on experience in
                        full-stack development and project management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Core Skills</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Proficient in a wide range of technologies and methodologies to deliver high-quality software
                  solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="aspect-square w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                    {/* <CodeIcon className="h-6 w-6" /> */}
                  </div>
                  <div className="text-sm font-medium">React.js</div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="aspect-square w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                    {/* <CodeIcon className="h-6 w-6" /> */}
                  </div>
                  <div className="text-sm font-medium">Node.js</div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="aspect-square w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                    {/* <CodeIcon className="h-6 w-6" /> */}
                  </div>
                  <div className="text-sm font-medium">AWS</div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="aspect-square w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                    {/* <CodeIcon className="h-6 w-6" /> */}
                  </div>
                  <div className="text-sm font-medium">Git</div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="aspect-square w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                    {/* <CodeIcon className="h-6 w-6" /> */}
                  </div>
                  <div className="text-sm font-medium">Agile</div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="aspect-square w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                    {/* <CodeIcon className="h-6 w-6" /> */}
                  </div>
                  <div className="text-sm font-medium">SQL</div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Notable Projects</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my most impactful and innovative projects.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-none">
                  <CardHeader className="bg-muted p-4">
                    <div className="flex items-center gap-2">
                      <div className="aspect-square w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        {/* <CodeIcon className="h-5 w-5" /> */}
                      </div>
                      <div className="font-medium">Acme Web App</div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Developed a comprehensive web application for Acme Inc, featuring a modern UI, robust backend, and
                      seamless integration with various third-party services.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <div className="flex items-center gap-2">
                      {/* <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" /> */}
                      <span className="text-sm text-muted-foreground">2019 - 2021</span>
                    </div>
                  </CardFooter>
                </Card>
                <Card className="border-0 shadow-none">
                  <CardHeader className="bg-muted p-4">
                    <div className="flex items-center gap-2">
                      <div className="aspect-square w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        {/* <CodeIcon className="h-5 w-5" /> */}
                      </div>
                      <div className="font-medium">Acme Mobile App</div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Designed and developed a cross-platform mobile application for Acme Inc, providing users with a
                      seamless and intuitive experience across iOS and Android devices.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <div className="flex items-center gap-2">
                      {/* <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" /> */}
                      <span className="text-sm text-muted-foreground">2017 - 2019</span>
                    </div>
                  </CardFooter>
                </Card>
                <Card className="border-0 shadow-none">
                  <CardHeader className="bg-muted p-4">
                    <div className="flex items-center gap-2">
                      <div className="aspect-square w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                        {/* <CodeIcon className="h-5 w-5" /> */}
                      </div>
                      <div className="font-medium">Acme API</div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Designed and developed a robust and scalable API infrastructure for Acme Inc, enabling seamless
                      integration with various internal and external systems.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <div className="flex items-center gap-2">
                      {/* <CalendarDaysIcon className="h-4 w-4 text-muted-foreground" /> */}
                      <span className="text-sm text-muted-foreground">2016 - 2018</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Let&apos;s Work Together</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Im always excited to discuss new opportunities and collaborate on innovative projects. Feel free to
                  reach out and let chat!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link
                  href="#c"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Connect on LinkedIn
                </Link>
                <Link
                  href="#c"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Email me
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Panel>
    </PageLayout>
  );
};
export default AboutPage;
