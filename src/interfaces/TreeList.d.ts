export interface ITreeListContainerProps {
  treeData: any[];
}

export interface ITreeListProps {
  parsedData: any;
  setActiveNodes: React.Dispatch<React.SetStateAction<any[]>>;
  style: {
      height: number;
      width: number;
      itemHeight: number;
  };
  activeNodes: number[];
}

export interface ITreeNodeToParse {
  treeNode: any;
  depth: number;
  itemsList: any[];
  parentNodes?: any[];
  isLastChild?: boolean;
  isNodeActive?: boolean;
}

export interface ITreeItemProps {
  style: any;
  node: any;
  onClick: (node: any) => void;
  defaultPadding: number;
  isNodeFirstLevel: boolean;
  itemPadding: number;
  verticalGuideLinesleft: number;
}
