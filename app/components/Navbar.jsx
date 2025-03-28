import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar shadow-md fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#coaching">Coaching</Link>
              </li>
              <li>
                <Link href="#sobremi">Sobre mí</Link>
              </li>
              {/* <li>
                <Link href="#testimonios">Testimonios</Link>
              </li> */}
            </ul>
          </div>
          <Link href="#">
            <Image
              src="/RF-logo.svg"
              height={100}
              width={150}
              alt="RF logo"
            ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#coaching">Coaching</Link>
            </li>
            <li>
              <Link href="#sobremi">Sobre mí</Link>
            </li>
            {/* <li>
              <Link href="#testimonios">Testimonios</Link>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="#" className="btn btn-outline btn-accent" target="_blank">
            Agendá tu sesión
          </Link>
        </div>
      </div>
    </>
  );
}
