import '../styles/Contact.css';

export const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h1 className="contact-header">Get in Touch!</h1>
        <p className="contact-details">
          You can submit the form below or feel free to send me an email
          directly - <strong>jaspreet.nijjar29@gmail.com</strong>
        </p>
        <form
          method="POST"
          action="https://getform.io/f/8369f0dc-8121-45bb-b929-7fe2321b95e5"
        >
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea
            rows="7"
            placeholder="Message"
            name="message"
            required
          ></textarea>
          <button>Send Messsage</button>
        </form>
      </div>
    </section>
  );
};
