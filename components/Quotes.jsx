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

const Quotes = () => {
  return (
    <section className="max-w-7xl rounded-lg lg:mx-auto m-5 bg-base-200 flex flex-col lg:flex-row items-center justify-center px-8">
      <div className="lg:w-full mb-10 m-10">
        <div className="mb-8">
          <h1 className="font-extrabold text-2xl lg:text-3xl tracking-tight mb-4">
            Build your business with the latest technology
          </h1>
          <p className="flex-1 text-base-content font-semibold">
            Utilizing cutting-edge design approaches and the latest
            technologies, you will be streamlined and efficient on a
            year-over-year basis.
          </p>
          <button className="btn btn-primary btn-wide my-8">Get a Quote</button>
        </div>
      </div>
      <div className="flex lg:w-full justify-center items-center">
        <Image
          src="https://digitalcenter.id/wp-content/uploads/2022/12/1-5-1.png"
          alt="Product Demo"
          priority={true}
          width={325}
          height={325}
        />
      </div>
    </section>
  );
};

export default Quotes;
