import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-gray-400 h-screen" >
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to ChatMe</h1>
            <p className="text-lg mb-6">Connect with friends and family effortlessly.</p>
            <Link href="/chat">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start Chatting
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Why ChatMe?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-500 rounded-lg shadow-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2-2h-2a2 2 0 00-2 2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
            <p>Experience lightning-fast message delivery and enjoy seamless communication.</p>
          </div>
          <div className="bg-gray-500 rounded-lg shadow-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8v10c0 1.103-.897 2-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zm-1 0c0 .657-.126 1.283-.356 1.872L8.813 16m7.187-8L8.35 6.356c-.23-.589-.701-1.109-1.356-1.356-.657-.248-1.283-.126-1.872.356L3.65 11.187A2 2 0 002 13.82V20a2 2 0 002 2h14a2 2 0 002-2v-4.18A2 2 0 0019 15.82l-5.48-5.48z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p>Your conversations are encrypted and kept confidential.</p>
          </div>
          <div className="bg-gray-500 rounded-lg shadow-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-1a2 2 0 00-2-2H7a2 2 0 00-2 2v1a2 2 0 002 2h5a2 2 0 002-2zm0 0v3a2 2 0 002 2h5a2 2 0 002-2v-3a2 2 0 00-2-2H17zM7 8h3a2 2 0 012 2v4a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h3zm2 4h2v2H9v-2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
            <p>Simple and intuitive interface for a seamless chat experience.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-500 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
            <p className="text-lg mb-4">Limited features</p>
            <p className="text-lg font-bold">$0/month</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started Free
            </button>
          </div>
          <div className="bg-gray-500 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Standard Plan</h3>
            <p className="text-lg mb-4">
              Unlimited messages, group chats, file sharing
            </p>
            <p className="text-lg font-bold">$5/month</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Choose Standard
            </button>
          </div>
          <div className="bg-gray-500 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="text-lg mb-4">
              All features, priority support, advanced features
            </p>
            <p className="text-lg font-bold">$10/month</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Premium
            </button>
          </div>
        </div>
      </section>

      {/* Optional: Testimonials Section */}
      {/* <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Add testimonial components here */}
        </div>
  );
}

export const metadata = {
  title: 'Home - ChatMe',
  description: 'A place where you can chat with your friends',
}
