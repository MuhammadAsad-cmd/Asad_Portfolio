import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className=" bg-[#FAFAFA]">
        <div className="container mx-auto max-w-[1200px] py-[110px]">
          <div className="Source mb-[35px] flex flex-col items-center justify-center pt-[120px] text-center">
            <h2 className="text-[40px] font-bold  uppercase text-[#111] ">
              About Me
            </h2>
            <div className="mt-5 h-[5px] w-[30px] rounded-md bg-[#7843E9]"></div>
            <p className="mt-3  max-w-[800px] text-xl font-medium leading-8 text-[#555]">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[100px]">
            <div className="">
              <h3 className="mb-[30px] text-[28px] font-bold">
                Get to know me!
              </h3>
              <div className=" text-lg leading-7 text-[#666]">
                <p className="mb-3">
                  I&apos;m a <strong>Frontend Focused Web Developer</strong>{" "}
                  building and managing the Front-end of Websites and Web
                  Applications that leads to the success of the overall product.
                  Check out some of my work in the <strong>Projects</strong>{" "}
                  section.
                </p>
                <p className="mb-3">
                  I also enjoy sharing content related to what I&apos;ve learned
                  in <strong>Web Development</strong> over the past year, hoping
                  it can benefit others in the Dev Community. Feel free to
                  connect or follow me on my
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/muhammad-asad-2a75b0276/"
                    target="_blank"
                    className="mx-1 font-bold text-[#7843E9] underline"
                  >
                    Linkedin
                  </a>{" "}
                  and
                  <a
                    rel="noreferrer"
                    href="https://github.com/MuhammadAsad-cmd"
                    target="_blank"
                    className="mx-1 font-bold text-[#7843E9] underline"
                  >
                    GitHub
                  </a>{" "}
                  where I post useful content related to Web Development and
                  Programming
                </p>

                <p className="mb-10">
                  I&apos;m open to <strong>Job</strong> opportunities where I
                  can contribute, learn and grow. If you have a good opportunity
                  that matches my skills and experience then don&apos;t hesitate
                  to
                  <strong>contact</strong> me.
                </p>
              </div>
              <a
                href="./#contact"
                className="BtnShadow  px-[50px] py-4 text-base"
              >
                Contact
              </a>
            </div>
            <div className="">
              <h3 className="mb-[30px] text-[28px] font-bold">My Skills</h3>
              <div className="flex flex-wrap">
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">BOOTSTRAP</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">Next</div>
                <div className="skills__skill">Tailwind</div>
                <div className="skills__skill">Responsive Design</div>
                <div className="skills__skill">ReduxToolkit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
