export default function Hero() {
  return (
    <section className="bg-grafite py-24 text-creme">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-[6vw]">
        <div>
          <h1 className="max-w-[19ch] font-display text-4xl font-semibold leading-tight md:text-5xl">
            Um estúdio de design e desenvolvimento em São Luís.
          </h1>
          <p className="mt-6 max-w-[42ch] text-lg text-creme/60">
            Construímos produtos digitais para clientes e os nossos próprios,
            sob o selo Cofo Labs, com o mesmo cuidado que se põe em
            estruturar algo pra durar.
          </p>
          <div className="mt-8">
            <a
              href="#contato"
              className="inline-block rounded-sm bg-creme px-6 py-3 text-sm font-semibold text-grafite"
            >
              Falar sobre um projeto
            </a>
          </div>
        </div>

        <ProjetoPreview />
      </div>
    </section>
  );
}

function ProjetoPreview() {
  return (
    <div className="overflow-hidden rounded-lg border border-creme/10 bg-grafite-suave">
      <div className="flex items-center gap-1.5 border-b border-creme/10 px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-creme/20" />
        <span className="h-2 w-2 rounded-full bg-creme/20" />
        <span className="h-2 w-2 rounded-full bg-creme/20" />
      </div>
      <div className="flex aspect-[16/11] flex-col items-center justify-center gap-2.5 bg-[#17323F]">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 64 64" className="h-6 w-6">
            <rect width="64" height="64" rx="12" fill="#2C5C86" />
            <path d="M32 6 L58 32 L32 58 L6 32 Z" fill="#EDE3CC" />
            <path d="M32 18 L46 32 L32 46 L18 32 Z" fill="#1E4362" />
            <circle cx="32" cy="32" r="6" fill="#C89A3C" />
          </svg>
          <span className="font-display text-lg font-semibold text-[#F5EEDC]">
            Azulejar
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3.5">
        <div>
          <p className="text-sm font-medium text-creme">Azulejar</p>
          <p className="font-mono text-[10.5px] text-creme/40">
            by Cofo Labs
          </p>
        </div>
        <a
          href="#trabalho"
          className="border-b border-creme/35 pb-px text-xs text-creme"
        >
          Ver projeto →
        </a>
      </div>
    </div>
  );
}