export default function Nav() {
  return (
    <nav className="border-b border-terracota/12 bg-creme">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-[6vw]">
        <span className="font-display text-xl font-bold text-terracota">cofo</span>
        <div className="hidden gap-8 text-sm sm:flex">
          <a href="#trabalho" className="border-b border-transparent pb-0.5 text-terracota-escuro opacity-65 hover:border-terracota hover:opacity-100">
            Trabalho
          </a>
          <a href="#origem" className="border-b border-transparent pb-0.5 text-terracota-escuro opacity-65 hover:border-terracota hover:opacity-100">
            Origem
          </a>
          <a href="#contato" className="border-b border-transparent pb-0.5 text-terracota-escuro opacity-65 hover:border-terracota hover:opacity-100">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}