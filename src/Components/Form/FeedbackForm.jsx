import React, { useState } from 'react';
import { db } from '../../firebase'; // Import Firestore
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (!formData.message.trim()) {
      setError('Please enter your message');
      return;
    }

    setIsSubmitting(true);

    try {
      // Firestore submission
      await addDoc(collection(db, 'feedback'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp()
      });

      // Reset form and show success
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Error saving feedback:', err);
      setError('Failed to submit feedback. Please try again.');
      setIsSubmitting(false);
    }
  }; // 🚨 Added missing closing brace for handleSubmit

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex my-8">
      <div className="hidden md:block md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Feedback Illustration"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
          We value your feedback
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Share your thoughts with us
        </h2>
        
        {isSubmitted ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
            <p className="font-medium">Thank you for your feedback!</p>
            <p>We appreciate you taking the time to share your thoughts.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us what you think..."
              ></textarea>
            </div>
            
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>{error}</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;