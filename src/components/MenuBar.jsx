import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MenuBar({ isOpen, onClose }) {
  const isWide = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if(isWide && isOpen) {onClose();}
  }, [isWide, isOpen, onClose]);
  // 열렸을 때 스크롤 잠그기
  useEffect(() => {
    if (isOpen) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      return () => (document.documentElement.style.overflow = prev);
    }
  }, [isOpen]);


  return (
    <>
      {/* 오버레이 */}
      <div
        onClick={onClose}
        className={[
          "fixed inset-0 z-[9998] bg-black/40 backdrop-blur-[1px]",
          "transition-opacity duration-200",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          "md:hidden"
        ].join(" ")}
      />

      {/* 사이드 메뉴 */}
      <aside
        className={[
          "fixed top-0 left-0 h-screen bg-white z-[9999] md:hidden",
          "flex flex-col items-start overflow-hidden box-border",
          "transition-all duration-200 ease-out",
          "whitespace-nowrap overflow-x-hidden overflow-y-auto",
          isOpen ? "w-[83%] max-w-[320px]" : "w-0",
        ].join(" ")}
      >
        {/* 닫기 버튼 */}
        <button
          type="button"
          onClick={onClose}
          className="mt-6 ml-4 h-8 w-8 flex items-center justify-center rounded-md hover:bg-gray-100"
          aria-label="메뉴 닫기"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* 메뉴 영역 */}
        <nav className="flex flex-col w-full mt-10 gap-4 px-6">
           <Link
            to="/login"
            onClick={onClose}
            className="w-full text-left py-2 text-lg font-semibold text-black hover:text-blue-600"
          >
            로그인
          </Link>
          <Link
            to="/signup"
            onClick={onClose}
            className="w-full text-left py-2 text-lg font-semibold text-black hover:text-blue-600"
          >
            회원가입
          </Link>
          <Link
            to="/mypage"
            onClick={onClose}
            className="w-full text-left py-2 text-lg font-semibold text-black hover:text-blue-600"
          >
            마이페이지
          </Link>
        </nav>
      </aside>
    </>
  );
}
