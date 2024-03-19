import Image from "next/image";

const logoList = [
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-15.webp",
    label: "Logo 1",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-14.webp",
    label: "Logo 2",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-13.webp",
    label: "Logo 3",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-12.webp",
    label: "Logo 4",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-11.webp",
    label: "Logo 5",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-10.webp",
    label: "Logo 6",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-09.webp",
    label: "Logo 7",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-08.webp",
    label: "Logo 8",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-07.webp",
    label: "Logo 9",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-06.webp",
    label: "Logo 10",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-05.webp",
    label: "Logo 11",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-04.webp",
    label: "Logo 12",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-03.webp",
    label: "Logo 13",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-02.webp",
    label: "Logo 14",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-16.webp",
    label: "Logo 15",
  },
  {
    href: "https://digitalcenter.id/wp-content/uploads/2023/10/Logo-brand-17.webp",
    label: "Logo 16",
  },
];

const ClientsGrid = () => {
  return (
    <section className="bg-base-100" id="clients-grid">
      <div className="py-10 relative bg-white sm:py-16 lg:py-24 lg:pt-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto text-center">
            <p className="sm:text-4xl text-4xl font-extrabold text-base-content">
              WE WORKED WITH GLOBAL LARGEST BRANDS
            </p>
          </div>

          <div className="grid items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4">
            {logoList.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <Image
                  src={item.href}
                  alt={item.label}
                  width={75}
                  height={75}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsGrid;
