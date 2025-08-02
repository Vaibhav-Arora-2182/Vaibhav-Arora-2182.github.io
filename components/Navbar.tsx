import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 mb-8 rounded shadow flex justify-center space-x-6">
      <Link href="/" className="hover:underline font-semibold">About</Link>
      <Link href="/experience" className="hover:underline font-semibold">Experience</Link>
      <Link href="/education" className="hover:underline font-semibold">Education</Link>
      <Link href="/skills" className="hover:underline font-semibold">Skills</Link>
      <Link href="/projects" className="hover:underline font-semibold">Projects</Link>
      <Link href="/contact" className="hover:underline font-semibold">Contact</Link>
    </nav>
  );
}
