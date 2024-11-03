import React from "react";

const Service = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          We provide a range of technical services designed to help your
          business thrive in the digital world.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Web Development */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">
              Web Development
            </h3>
            <p className="mt-2 text-gray-600">
              Create responsive and modern websites with optimized user
              experiences. From front-end to back-end, we cover it all.
            </p>
          </div>

          {/* Machine Learning */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">
              Machine Learning
            </h3>
            <p className="mt-2 text-gray-600">
              Leverage the power of AI to gain insights and automate processes.
              We build custom ML models tailored to your business needs.
            </p>
          </div>

          {/* Data Analysis */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">
              Data Analysis
            </h3>
            <p className="mt-2 text-gray-600">
              Transform data into actionable insights. Our team specializes in
              data processing, visualization, and predictive analysis.
            </p>
          </div>

          {/* Antenna Design */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">
              Antenna Design
            </h3>
            <p className="mt-2 text-gray-600">
              Develop cutting-edge antenna designs for various applications. We
              provide custom solutions with precision and expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
