"use client";

import { useRef, useState } from "react";

const listData = [
  {
    question:
      "Empowering Professional Excellence through Transformative Design",
    answer: (
      <div className="space-y-2 leading-relaxed">
        stands at the intersection of innovation and professionalism, shaping
        the future of business operations through transformative design.
      </div>
    ),
  },
  {
    question: "Refining Workflows with Aesthetic Functionality",
    answer: (
      <div className="space-y-2 leading-relaxed">
        with an acute understanding of professional demands, we create solutions
        that streamline operations, foster productivity, and redefine the
        elegance of efficiency.
      </div>
    ),
  },
  {
    question: "Architecting Digital Elegance, Advancing Professionalism",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Our ethos is founded on crafting digital experiences that embody
        elegance and advance professionalism.
      </div>
    ),
  },
  {
    question: "Engineering Precision, Designing Success",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We believe that through expertly engineered design, we can transform
        everyday business tasks into seamless, successful outcomes, ensuring
        that professionalism is not just maintained but enhanced.
      </div>
    ),
  },
];

const ListItem = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>
      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const Expertise = () => {
  return (
    <section className="bg-base-200" id="expertise">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">
            Expertise
          </p>
          <p className="sm:text-3xl text-2xl font-extrabold text-base-content">
            With more than 3+ years of experience, our team has become expert in
            digital Transformations.
          </p>
          <p className="text-md opacity-80 leading-relaxed my-3">
            Grow brands through bold, strategic creative
          </p>
          <button className="btn btn-primary btn-wide my-8">Know More</button>
        </div>
        <ul className="basis-1/2">
          {listData.map((item, i) => (
            <ListItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Expertise;
