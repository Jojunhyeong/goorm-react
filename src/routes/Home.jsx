import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'
export default function Home() {
  const theme = useContext(ThemeContext)
  return (
    <>
      <div className="text-8xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
        제 홈에 오신걸 환영합니다.
      </div>
      <div>현재 테마는 {theme}입니다.</div>
    </>
  )
}
