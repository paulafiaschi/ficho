import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section id="sobremi">
        <div className="grid2">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src="/imageA.png"
              width={700}
              height={700}
              alt="Primer plano de Raúl"
            ></Image>
            <div className="hero-text">
              <h2 className="text-left">
                Sobre mí: de la planta a la consultoría
              </h2>
              <p>
                Con más de cuatro décadas transformando organizaciones desde
                dentro, he recorrido todos los niveles organizacionales, desde
                aprendiz de matricería hasta Director de Planta en importantes
                industrias.
              </p>
              <p>
                Mi experiencia abarca todo el espectro industrial: he caminado
                por el taller, liderado equipos y tomado decisiones estratégicas
                en la sala de juntas. Esta perspectiva única me permite entender
                a profundidad los desafíos que enfrentan profesionales en todos
                los niveles.
              </p>
              <p>
                Como <b>Coach Laboral y Ejecutivo </b> certificado por el
                Instituto Axon Training , acompaño a profesionales a superar
                obstáculos y alcanzar sus metas mediante un enfoque práctico,
                eficiente y confidencial.
              </p>
              <p>
                Mi compromiso es claro: transformar desafíos en oportunidades
                utilizando un lenguaje simple y directo. Mi mayor satisfacción
                es ver a mis clientes crecer profesionalmente mientras
                redescubren el placer de su trabajo diario.
              </p>
              <p>
                <b>¿Listo para llevar tu carrera al siguiente nivel? </b>
                Trabajemos juntos para conseguirlo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
