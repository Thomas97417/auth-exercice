"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SideNav = () => {
  const pathname = usePathname()
  const navLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
    },
    {
      name: 'Admin',
      href: '/admin',
    },
  ]
  return (
    <>
      <div className='w-1/4 bg-zinc-900 flex flex-col p-2 pt-4 items-center gap-4'>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name} className="w-full">
            <button className={`hover:bg-gray-700 p-4 rounded text-white w-full ${pathname === link.href ? 'bg-gray-700' : ''}`}>
              {link.name}
            </button>
          </Link>
        ))}
      </div>
    </>
  )
}

export default SideNav