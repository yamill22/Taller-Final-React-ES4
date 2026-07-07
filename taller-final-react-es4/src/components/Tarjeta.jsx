export default function Tarjeta({
  elemento,
  esFavorito,
  alAlternarFavorito,
  alBloquear,
}) {
  return (
    <div className="bg-white border-2 border-[#bcecd4] rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:border-[#107b80] transition-all duration-200 transform hover:-translate-y-0.5 flex flex-col items-center relative overflow-visible group/tarjeta">

      <button
        onClick={() => alAlternarFavorito(elemento)}
        className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer z-30
        ${
          esFavorito
            ? "bg-amber-50 border-amber-200 shadow-sm scale-105"
            : "bg-white border-slate-100 hover:border-slate-300"
        }`}
      >
        {esFavorito ? "⭐" : "☆"}
      </button>

      <div className="w-full aspect-square bg-[#f2fbf7] rounded-xl flex items-center justify-center p-2 mb-3">
        <img
          src={elemento.imagen}
          alt={elemento.name}
          className="w-24 h-24 object-contain mix-blend-multiply"
        />
      </div>

      <p className="text-xs text-[#8ab6a3] font-bold tracking-wide">
        #{elemento.id.padStart(3, "0")}
      </p>

      <h3 className="capitalize font-bold text-base text-[#52635a] mt-1">
        {elemento.name}
      </h3>

      <button
        onClick={() => alBloquear(elemento)}
        className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold transition"
      >
        🚫 Bloquear
      </button>
    </div>
  );
}