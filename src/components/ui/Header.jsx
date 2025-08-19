import { useState } from 'react'
import MenuBar from '../MenuBar'
import { Link } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto w-full px-4 pt-4">
        <div
          className="
            w-full
            p-5
            flex items-center justify-between
            rounded-2xl border border-gray-200
            bg-white shadow-sm

            
          "
        >
          <div className="flex items-center gap-3 pl-3 md:text-center">
            <button
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl border border-gray-200 bg-white
                md:hidden
              "
              type="button"
              onClick={() => setOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <span className="text-lg font-semibold md:hidden">MyApp</span>
          </div>

          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <span className="text-lg font-semibold">MyApp</span>
          </div>

          <nav className="flex items-center gap-4 pr-4 text-gray-700">
            <Link to="/login" className="hidden md:block hover:underline">
              로그인
            </Link>
            <Link to="/signup" className="hidden md:block hover:underline">
              회원가입
            </Link>
            <Link to="/mypage" className="hidden md:block hover:underline">
              마이페이지
            </Link>
          </nav>
        </div>
      </div>
      <MenuBar isOpen={open} onClose={() => setOpen(false)} />
    </header>
  )
}
