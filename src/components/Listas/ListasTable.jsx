import React from "react";

import { flexRender } from "@tanstack/react-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpLong,
  faDownLong,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "@/components/Spinner";
import IndeterminateCheckbox from "./IndeterminateCheckbox";

const ListasTable = (props) => {
  const {
    numItemsForPage,
    totalItems,
    table,
    loading,
    classNameTable,
    rowSelection,
    multiDelete,
    buttonTittle1,
    buttonTittle2,
    buttonFunction,
  } = props;

  const rowsSelect = Object.keys(rowSelection);

  let ids = []

  return (
    <div className="grid ">
      <div className="flex items-center bg-gray-listas h-10 border-b-2  border-b-white-linea">
        <h1 className="mx-5 text-white font-inter">
          MOSTRANDO {numItemsForPage} DE {totalItems}° REGISTROS
        </h1>
      </div>
      {loading ? (
        <table className={`${classNameTable} max-w-full`}>
          <thead className=" bg-gray-listas sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="w-full">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="text-center text-sm px-5 font-inter text-gray-listas-header h-10 cursor-pointer"
                    >
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}{" "}
                            {{
                              asc: <FontAwesomeIcon icon={faUpLong} />,
                              desc: <FontAwesomeIcon icon={faDownLong} />,
                            }[header.column.getIsSorted()] ?? null}
                          </div>
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="max-w-lista-maxWidth py-4 text-justify px-5 font-inter font-light text-listas-size text-gray-listas-header"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {multiDelete && (
            <tfoot className="h-14">
              <tr>
                <td className="p-1">
                  <IndeterminateCheckbox
                    {...{
                      checked: table.getIsAllPageRowsSelected(),
                      indeterminate: table.getIsSomePageRowsSelected(),
                      onChange: table.getToggleAllPageRowsSelectedHandler(),
                    }}
                  />
                </td>
                <td colSpan={20}>
                  <button
                    className="border p-2 text-sm text-gray-600 hover:bg-red-boton hover:border-red-700 hover:text-white rounded-[4px]"
                    onClick={() => {
                      const newIds = []
                      for (let key in rowsSelect) {
                        newIds.push(...ids, { id: table.getRowModel().rows[rowsSelect[key]].original.id })
                      }
                      buttonFunction(newIds)
                    }}
                  >
                    {<FontAwesomeIcon icon={faTrashCan} />} {buttonTittle1}{" "}
                    {rowsSelect.length} {buttonTittle2}
                  </button>
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      ) : (
        <div className="h-[65vh] flex flex-col justify-center items-center p-48">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default ListasTable;
