import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          About Our Tech Stack
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Learn more about the technologies we use to build our application.
        </p>

        <div className="space-y-6">
          {/* React */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-500">React</h2>
            <p className="text-gray-600">
              React is a powerful JavaScript library for building user
              interfaces, allowing us to create reusable components and
              efficiently manage the state of our application.
            </p>
          </div>

          {/* React Router */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-500">
              React Router
            </h2>
            <p className="text-gray-600">
              React Router enables seamless navigation within our application,
              allowing us to handle multiple pages and routes with ease.
            </p>
          </div>

          {/* Tailwind CSS */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-500">
              Tailwind CSS
            </h2>
            <p className="text-gray-600">
              Tailwind CSS is a utility-first CSS framework that makes styling
              fast and flexible, letting us apply styles directly to elements
              without writing custom CSS.
            </p>
          </div>

          {/* HTML */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-500">HTML</h2>
            <p className="text-gray-600">
              HTML (HyperText Markup Language) forms the backbone of our web
              pages, structuring content in a way that is accessible and easy to
              understand.
            </p>
          </div>

          {/* DaisyUI */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-500">DaisyUI</h2>
            <p className="text-gray-600">
              DaisyUI is a plugin for Tailwind CSS that offers ready-made UI
              components, helping us create beautiful, consistent designs
              quickly.
            </p>
          </div>

          {/* Firebase */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-500">Firebase</h2>
            <p className="text-gray-600">
              Firebase is a comprehensive app development platform that provides
              backend services like authentication, databases, and hosting,
              enabling us to build and scale our app with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
