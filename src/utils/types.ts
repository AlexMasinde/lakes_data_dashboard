export type UserObject = {
  name: string;
  email: string;
};

export interface Data {
  topic: string;
  variablesOfInterest: string;
  dataType: string;
  yearCollected: string;
  description: string;
  selectedLakes: string[];
}
