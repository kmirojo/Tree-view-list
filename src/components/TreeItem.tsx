import { CaretDownSUI } from "@hig/icons";
import React from "react";
import { ITreeItemProps } from "../interfaces/TreeList";

const TreeItem = ({
  style,
  node,
  onClick,
  defaultPadding,
  itemPadding,
  verticalGuideLinesleft
}: ITreeItemProps) => {
  // Check if the current node is of first level
  // by checking if it has a parent node id
  const isNodeFirstLevel = node.depth === 1;

  const handleItemClassName = () => {
    const classList = [];

    if (isNodeFirstLevel) {
      classList.push("tree-item__parent-node");
    }

    if (node.hasChildren) {
      classList.push("tree-item--expandable");
    }

    return classList.join().replace(",", " ");
  };

  const getGuideLines = () => {
    // First level nodes won't have guide lines
    if (!isNodeFirstLevel) {
      // This array will contain all of the guidelines
      // generated for the current item.
      const guideLines: JSX.Element[] = [];

      const horizontalGuideLineStyles = {
        left: `-${defaultPadding}px`
      };

      // Each Item shall have one horizontal guide
      guideLines.push(
        <div
          key={`${node.id}-tree-item__guide-x-key`}
          className="tree-item__guide-x"
          style={horizontalGuideLineStyles}
        />
      );

      const verticalGuideLines: JSX.Element[] = [];

      const verticalGuideLineStyles = {
        height: style.height
      };

      node.parentNodes.forEach((parentNode: any, index: number) => {
        // For each parent node of the current node, there's a validation to check
        // if that parent node is the last child of its group and its depth.
        if (parentNode && !parentNode.isLastChild && parentNode.depth !== 1) {
          const guideLineStyle = {
            ...verticalGuideLineStyles,
            right: defaultPadding * (node.depth - parentNode.depth)
          };

          verticalGuideLines.push(
            <div
              key={`${node.id}-tree-item__guide-y-key-${index}`}
              className="tree-item__guide-y"
              style={guideLineStyle}
            />
          );
        }
      });

      // Each Item shall have one vertical guide besides
      // the ones from its parents' validation.
      verticalGuideLines.push(
        <div
          key={`${node.id}-tree-item__guide-y-key`}
          className="tree-item__guide-y"
          style={{ ...verticalGuideLineStyles, right: 0 }}
        />
      );

      const verticalGuideLineStyle = {
        left: `-${verticalGuideLinesleft}px`,
        width: verticalGuideLinesleft - defaultPadding
      };

      guideLines.push(
        <div
          key={`${node.id}-tree-item__y-guides-key`}
          className="tree-item__y-guides"
          style={verticalGuideLineStyle}
        >
          {verticalGuideLines}
        </div>
      );

      return guideLines;
    }
  };

  const getItemContent = () => {
    const treeItemClassName = node.isCollapsed
      ? " tree-item-closed"
      : " tree-item-open";

    if (node.hasChildren) {
      return (
        <div className={`tree-item${treeItemClassName}`}>
          <CaretDownSUI />
          <span>{node.meta.label}</span>
          {getGuideLines()}
        </div>
      );
    }

    return (
      <div className="tree-item">
        <span>{node.meta.label}</span>
        {getGuideLines()}
      </div>
    );
  };

  const handleClick = () => {
    if (node.hasChildren) {
      onClick(node);
    }
  };

  const treeItemContainerStyle = () => {
    const treeItemStyleRules = {
      ...style,
      paddingLeft: `${itemPadding}px`,
      width: `calc(100% - ${itemPadding}px)`
    };

    return treeItemStyleRules;
  };

  return (
    <div
      className={`tree-item-container ${handleItemClassName()}`}
      style={treeItemContainerStyle()}
      onClick={handleClick}
    >
      {getItemContent()}
    </div>
  );
};

export default TreeItem;
