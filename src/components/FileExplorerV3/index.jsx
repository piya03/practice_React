import React, { useState } from "react";
import jsonData from "./data.json";
import "./style.css";

// render list of object
function List({ list, addNodeToList, deleteNodeToList }) {
  // make a map to identify perticular object
  const [isExpanded, setIsExpanded] = useState({});
  console.log("🚀 ~ List ~ isExpanded:", isExpanded);

  return (
    <div className="container">
      {list?.map((each) => {
        return (
          <div key={each.id}>
            {each?.isFolder && (
              <span
                onClick={() => {
                  setIsExpanded((prev) => {
                    return {
                      ...prev,
                      [each.name]: !prev[each.name],
                    };
                  });
                }}
              >
                {isExpanded?.[each?.name] ? "- " : "+ "}
              </span>
            )}
            <span>{each?.name} </span>
            {each?.isFolder && (
              <>
                <span
                  onClick={() => {
                    addNodeToList(each.id);
                  }}
                >
                  <img
                    width="30"
                    height="30"
                    src="https://cdn5.vectorstock.com/i/1000x1000/35/14/add-attach-create-folder-make-new-plus-icon-vector-20183514.jpg"
                  />
                </span>
              </>
            )}

            <span onClick={() => deleteNodeToList(each.id)}>
              <img
                width="30"
                height="30"
                src="https://www.shutterstock.com/image-vector/delete-icon-trendy-logo-concept-260nw-1217476981.jpg"
              />
            </span>
            {isExpanded?.[each?.name] && each?.children && (
              <List
                list={each.children}
                addNodeToList={addNodeToList}
                deleteNodeToList={deleteNodeToList}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

const FileExplorerV3 = () => {
  const [data, setData] = useState(jsonData);
  console.log(data, "datadatadatadata");
  // I have to loop through and find the parentId
  // and when i find i will push to the children

  function addNodeToList(parentId) {
    const name = prompt("Enter  Name");

    function updateTree(list) {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: Date.now().toString(), name, isFolder: true, children: [] },
            ],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }

        return node;
      });
    }
    setData((prev) => updateTree(prev));
  }
  console.log("🚀 ~ FileExplorerV3 ~ data:", data);

  function deleteNodeToList(itemId) {
    function updateTree(list) {
      return list
        .filter((node) => node.id !== itemId)
        ?.map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    }
    setData((prev) => updateTree(prev));
  }
  return (
    <div>
      <div>FileExplorerV3</div>
      <List
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeToList={deleteNodeToList}
      />
    </div>
  );
};

export default FileExplorerV3;
