import Header from '../components/Header'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-[1920px] mx-auto mt-8 p-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Seite nicht gefunden</h1>
          <p className="text-xl text-gray-600 mb-6">
            Entschuldigung, die von Ihnen gesuchte Seite ist nicht erreichbar.
          </p>
          <Link href="/" className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}

