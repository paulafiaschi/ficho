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
              <h2 className="text-left">Transformá tu carrera profesional</h2>
              <p className="">
                Reservá ahora tu sesión de coaching y comenzá a conquistar esas
                metas profesionales que has postergado. Juntos convertiremos tus
                desafíos laborales en oportunidades de crecimiento.
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
