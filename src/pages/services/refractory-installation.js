import Head from 'next/head';

export default function RefractoryInstallation() {
  return (
    <>
      <Head>
        <title>
          Refractory Installation & Lining Contractor in India | Hira Refractory Works
        </title>
        <meta
          name="description"
          content="Hira Refractory Works provides professional refractory installation and lining services for furnaces, kilns and boilers across India. Based in Thane, Maharashtra."
        />
        <link
          rel="canonical"
          href="https://www.hirarefractoryworks.com/services/refractory-installation"
        />
      </Head>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* PAGE HEADER */}
          <header className="max-w-4xl">
            <h1 className="text-4xl font-extrabold leading-tight">
              Refractory Installation & Lining Contractor in India
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Hira Refractory Works offers end-to-end refractory installation and
              lining services for industrial furnaces, kilns, boilers and
              reactors. Operating from Thane, Maharashtra, we execute refractory
              projects across India for steel, cement, power and process
              industries.
            </p>
          </header>

          {/* SERVICE OVERVIEW */}
          <section className="mt-16 grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl font-bold">
                Industrial Refractory Installation Services
              </h2>
              <p className="mt-4 text-slate-300">
                Proper refractory installation is critical for thermal
                efficiency, equipment life and plant safety. Our experienced
                site teams handle refractory lining works using high-quality
                castables, bricks and monolithic materials, ensuring compliance
                with industry standards and project specifications.
              </p>
              <p className="mt-4 text-slate-300">
                We follow controlled installation procedures, curing and dry-out
                practices to achieve optimal performance under high-temperature
                operating conditions.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">
                Scope of Refractory Installation
              </h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Furnace refractory lining</li>
                <li>• Kiln refractory installation</li>
                <li>• Boiler refractory lining</li>
                <li>• Reactor and vessel lining</li>
                <li>• Castable and brick refractory works</li>
                <li>• Expansion joint and anchor fixing</li>
              </ul>
            </div>
          </section>

          {/* INDUSTRIES */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Industries We Serve
            </h2>
            <p className="mt-4 text-slate-300 max-w-3xl">
              Our refractory installation services support a wide range of
              heavy and process industries requiring reliable thermal
              protection.
            </p>

            <ul className="mt-8 grid gap-4 md:grid-cols-3 text-slate-300">
              <li>Steel Plants</li>
              <li>Cement Plants</li>
              <li>Power Plants</li>
              <li>Chemical & Petrochemical Plants</li>
              <li>Foundries</li>
              <li>Process Industries</li>
            </ul>
          </section>

          {/* WHY CHOOSE US */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Why Choose Hira Refractory Works
            </h2>
            <ul className="mt-6 space-y-3 text-slate-300 max-w-4xl">
              <li>• Experienced refractory site supervisors and skilled manpower</li>
              <li>• Strict adherence to safety and quality standards</li>
              <li>• Proven execution during shutdown and critical timelines</li>
              <li>• Pan-India service capability</li>
              <li>• Thane-based team with national reach</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-24 rounded-2xl bg-slate-900 border border-slate-700 p-10">
            <h2 className="text-2xl font-bold">
              Need Refractory Installation Services?
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Contact Hira Refractory Works to discuss your refractory lining and
              installation requirements. We support projects across India with
              reliable execution and technical expertise.
            </p>
            <a
              href="/#contact"
              className="inline-block mt-6 rounded-md bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-500"
            >
              Request a Quote
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
