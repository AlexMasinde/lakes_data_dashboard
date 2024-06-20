import { Data } from "./types";

export const sampleData: Data[] = [
  {
    topic: "Sample Topic 1",
    variablesOfInterest: "Variable A, Variable B",
    dataType: "Primary",
    yearCollected: "2023",
    description:
      "By implementing these changes, your table will be responsive, ensuring that each column occupies the same horizontal size and content.",
    selectedLakes: ["Lake Victoria", "Lake Tanganyika"],
  },
  {
    topic: "Sample Topic 2",
    variablesOfInterest: "Variable C, Variable D",
    dataType: "Secondary",
    yearCollected: "2022",
    description:
      "To make the table responsive where each column occupies the same horizontal size and content wraps to the next line when exceeded.",
    selectedLakes: ["Lake Malawi", "Lake Turkana"],
  },
  {
    topic: "Sample Topic 3",
    variablesOfInterest: "Variable E, Variable F",
    dataType: "Primary",
    yearCollected: "2021",
    description:
      "These adjustments should make your data table more visually appealing and functional within your React application using Chakra UI.",
    selectedLakes: ["Lake Albert", "Lake Kivu", "Lake Malawi", "Lake Turkana"],
  },
];
