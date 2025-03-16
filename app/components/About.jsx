import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section>
        <div className="grid2">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src="/imageA.png"
              width={700}
              height={700}
              alt="Primer plano de Raúl"
            ></Image>
            <div className="hero-text">
              <h2 className="text-left">Sobre mí</h2>
              <p>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
