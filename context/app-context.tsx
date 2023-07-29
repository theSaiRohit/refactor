import { PropsWithChildren, RefObject, createContext, useRef } from "react";

interface ContextType {
  headerRef: RefObject<HTMLDivElement>;
}

const contextInit: ContextType = {
  headerRef: { current: null },
};

export const ContextObj = createContext<ContextType>(contextInit);

export default function AppContext({ children }: PropsWithChildren) {
  const headerRef = useRef<HTMLDivElement>(null);
  const value = {
    headerRef,
  };
  return <ContextObj.Provider value={value}>{children}</ContextObj.Provider>;
}
