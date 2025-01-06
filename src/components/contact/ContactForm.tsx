import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            Swal.fire({
              toast: true,
              icon: "success",
              title: "Message sent successfully",
              showConfirmButton: false,
              timer: 1500,
              position: "top-end",
            });
          },
          (error) => {
            console.log(error);
          }
        )
        .finally(() => {
          form.current?.reset();
        });
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-3 font-bold bg-white p-4 rounded-lg border-2 border-gray-100"
    >
      <label
        htmlFor="name"
        className="w-full relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base"
        />
        <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs">
          Name
        </span>
      </label>
      <label
        htmlFor="email"
        className="w-full relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400"
      >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base"
        />
        <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-xs">
          Email
        </span>
      </label>
      <label
        htmlFor="message"
        className="w-full relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400"
      >
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="peer h-52 pt-2 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-base"
        />
        <span className="absolute start-3 top-1 text-xs text-gray-700 transition-all peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs">
          Message
        </span>
      </label>
      <button
        type="submit"
        className="text-white bg-gray-400 hover:bg-gray-500 active:bg-gray-800 py-2 rounded-md"
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
