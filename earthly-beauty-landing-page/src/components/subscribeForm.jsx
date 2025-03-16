import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebase';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      await addDoc(collection(db, 'subscribers'), {
        email: email,
        timestamp: new Date(),
      });
      alert('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage("Subscription failed. Try again.");
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="subscribe-form">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default SubscribeForm;