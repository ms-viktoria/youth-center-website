import ProgramCard from "../components/program-card";
import Yoga from "../data/images/Yoga.jpg";
import Football from "../data/images/Football.jpg";
import Psychological from '../data/images/Psychological.jpg'
import Coffee from '../data/images/Coffee.jpg'
import Power from '../data/images/Power.webp'
import Art from '../data/images/Art.jpg'
import Speaking from '../data/images/Speaking.png'
import Ping_pong from '../data/images/Ping_pong.jpg'
import Board_game from '../data/images/Board_game.webp'
import Cash from '../data/images/Cash.png'

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
    image: Psychological,
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
    image: Coffee,
  },
  {
    name: "Power fitness",
    description: "Helping to build stronger, healthier bodies & minds.",
    schedule: "Every Wednesday",
    image: Power
  },
  {
    name: "Art classes",
    description: "Learn painting and drawing.",
    schedule: "Every Thursday",
    image: Art
  },
  {
    name: "Speaking club",
    description: "Learn English with us.",
    schedule: "Every Thursday",
    image: Speaking,
  },
  {
    name: "Ping-pong",
    description: "Support the cardiovascular system and improve reflexes.",
    schedule: "Every Friday",
    image: Ping_pong
  },
  {
    name: "Board game",
    description: "Top 5 - chess, checkers, backgammon, Monopoly, and Scrabble.",
    schedule: "Every Friday",
    image: Board_game
  },
  {
    name: "Cash Flow",
    description: "Support the cardiovascular system and improve reflexes.",
    schedule: "Every Saturday",
    image: Cash 
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
