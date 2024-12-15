export type Participant = {
  id: number;
  name: string;
}

export type Event = {
  id: number;
  title: string;
  description: string;
  time: string;
  image: string;
  participants: Participant[];
};