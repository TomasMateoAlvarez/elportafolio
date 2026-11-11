import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FAF8F4] px-6 text-center">
      <p className="text-6xl font-extrabold text-[#1E7B54]">404</p>
      <h1 className="mt-4 text-3xl font-bold text-[#16201B]">Esta página no existe</h1>
      <p className="mt-3 max-w-md text-[#4B5A52]">Puede que el enlace esté roto o que la página se haya movido.</p>
      <Link href="/" className="mt-8 rounded-lg bg-[#1E7B54] px-6 py-3.5 font-semibold text-white hover:bg-[#165C3F]">
        Volver al inicio
      </Link>
    </main>
  )
}
