import { useContext } from "react";
import tokenContext from "../contexts/tokenContext";

export default function useToken() {
  return useContext(tokenContext);
}