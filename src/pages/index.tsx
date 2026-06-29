import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Digital Marketing Agency</title>
        <meta name="description" content="Full-service digital marketing agency — SEO, PPC, social, content, CRO." />
      </Head>

      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-center">We grow brands through data-driven digital marketing</h1>
        <p className="mt-4 text-center max-w-2xl">SEO • PPC • Content • Social • CRO</p>
        <div className="mt-6">
          <a href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded">Get a free audit</a>
        </div>
      </main>

      <Footer />
    </>
  )
}
