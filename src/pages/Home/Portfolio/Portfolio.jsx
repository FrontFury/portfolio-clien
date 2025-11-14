import portfolio4 from "../../../../public/Project4.png";
import portfolio5 from "../../../../public/Project5.png";
import portfolio6 from "../../../../public/Project6.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-[#0b0113]">
      <div className="relative min-h-screen h-min-[40vh] p-6 lg:px-24 lg:pt-12">
        <div className="w-full absolute lg:pt-6 inset-0 opacity-5 ">
          <h1 className="text-center text-6xl lg:text-8xl font-bold text-white">
            PORTFOLIO
          </h1>
        </div>
        <h1 className="text-center text-5xl lg:text-6xl font-bold text-white">
          PORT<span className="text-[#70139b]">FOLIO</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <div className="card card-compact bg-[#1b0724] shadow-xl">
            <figure>
              <div className="relative group overflow-hidden shadow-lg cursor-pointer">
                {/* Image */}
                <img
                  src={portfolio4}
                  alt=""
                  className="w-full h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0b0113b5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4 space-y-1 lg:space-y-[5px]">
                  <button className="border border-[#6f139b] rounded-2xl bg-[#1f052bcd] text-white max-w-sm px-4 py-2 text-sm font-bold">
                    <a
                      href={"https://riseup-foundation-a10.web.app/"}
                      target="_blank"
                    >
                      Live Link
                    </a>
                  </button>
                  <button className="border border-[#6f139b] bg-[#1f052bcd] text-white max-w-sm px-4 py-2 text-sm font-bold rounded-2xl ">
                    <a
                      href={
                        "https://github.com/FrontFury/riseup-foundation-client"
                      }
                      target="_blank"
                    >
                      View Code (client)
                    </a>
                  </button>
                  <button className="border border-[#6f139b] bg-[#1f052bcd] text-white max-w-sm  rounded-2xl  px-4 py-2 text-sm font-bold">
                    <a
                      href={
                        "https://github.com/FrontFury/riseup-foundation-server"
                      }
                      target="_blank"
                    >
                      View Code (Server)
                    </a>
                  </button>
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">
                <span className="text-[#ba2ffa] font-bold">Project Name:</span>{" "}
                RiseUp Foundation
              </h2>
              <p className="text-white">
                <span className="text-[#ba2ffa] font-bold">Project Type:</span>{" "}
                Fullstack
              </p>
              <div>
                <p className="text-[#ba2ffa] font-bold ">Project Description</p>
                <p className="text-white text-justify">
                  RiseUp Foundation offers crowdfunding support for personal
                  issues, startups, businesses, and creative projects.It
                  empowers individuals and communities by providing financial
                  assistance to overcome challenges and pursue growth.Their
                  mission is to foster innovation, resilience, and
                  self-dependency through accessible funding solutions.
                </p>
              </div>
              <div>
                <p className="text-[#ba2ffa] font-bold">Features</p>
                <ul className="pl-4 space-y-3 text-white">
                  <li className=" list-disc">
                    Full-Stack Version Control & Documentation
                  </li>
                  <li className=" list-disc">
                    Secure, Responsive & Error-Free Application
                  </li>
                  <li className=" list-disc">
                    Unique Design & Reliable Hosting
                  </li>
                </ul>
              </div>
              <div className="leading-8 text-[#ba2ffa] font-bold">
                Technologies Used: <p className="badge mx-2">HTML</p>
                <p className="badge mx-2">CSS</p>
                <p className="badge mx-2">Tailwind CSS</p>
                <p className="badge mx-2">JavaScript</p>
                <p className="badge mx-2">React</p>
                <p className="badge mx-2">Express.js</p>
                <p className="badge mx-2">Node.js</p>
                <p className="badge mx-2">Mongodb</p>
                <p className="badge mx-2">Firebase</p>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-[#1b0724] shadow-xl">
            <figure>
              <div className="relative group overflow-hidden shadow-lg cursor-pointer">
                {/* Image */}
                <img
                  src={portfolio5}
                  alt=""
                  className="w-full h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0b0113b5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4  space-y-1 lg:space-y-[5px]">
                  <button className="border border-[#6f139b] bg-[#1f052bcd] text-white max-w-sm rounded-2xl px-4 py-2 text-sm font-bold">
                    <a
                      href={"https://frontfury.github.io/happiem-proj/"}
                      target="_blank"
                    >
                      Live Link
                    </a>
                  </button>
                  <button className="border border-[#6f139b] bg-[#1f052bcd] text-white max-w-sm rounded-2xl px-4 py-2 text-sm font-bold">
                    <a
                      href={
                        "https://github.com/FrontFury/happiem-proj.git"
                      }
                      target="_blank"
                    >
                      View Code (client)
                    </a>
                  </button>
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">
                <span className="text-[#ba2ffa] font-bold">Project Name:</span>{" "}
                Happiem
              </h2>
              <p className="text-white">
                <span className="text-[#ba2ffa] font-bold">Project Type:</span>{" "}
                Frontend
              </p>
              <div>
                <p className="text-[#ba2ffa] font-bold">Project DescripTion</p>
                <p className="text-white">
                  Happiem is a revolutionary  web app designed to help
                  users achieve a happier and more fulfilled life. It combines
                  Personal Assistants, Coaches, and Essential Tools to guide you
                  in setting and reaching personal goals — all while building
                  genuine human connection.
                </p>
              </div>
              <div>
                <p className="text-[#ba2ffa] font-bold">Features</p>
                <ul className="pl-4 space-y-3 text-white">
                  <li className=" list-disc">
                    Connect with real personal assistants and coaches.Personalized goal tracking and communication.
                  </li>
                  <li className=" list-disc">
                    Understand your current happiness level.Track progress through positivity, engagement, and relationships metrics.
                  </li>
                  <li className=" list-disc">
                    Built for individuals with limited time. Focuses on converting productivity into meaningful happiness.
                  </li>
                </ul>
              </div>
              <div className="leading-8 text-[#ba2ffa] font-bold">
                Technologies Used: <p className="badge mx-2">HTML</p>
                <p className="badge mx-2">CSS</p>
                <p className="badge mx-2">Tailwind CSS</p>
                <p className="badge mx-2">JavaScript</p>
                <p className="badge mx-2">React</p>

              </div>
            </div>
          </div>
          <div className="card card-compact bg-[#1b0724] shadow-xl">
            <figure>
              <div className="relative group overflow-hidden shadow-lg cursor-pointer">
                {/* Image */}
                <img
                  src={portfolio6}
                  alt=""
                  className="w-full h-1/3 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0b0113b5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-end text-center p-4  space-y-1 lg:space-y-[5px]">
                  <button className="border border-[#6f139b] bg-[#1f052bcd] text-white max-w-sm rounded-2xl px-4 py-2 text-sm font-bold">
                    <a
                      href={"https://frontfury.github.io/rinterio-design/"}
                      target="_blank"
                    >
                      Live Link
                    </a>
                  </button>
                  <button className="border border-[#6f139b] bg-[#1f052bcd] text-white max-w-sm rounded-2xl px-4 py-2 text-sm font-bold">
                    <a
                      href={"https://github.com/FrontFury/rinterio-design"}
                      target="_blank"
                    >
                      View Code
                    </a>
                  </button>
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">
                <span className="text-[#ba2ffa] font-bold">Project Name:</span>{" "}
                Rinterio
              </h2>
              <p className="text-white">
                <span className="text-[#ba2ffa] font-bold">Project Type:</span>{" "}
                FrontEnd
              </p>
              <div>
                <p className="text-[#ba2ffa] font-bold">Project Description</p>
                <p className="text-white">
                  The Rinterio website showcases modern architectural designs
                  with a focus on blending rustic charm and contemporary
                  elegance.It offers services, portfolios, blogs, and
                  consultation booking options.The design highlights sleek
                  structures, natural materials, and spacious layouts filled
                  with light.
                </p>
              </div>
              <div>
                <p className="text-[#ba2ffa] font-bold">Features</p>
                <ul className="pl-4 space-y-3 text-white">
                  <li className=" list-disc">
                    Strong Visual & Process Emphasis
                  </li>
                  <li className=" list-disc">Values-Driven Branding</li>
                  <li className=" list-disc">
                    Elegantly Simple, Informative Layout
                  </li>
                </ul>
              </div>
              <div className="leading-8 text-[#ba2ffa] font-bold">
                Technologies Used: <p className="badge mx-2">HTML</p>
                <p className="badge mx-2">CSS</p>
                <p className="badge mx-2">Tailwind CSS</p>
                <p className="badge mx-2">JavaScript</p>
                <p className="badge mx-2">React</p>
                <p className="badge mx-2">Firebase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
