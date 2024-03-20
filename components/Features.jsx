import Image from "next/image";

const Features = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8">
        <div className="flex flex-col gap-8 lg:gap-10 items-center justify-center text-center lg:text-left lg:items-start">
          <div>
            <p className="inline-block font-semibold text-primary mb-4">
              Features
            </p>
            <h1 className="font-extrabold text-2xl lg:text-3xl tracking-tight">
              We execute projects utilizing our specialized and strategic
              approach
            </h1>
          </div>
        </div>
        <div className="lg:w-full bg-base-200">
          <div className="p-5 md:p-14">
            <p className="font-bold text-md lg:text-lg tracking-tight mb-3">
              GIVING THE BEST
            </p>
            <h1 className="font-semibold text-md lg:text-lg tracking-tight">
              We are perpetually innovating for the future, meticulously
              crafting the ensuing generation of products, brands, and design
              attributes from a multifaceted and hybrid viewpoint. This approach
              ensures that our creations are not only current but also
              forward-thinking. positioning them at the forefront of industry
              advancements and technological progress.
            </h1>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center px-8">
        <div className="lg:w-full">
          <Image
            src="https://digitalcenter.id/wp-content/uploads/2022/12/feature-1.jpg"
            alt="Product Demo"
            className="w-full"
            priority={true}
            width={500}
            height={500}
          />
        </div>
        <div className="lg:w-full mb-10 m-5">
          <div className="grid items-center max-w-4xl grid-cols-1 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-2">
            <div className="flex flex-col w-full justify-center items-center gap-5">
              <Image
                src="https://digitalcenter.id/wp-content/uploads/2022/12/icon-1-1.png"
                alt=""
                priority={true}
                width={50}
                height={50}
              />
              <h1 className="font-extrabold text-lg lg:text-xl tracking-tight">
                Innovative & Up To Date
              </h1>
              <h1 className="font-semibold text-md lg:text-lg tracking-tight">
              signifies a commitment to pioneering the latest technological advancements and trends.
              </h1>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-5">
              <Image
                src="https://digitalcenter.id/wp-content/uploads/2022/12/icon-2-1.png"
                alt=""
                priority={true}
                width={50}
                height={50}
              />
              <h1 className="font-extrabold text-lg lg:text-xl tracking-tight">
                Seamless Experience
              </h1>
              <h1 className="font-semibold text-md lg:text-lg tracking-tight">
                This commitment is pivotal in cultivating a sense of reliability
                and trust with clients
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
