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
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows="7" placeholder="Message"></textarea>
        </form>
      </div>
    </section>
  );
};
