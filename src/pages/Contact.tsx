import ContactForm from "../components/contact/ContactForm";
function Contact() {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-col items-center justify-center pt-28 sm:pt-32">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="sm:text-xl my-5 text-gray-800">
          Any Question and feedback? don't hesitate to contact me through this
          form or you can also find me on this platforms.
        </h1>

        <ul className="flex gap-3 justify-center">
          <li>
            <a href="https://github.com/rhakagesa" target="_blank">
              <img src="../src/assets/github-logo.svg" alt="Github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rhakagesa/" target="_blank">
              <img src="../src/assets/linkedin-logo.svg" alt="Linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/rhakagesa/" target="_blank">
              <img src="../src/assets/fb-logo.svg" alt="Facebook" />
            </a>
          </li>
        </ul>

        <hr className="my-5" />

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
