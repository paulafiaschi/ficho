import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero min-h-screen highlight">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/imageA.png"
            width={700}
            height={700}
            alt="Primer plano de Raúl"
          ></Image>
          <div>
            <div className="hero-text">
              <h1 className="text-5xl font-bold mb-5">
                Transformá tu vida profesional y alcanzá tu máximo potencial
              </h1>

              <Link className="btn btn-accent mr-3" href="#">
                Agendá tu sesión
              </Link>
              <Link className="btn btn-outline btn-primary" href="#coaching">
                Descubrí qué es el coaching
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
