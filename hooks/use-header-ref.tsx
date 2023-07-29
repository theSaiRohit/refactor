import { useContext } from "react";
import { ContextObj } from "../context/app-context";

export default function useHeaderRef() {
  const context = useContext(ContextObj);
  return context.headerRef;
}
