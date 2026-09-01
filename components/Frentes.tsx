export default function Frentes() {
  return (
    <section id="trabalho" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:px-[6vw]">
        <div>
          <h2 className="font-display text-2xl font-semibold text-grafite">
            Projetos para clientes
          </h2>
          <p className="mt-1.5 max-w-[38ch] text-sm text-grafite/55">
            Trabalho sob encomenda, do desenho da ideia até o código em
            produção.
          </p>

          <div className="mt-7">
            <Capacidade
              titulo="Design de produto"
              descricao="Interfaces pensadas para quem vai usar todos os dias, não só para a primeira impressão."
            />
            <Capacidade
              titulo="Desenvolvimento web"
              descricao="Sites e aplicações construídos para durar, não só para o lançamento."
            />
            <Capacidade
              titulo="Identidade visual"
              descricao="Marca, tipografia e paleta: construídas a partir do que o negócio realmente é."
              ultima
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-grafite">
            Cofo Labs
          </h2>
          <p className="mt-1.5 max-w-[38ch] text-sm text-grafite/55">
            Produtos que criamos por conta própria, para testar ideias e
            resolver problemas que a gente mesmo sente.
          </p>

          <div className="mt-7 rounded-lg bg-grafite p-6 text-creme">
            <span className="mb-4 inline-block font-mono text-[11px] tracking-wide text-creme/50">
              Cofo Labs · 01
            </span>
            <div className="mb-3.5 flex items-center gap-2.5">
              <div className="flex">
                <span className="h-4 w-4" style={{ background: "#2C5C86" }} />
                <span className="h-4 w-4" style={{ background: "#EDE3CC" }} />
                <span className="h-4 w-4" style={{ background: "#C89A3C" }} />
              </div>
              <h3 className="font-display text-lg font-semibold">Azulejar</h3>
            </div>
            <p className="max-w-[40ch] text-sm text-creme/65">
              Acervo digital dos azulejos do centro histórico de São Luís,
              cada peça fotografada, recortada e catalogada.
            </p>
            <a
              href="#"
              className="mt-4 inline-block border-b border-creme/35 pb-0.5 text-sm text-creme"
            >
              Ver o projeto →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capacidade({
  titulo,
  descricao,
  ultima,
}: {
  titulo: string;
  descricao: string;
  ultima?: boolean;
}) {
  return (
    <div className={`border-t border-grafite/10 py-4.5 ${ultima ? "border-b" : ""}`}>
      <h3 className="mb-1 text-base font-medium text-grafite">{titulo}</h3>
      <p className="text-[13.5px] text-grafite/55">{descricao}</p>
    </div>
  );
}
