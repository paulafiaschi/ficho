import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <section>
        <h2>Testimonios de Clientes</h2>

        <div className="card-container">
          <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
              <Image
                src="/Stars.svg"
                alt="stars icons"
                width={100}
                height={50}
              ></Image>

              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </p>
              <div>
                <p className="mt-5 font-bold">Dianne Russell</p>
                <p className="mt-0">Starbucks</p>
              </div>
            </div>
          </div>
          <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
              <Image
                src="/Stars.svg"
                alt="stars icons"
                width={100}
                height={50}
              ></Image>

              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </p>
              <div>
                <p className="mt-5 font-bold">Dianne Russell</p>
                <p className="mt-0">Starbucks</p>
              </div>
            </div>
          </div>
          <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
              <Image
                src="/Stars.svg"
                alt="stars icons"
                width={100}
                height={50}
              ></Image>

              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </p>
              <div>
                <p className="mt-5 font-bold">Dianne Russell</p>
                <p className="mt-0">Starbucks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
