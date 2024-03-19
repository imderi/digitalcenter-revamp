import Image from "next/image";

const logoList = [
  {
    href: "https://digitalcenter.id/wp-content/uploads/2022/12/1-4-1.png", // Corrected URL
    label: "Logo 1",
    title: "Teamwork",
    desc: "Providing the best results is a lengthy process that requires cooperation",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2022/12/2-5-1.png",
    label: "Logo 2",
    title: "Problem Solvers",
    desc: "Always giving you the newest ideas and information that fits your needs",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2022/12/3-5-1.png",
    label: "Logo 3",
    title: "Offer Solutions",
    desc: "ensuring that you achieve the desired outcomes effectively and efficiently.",
  },
];

const Processing = () => {
  return (
    <section className="bg-base-100">
      <div className="py-10 relative bg-white sm:py-16 lg:py-24 lg:pt-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto text-center">
            <p className="inline-block font-semibold text-primary mb-4">
              Processing
            </p>
            <p className="sm:text-4xl text-4xl font-extrabold text-base-content">
              How we work
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Find out how the digital center can help you work together.
            </p>
          </div>
          <div className="grid items-center max-w-4xl grid-cols-1 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-3">
            {logoList.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={item.href}
                  alt={item.label}
                  width={125}
                  height={125}
                />
                  <p className="sm:text-xl text-xl font-extrabold text-base-content my-4">
                    {item.title}
                  </p>
                  <p className="text-md opacity-80 leading-relaxed">
                    {item.desc}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processing;
