import React from "react";
import { BookOpen, ChevronRight } from "lucide-react";

const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="p-6">
        <div className="h-48 mb-6 rounded-lg bg-blue-100 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">{program.title}</h3>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {program.duration}
          </span>
          <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
            {program.level}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{program.description}</p>
        <ul className="space-y-2">
          {program.features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-600">
              <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

const Education = () => {
  const programs = [
    {
      title: "Program 1",
      duration: "6 weeks",
      level: "Beginner",
      description: "Description of Program 1.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Program 2",
      duration: "8 weeks",
      level: "Intermediate",
      description: "Description of Program 2.",
      features: ["Feature A", "Feature B", "Feature C"],
    },
    {
      title: "Program 3",
      duration: "12 weeks",
      level: "Advanced",
      description: "Description of Program 3.",
      features: ["Feature X", "Feature Y", "Feature Z"],
    },
  ];

  return (
    <div>
      <section id="programs" className="programs py-12">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Our <span className="text-green-600">Programs</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
