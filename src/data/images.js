// Stock photography (Pexels — free to use). Swap these paths later with
// real Komson Resorts photography; the naming below tells you what each
// slot is for.
const px = (id, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  heroPool: px(28408327),        // infinity pool at sunset
  aerialVilla: px(3155693),      // overwater villa, aerial
  loungeChairs: px(261181),      // lounge chairs at infinity pool
  cabana: px(30016219),          // beachside cabana
  poolBeach: px(3155666),        // infinity pool near beach
  poolPinkSky: px(6437583),      // infinity pool, sunset, pink sky
  sunbeds: px(24807132),         // sunbeds over pool at sunset
  roomInterior: px(34672504),    // luxury hotel room interior
  droneBeach: px(18245896),      // drone shot of beach
};
