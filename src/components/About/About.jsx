import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center p-5 bg-gray-100">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          About Ethiccraft Club
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-4">
          <li>
            <span className="font-medium">
              Ethiccraft Club was officially launched by Former HRD Minister Mr.
              Prakash Javadekar
            </span>{" "}
            on 14th October 2018 at IGI Stadium, serving as the youth wing of
            ISKCON.
          </li>
          <li>
            Aims to empower the youth of India with values and social well-being
            through knowledge blended with wisdom.
          </li>
          <li>
            Provides a much-needed support system and a favorable ambience for
            youth development.
          </li>
          <li>
            Helps young individuals understand the importance of values, which
            serve as the foundation of human existence.
          </li>
          <li>
            Assists in cultivating values to enhance their personality and
            experience the real joyful nature of the self.
          </li>
          <li>
            Offers a platform for youth to express their inherent goodness and
            positively transform others' lives.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
