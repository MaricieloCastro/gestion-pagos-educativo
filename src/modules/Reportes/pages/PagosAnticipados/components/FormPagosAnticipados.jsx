import React, { useState } from "react";
import "./FormPagosAnticipados.scss";
import { Button } from "@/components/ui/button";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./Document";

export default function FormPagosAnticipados() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="cuerpo">
      <div className="cuerpo-select">
        <div className="cuerpo-select_conteniener">
          <div className="cuerpo-select_conteniener-titulo">
            <h3>SELECCIONAR OPCIÓN:</h3>
          </div>
          <div className="cuerpo-select_conteniener-dos flex justify-center">
            <div className="radio-group flex gap-14">
              <label>
                <input
                  type="radio"
                  value="Dia"
                  checked={selectedOption === "Dia"}
                  onChange={handleOptionChange}
                />
                Yape
              </label>
              <label>
                <input
                  type="radio"
                  value="Mes"
                  checked={selectedOption === "Mes"}
                  onChange={handleOptionChange}
                />
                Efectivo
              </label>
              <label>
                <input
                  type="radio"
                  value="Año"
                  checked={selectedOption === "Año"}
                  onChange={handleOptionChange}
                />
                Plin
              </label>
            </div>
          </div>
          <div className="cuerpo-select_conteniener-tres">
            <Button>Aplicar</Button>
          </div>
        </div>
      </div>
      <div className="cuerpo-preview">
        <div className="cuerpo-preview_body p-5">
          <div className="p-6 bg-white text-black dark:bg-zinc-800 dark:text-white">
            <div className="flex items-center justify-between mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTOa3kxXUDiO9Cmvk8h3FL8lDTu_zxCI_fg&s"
                alt="School logo"
                className="w-24 h-24"
              ></img>
              <div className="text-center">
                <h1 className="text-xl font-bold">Colegio Ciencias Tarapoto</h1>
                <p className="text-red-500 font-semibold">
                  Reporte de métodos de pago por _______
                </p>
                <p>Jr. Perú 906, Tarapoto 22202, Perú</p>
                <p>26-06-2024</p>
              </div>
              <div className="w-24 h-24"></div>
            </div>
            <div className="border border-zinc-300 dark:border-zinc-700 p-4 mb-4">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Nro:</span>
                  <span>0001</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Grado:</span>
                  <span>1ro</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Sección:</span>
                  <span>A</span>
                </div>
              </div>
            </div>
            <table className="min-w-full bg-white dark:bg-zinc-800">
              <thead>
                <tr>
                  <th className="border px-4 py-2 dark:border-zinc-700">Nro</th>
                  <th className="border px-4 py-2 dark:border-zinc-700">DNI</th>
                  <th className="border px-4 py-2 dark:border-zinc-700">
                    Nombres
                  </th>
                  <th className="border px-4 py-2 dark:border-zinc-700">
                    Apellidos
                  </th>
                  <th className="border px-4 py-2 dark:border-zinc-700">
                    Fecha Pago
                  </th>
                  <th className="border px-4 py-2 dark:border-zinc-700">
                    Monto
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 dark:border-zinc-700">1</td>
                  <td className="border px-4 py-2 dark:border-zinc-700">
                    12345678
                  </td>
                  <td className="border px-4 py-2 dark:border-zinc-700">
                    Shande Andrés
                  </td>
                  <td className="border px-4 py-2 dark:border-zinc-700">
                    Alvan Rios
                  </td>
                  <td className="border px-4 py-2 dark:border-zinc-700">
                    03/01/2023
                  </td>
                  <td className="border px-4 py-2 dark:border-zinc-700">
                    S/. 300.00
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={6}
                    className="border px-4 py-2 dark:border-zinc-700 text-right"
                  >
                    S/. 300.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="cuerpo-preview_download">
          Descargar:
          <PDFDownloadLink
            document={<MyDocument selectedOption={selectedOption} />}
          >
            {({ loading }) =>
              loading ? (
                "Generando documento..."
              ) : (
                <Button>
                  <FontAwesomeIcon icon={faFilePdf} />
                </Button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
}
