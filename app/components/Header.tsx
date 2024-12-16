import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center p-2">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-blue-600 mr-4">facebook</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Suche auf Facebook"
              className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-[240px]"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          </div>
        </div>
      </div>
    </header>
  )
}

