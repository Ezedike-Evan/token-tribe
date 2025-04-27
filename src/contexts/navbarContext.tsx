"use client"; // if you're using Next.js App Router

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of our context
type TabContextType = {
  activeTab: string
  setActiveTab: (tab: 'token' | 'whales') => void
};

const TabContext = createContext<TabContextType | undefined>(undefined);


export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<'token' | 'whales'>('token')

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
}