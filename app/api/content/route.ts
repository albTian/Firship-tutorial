const posts = [
  {
    title: "The Thrilling Race in Monaco",
    slug: "the-thrilling-race-in-monaco",
    content:
      "Read about the heart-pounding moments and intense battles in the iconic Monaco Grand Prix circuit.",
  },
  {
    title: "The Rise of Young Talent in Formula 1",
    slug: "the-rise-of-young-talent-in-formula-1",
    content:
      "Discover the promising young drivers who are making their mark in the world of Formula 1 and reshaping the future of the sport.",
  },
  {
    title: "Legendary Rivalries in Formula 1 History",
    slug: "legendary-rivalries-in-formula-1-history",
    content:
      "Relive the legendary rivalries that defined eras in Formula 1, from Senna vs. Prost to Hamilton vs. Rosberg.",
  },
  {
    title: "The Evolution of Aerodynamics in Formula 1",
    slug: "the-evolution-of-aerodynamics-in-formula-1",
    content:
      "Explore how aerodynamics has played a crucial role in shaping the performance and design of Formula 1 cars throughout the years.",
  },
  {
    title: "Unforgettable Moments at the Silverstone Circuit",
    slug: "unforgettable-moments-at-the-silverstone-circuit",
    content:
      "Dive into the history of the Silverstone Circuit and relish the unforgettable moments that have unfolded on this iconic track.",
  },
];

import { NextResponse } from "next/server";

// These API endpoints run on the server, so we can put sensitive information here without worry.
// 

export async function GET() {
    return NextResponse.json(posts)
}
