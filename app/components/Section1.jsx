import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <>
      <section id="coaching">
        <h2>Descubrí los Beneficios del Coaching Personalizado</h2>

        <div className="card-container">
          <div className="card w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src="/focus.svg"
                alt="focus icon"
                width={100}
                height={50}
              ></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Claridad y Enfoque Estratégico</h2>
              <p>
                Identificá tus fortalezas reales y definí objetivos
                profesionales precisos, eliminando la dispersión y enfocando tu
                energía en lo que verdaderamente impulsa tu carrera.
              </p>
            </div>
          </div>
          <div className="card w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src="/leader.svg"
                alt="leader icon"
                width={100}
                height={50}
              ></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                Desarrollo de Habilidades Esenciales
              </h2>
              <p>
                Potenciá competencias críticas como liderazgo, comunicación
                efectiva y resolución de conflictos, preparándote para asumir
                mayores responsabilidades.
              </p>
            </div>
          </div>
          <div className="card w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <Image
                src="/face.svg"
                alt="smile icon"
                width={80}
                height={50}
              ></Image>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Satisfacción Profesional</h2>
              <p>
                Alineá tu trabajo con tus valores personales, logrando no solo
                éxito profesional sino también realización personal y mejor
                calidad de vida.
              </p>
            </div>
          </div>
        </div>

        <Link
          className="btn btn-primary block w-fit
 m-auto mt-10 "
          href="#"
          target="_blank"
        >
          Agendá tu sesión
        </Link>
      </section>
    </>
  );
}
