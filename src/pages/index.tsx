import { RevoltJoinButton } from "../components/RevoltJoinButton";
import { Footer } from "../components/Footer";
import { Meta } from "../components/Meta";

export default function Home() {
  return (
    <>
      <Meta
        title="Lightning"
        description="the framework for creative developers."
        keywords="revolt"
        image="https://cdn.discordapp.com/attachments/923612967453483074/939226888306581564/Lightning_Graphic_734_514px.png"
      />
      <div className="h-screen w-screen flex items-center">
        <div className="flex items-center justify-between mx-10 md:mx-auto">
          <div className="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-[2rem] xl:gap-[2.5rem] md:w-[35rem] 2xl:w-[37rem]">
            <img
              src="./powered-by-vercel.svg"
              className="mb-[-120px] h-64 w-64"
              draggable={false}
            />
            <h1 className="text-[2.4rem] md:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] font-bold lg:leading-[4rem] xl:leading-[5rem] select-none">
              the all in one framework for{" "}
              <span className="moving_background_gradient">creative developers</span>
            </h1>
            <p className="text-[1.3rem] lg:text-[1.4rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-regular tracking-wider lg:leading-[2.3rem] xl:leading-[2.7rem] text-white1 md:max-w-[30rem]">
              Lightning is fast, like {" "}
              <span className="moving_background_gradient">really fast. </span>
              It cuts down all the time you spend on boring, monotonous stuff, leaving you to do what you do best, {" "}
              <span className="moving_background_gradient">building the next best bot for Revolt.</span>
            </p>
            <div className="mt-3 lg:mt-0">
              <RevoltJoinButton />
            </div>
          </div>
          <img
            src="./Graphic.png"
            className="rounded-2xl"
            draggable={false}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
