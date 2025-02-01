"use client";

import { useState } from "react";

type FilterComponentProps = {
  filterData: {
    name: string;
    options?: string[];
  }[];

  filterBy: "character" | "location" | "episode";
};

interface FilterOption {
  label: string;
  value: string;
}

interface FilterCategory {
  name: string;
  options: FilterOption[];
}

function FilterComponent({ filterData, filterBy }: FilterComponentProps) {
  const [selectedFilters, setSelectedFilters] = useState(
    filterData.reduce(
      (acc, filter) => {
        acc[filter.name] = []; // Start with an empty array for each filter
        return acc;
      },
      {} as Record<string, string[]>,
    ),
  );

  return (
    <div className="h-full bg-black/70 py-4 pl-4">
      <p className="mb-4 text-2xl">
        Filter By :{" "}
        <span className="text-xl capitalize text-yellow-500">{filterBy}</span>
      </p>
      <ul className="mt-2 flex flex-col gap-4 pl-4">
        {filterData.map((property, index) => (
          <li key={index}>
            <label className="flex cursor-pointer select-none items-center gap-2 capitalize">
              <input type="checkbox" className="size-4" />
              {property.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function FilterComponent({ filterData, filterBy }: FilterComponentProps) {
//   const [formData, setFormData] = useState();

//   return (
//     <div className="h-full bg-black/70 py-4 pl-4">
//       <p className="mb-4 text-2xl">
//         Filter By :{" "}
//         <span className="text-xl capitalize text-yellow-500">{filterBy}</span>
//       </p>
//       <ul className="mt-2 flex flex-col gap-4 pl-4">
//         {filterData.map((property, index) => (
//           <li key={index}>
//             <label className="flex cursor-pointer select-none items-center gap-2 capitalize">
//               <input type="checkbox" className="size-4" />
//               {property.name}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default FilterComponent;
