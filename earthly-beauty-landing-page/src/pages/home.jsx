import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubscribeForm from "../components/SubscribeForm";

const Home = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="home-container">
        <h2>Like the comfort of home.</h2>
        <p>Welcome to Earthly Beauty</p>
        <button className="appointment-btn">Book your appointment with us.</button>
      </main>

      {/* Subscribe Section */}
      <div className="subscribe-container">
        <h3>Stay up to date with our special offers, and latest news</h3>
        <SubscribeForm />
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <p>📍 153 Main Road, Sea Point, Equinox Building, 5th Floor</p>
        <p>📧 info@earthly-beauty.com</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;