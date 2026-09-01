export function Contato() {
  return (
    <section id="contato" className="bg-grafite py-20 text-creme">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-6 md:px-[6vw]">
        <h2 className="max-w-[20ch] font-display text-3xl font-semibold md:text-4xl">
          Tem um projeto em mente? Vamos conversar.
        </h2>
        <div className="flex flex-col items-start gap-2 text-[15px] md:items-end">
          <a
            href="mailto:contato@cofo.com.br"
            className="border-b border-creme/30 pb-0.5"
          >
            contatocofo@outlook.com.br
          </a>
          <a
            href="https://instagram.com/cofobr"
            className="border-b border-creme/30 pb-0.5"
          >
            @cofobr
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-creme py-7">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-6 text-[13px] text-grafite/40 md:px-[6vw]">
        <span>Cofo - design e desenvolvimento.</span>
      </div>
    </footer>
  );
}
