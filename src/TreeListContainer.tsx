import React, { useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import {
  ITreeListContainerProps,
  ITreeNodeToParse
} from "../interfaces/TreeList";
import TreeList from "./TreeList";

const TreeListContainer = ({ treeData }: ITreeListContainerProps) => {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);

  // This is the assigned height of each item in the list.
  // IMPORTANT: This value is also used in _variables.scss
  // in the $tree-item-height variable, be careful when updating it
  const itemHeight = 24;

  // Initial treeData is parsed so that each node no matter
  // its depth level is parsed as an independent node into
  // the treeListItems preserving its parent position if
  // there is one so that each node is positioned after
  // it and before its parent next sibling node.
  const parseData = () => {
    const treeNodeList: any[] = [];
    for (const treeNode of treeData) {
      parseNode({ treeNode, depth: 1, itemsList: treeNodeList });
    }

    return treeNodeList;
  };

  // Each node is parsed with the required data and pushed inside the treeNodeList array.
  // It is important to note that this function has a recursive strategy implemented
  // whenever the current node is activated/opened and if it has children nodes.
  const parseNode = ({
    treeNode,
    depth,
    itemsList,
    parentNodes = [],
    isLastChild = false
  }: ITreeNodeToParse) => {
    const { id, meta, children } = treeNode;

    // Check if the node is collapsed, but if the node's depth equals 1,
    // we want to "invert" the node toggling behavior so that it should
    // be activated from the beginning
    const isNodecollapsed =
      depth === 1 ? activeNodes.includes(id) : !activeNodes.includes(id);

    const nodeHasChildren = children && children.length;

    itemsList.push({
      depth,
      hasChildren: nodeHasChildren,
      id,
      isCollapsed: isNodecollapsed,
      isLastChild,
      meta,
      parentNodes
    });

    // If the current node is activated/opened and if it has children nodes
    // to display, those are parsed and pushed into the treeNodeList array
    // just right after their parents are as well.
    if (!isNodecollapsed && children) {
      const lastChild = children.slice(-1).pop();

      for (const child of children) {
        // Check if curent child is the last node of its group.
        const isThisNodeLastChild = lastChild.id === child.id;

        // For the parentNodes value the data of each parent
        // every time this recursive function is called.
        parseNode({
          depth: depth + 1,
          isLastChild: isThisNodeLastChild,
          itemsList,
          parentNodes: [...parentNodes, { ...treeNode, depth, isLastChild }],
          treeNode: child
        });
      }
    }
  };

  const getParsedData = parseData();

  const getContainerStyle = () => {
    const containerHeight = getParsedData.length * itemHeight;
    if (containerHeight < 400) {
      return { height: containerHeight };
    }

    return null;
  };

  /* tslint:disable: jsx-no-multiline-js */
  return (
    <div className="tree-list__container" style={getContainerStyle()}>
      <AutoSizer className="tree-list">
        {({ height, width }) => (
          <TreeList
            parsedData={getParsedData}
            setActiveNodes={setActiveNodes}
            style={{ height, width, itemHeight }}
            activeNodes={activeNodes}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default TreeListContainer;
