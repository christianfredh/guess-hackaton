import { NextRequest } from "next/server";

const styles = [
  "retro",
  "pop art",
  "90's",
  "pencil black and white sketch",
  "digital art",
  "graphic",
];

const sets = [
  {
    answer: "New York",
    clues: [
      "Building - Flatiron Building",
      "Famous Music Artist - Jay-Z",
      "Special Food - New York-style pizza",
      "City Silhouette - New York Skyline",
      "Famous Sport Person - Serena Williams",
      "Object - Broadway Playbill",
      "Typical Activity - Central Park bike ride",
      "Emotion - Awe",
      "Historical Event - Underground Railroad activity in the city",
      "Building - Grand Central Terminal",
      "Typical Activity - Times Square ball drop on New Year's Eve",
      "City Silhouette - Statue of Liberty",
      "Famous Sport Person - Derek Jeter",
      "Building - Empire State Building",
      "Historical Event - Stonewall Riots",
      "Object - Subway Map",
      "Emotion - Excitement",
      "Famous Music Artist - Alicia Keys",
      "Object - MetroCard",
      "Building - The High Line",
      "Historical Event - Signing of the Declaration of Independence",
      "Famous Music Artist - Billy Joel",
      "City Silhouette - Washington, D.C. Skyline",
      "Object - Hot Dog Cart",
    ],
  },
  {
    answer: "Amsterdam",
    clues: [
      "Tulip bouquet",
      "Windmills",
      "Canal houses",
      "Van Gogh's 'Starry Night'",
      "Stroopwafels",
      "Anne Frank House",
      "Rembrandt's 'The Night Watch'",
      "Bicycles",
      "Vincent van Gogh",
      "Cheese market",
      "Wooden clogs",
      "Ajax football club",
      "Rijksmuseum",
      "Dutch Masters paintings",
      "Coffee shops",
      "King's Day celebration",
      "Johan Cruyff",
      "Anne Frank",
      "Heineken Experience",
      "Anne Frank's diary",
      "Edam cheese",
      "Amsterdam Arena",
      "Grachten (Canals)",
      "Houseboats",
    ],
  },
  {
    answer: "Tokyo",
    clues: [
      "Sumo wrestler",
      "Cherry blossoms",
      "Ramen",
      "Mount Fuji",
      "Karaoke",
      "Harajuku fashion",
      "Hiroshima Peace Memorial",
      "Judo",
      "Tokyo Tower",
      "Kabuki theater",
      "Sushi",
      "Emperor's Palace",
      "Bullet train (Shinkansen)",
      "Hokusai's 'The Great Wave off Kanagawa'",
      "Anime characters",
      "Hachiko statue",
      "Akira Kurosawa films",
      "Meiji Shrine",
      "Pikachu",
      "Samurai armor",
      "Tsukiji Fish Market",
      "Shibuya Crossing",
      "Jazz music",
      "Baseball",
    ],
  },
];

const getRandomElement = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export async function GET(request: NextRequest) {
  const combination: number = getRandomElement([1, 2, 2, 2]);
  const set = sets[2];
  const answer = set.answer;
  const clues = set.clues;
  const clue: string = getRandomElement(clues);
  const clue2: string = getRandomElement(clues);
  const style: string = getRandomElement(styles);

  const prompt =
    combination === 1
      ? `${clue} in a ${style} style picture.`
      : `Combine those 2 elements in a ${style} style picture:
        1. ${clue}
        2. ${clue2}`;

  return Response.json({ prompt, answer });
}
