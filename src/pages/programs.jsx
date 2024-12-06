import ProgramCard from "../components/program-card";
import Yoga from "../data/images/Yoga.jpg";
import Football from "../data/images/Football.jpg";

const programs = [
  {
    name: "Yoga",
    description: "Flexibility and relax.",
    schedule: "Every Monday",
    image: Yoga,
  },
  {
    name: "Psychological group",
    description: "Lifestyle topics.",
    schedule: "Every Monday",
  },
  {
    name: "Football",
    description: "Outside game for children.",
    schedule: "Every Tuesday",
    image: Football,
  },
  {
    name: "Coffee with psychologist ",
    description: "Group conversation.",
    schedule: "Every Wednesday",
  },
  {
    name: "Power fitness",
    description: "Helping to build stronger, healthier bodies & minds.",
    schedule: "Every Wednesday",
  },
  {
    name: "Art classes",
    description: "Learn painting and drawing.",
    schedule: "Every Thursday",
  },
  {
    name: "Speaking club",
    description: "Learn English with us.",
    schedule: "Every Thursday",
  },
  {
    name: "Ping-pong",
    description: "Support the cardiovascular system and improve reflexes.",
    schedule: "Every Friday",
  },
  {
    name: "Board game",
    description: "Top 5 - chess, checkers, backgammon, Monopoly, and Scrabble.",
    schedule: "Every Friday",
  },
  {
    name: "Cash Flow",
    description: "Support the cardiovascular system and improve reflexes.",
    schedule: "Every Saturday",
  },
];

const Programs = () => (
  <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">Programs</h1>
    <div className="grid gap-4">
      {programs.map((program, index) => (
        <ProgramCard key={index} program={program} />
      ))}
    </div>
  </div>
);

export default Programs;
