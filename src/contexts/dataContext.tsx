import { sampleData } from "@/utils/sampleData";
import { Data } from "@/utils/types";
import React, { createContext, useContext, useReducer } from "react";

type DataContextAction =
  | { type: "SET_DATA"; payload: Data[] }
  | { type: "ADD_DATA"; payload: Data }
  | { type: "SET_LINKS"; payload: any[] }
  | { type: "TOGGLE_MODAL" }
  | { type: "TOGGLE_ADD_IMAGE_MODAL" };

type DataContextType = {
  data: Data[];
  imageLinks: any[];
  showAddDataModal: boolean;
  showAddImageModal: boolean;
  dispatch: React.Dispatch<DataContextAction>;
};

const initialState: DataContextType = {
  data: sampleData,
  imageLinks: [],
  showAddDataModal: false,
  showAddImageModal: false,
  dispatch: () => {},
};

const DataContext = createContext<DataContextType>(initialState);

export function useDataContext() {
  return useContext(DataContext);
}

function dataContextReducer(
  state: DataContextType,
  action: DataContextAction
): DataContextType {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_DATA":
      return { ...state, data: [...state.data, action.payload] };
    case "TOGGLE_MODAL":
      return { ...state, showAddDataModal: !state.showAddDataModal };
    case "TOGGLE_ADD_IMAGE_MODAL":
      return { ...state, showAddDataModal: !state.showAddImageModal };
    default:
      return state;
  }
}

export default function DataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(dataContextReducer, initialState);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
