export default function PanelFavoritos({ favoritos, alAlternarFavorito }) {
  return (
    <aside className="bg-white border-2 border-[#bcecd4] rounded-2xl p-4 shadow-sm lg:sticky lg:top-6">
      <h2 className="text-md font-bold text-[#0f6c70] tracking-wide border-b-2 border-[#e6f7ef] pb-2 flex items-center justify-between">
        <span>⭐ Mis Favoritos</span>
        <span className="bg-[#e6f7ef] text-[#107b80] text-xs px-2.5 py-0.5 rounded-full font-bold">
          {favoritos.length}
        </span>
      </h2>

      {favoritos.length === 0 ? (
        <p className="text-xs text-slate-400 text-center py-8 font-medium italic">
          No has marcado ningún Pokémon todavía. ¡Haz clic en las estrellas!
        </p>
      ) : (
        <ul className="mt-3 divide-y divide-slate-100 max-h-[400px] overflow-y-auto pr-1">
          {favoritos.map((fav) => (
            <li key={fav.id} className="flex items-center justify-between py-2.5 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f2fbf7] rounded-lg p-1 border border-slate-100">
                  <img src={fav.imagen} alt={fav.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <span className="capitalize text-sm font-semibold text-slate-600">
                  {fav.name}
                </span>
              </div>
              <button
                onClick={() => alAlternarFavorito(fav)}
                className="text-slate-300 hover:text-red-500 font-bold text-xs p-1 transition-colors cursor-pointer"
                title="Quitar"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}