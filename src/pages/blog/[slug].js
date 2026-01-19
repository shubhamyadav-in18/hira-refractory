import Head from "next/head";

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Blog Post | Hira Refractory Works</title>
      </Head>

      <main className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold">Blog Title Goes Here</h1>

          <article className="mt-8 text-slate-300">
            Blog content will render here.
          </article>
        </div>
      </main>
    </>
  );
}
