const ProgramCard = ({ program }) => (
  <div className="border p-4 rounded shadow-md">
    <h3 className="text-xl font-bold">{program.name}</h3>
    <p>{program.description}</p>
    <span className="text-sm text-gray-500">{program.schedule}</span>
    <div><img 
      src={program.image} 
      alt={program.name} 
      className="container	max-width: 640px h-full object-cover rounded mb-4"/>
      </div>
  </div>
);

export default ProgramCard;
