export default function Buscador({ busqueda, setBusqueda }) {
  return (
    <section className="max-w-xl mx-auto mb-10">
      <div className="bg-[#107b80] rounded-xl p-2 shadow-md flex items-center justify-between gap-4 px-4">
        
        <span className="text-white/80 text-sm font-bold tracking-wide flex items-center gap-1.5 select-none">
          🔍 Buscar
        </span>

        <input
          type="text"
          placeholder="Escribe el nombre de un Pokémon..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 bg-white/10 text-white placeholder-white/40 px-4 py-1.5 rounded-lg focus:outline-none focus:bg-white/20 text-sm transition-all duration-200 border border-transparent focus:border-white/20 font-medium"
        />

        {busqueda ? (
          <button 
            onClick={() => setBusqueda('')}
            className="text-white/80 hover:text-white font-bold text-xs bg-black/10 hover:bg-black/20 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        ) : (
          <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center text-white/50 text-[10px] select-none font-bold">
            ▼
          </div>
        )}
      </div>
    </section>
  );
}