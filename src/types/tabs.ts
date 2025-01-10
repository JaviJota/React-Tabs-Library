export interface Tab {
  id: string;
  label: string;
}

export interface TabContent {
  [key: string]: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  tabContent: TabContent;
  bgColor?: string;
  textColor?: string;
}

export interface OutlineTabsProps {
  tabs: Tab[];
  tabContent: TabContent;
  borderColor?: string;
  textColor?: string;
}
