import { FaEnvelopeOpen, FaMap } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.subject.trim() &&
    formData.message.trim();

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const day = String(new Date().getDate()).padStart(2, "0");
    const month = String(new Date().getMonth() + 1).padStart(2, "0");
    const year = new Date().getFullYear();

   
    const serviceId = import.meta.env.VITE_SERVICE_ID ;
    const templateId = import.meta.env.VITE_TEMPLATE_ID ;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY ;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      to: "Tasin",
      message: formData.message,
      year,
      month,
      day,
      time,
    };

    emailjs.init(publicKey);

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        Swal.fire({
          title: "Message Sent!",
          text: "Your message has been sent successfully. I will reply soon!",
          icon: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to send message. Please try again later.",
          icon: "error",
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div id="letsConnect" className="p-6 lg:p-24 bg-[#0b0113] w-full">
        {/* Heading */}
        <div className="relative lg:px-24 lg:py-12">
          <div className="w-full absolute lg:pt-6 inset-0 opacity-5 ">
            <h1 className="text-center text-5xl lg:text-8xl font-bold text-white">
              LET'S CONNECT
            </h1>
          </div>
          <h1 className="text-center text-4xl lg:text-6xl font-bold text-white">
            LET'S <span className="text-[#70139b]">CONNECT</span>
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start">
          {/* Left side */}
          <div className="lg:w-1/2">
            <div>
              <h3 className="text-4xl font-bold my-6 text-[#70139b]">
                Don’t Hold Back!
              </h3>
              <p className="lg:w-2/3 text-xl text-white">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </div>
            <div className="mt-6 space-y-6 text-white">
              <div className="flex items-start gap-6 ">
                <FaMap className="text-4xl text-[#6f139b]" />
                <div>
                  <p className="text-xl font-bold">Address</p>
                  <p>Dhanmondi , Dhaka.</p>
                </div>
              </div>
              <div className="flex items-center gap-6 ">
                <FaEnvelopeOpen className="text-4xl text-[#6f139b]" />
                <div>
                  <p className="text-xl font-bold">Email Me</p>
                  <p>tasin220116@diit.edu.bd</p>
                </div>
              </div>
              <div className="flex items-center gap-6 ">
                <IoCallSharp className="text-4xl text-[#6f139b]" />
                <div>
                  <p className="text-xl font-bold">Call Me</p>
                  <p>+880 1909 855 135</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="lg:w-1/2 md:lg:w-1/3 w-full text-white">
            <div>
              <h3 className="text-4xl font-bold my-6 text-[#70139b]">
                Write to Us
              </h3>
              <form ref={form} onSubmit={sendEmail} className="grid gap-6">
                <div className="flex gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="input input-bordered border-[#6f139b] w-full bg-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="input input-bordered border-[#6f139b] w-full bg-transparent"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="input input-bordered border-[#6f139b] w-full bg-transparent"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea w-full bg-transparent border border-[#6f139b]"
                  placeholder="Your Message"
                ></textarea>
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`btn border-[#6f139b] hover:bg-[#70139b] hover:border-[1px] hover:border-gray-500 rounded-lg px-4 py-2 font-bold w-full text-white ${
                    !isFormValid
                      ? "opacity-50 cursor-not-allowed bg-gray-600"
                      : "bg-[#1f052bcd]"
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-[#250133d6] p-[1px]"></p>
    </div>
  );
};

export default Contact;
