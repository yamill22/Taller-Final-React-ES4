export default function Tarjeta({ elemento }) {
  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <img 
        src={elemento.imagen} 
        alt={elemento.name} 
        style={{ width: '120px', height: '120px', objectFit: 'contain', margin: '0 auto' }} 
      />
      <h3 style={{ 
        textTransform: 'capitalize', 
        marginTop: '12px', 
        color: '#1e293b',
        fontFamily: 'sans-serif'
      }}>
        {elemento.name}
      </h3>
    </div>
  );
}