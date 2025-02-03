interface FilterOption {
  name: string;
  options: string[];
  value: string;
}

interface FilterCategory {
  [key: string]: FilterOption[];
}

export const filterData: FilterCategory = {
  character: [
    { name: "status", options: ["Alive", "Dead", "Unknown"], value: "" },
    { name: "species", options: ["Human", "Alien"], value: "" },
    {
      name: "gender",
      options: ["Female", "Male", "Genderless", "Unknown"],
      value: "",
    },
  ],
  location: [
    { name: "type", options: ["Plant", "Space Station", "Unknown"], value: "" },
    { name: "dimension", options: ["Dimension C-137", "Unknown"], value: "" },
  ],
  episode: [
    { name: "type", options: ["Plant", "Space Station", "Unknown"], value: "" },
    { name: "dimension", options: ["Dimension C-137", "Unknown"], value: "" },
  ],
};
