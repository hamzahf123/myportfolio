import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import MagneticButton from "../ui/MagneticButton";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nr1p1z5",  // Replace with your EmailJS Service ID
        "template_7i9fqjo",  // Replace with your EmailJS Template ID
        form.current,
        "Oc6Ftjs6vyNUZnNAS"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="hairline absolute inset-x-0 top-0" />
      {/* Toast Container */}
      <ToastContainer />

      <div className="wrap">
        {/* Section Title */}
        <SectionTitle title="CONTACT">
          I’d love to hear from you—reach out for any opportunities or questions!
        </SectionTitle>

        {/* Contact Form */}
        <Reveal className="relative mx-auto w-full max-w-2xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -inset-y-16 -z-10 rounded-full opacity-80"
            style={{
              background:
                'radial-gradient(closest-side, rgba(217,189,132,0.10), transparent 100%)',
            }}
          />
          <div className="glass rounded-[2rem] p-7 sm:p-11">
            <h3 className="text-center text-2xl font-light tracking-[-0.03em] text-platinum sm:text-[1.9rem]">
              Connect With Me <span className="ml-1">🚀</span>
            </h3>
            <span className="mx-auto mt-5 block h-px w-16 bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />

            <form ref={form} onSubmit={sendEmail} className="mt-9 grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                aria-label="Your Email"
                required
                className="field"
              />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                aria-label="Your Name"
                required
                className="field"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                required
                className="field sm:col-span-2"
              />
              <textarea
                name="message"
                placeholder="Message"
                aria-label="Message"
                rows="5"
                required
                className="field resize-none sm:col-span-2"
              />

              {/* Send Button */}
              <div className="mt-3 sm:col-span-2">
                <MagneticButton type="submit" className="btn-gold w-full !py-4" strength={0.12}>
                  Send
                </MagneticButton>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
