import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-custom">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full p-3 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark" required></textarea>
            </div>
            <button type="submit" className="bg-primary-light dark:bg-primary-dark text-text-dark dark:text-text-light font-bold py-3 px-6 rounded-lg transition-colors hover:bg-opacity-90">
              Send Message
            </button>
          </form>
          <div className="mt-12 space-y-4">
            <div className="flex items-center">
              <Mail size={20} className="mr-4 text-primary-light dark:text-primary-dark" />
              <span>youremail@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone size={20} className="mr-4 text-primary-light dark:text-primary-dark" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="mr-4 text-primary-light dark:text-primary-dark" />
              <span>Your City, Country</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;