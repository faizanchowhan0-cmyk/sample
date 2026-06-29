import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link href="/"><a className="font-bold">Agency</a></Link>
        <nav className="space-x-4">
          <Link href="/services"><a>Services</a></Link>
          <Link href="/case-studies"><a>Case Studies</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}
