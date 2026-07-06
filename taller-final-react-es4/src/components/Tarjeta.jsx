export default function Tarjeta({ elemento, esFavorito, alAlternarFavorito }) {
  return (
    <div className="bg-white border-2 border-[#bcecd4] rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:border-[#107b80] transition-all duration-200 transform hover:-translate-y-0.5 flex flex-col items-center relative overflow-visible group/tarjeta">
      
      <button
        onClick={() => alAlternarFavorito(elemento)}
        className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer z-30 select-none focus:outline-none active:scale-90
          ${esFavorito 
            ? 'bg-amber-50 border-amber-200 shadow-sm scale-105' 
            : 'bg-white/80 backdrop-blur-sm border-slate-100 hover:border-slate-200 hover:bg-slate-50 shadow-xs'
          }`}
        title={esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        {esFavorito ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" className="w-5 h-5">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#a0aec0" className="w-5 h-5 transition-transform duration-200 group-hover/tarjeta:scale-110 group-hover/tarjeta:stroke-[#107b80]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.172-.415.744-.415.916 0l2.115 5.087.054.131 1.4.113 5.463.44c.453.036.634.595.286.892l-4.138 3.543-.105.09.034.137 1.139 4.774c.094.396-.334.708-.68.498l-4.717-2.56-.123-.067-.123.067-4.717 2.56c-.346.21-.774-.102-.68-.498l1.139-4.774.034-.137-.105-.09-4.138-3.543c-.348-.297-.167-.856.286-.892l5.463-.44 1.4-.113.054-.131 2.114-5.087Z" />
          </svg>
        )}
      </button>

      <div className="w-full aspect-square bg-[#f2fbf7] rounded-xl flex items-center justify-center p-2 mb-3">
        <img 
          src={elemento.imagen} 
          alt={elemento.name} 
          className="w-24 h-24 object-contain mix-blend-multiply"
        />
      </div>
      
      <p className="text-xs text-[#8ab6a3] font-bold tracking-wide">
        #{elemento.id.padStart(3, '0')}
      </p>

      <h3 className="capitalize font-bold text-base text-[#52635a] mt-1">
        {elemento.name}
      </h3>
      
    </div>
  );
}