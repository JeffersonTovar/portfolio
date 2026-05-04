import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sw66kxf",
      "template_jtn59cz",
      form.current,
      "nGJ9Ov66fROCcFZwE"
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Error sending message");
    });
  };

  return (
    <div className="page contact-page">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Contact</h1>

                {/* INFO */}
        <div className="contact-info">
          <p>
            💻 GitHub:{" "}
            <a href="https://github.com/JeffersonTovar" target="_blank">
              JeffersonTovar
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jefferson-tovar-rojas-036373143/"
              target="_blank"
            >
              Jefferson Tovar
            </a>
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <textarea name="message" placeholder="Your Message" required />

          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </div>
  );
}
