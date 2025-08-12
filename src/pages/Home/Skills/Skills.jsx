import skillsIcon from '../../../../public/Skills.gif'

const Skills = () => {
  return (
    <div>
      <div className="relative bg-[#0b0113] p-6 lg:px-24 lg:pt-12">
        <div className="w-full absolute pt-2 lg:pt-6 inset-0 opacity-5 ">
          <h1 className="text-center text-6xl lg:text-8xl text-white font-bold">
            SKILLS & EXPERTISE
          </h1>
        </div>
        <h1 className="text-center text-5xl lg:text-6xl font-bold text-white">
          SKILLS & <span className="text-[#70139b]">EXPERTISE</span>
        </h1>
        <div className="text-4xl lg:text-8xl flex flex-col gap-12 justify-center items-center mt-12">
          <img src={skillsIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
