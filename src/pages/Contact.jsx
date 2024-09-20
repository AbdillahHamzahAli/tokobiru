const Contact = () => {
  return (
    <div className="container mx-auto p-4 ">
      {/* Hero Section for Contact Us */}
      <section className="bg-primary text-white  text-center rounded-lg mb-8">
        <h2 className="text-4xl font-bold mb-4">Get in Touch with Us</h2>
        <p className="text-lg">
          We are here to help you. Send us your questions, feedback, or
          inquiries.
        </p>
      </section>

      {/* Contact Form and Illustration */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Illustration Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://picsum.photos/500/400?random=7"
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Contact Form</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
