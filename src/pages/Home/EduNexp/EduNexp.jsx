import { Link } from "react-router-dom";
import certificateImg from '../../../../public/certificate.jpg'

const EduNexp = () => {
  return (
    <div id="eduEx" className="bg-[#0b0113] text-white">
      <div className="relative p-6 lg:px-24 lg:py-12">
        <div className="w-full absolute pt-4 lg:pt-6 inset-0 opacity-5 ">
          <h1 className="text-center text-5xl lg:text-8xl font-bold">
            EDUCATION & EXPERIENCE
          </h1>
        </div>
        <h1 className="text-center text-4xl lg:text-6xl font-bold">
          EDUCATION & <span className="text-[#70139b]">EXPERIENCE</span>
        </h1>
        <div className="mt-6 lg:mt-12 flex flex-col lg:flex-row w-full gap-6 lg:gap-16">
          <div className="w-full">
            <h3 className="text-4xl font-bold my-6 text-[#70139b]">
              Education
            </h3>

            <div className="relative border-l pl-6 lg:pl-12">
              <p className="bg-[#6f139b] py-1 px-3 rounded-full inline font-semibold">
                2022 - Present
              </p>
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold mt-6 ">
                  B.Sc (Hons.) in Computer Science & Engineering
                </h3>
                <h4 className="text-xl lg:text-2xl">
                  <a href="https://www.diit.edu.bd/" target="_black"><u>Daffodil Institute of IT</u></a>
                </h4>
                <p className="text-justify">
                  Mastering algorithms, data structures, software architecture, and computer systems. Building a strong foundation in both theory and practice while developing the skills to design creative, efficient solutions to complex computing challenges.
                </p>
                <div className="absolute -top-4 -left-5 lg:-left-6 w-[40px] lg:w-[50px] bg-[#6f139b] p-2 rounded-full">
                  <img src="/graduation.png" alt="" />
                </div>
              </div>
            </div>
            <div className="relative border-l mt-6 pl-6 lg:pl-12">
              <p className="bg-[#6f139b] py-1 px-3 rounded-full inline font-semibold">
                2019 - 2021
              </p>
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold mt-6 ">
                  Higher Secondary Certificate (HSC)
                </h3>
                <h4 className="text-xl lg:text-2xl">
                  Ideal Commerce College 
                </h4>
                <p className="text-justify">
                  I explored advanced subjects in physics, chemistry, biology, and mathematics, gaining a deep understanding of both theoretical principles and practical applications. This solid foundation equipped me for pursuing higher studies in diverse fields like engineering, medicine, and technology.

                </p>
                <div className="absolute -top-4 -left-5 lg:-left-6 w-[40px] lg:w-[50px] bg-[#6f139b] p-2 rounded-full">
                  <img src="/graduation.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-4xl font-bold my-6 text-[#70139b]">
              Experience
            </h3>

            <div className="relative border-l pl-6 lg:pl-12">
              <p className="bg-[#6f139b] py-1 px-3 rounded-full inline font-semibold">
                July, 2024 - December, 2024
              </p>
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-bold mt-6 ">
                  Complete Web Development
                </h3>
                <h4 className="text-xl lg:text-2xl underline">
                  <a href={"https://www.programming-hero.com/"}
                    target="_black">Programming Hero </a>
                </h4>
                <p className="text-justify">
                  I completed the Complete Web Development course from Programming Hero, gaining hands-on experience in HTML, CSS, JavaScript, React, Node.js, and MongoDB. The course covered both front-end and back-end development, along with real-world project building. This training strengthened my skills to create fully functional and responsive web applications.
                </p>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  onClick={() =>
                    document.getElementById("certificate").showModal()
                  }
                  className="btn btn-sm lg:btn-lg text-lg lg:text-xl border border-[#6f139b] bg-[#1f052bcd] max-w-sm rounded lg:px-4 lg:py-2 font-bold text-white"
                >
                  View Certificate_
                </button>

                <dialog
                  id="certificate"
                  className="modal bg-[#02000360] backdrop-blur-sm"
                >
                  <div className="modal-box w-11/12 max-w-5xl bg-[#1b0824] border border-[#6f139b]">
                    <img src={certificateImg} alt="" className="rounded-lg" />
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
                <div className="absolute -top-4 -left-5 lg:-left-6 w-[40px] lg:w-[50px] bg-[#6f139b] p-2 rounded-full">
                  <img src="/certificate-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduNexp;
