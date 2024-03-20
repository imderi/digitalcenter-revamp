import Image from "next/image";

const SvgPlus = () => {
  return (
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
        className={`transform origin-center transition duration-200 ease-out`}
      />
      <rect
        y="7"
        width="16"
        height="2"
        rx="1"
        className={`transform origin-center rotate-90 transition duration-200 ease-out`}
      />
    </svg>
  );
};

const servicesList = [
  "E-commerce Development",
  "Apps Design And Development",
  "Social Media Management",
  "Content Marketing Service",
  "Web And Design Development",
  "Paid Advertisement",
  "Email Marketing",
  "Search Engine Optimization",
];

const OurServices = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-200 flex flex-col lg:flex-row items-center justify-center px-8">
      <div className="lg:w-full">
        <Image
          src="https://digitalcenter.id/wp-content/uploads/2022/12/solution-bg-1.png"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
      <div className="lg:w-full mb-10 m-10">
        <div className="mb-8">
          <p className="inline-block font-semibold text-primary mb-4">
            Our Services
          </p>
          <h1 className="font-extrabold text-2xl lg:text-3xl tracking-tight">
            Build your business with the latest technology
          </h1>
        </div>
        <div className="grid items-center max-w-4xl gap-6 mx-auto mt-12 md:mt-20 grid-cols-2">
          {servicesList.map((service, index) => (
            <div className="flex items-center" key={index}>
              <p className="flex-1 text-base-content font-semibold">{service}</p>
              <SvgPlus />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
