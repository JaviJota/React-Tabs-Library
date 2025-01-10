import { useState } from "react";
import { motion } from "framer-motion";
import { TabsProps } from "../types/tabs";

const TopCircleTabs: React.FC<TabsProps> = ({
  tabs,
  tabContent,
  bgColor,
  textColor,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex flex-wrap space-x-1 mt-11 justify-center">
        {tabs?.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:opacity-50"
            } relative rounded-full p-3 text-sm font-medium ${
              textColor || "text-white"
            }
          outline-sky-400 focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className={`absolute mx-auto h-2 w-2 inset-0 z-10 ${
                  bgColor || "bg-white"
                } mix-blend-difference`}
                style={{
                  borderRadius: 9999,
                }}
                transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-center mt-10 text-5xl font-medium">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default TopCircleTabs;