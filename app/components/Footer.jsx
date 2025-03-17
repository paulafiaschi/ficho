import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
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
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 448 512"
                className="fill-current"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </Link>
            <Link href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - Raúl Fiaschi</p>
        </aside>
      </footer>
    </>
  );
}
