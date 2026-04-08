import Head from 'next/head'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ReplacementGuide.com</title>
        <meta name="description" content="ReplacementGuide.com provides honest, straight-talking guides on product lifespans, replacement timing, and repair vs replace decisions." />
        <link rel="canonical" href="https://replacementguide.com/about" />
      </Head>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About ReplacementGuide</h1>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Every homeowner, car owner, and regular person eventually asks the same questions: how long does this thing last? When should I replace it? Is it worth fixing?
          </p>
          <p>
            We built ReplacementGuide because the answers are scattered across forums, manufacturer websites, and random blog posts. We put them all in one place... with real numbers, honest advice, and no sales pitch.
          </p>
          <p>
            Every guide covers three things: average lifespan, warning signs that it&apos;s time, and whether you should repair or replace. That&apos;s it. No fluff.
          </p>
          <p>
            Our data comes from manufacturer specifications, industry reports, and real-world averages from contractors and repair professionals. We update our guides regularly as new information becomes available.
          </p>
        </div>
      </div>
    </>
  )
}
