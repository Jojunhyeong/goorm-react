// components/ui/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Header />
      {/* 자식 라우트가 그려질 자리 */}
      {children}
      <Footer />
    </div>
  );
}
