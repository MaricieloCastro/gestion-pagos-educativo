import React from "react";

import { flexRender } from "@tanstack/react-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import Spinner from "@/components/Spinner";

import "./TableEstudiantesDelete.scss";

const TablaEstudiantesDelete = (props) => {
  const { numItemsForPage, totalItems, table, loading } = props;

  return (
    <div className="bg-white-texto overflow-y-auto h-height-caja-listas mt-4">
      <div className="grid ">
        <div className="flex items-center bg-gray-listas h-10 border-b-2  border-b-white-cabecera">
          <h1 className="mx-5 text-white font-inter">
            MOSTRANDO {numItemsForPage} DE {totalItems}° REGISTROS
          </h1>
        </div>
        {loading ? (
          <table className="estudiantes-delete max-w-full">
            <thead className=" bg-gray-listas sticky top-0">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="w-full">
                  {headerGroup.headers.map((header) => (
                    <th
                      className="text-center px-[10px] font-inter text-gray-listas-header h-10 cursor-pointer"
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
                      className="max-w-lista-maxWidth py-4 text-justify px-5 font-inter font-light text-listas-size"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="h-[65vh] flex flex-col justify-center items-center p-48">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default TablaEstudiantesDelete;
