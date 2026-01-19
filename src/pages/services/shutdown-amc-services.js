import Head from 'next/head';

export default function ShutdownAMCServices() {
  return (
    <>
      <Head>
        <title>
          Shutdown & AMC Refractory Services in India | Hira Refractory Works
        </title>
        <meta
          name="description"
          content="Hira Refractory Works provides shutdown and annual maintenance contract (AMC) refractory services for industrial plants across India. Based in Thane, Maharashtra."
        />
        <link
          rel="canonical"
          href="https://www.hirarefractoryworks.com/services/shutdown-amc-services"
        />
      </Head>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* PAGE HEADER */}
          <header className="max-w-4xl">
            <h1 className="text-4xl font-extrabold leading-tight">
              Shutdown & AMC Refractory Services in India
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Hira Refractory Works offers planned shutdown and annual maintenance
              contract (AMC) refractory services to ensure safe, timely and
              efficient execution of critical maintenance activities. Operating
              from Thane, Maharashtra, we support industrial plants across India.
            </p>
          </header>

          {/* OVERVIEW */}
          <section className="mt-16 grid gap-12 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl font-bold">
                Planned Shutdown & Turnaround Support
              </h2>
              <p className="mt-4 text-slate-300">
                Shutdown periods are critical windows where refractory repairs,
                relining and inspections must be completed within strict
                timelines. Our experienced teams coordinate closely with plant
                operations to execute refractory works efficiently without
                compromising safety or quality.
              </p>
              <p className="mt-4 text-slate-300">
                From pre-shutdown planning to post-commissioning support, we
                ensure that refractory systems are restored for reliable
                long-term performance.
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold">
                Scope of Shutdown & AMC Services
              </h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• Shutdown refractory repair and relining</li>
                <li>• Annual maintenance contract (AMC) services</li>
                <li>• Furnace, kiln and boiler inspections</li>
                <li>• Emergency refractory support during shutdowns</li>
                <li>• Manpower mobilisation and supervision</li>
                <li>• Quality checks and documentation</li>
              </ul>
            </div>
          </section>

          {/* BENEFITS */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Benefits of AMC-Based Refractory Management
            </h2>
            <ul className="mt-6 space-y-3 text-slate-300 max-w-4xl">
              <li>• Predictable maintenance planning</li>
              <li>• Reduced emergency repair costs</li>
              <li>• Improved refractory lifecycle performance</li>
              <li>• Dedicated support teams</li>
              <li>• Faster response during critical situations</li>
            </ul>
          </section>

          {/* INDUSTRIES */}
          <section className="mt-20">
            <h2 className="text-2xl font-bold">
              Industries We Support
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3 text-slate-300">
              <li>Steel Plants</li>
              <li>Cement Plants</li>
              <li>Power Plants</li>
              <li>Chemical & Petrochemical Plants</li>
              <li>Foundries</li>
              <li>Process Industries</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-24 rounded-2xl bg-slate-900 border border-slate-700 p-10">
            <h2 className="text-2xl font-bold">
              Planning a Shutdown or Looking for AMC Support?
            </h2>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Connect with Hira Refractory Works to discuss shutdown planning or
              long-term refractory maintenance contracts for your plant.
            </p>
            <a
              href="/#contact"
              className="inline-block mt-6 rounded-md bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-500"
            >
              Talk to Our Experts
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
