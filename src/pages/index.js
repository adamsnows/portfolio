import Image from "next/image";
import { Inter } from "next/font/google";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div
        className={`flex bg-black h-[100px] w-full justify-center ${inter.className} font-light`}
      >
        {/* top header */}
        <div className="w-1/2 flex justify-between items-center text-white">
          <div className="flex gap-4 items-center">
            <Image
              src="/snow-flake.png"
              alt=""
              width={80}
              height={150}
              quality={100}
            />
          </div>
          <div className="flex gap-14">
            <div className="flex gap-4">
              <span>about</span>
              <span>book</span>
              <span>portfolio</span>
              <span>blog</span>
              <span>contact</span>
            </div>

            <div className="text-3xl flex gap-6 ">
              <FaInstagram />
              <FaLinkedinIn />
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
      {/* banner image footage */}
      <div className="h-[600px] shadow-md flex justify-center gap-20 w-full relative z-10">
        <div className="text-black my-auto text-7xl font-bold">front-end</div>
        <div className="w-[750px] bg-black min-h-fit "></div>
        <div className="my-auto text-black text-7xl font-bold ">back end</div>
      </div>

      {/*  */}
      <div className="bg-slate-200 relative z-0 h-[700px] w-full">test</div>
    </div>
  );
}
