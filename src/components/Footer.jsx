export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/2">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-4">
          <p
            className="text-gray-500 text-center w-full text-sm font-body"
          >
            © {new Date().getFullYear()} Rizwan Manzoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
