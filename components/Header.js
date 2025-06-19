import { Menu, User, Settings } from 'lucide-react'
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu size={28} className="text-blue-700" />
          <span className="text-2xl font-bold text-blue-700 tracking-tight">Springer Innovation</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition">
            <User size={22} />
            <span className="hidden sm:inline">Louisa Mott</span>
          </button>
          <button className="p-2 rounded-full hover:bg-blue-50 transition">
            <Settings size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}