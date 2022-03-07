import React from "react";
import { FixedSizeList as List } from "react-window";
import { ITreeListProps } from "../interfaces/TreeList";
import TreeItem from "./TreeItem";

const TreeList = ({
  parsedData,
  setActiveNodes,
  style,
  activeNodes
}: ITreeListProps) => {
  const toggleNodes = (node: any) => {
    // If the current node is collapsed at the moment the user clicks on it,
    // that means that is about to be opened/activated and therefore its id
    // is pushed into the setActiveNodes state array
    if (node.depth !== 1) {
      node.isCollapsed
        ? setActiveNodes([...activeNodes, node.id])
        : setActiveNodes(activeNodes.filter((id) => id !== node.id));
    } else {
      // If the node's depth is 1, we want to "invert"
      // the node toggling behavior so that it should
      // be activated from the beginning
      node.isCollapsed
        ? setActiveNodes(activeNodes.filter((id) => id !== node.id))
        : setActiveNodes([...activeNodes, node.id]);
    }
  };

  const treeItem = ({ index, style: itemStyle }: any) => {
    const node = parsedData[index];

    // Initial padding
    const defaultPaddingLeft = 27;

    // Check if the current node is of first level
    // by checking if it has a parent node id
    const isNodeFirstLevel = node.depth === 1;

    // Padding between elements
    const treeItemPadding = isNodeFirstLevel
      ? defaultPaddingLeft
      : defaultPaddingLeft * node.depth;

    const verticalGuideLinesleft = isNodeFirstLevel
      ? defaultPaddingLeft
      : treeItemPadding - defaultPaddingLeft;

    return (
      <TreeItem
        key={index}
        style={itemStyle}
        node={node}
        onClick={toggleNodes}
        defaultPadding={defaultPaddingLeft}
        isNodeFirstLevel={isNodeFirstLevel}
        itemPadding={treeItemPadding}
        verticalGuideLinesleft={verticalGuideLinesleft}
      />
    );
  };

  return (
    <List
      className="List tree-list__list-wrapper"
      height={style.height}
      itemCount={parsedData.length}
      itemSize={style.itemHeight}
      width={style.width}
    >
      {treeItem}
    </List>
  );
};

export default TreeList;
