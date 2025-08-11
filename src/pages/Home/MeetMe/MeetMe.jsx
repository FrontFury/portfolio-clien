

const MeetMe = () => {
    return (
        <div className="relative p-6 bg-[#0b0113] lg:px-24 lg:py-12">
      <div className="w-full absolute pt-6 inset-0 opacity-5 ">
        <h1 className="text-center text-gray-700 text-5xl lg:text-8xl font-bold">MEET ME</h1>
      </div>
      <div className="w-full">
        <h1 className="text-center text-4xl lg:text-6xl font-bold text-white">
          MEET <span className="text-[#70139b]">ME</span>
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between my-6">
        <div className="lg:w-2/3">
          <h3 className="text-3xl lg:text-4xl font-bold my-6 text-[#70139b]">
            Career Objective
          </h3>
          <p className="text-lg lg:text-xl leading-8 text-slate-200">
            I am a quick learner and highly adaptable professional, always eager to embrace new challenges and acquire knowledge. With a strong foundation in front-end development, I have crafted visually appealing, intuitive web applications that highlight my technical expertise. My passion extends to both front-end and fullstack development, as I continue to deepen my skills in backend technologies alongside my frontend expertise.
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold my-6 text-[#70139b]">
            Personal Info
          </h3>
          <div className="gap-40 hidden lg:flex">
            <div className="text-lg lg:text-xl space-y-2 text-[#959595]">
              <p>
                Name:{" "}
                <span className="font-bold text-white">
                  Estiak Ahamed Tasin
                </span>
              </p>
              <p>
                Email:{" "}
                <span className="font-bold text-white">
                  tasin220116@diit.edu.bd
                </span>
              </p>
            </div>
            <div className="text-xl space-y-2 text-[#959595]">
              <p>
                From:{" "}
                <span className="font-bold text-white">Dhaka,Bangladesh</span>
              </p>

              <p>
                Phone:{" "}
                <span className="font-bold text-white">+880 1909 855 135</span>
              </p>
            </div>
          </div>
          <div className="display lg:hidden">
            <div className="text-lg lg:text-xl space-y-2 text-[#959595]">
              <p>
                Name:{" "}
                <span className="font-bold text-white">
                  Rizwanul Haque Roman
                </span>
              </p>
              <p>
                Email:{" "}
                <span className="font-bold text-white">
                  dev.rizwanul@gmail.com
                </span>
              </p>

              <p>
                From:{" "}
                <span className="font-bold text-white">Dhaka,Bangladesh</span>
              </p>

              <p>
                Phone:{" "}
                <span className="font-bold text-white">+880 1975 552 562</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-2/3" src="/coreTech.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MeetMe;