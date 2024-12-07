import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgvebeny");
  const [formData, setFormData] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleFormSubmit = (event) => {
    // Capture form data before submission
    const formValues = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value
    };

    // Call Formspree handleSubmit
    handleSubmit(event);

    // Store form data
    setFormData(formValues);
  };

  const handleResetForm = () => {
    // Reset to initial state
    setShowForm(true);
    setFormData(null);
  };

  if (state.succeeded && formData) {
    return (
      <section className="bg-blue-700 text-blue-900 p-12 rounded-lg shadow-lg mb-8">
        <div className="text-center bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Message Confirmation</h2>
          
          <div className="text-left mb-6 bg-gray-100 p-6 rounded-lg">
            <p className="mb-2"><strong>Name:</strong> {formData.name}</p>
            <p className="mb-2"><strong>Email:</strong> {formData.email}</p>
            {formData.phone && (
              <p className="mb-2"><strong>Phone:</strong> {formData.phone}</p>
            )}
            <p><strong>Message:</strong> {formData.message}</p>
          </div>

          <button 
            onClick={handleResetForm}
            className="bg-yellow-500 text-blue-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600"
          >
            Send New Message
          </button>
        </div>
      </section>
    );
  }

  // If form is not showing, render the form
  if (!showForm) {
    return (
      <section 
        id="contact" 
        className="bg-blue-700 p-12 rounded-lg shadow-lg mb-8"
      >
        {/* Your existing form component */}
      </section>
    );
  }

  return (
    <section id="contact" className="bg-blue-700 p-6 md:p-12 rounded-lg shadow-lg mb-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
        {/* Contact Details */}
        <div className="w-full text-white space-y-4">
          <p className="text-xl">Feel free to reach out!</p>
          <div className="space-y-2">
            <p className="text-lg">Mobile: <span className="font-bold">+91 9646562880</span></p>
            <p className="text-lg">Email: <span className="font-bold">kamlesh.kumar21@gmail.com</span></p>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-500 text-blue-900 rounded-lg shadow-lg">
            <div className="flex flex-col items-start space-y-3">
              <div>
                <h3 className="text-xl font-bold">Schedule a Virtual Meetup</h3>
                <p className="text-sm mb-2">Let's discuss in detail</p>
              </div>
              <a 
                href="https://calendly.com/kamlesh-kumar21/new-meeting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Book Meeting
              </a>
            </div>
          </div>
        </div>
  
        {/* Contact Form */}
        <form 
          onSubmit={handleFormSubmit} 
          className="w-full bg-white p-6 md:p-8 rounded-lg shadow-md"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input 
                id="name" 
                type="text" 
                name="name" 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                placeholder="Your Name" 
                required
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input 
                id="email" 
                type="email" 
                name="email" 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                placeholder="Your Email" 
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
  
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone (optional)</label>
              <input 
                id="phone" 
                type="text" 
                name="phone" 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                placeholder="Your Phone (optional)" 
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                placeholder="Your Message" 
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
  
            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-yellow-500 text-blue-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 disabled:opacity-50 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}