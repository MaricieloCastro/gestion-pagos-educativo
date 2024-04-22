import React from "react";

import { flexRender } from "@tanstack/react-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import Spinner from "@/components/Spinner";

const TablaListaAdmin = (props) => {
  const { table, loading } = props;

  return loading ? (
    <table className="lista-usuarios-admin w-full">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="w-full">
            {headerGroup.headers.map((header) => (
              <th
                className="text-center font-inter font-normal text-white-cabecera text-sm h-10 cursor-pointer"
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
              >
                {header.isPlaceholder ? null : (
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}

                    {
                      {
                        asc: <FontAwesomeIcon icon={faUpLong} />,
                        desc: <FontAwesomeIcon icon={faDownLong} />,
                      }[header.column.getIsSorted() ?? null]
                    }
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                className="max-w-lista-maxWidth text-white-linea py-3 text-justify px-2 font-inter font-light text-sm"
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="h-full flex flex-col justify-center items-center p-32">
      <Spinner />
    </div>
  );
};

export default TablaListaAdmin;
