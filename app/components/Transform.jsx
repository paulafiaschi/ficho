import Image from "next/image";
import Link from "next/link";

export default function Transform() {
  return (
    <>
      <section className="highlight">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/imageA.png"
            width={700}
            height={700}
            alt="Primer plano de Raúl"
          ></Image>
          <div>
            <div className="hero-text">
              <h2 className="text-left">Transformá tu vida hoy</h2>
              <p className="">
                Reservá tu sesión de coaching hoy mismo y comenzá a alcanzar
                esas metas personales y profesionales que tanto anhelás. Este es
                el primer paso en tu camino hacia el éxito y el desarrollo
                personal. No dudes en dar ese importante paso.
              </p>
              <Link className="btn btn-primary mt-5" href="#">
                Agendá tu sesión
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
