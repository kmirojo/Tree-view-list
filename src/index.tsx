import { render } from "react-dom";
import TreeListContainer from "./components/TreeListContainer";
import treeData from "./treeNodeSample.js";
import "./styles/styles.scss";

const rootElement = document.getElementById("root");
render(<TreeListContainer treeData={treeData} />, rootElement);
