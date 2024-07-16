import React from "react";
import { useDragAndDrop } from "react-aria-components";
import { useListData } from "react-stately";
import Button from "src/action/Button/Button";
import Table from "src/display/Table/Table";

const dataColumns = [
  { id: "name", name: "Name", isVisible: true },
  { id: "type", name: "Type", isVisible: true },
  { id: "date", name: "Date Modified", isVisible: true },
  { id: "action", name: "Action", isVisible: true },
];

const dataRows = [
  {
    id: 1,
    name: "Games",
    date: "6/7/2020",
    type: "File folder",
    action: <Button>bonjour</Button>,
  },
  {
    id: 2,
    name: "Program Files",
    date: "4/7/2021",
    type: "File folder",
    action: <Button>bonjour</Button>,
  },
  {
    id: 3,
    name: "bootmgr",
    date: "11/20/2010",
    type: "System file",
    action: <Button>bonjour</Button>,
  },
  {
    id: 4,
    name: "log.txt",
    date: "1/18/2016",
    type: "Text Document",
    action: <Button>bonjour</Button>,
  },
];

const TableDragForExample = () => {
  const list = useListData({
    initialItems: dataRows,
  });
  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      [...keys].map((key) => ({
        "text/plain": list.getItem(key).name,
      })),
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys);
      }
    },
  });

  return (
    <Table
      tableTitle="Drag and drop"
      dataColumns={dataColumns}
      dataRows={list.items}
      dragAndDropHooks={dragAndDropHooks}
    />
  );
};

export default TableDragForExample;
