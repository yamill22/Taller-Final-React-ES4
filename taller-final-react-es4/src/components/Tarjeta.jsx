export default function Tarjeta({ elemento }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="bg-slate-50 rounded-xl p-4 mb-4 group-hover:bg-red-50 transition-colors duration-300">
        <img 
          src={elemento.imagen} 
          alt={elemento.name} 
          className="w-28 h-28 object-contain mx-auto drop-shadow-md group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <h3 className="capitalize font-bold text-lg text-slate-800 tracking-wide">
        {elemento.name}
      </h3>
      
      <p className="text-xs text-slate-400 mt-1 font-mono">
        #{elemento.id.padStart(3, '0')}
      </p>
    </div>
  );
}