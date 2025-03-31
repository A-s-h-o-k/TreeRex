import { memo, useState } from "react";
import "./styles.css";

const filterData = [
  {
    title: "Colour",
    options: [
      { label: "Red", value: "red" },
      { label: "Blue", value: "blue" },
      { label: "Green", value: "green" },
    ],
  },
  {
    title: "Gender",
    options: [
      { label: "Men", value: "men" },
      { label: "Women", value: "women" },
    ],
  },
  {
    title: "Price",
    options: [
      { label: "0-Rs250", min:0, max:249},
      { label: "Rs250-450", min:250, max:449 },
      { label: "Rs450", min: 450, max: 999999999 },
    ],
  },
  {
    title: "Type",
    options: [
      { label: "Polo", value: "polo" },
      { label: "Hoodie", value: "hoodie" },
      { label: "Basic", value: "basic" },
    ],
  },
];

const Filters = memo(() => {
    const [selectedData, setSelectedData] = useState<Map<string, Set<string>>>(new Map<string, Set<string>>())
  return (
    <div className="filter-main-container">
      {filterData.map((each) => {
        const items = selectedData.get(each.title) || new Set<string>();
        
        return (
          <div>
            <h3>{each?.title}</h3>
            <ul>
              {each.options.map((option) => {
                return (
                  <li>
                    <input type="checkbox"  />
                    <label>{option.label}</label>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
});

export default Filters;
