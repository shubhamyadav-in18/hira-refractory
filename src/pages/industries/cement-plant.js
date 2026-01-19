import Head from "next/head";

export default function CementPlantRefractory() {
  return (
    <>
      <Head>
        <title>
          Cement Plant Refractory Services in India | Hira Refractory Works
        </title>
        <meta
          name="description"
          content="Hira Refractory Works provides specialised refractory services for cement plants across India, including kilns, preheaters, coolers and clinker handling systems."
        />
        <link
          rel="canonical"
          href="https://www.hirarefractoryworks.com/industries/cement-plant"
        />
      </Head>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* PAGE HEADER */}
          <header className="max-w-4xl">
            <h1 className="text-4xl font-extrabold leading-tight">
              Cement Plant Refractory Services in India
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Hira Refractory Works delivers reliable refractory installation,
              repair and maintenance services for cement plants across India.
              Based in Thane, Maharashtra, we support critical cement plant
              operations with durable refractory solutions.
            </p>
          </header>

          {/* OVERVIEW */}
          <section className="mt-16 grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl font-bold">
                Refractory Solutions for Cement Manufacturing
              </h2>
              <p className="mt-4 text-slate-300">
                Cement manufacturing involves continuous high-temperature
                processes that demand robust refractory systems. We provide
                refractory services designed to withstand thermal shock,
                abrasion and chemical attack in cement plant environments.
              </p>
              <p className="mt-4 text-slate-300">
                Our teams work closely with plant engineers to execute
                refractory works during planned shutdowns and operational
                maintenance windows.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">
                Cement Plant Areas We Cover
              </h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Rotary kilns</li>
                <li>• Preheater and calciner systems</li>
                <li>• Cooler systems</li>
                <li>• Tertiary air ducts</li>
                <li>• Clinker handling areas</li>
                <li>• Cement grinding units</li>
              </ul>
            </div>
          </section>

          {/* SERVICES */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Our Refractory Services for Cement Plants
            </h2>
            <ul className="mt-6 space-y-3 text-slate-300 max-w-4xl">
              <li>• Refractory installation and relining</li>
              <li>• Kiln refractory repair and maintenance</li>
              <li>• Shutdown and turnaround support</li>
              <li>• AMC-based refractory maintenance</li>
              <li>• Emergency refractory repair services</li>
            </ul>
          </section>

          {/* WHY US */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Why Cement Plants Choose Hira Refractory Works
            </h2>
            <ul className="mt-6 space-y-3 text-slate-300 max-w-4xl">
              <li>• Experience in cement plant refractory environments</li>
              <li>• Skilled manpower for high-temperature operations</li>
              <li>• Strict safety and quality compliance</li>
              <li>• Pan-India project execution capability</li>
              <li>• Thane-based coordination with nationwide reach</li>
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
              Looking for a Cement Plant Refractory Contractor?
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Contact Hira Refractory Works to discuss refractory installation,
              repair or maintenance requirements for your cement plant.
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
