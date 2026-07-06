"use client";

import { createContext, useContext, useState } from "react";

type AppState = {
  mission: string;
  missionDone: boolean;
  completeMission: () => void;
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [missionDone, setMissionDone] = useState(false);

  return (
    <AppContext.Provider
      value={{
        mission: "拍摄《越南创业第一集》",
        missionDone,
        completeMission: () => setMissionDone(true),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp 必须在 AppProvider 内使用");
  }

  return context;
}