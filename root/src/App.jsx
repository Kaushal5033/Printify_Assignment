import React from 'react';
import { FaCheck } from 'react-icons/fa';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">Printify</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-green-600 font-semibold">Catalog</a>
            <div className="relative group">
              <a href="#" className="text-gray-600 hover:text-green-600 flex items-center font-semibold">
                How it works
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-64">
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">How Printify Works</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Print On Demand</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Printify Quality Promise</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">What to Sell?</a>
              </div>
            </div>
            <a href="#" className="text-gray-600 hover:text-green-600 font-semibold">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-green-600 font-semibold">Blog</a>
            <div className="relative group">
              <a href="#" className="text-gray-600 hover:text-green-600 flex items-center font-semibold">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-64">
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Printify Studio</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Printify Express Delivery</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Transfer Products</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Order In Bulk</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Experts Program</a>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-600 hover:text-green-600 flex items-center font-semibold">
                Use-cases
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-64">
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Merch for Fans</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Merch for eCommerce</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Merch for Enterprises</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Grow Your Store</a>
              </div>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-600 hover:text-green-600 flex items-center font-semibold">
                Need help?
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2 w-64">
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Help Center</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">Contacts</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:text-green-600 font-semibold">My Requests</a>
              </div>
            </div>
          </nav>
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-green-600 border border-green-600 rounded hover:bg-green-50">Log in</button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Sign up</button>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-12 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-7xl font-bold text-gray-800 mb-6">Create and sell custom products</h1>
            <p className="text-base text-gray-600 mb-4 flex items-center"><span className="text-green-500 mr-2"><FaCheck /></span> 100% Free to use</p>
            <p className="text-base text-gray-600 mb-4 flex items-center"><span className="text-green-500 mr-2"><FaCheck /></span> 900+ High-Quality Products</p>
            <p className="text-base text-gray-600 mb-4 flex items-center"><span className="text-green-500 mr-2"><FaCheck /></span> Largest global print network</p>
            <button className="px-6 py-2 bg-green-600 text-white rounded-full text-base hover:bg-green-700 mb-3">Start for free</button>
            <button className="px-6 py-2 bg-green-500 text-white rounded-full text-base hover:bg-white hover:text-black hover:border-green-500 hover:rounded-2 hover:border hover:border-green-500 hover:border-medium ml-3">How it works?</button>
            <p className="text-base text-green-600 mt-3">Trusted by over 8M sellers around the world</p>
          </div>
          <div className="w-full md:w-1/2">
            <iframe 
              src="https://lottie.host/embed/daa98c08-09a3-4d4e-bfa5-35a0aa3a5fe9/BpbILPVXX1.json" 
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]" 
              style={{ minHeight: '150px' }}
            ></iframe>
          </div>
        </div>
      </section>

     

      {/* Features Section */}
      <section className="py-20 bg-green-600 text-white mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12">Why choose Printify?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Easy to use</h3>
              <p className="text-white">Create and sell custom products with just a few clicks</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">No inventory needed</h3>
              <p className="text-white">Products are made on-demand when customers order</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Global shipping</h3>
              <p className="text-white">Ship your products worldwide with ease</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg" alt="Product Design" className="w-full h-xl rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Easily add your design to a wide range of products</h2>
            <p className="text-base text-gray-600 mb-4">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
            <button className="px-6 py-2 bg-green-600 text-white rounded-full text-base hover:bg-green-700">All products</button>
          </div>
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center mt-12">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Showcase your creativity</h2>
            <p className="text-base text-gray-600 mb-4">Our platform allows you to bring your creative ideas to life and reach a global audience with ease.</p>
            <button className="px-6 py-2 bg-green-600 text-white rounded-full text-base hover:bg-green-700">Get started</button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img src="https://images.pexels.com/photos/2228576/pexels-photo-2228576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Creative Showcase" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

    {/* product section */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <img
                src="https://printify.com/pfh/assets/legacy/custom-products.png"
                alt="Create custom products"
                className="mb-6 w-32 h-32"
              />
              <h3 className="text-green-600 text-xl font-semibold">CREATE</h3>
              <h2 className="text-2xl font-bold mb-4">Custom Products</h2>
              <p className="text-gray-700 text-center">
                Easily add your designs to a wide range of products using our free tools.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <img
                src="https://printify.com/pfh/assets/legacy/your-products.png"
                alt="Sell on your terms"
                className="mb-6 w-32 h-32"
              />
              <h3 className="text-green-600 text-xl font-semibold">SELL</h3>
              <h2 className="text-2xl font-bold mb-4">On Your Terms</h2>
              <p className="text-gray-700 text-center">
                You choose the products, sale price, and where to sell.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <img
                src="https://printify.com/pfh/assets/legacy/fullfillment.png"
                alt="We handle fulfillment"
                className="mb-6 w-32 h-32"
              />
              <h3 className="text-green-600 text-xl font-semibold">WE HANDLE</h3>
              <h2 className="text-2xl font-bold mb-4">Fulfillment</h2>
              <p className="text-gray-700 text-center">
                Once an order is placed, we automatically handle all the printing and delivery logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your print-on-demand business?</h2>
          <button className="px-8 py-3 bg-white text-green-600 rounded-full text-lg hover:bg-gray-100">Get started for free</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-600">T-shirts</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Hoodies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Mugs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Phone cases</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-600">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Press</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-600">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Help center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">API docs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Partnerships</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-green-600">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-600">
            © 2023 Printify. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
