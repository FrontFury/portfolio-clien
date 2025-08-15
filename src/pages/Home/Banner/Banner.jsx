import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import profileImg from "../../../../public/Profile.png"
import resumeImg from "../../../../public/Resume_Of_Tasin.pdf"


const Banner = () => {
    return (
         <div
      style={{ backgroundImage: `url("/banner.gif")` }}
      className="w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      <div className="">
        <div className="flex items-center h-screen px-3 lg:px-24 py-24">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center h-full bg-[#0000005f] backdrop-blur-sm rounded-2xl p-3 lg:p-6">
            <div>
              <img className="lg:w-[1400px] md:w-[400px] w-[250px] mx-auto" src={profileImg} alt="" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-5xl font-bold mb-0 text-white">Hello,</h2>
              <h1 className="text-3xl lg:text-6xl font-bold mt-0 mb-0 text-white">
                I&apos;m{" "}
                <span className="text-[#6f139b]">Estiak Ahamed Tasin_</span>
              </h1>
              <h1 className="text-2xl lg:text-5xl font-bold mt-0 mb-0 text-white">
                And I&apos;m a{" "}
                <span className="text-[#6f139b]">
                  <Typewriter
                    words={[
                      "MERN Developer",
                      "Web Developer",
                      "React Developer",
                      "Frontend Developer",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                {/* / */}
              </h1>
              <p className="lg:w-3/4 text-xl mt-5 mb-8 text-white">
                I’m an enthusiastic developer who transforms ideas into reality through clean, efficient code. Constantly exploring fresh concepts, I blend creativity with practicality to craft visually stunning and user-friendly websites. My goal is to deliver digital experiences that not only look amazing but also function flawlessly, leaving a lasting impression on every visitor.
              </p>
              <div className="flex gap-3">
                <button className="btn btn-sm lg:btn-md text-lg lg:text-xl border hover:bg-[#1f052bcd] border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded font-bold text-white">
                  Learn More_
                </button>
                <button className="btn btn-sm lg:btn-md text-lg lg:text-xl border hover:bg-[#1f052bcd] border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded font-bold text-white">
                  <a href={resumeImg} download="Tasin_Resume.pdf">Download Resume_</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Banner;