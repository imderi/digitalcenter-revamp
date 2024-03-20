import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-4 lg:py-10">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight md:-mb-4">
          Digital Center Indonesia
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Improve your business by analyzing it deeply and using the latest
          technology to increase growth.
        </p>
        <button className="btn btn-primary btn-wide">Get To Know More</button>
      </div>
      <div className="lg:w-full flex justify-center items-center">
        <Image
          src="https://digitalcenter.id/wp-content/uploads/2022/12/hero-4-1.png"
          alt="Hero Image"
          priority={true}
          width={450}
          height={450}
        />
      </div>
    </section>
  );
};

export default Hero;
