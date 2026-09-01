export default function Nav() {
  return (
    <nav className="border-b border-grafite/10 bg-creme">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-[6vw]">
        <span className="font-display text-xl font-bold text-grafite">cofo</span>
        <div className="hidden gap-8 text-sm sm:flex">
          <a href="#trabalho" className="border-b border-transparent pb-0.5 opacity-65 hover:border-grafite hover:opacity-100">
            Trabalho
          </a>
          <a href="#origem" className="border-b border-transparent pb-0.5 opacity-65 hover:border-grafite hover:opacity-100">
            Origem
          </a>
          <a href="#contato" className="border-b border-transparent pb-0.5 opacity-65 hover:border-grafite hover:opacity-100">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}
