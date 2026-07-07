export default function PanelBloqueados({
  bloqueados,
  alDesbloquear,
}) {
  return (
    <aside className="bg-white border-2 border-red-200 rounded-2xl p-4 shadow-sm">
      <h2 className="text-md font-bold text-red-600 tracking-wide border-b-2 border-red-100 pb-2 flex items-center justify-between">
        <span>🚫 Bloqueados</span>

        <span className="bg-red-100 text-red-600 text-xs px-2.5 py-0.5 rounded-full font-bold">
          {bloqueados.length}
        </span>
      </h2>

      {bloqueados.length === 0 ? (
        <p className="text-xs text-slate-400 text-center py-8 font-medium italic">
          No hay Pokémon bloqueados.
        </p>
      ) : (
        <ul className="mt-3 divide-y divide-slate-100 max-h-[400px] overflow-y-auto pr-1">
          {bloqueados.map((pokemon) => (
            <li
              key={pokemon.id}
              className="flex items-center justify-between py-2.5 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg p-1 border border-red-100">
                  <img
                    src={pokemon.imagen}
                    alt={pokemon.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                <span className="capitalize text-sm font-semibold text-slate-600">
                  {pokemon.name}
                </span>
              </div>

              <button
                onClick={() => alDesbloquear(pokemon)}
                className="bg-green-500 hover:bg-green-600 text-white text-xs px-2 py-1 rounded-lg transition-colors"
              >
                Desbloquear
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}