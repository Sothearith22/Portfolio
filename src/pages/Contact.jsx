import { FaEnvelope, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#0b0d1c] to-[#050714] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl font-bold mb-14 border-b-4 border-cyan-400 inline-block"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card hover:scale-[1.03] transition">
              <div className="icon-box">
                <FaEnvelope />
              </div>
              <a
                href="mailto:kimsothearith20007@gmail.com"
                className="link"
              >
                kimsothearith20007@gmail.com
              </a>
            </div>

            <div className="glass-card hover:scale-[1.03] transition">
              <div className="icon-box">
                <FaGithub />
              </div>
              <a
                href="https://github.com/RithCoding"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                github.com/RithCoding
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <input name="first_name" placeholder="First Name" className="input" />
              <input name="last_name" placeholder="Last Name" className="input" />
            </div>

            <input name="email" type="email" placeholder="Email" className="input w-full" />

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              className="input w-full resize-none"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl font-bold text-lg text-white shadow-lg hover:scale-[1.02] transition"
            >
              SEND MESSAGE
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;