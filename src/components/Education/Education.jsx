import React from "react";

const programs = [
  {
    title: "Program 1",
    duration: "6 weeks",
    level: "Beginner",
    description:
      "This introductory program is designed to provide foundational knowledge and skills to get you started in the field. You will learn essential concepts and basic techniques that will serve as a base for more advanced studies.",
    features: [
      "Hands-on learning with real-world projects",
      "Interactive sessions with industry experts",
      "Access to exclusive learning materials",
    ],
  },
  {
    title: "Program 2",
    duration: "8 weeks",
    level: "Intermediate",
    description:
      "This program is for those who already have some basic knowledge and want to build upon it. You'll dive deeper into the subject, exploring more advanced topics and techniques, and applying them through practical exercises.",
    features: [
      "Advanced problem-solving techniques",
      "Collaboration with peers on challenging projects",
      "One-on-one mentorship from experienced professionals",
    ],
  },
  {
    title: "Program 3",
    duration: "12 weeks",
    level: "Advanced",
    description:
      "The advanced program is designed for individuals who are already well-versed in the basics and intermediate concepts. This program focuses on mastering complex topics and equipping you with the skills needed to excel in the field.",
    features: [
      "In-depth exploration of cutting-edge technologies",
      "Capstone projects that simulate real industry challenges",
      "Networking opportunities with top industry leaders",
    ],
  },
];

const Education = () => {
  return (
    <div className="flex justify-center items-center p-5 bg-gray-100">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Our Programs
        </h2>
        <div className="space-y-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {program.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>
                  <span className="font-medium">Duration:</span>{" "}
                  {program.duration}
                </li>
                <li>
                  <span className="font-medium">Level:</span> {program.level}
                </li>
                <li>
                  <span className="font-medium">Description:</span>{" "}
                  {program.description}
                </li>
                <li>
                  <span className="font-medium">Features:</span>
                  <ul className="list-disc pl-5 space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
