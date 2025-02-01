// export const characterFilterData = [
//   {
//     name: "status",
//     options: ["Alive", "Dead", "Unknown"],
//     value: null,
//   },
//   {
//     name: "speices",
//     options: ["Human", "Alien"],
//     value: null,
//   },
//   {
//     name: "gender",
//     options: ["Female", "Male", "Genderless", "Unknown"],
//     value: null,
//   },
// ];

// export const locationFilterData = [
//   {
//     name: "type",
//     options: ["Plant", "Space Station", "unknown"],
//     value: null,
//   },
//   {
//     name: "dimension",
//     options: ["Dimension C-137", "unknown"],
//     value: null,
//   },
// ];

// export const episodeFilterData = [
//   {
//     name: "type",
//     options: ["Plant", "Space Station", "unknown"],
//     value: null,
//   },
//   {
//     name: "dimension",
//     options: ["Dimension C-137", "unknown"],
//     value: null,
//   },
// ];

export const filterData = {
  characters: [
    { name: "status", options: ["Alive", "Dead", "Unknown"], value: "" },
    { name: "species", options: ["Human", "Alien"], value: "" },
    {
      name: "gender",
      options: ["Female", "Male", "Genderless", "Unknown"],
      value: "",
    },
  ],
  locations: [
    { name: "type", options: ["Plant", "Space Station", "Unknown"], value: "" },
    { name: "dimension", options: ["Dimension C-137", "Unknown"], value: "" },
  ],
  episodes: [
    { name: "type", options: ["Plant", "Space Station", "Unknown"], value: "" },
    { name: "dimension", options: ["Dimension C-137", "Unknown"], value: "" },
  ],
};
