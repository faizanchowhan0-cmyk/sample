import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Digital Marketing Agency</title>
      </Head>

      <Header />

      <main className="max-w-2xl mx-auto p-8">
        <h2 className="text-2xl font-semibold">Contact us</h2>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="mt-4 flex flex-col gap-3">
          <input name="name" placeholder="Name" className="border rounded p-2" />
          <input name="email" type="email" placeholder="Email" className="border rounded p-2" />
          <textarea name="message" placeholder="How can we help?" className="border rounded p-2" rows={6} />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        </form>
      </main>

      <Footer />
    </>
  )
}
