import React from "react";
import { useAsyncList } from "react-stately";
import Table from "src/display/Table/Table";

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

const dataColumns = [
  { id: "name", name: "Name" },
  { id: "height", name: "Height" },
  { id: "mass", name: "Mass" },
  { id: "birth_year", name: "Birth Year" },
];

const TableSortingForExample = () => {
  const list = useAsyncList<Character>({
    async load({ signal }) {
      const res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
        signal,
      });
      const json = await res.json();

      return {
        items: json.results,
      };
    },
    async sort({ items, sortDescriptor }) {
      const { column, direction } = sortDescriptor;

      if (column === undefined || direction === undefined) {
        return { items };
      }

      items.sort((a, b) => {
        const first = a[column as keyof Character];
        const second = b[column as keyof Character];

        // Ensure first and second are either numbers or strings
        const firstValue: number | string =
          typeof first === "string" ? parseInt(first) || first : first;
        const secondValue: number | string =
          typeof second === "string" ? parseInt(second) || second : second;

        let cmp = firstValue < secondValue ? -1 : 1;

        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }

        return cmp;
      });

      return { items };
    },
  });

  return (
    <Table
      tableTitle="Example table with client side sorting "
      dataColumns={dataColumns}
      dataRows={list.items}
      onSortChange={list.sort}
      sortDescriptor={list.sortDescriptor}
    />
  );
};

export default TableSortingForExample;
