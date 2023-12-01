import { NextRequest } from "next/server";

const subjects = [
  "animals",
  "movies",
  "cities",
  "celebrities",
  "fashion",
  "places",
];

const getRandomElement = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

export async function GET(request: NextRequest) {
  const subject: string = getRandomElement(subjects);
  return Response.json({ subject });
}
