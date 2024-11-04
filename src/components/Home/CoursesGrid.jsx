import React from "react";

const courses = [
  {
    name: "HTML Basics",
    description:
      "Learn the fundamentals of HTML to build the structure of web pages.",
    color: "bg-red-500",
  },
  {
    name: "CSS Styling",
    description:
      "Understand how to style websites with CSS for beautiful designs.",
    color: "bg-blue-500",
  },
  {
    name: "JavaScript Essentials",
    description: "Master the core concepts of JavaScript programming.",
    color: "bg-yellow-500",
  },
  {
    name: "React JS",
    description:
      "Develop dynamic UIs with React, a powerful JavaScript library.",
    color: "bg-indigo-500",
  },
  {
    name: "Firebase",
    description:
      "Learn backend basics with Firebase for real-time databases and hosting.",
    color: "bg-orange-500",
  },
  {
    name: "MongoDB",
    description: "Dive into MongoDB to understand NoSQL databases.",
    color: "bg-green-500",
  },
];

const Course = ({ course }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md text-white ${course.color}`}>
      <h2 className="text-2xl font-semibold mb-2">{course.name}</h2>
      <p className="text-sm">{course.description}</p>
      <button className="mt-4 bg-white text-gray-800 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">
        Learn More
      </button>
    </div>
  );
};

const CoursesGrid = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Courses</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;
