import Head from "next/head";

export default function SteelPlantRefractory() {
  return (
    <>
      <Head>
        <title>
          Steel Plant Refractory Services in India | Hira Refractory Works
        </title>
        <meta
          name="description"
          content="Hira Refractory Works provides specialised refractory installation, repair and shutdown services for steel plants across India. Based in Thane, Maharashtra."
        />
        <link
          rel="canonical"
          href="https://www.hirarefractoryworks.com/industries/steel-plant"
        />
      </Head>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <header className="max-w-4xl">
            <h1 className="text-4xl font-extrabold leading-tight">
              Steel Plant Refractory Services in India
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Hira Refractory Works delivers reliable refractory services for
              integrated and secondary steel plants across India. Operating from
              Thane, Maharashtra, we support critical steelmaking operations
              with durable refractory solutions.
            </p>
          </header>

          <section className="mt-16 grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl font-bold">
                Refractory Solutions for Steel Manufacturing
              </h2>
              <p className="mt-4 text-slate-300">
                Steelmaking involves extreme temperatures, thermal shock and
                aggressive slag conditions. Our refractory services are designed
                to withstand harsh operating environments while ensuring
                consistent plant performance.
              </p>
              <p className="mt-4 text-slate-300">
                We work closely with plant teams during installation, repair and
                shutdown phases to deliver safe and efficient refractory works.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">
                Steel Plant Areas We Cover
              </h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Blast furnaces</li>
                <li>• Electric arc furnaces (EAF)</li>
                <li>• Induction furnaces</li>
                <li>• Ladles and tundishes</li>
                <li>• Reheating furnaces</li>
                <li>• Continuous casting areas</li>
              </ul>
            </div>
          </section>

          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Our Refractory Services for Steel Plants
            </h2>
            <ul className="mt-6 space-y-3 text-slate-300 max-w-4xl">
              <li>• Refractory installation and relining</li>
              <li>• Emergency and planned refractory repairs</li>
              <li>• Shutdown and turnaround support</li>
              <li>• AMC-based refractory maintenance</li>
              <li>• Ladle and furnace refractory services</li>
            </ul>
          </section>

          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Why Steel Plants Choose Hira Refractory Works
            </h2>
            <ul className="mt-6 space-y-3 text-slate-300 max-w-4xl">
              <li>• Experience in steel plant refractory environments</li>
              <li>• Skilled manpower for high-temperature operations</li>
              <li>• Strong focus on safety and quality</li>
              <li>• Pan-India execution capability</li>
              <li>• Thane-based coordination with national reach</li>
            </ul>
          </section>

          {/* RELATED SERVICES */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">Related Refractory Services</h2>

            <p className="mt-4 text-slate-300 max-w-3xl">
              Our steel plant refractory solutions are supported by a complete
              range of installation, repair and maintenance services executed by
              experienced teams across India.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Refractory Installation & Lining",
                  href: "/services/refractory-installation",
                },
                {
                  title: "Refractory Repair & Maintenance",
                  href: "/services/refractory-repair-maintenance",
                },
                {
                  title: "Shutdown & AMC Services",
                  href: "/services/shutdown-amc-services",
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
                  <h3 className="text-lg font-semibold text-slate-100 hover:text-orange-500">
                    {service.title}
                  </h3>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-24 rounded-2xl bg-slate-900 border border-slate-700 p-10">
            <h2 className="text-2xl font-bold">
              Looking for a Steel Plant Refractory Contractor?
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Contact Hira Refractory Works to discuss refractory installation,
              repair or maintenance requirements for your steel plant.
            </p>
            <a
              href="/#contact"
              className="inline-block mt-6 rounded-md bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-500"
            >
              Get in Touch
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
