import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Refractory Industry Blog | Hira Refractory Works</title>
        <meta
          name="description"
          content="Insights, guides and technical articles on refractory installation, repair, shutdown and maintenance services."
        />
      </Head>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold">Refractory Industry Blog</h1>

          <p className="mt-6 text-slate-300 max-w-3xl">
            Technical insights, best practices and industry knowledge related to
            refractory works across cement, steel and power plants.
          </p>

          {/* Blog cards will be added here later */}
        </div>
      </main>
    </>
  );
}
