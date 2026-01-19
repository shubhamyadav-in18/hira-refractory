import Head from "next/head";

export default function PowerPlantRefractory() {
  return (
    <>
      <Head>
        <title>
          Power Plant Refractory Services in India | Hira Refractory Works
        </title>
        <meta
          name="description"
          content="Hira Refractory Works provides specialised refractory installation, repair and shutdown services for power plants across India, including boilers and high-temperature systems."
        />
        <link
          rel="canonical"
          href="https://www.hirarefractoryworks.com/industries/power-plant"
        />
      </Head>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* PAGE HEADER */}
          <header className="max-w-4xl">
            <h1 className="text-4xl font-extrabold leading-tight">
              Power Plant Refractory Services in India
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Hira Refractory Works provides reliable refractory services for
              thermal and process power plants across India. Operating from
              Thane, Maharashtra, we support power generation facilities with
              durable refractory installation, repair and maintenance solutions.
            </p>
          </header>

          {/* OVERVIEW */}
          <section className="mt-16 grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl font-bold">
                Refractory Solutions for Power Generation
              </h2>
              <p className="mt-4 text-slate-300">
                Power plants operate under continuous high-temperature
                conditions where refractory performance directly impacts
                efficiency and operational safety. Our refractory services are
                designed to withstand thermal cycling, erosion and chemical
                attack common in power generation environments.
              </p>
              <p className="mt-4 text-slate-300">
                We work closely with plant maintenance and engineering teams to
                execute refractory works during planned shutdowns and ongoing
                operational support.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">
                Power Plant Areas We Cover
              </h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Boilers (AFBC / CFBC / WHRB)</li>
                <li>• Furnace and combustion chambers</li>
                <li>• Flue gas ducts and expansion joints</li>
                <li>• ESP and ash handling systems</li>
                <li>• Chimneys and stacks</li>
                <li>• High-temperature vessels</li>
              </ul>
            </div>
          </section>

          {/* SERVICES */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Our Refractory Services for Power Plants
            </h2>
            <ul className="mt-6 space-y-3 text-slate-300 max-w-4xl">
              <li>• Refractory installation and relining</li>
              <li>• Boiler refractory repair and maintenance</li>
              <li>• Shutdown and turnaround refractory works</li>
              <li>• AMC-based refractory maintenance services</li>
              <li>• Emergency refractory repair support</li>
            </ul>
          </section>

          {/* WHY US */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Why Power Plants Choose Hira Refractory Works
            </h2>
            <ul className="mt-6 space-y-3 text-slate-300 max-w-4xl">
              <li>• Experience in power plant refractory environments</li>
              <li>• Skilled teams for boiler and furnace applications</li>
              <li>• Strong focus on safety and quality compliance</li>
              <li>• Proven execution during shutdown timelines</li>
              <li>• Pan-India service capability from Thane, Maharashtra</li>
            </ul>
          </section>

          {/* RELATED SERVICES */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">Related Refractory Services</h2>

            <p className="mt-4 text-slate-300 max-w-3xl">
              Our industry-specific refractory solutions are supported by a full
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

          {/* CTA */}
          <section className="mt-24 rounded-2xl bg-slate-900 border border-slate-700 p-10">
            <h2 className="text-2xl font-bold">
              Looking for a Power Plant Refractory Contractor?
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Contact Hira Refractory Works to discuss refractory installation,
              repair or maintenance requirements for your power plant facility.
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
