import { useContext } from "react";
import {
  ContinentContext,
  ContinentContextType,
} from "../context/continentContext";

export const useContinentContext = () =>
  useContext(ContinentContext) as ContinentContextType;
