import Head from 'next/head';

export default function RefractoryRepairMaintenance() {
  return (
    <>
      <Head>
        <title>
          Refractory Repair & Maintenance Services in India | Hira Refractory Works
        </title>
        <meta
          name="description"
          content="Hira Refractory Works provides reliable refractory repair and maintenance services for furnaces, kilns and boilers across India. Based in Thane, Maharashtra."
        />
        <link
          rel="canonical"
          href="https://www.hirarefractoryworks.com/services/refractory-repair-maintenance"
        />
      </Head>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* PAGE HEADER */}
          <header className="max-w-4xl">
            <h1 className="text-4xl font-extrabold leading-tight">
              Refractory Repair & Maintenance Services in India
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Hira Refractory Works offers professional refractory repair and
              maintenance services to restore damaged linings, extend equipment
              life and minimise unplanned shutdowns. From our base in Thane,
              Maharashtra, we support industrial plants across India.
            </p>
          </header>

          {/* SERVICE OVERVIEW */}
          <section className="mt-16 grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl font-bold">
                Industrial Refractory Repair Solutions
              </h2>
              <p className="mt-4 text-slate-300">
                Refractory damage due to thermal cycling, chemical attack or
                mechanical stress can significantly affect plant efficiency.
                Our repair services are designed to address localised failures
                as well as large-scale lining deterioration.
              </p>
              <p className="mt-4 text-slate-300">
                We execute repairs using appropriate techniques such as patching,
                gunning, relining and section replacement, ensuring safe and
                durable restoration.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">
                Scope of Repair & Maintenance
              </h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Emergency refractory repair services</li>
                <li>• Furnace and kiln refractory patching</li>
                <li>• Boiler refractory maintenance</li>
                <li>• Gunning and castable repair works</li>
                <li>• Preventive refractory maintenance</li>
                <li>• Shutdown and turnaround support</li>
              </ul>
            </div>
          </section>

          {/* BENEFITS */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Benefits of Planned Refractory Maintenance
            </h2>
            <ul className="mt-6 space-y-3 text-slate-300 max-w-4xl">
              <li>• Reduced unplanned downtime</li>
              <li>• Improved thermal efficiency</li>
              <li>• Extended refractory service life</li>
              <li>• Enhanced operational safety</li>
              <li>• Lower long-term maintenance costs</li>
            </ul>
          </section>

          {/* INDUSTRIES */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Industries We Support
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3 text-slate-300">
              <li>Steel & Metal Processing Plants</li>
              <li>Cement Plants</li>
              <li>Power Generation Units</li>
              <li>Chemical & Petrochemical Plants</li>
              <li>Foundries</li>
              <li>Process Industries</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-24 rounded-2xl bg-slate-900 border border-slate-700 p-10">
            <h2 className="text-2xl font-bold">
              Need Refractory Repair or Maintenance Support?
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Speak with Hira Refractory Works to plan emergency repairs or
              scheduled maintenance services tailored to your plant operations.
            </p>
            <a
              href="/#contact"
              className="inline-block mt-6 rounded-md bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-500"
            >
              Contact Our Team
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
