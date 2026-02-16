export function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="container mx-auto px-6 py-8 text-sm text-zinc-500">
        © {new Date().getFullYear()} Francisco. All rights reserved.
      </div>
    </footer>
  );
}
