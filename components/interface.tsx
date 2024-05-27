// interfaces.ts
export interface Item {
    id: number;
    name: string;
    description: string;
  }
  
  export interface ChildComponentProps {
    items: Item[];
  }
  