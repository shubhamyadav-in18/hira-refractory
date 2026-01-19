import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Refractory Works Contractor in India | Hira Refractory Works, Thane
        </title>
        <meta
          name="description"
          content="Hira Refractory Works is a trusted industrial refractory contractor based in Thane, Maharashtra, providing refractory installation, repair, shutdown and maintenance services across India."
        />
        <link rel="canonical" href="https://www.hirarefractoryworks.com/" />
      </Head>

      <main>
        {/* HERO */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
          <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Industrial Refractory Works Contractor in India
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Based in Thane, Maharashtra, Hira Refractory Works delivers
                refractory installation, lining, repair and shutdown services
                for steel, cement, power and process industries across India.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#contact"
                  className="inline-block rounded-md bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-500"
                >
                  Get a Quote
                </a>
                <a
                  href="#services"
                  className="inline-block rounded-md border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-slate-400"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="h-72 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-center">
                <span className="text-slate-400">
                  Industrial Refractory Visual (Image Placeholder)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Our Refractory Services
            </h2>

            <p className="mt-4 text-slate-300 max-w-3xl">
              We provide end-to-end industrial refractory solutions executed by
              experienced site teams, ensuring safety, durability and long-term
              thermal efficiency.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Refractory Installation & Lining',
                  href: '/services/refractory-installation',
                  desc: 'Furnace, kiln, boiler and reactor refractory lining using castables, bricks and monolithic systems.',
                },
                {
                  title: 'Refractory Repair & Maintenance',
                  href: '/services/refractory-repair-maintenance',
                  desc: 'Emergency and planned refractory repair works to extend equipment life and minimise downtime.',
                },
                {
                  title: 'Shutdown & AMC Services',
                  href: '/services/shutdown-amc-services',
                  desc: 'Planned shutdown execution and annual maintenance contract (AMC) refractory services for heavy industries.',
                },
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="
                    block rounded-xl border border-slate-700 bg-slate-900 p-6
                    hover:border-orange-500 hover:bg-slate-800/60
                    focus:outline-none focus:ring-2 focus:ring-orange-500
                    transition-colors
                  "
                >
                  <h3 className="text-xl font-semibold text-slate-100 hover:text-orange-500">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-slate-300">
                    {service.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Industries We Serve
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-4 text-slate-300">
              <li>Steel Plants</li>
              <li>Cement Plants</li>
              <li>Power Plants</li>
              <li>Chemical & Process Industries</li>
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold">
              Contact Hira Refractory Works
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Based in Thane, Maharashtra, we undertake refractory works across
              all parts of India. Get in touch to discuss your project
              requirements.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
