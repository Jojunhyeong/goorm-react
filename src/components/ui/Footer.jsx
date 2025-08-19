export default function Footer() {
  return (
    <footer
      className="
        fixed bottom-0 w-full border-t border-gray-200
        flex items-center justify-center
        py-4 text-sm bg-white

        sm:py-5 sm:text-base           
        md:justify-between md:px-10 
        lg:py-6 lg:text-lg            
      "
    >
      <h1 className="font-medium">© 2025 frontend</h1>
      <p className="hidden md:block text-gray-500">All rights reserved</p>
    </footer>
  );
}
