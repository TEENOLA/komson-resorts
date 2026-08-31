import { images } from "./images";

export const packages = [
  {
    slug: "weekend-reset",
    name: "Weekend Reset",
    tag: "Best Value",
    nights: "2 Nights",
    price: "180,000",
    priceNote: "from, per stay",
    blurb:
      "A short, uncomplicated reset — breakfast handled, one spa slot booked, and a late checkout so the last morning isn't rushed.",
    inclusions: [
      "Breakfast daily",
      "One spa treatment per guest",
      "Welcome drink on arrival",
      "2pm late checkout",
    ],
    image: images.cabana,
  },
  {
    slug: "honeymoon-escape",
    name: "Honeymoon Escape",
    tag: "Most Booked",
    nights: "3 Nights",
    price: "340,000",
    priceNote: "from, per couple",
    blurb:
      "Built for the first trip as a married couple — a private beach dinner, a couples' massage, and a room upgrade when we have one to give.",
    inclusions: [
      "Room upgrade on availability",
      "Private dinner set up on the beach",
      "One couples' massage",
      "Champagne on arrival",
      "Late checkout",
    ],
    image: images.poolPinkSky,
  },
  {
    slug: "family-getaway",
    name: "Family Getaway",
    nights: "3 Nights",
    price: "360,000",
    priceNote: "from, per family",
    blurb:
      "For families who want everyone occupied at once — kids in the water, parents on the loungers, and one dinner nobody has to cook.",
    inclusions: [
      "Kids under 12 eat free",
      "Kayak & beach-toy session for children",
      "One included family dinner",
      "Welcome fruit basket at check-in",
    ],
    image: images.poolBeach,
  },
  {
    slug: "spa-wellness-retreat",
    name: "Spa & Wellness Retreat",
    nights: "2 Nights",
    price: "270,000",
    priceNote: "from, per person",
    blurb:
      "A slower two days — sunrise yoga, a treatment each morning, and menus built around the same wellness focus as the spa itself.",
    inclusions: [
      "One spa treatment per day",
      "Sunrise yoga on the deck",
      "Wellness-focused breakfast & dinner",
      "Full-day treatment cabana access",
    ],
    image: images.sunbeds,
  },
  {
    slug: "corporate-retreat",
    name: "Corporate Retreat",
    nights: "2 Nights",
    price: "150,000",
    priceNote: "from, per person · min. 10 guests",
    blurb:
      "Offsites that don't feel like a conference room. The event lawn or a meeting space, working meals, and one team activity on the sand.",
    inclusions: [
      "Use of event lawn or meeting space",
      "Working lunch & coffee breaks, both days",
      "One team beach activity",
      "Dedicated on-site coordinator",
    ],
    image: images.droneBeach,
  },
];
