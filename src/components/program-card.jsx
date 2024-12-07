const ProgramCard = ({ program }) => (
  <div className="flex items-center justify-between">
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-xl font-bold font-serif p-4 hover:bg-slate-50">
        {program.name}
      </h3>
      <p>{program.description}</p>
      <span className="text-sm text-gray-500 mb-8">{program.schedule}</span>
      <div>
        <img
          src={program.image}
          alt={program.name}
          className="size-full flex items-center justify-center "
        />
      </div>
    </div>
  </div>
);

export default ProgramCard;
