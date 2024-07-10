import dayjs from 'dayjs'
import React, { useState } from 'react'

import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
import { PDFDownloadLink } from '@react-pdf/renderer'
import PDF from './PDF';

import "../scss/Reportes.scss";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filtros from './Filtros';
import Preview from './Preview';

const Reporte = (props) => {

    const { apiFiltros, tittleFiltro, nombreReporte, children, optionSelected, setOptionSelected, loadingApiPDF, triggerReporte, setTriggerReporte } = props;

    const [loading, setLoading] = useState(false)

    const currentDate = dayjs();

    return (
        <div className="reporte h-full">
            <div className="reporte__filtro flex justify-center items-center">
                <Filtros
                    tittleFiltro={tittleFiltro}
                    setLoading={setLoading}
                    api={apiFiltros}
                    optionSelected={optionSelected}
                    setOptionSelected={setOptionSelected}
                    triggerReporte={triggerReporte}
                    setTriggerReporte={setTriggerReporte}
                >
                    <button className="w-full h-full bg-[#970001] hover:bg-[#ab0000]">
                        {loading ? (
                            <span className="text-slate-300">Aplicar</span>
                        ) : (
                            <Spin className="pb-1 text-slate-300" indicator={<LoadingOutlined spin />} size="default" />
                        )}
                    </button>
                </Filtros>
            </div>
            <div className="reporte__vista mx-10">
                <div>
                    {loadingApiPDF ? (
                        <Preview>
                            <PDF currentDate={currentDate} nombreReporte={nombreReporte} optionSelected={optionSelected}>
                                {children}
                            </PDF>
                        </Preview>
                    ) : (
                        <div className='h-full flex justify-center items-center border-[1px] border-[#165b8f67]'>
                            <Spin indicator={<LoadingOutlined spin />} size="large" />
                        </div>
                    )}
                </div>
                <div className="flex justify-center items-center gap-3 py-6 text-slate-200">
                    <span className="text-sm font-semibold">Descargar:</span>
                    <PDFDownloadLink document={
                        <PDF currentDate={currentDate} nombreReporte={nombreReporte} optionSelected={optionSelected}>
                            {children}
                        </PDF>
                    } fileName={`${nombreReporte} - ${optionSelected === "" ? "TODOS" : optionSelected} - ${currentDate.format('DD-MM-YYYY')}`}>
                        {
                            ({ loading, url, error, blob }) => loading ? (
                                <Spin indicator={<LoadingOutlined spin />} size="small" />
                            ) : (
                                <button disabled={loading}><FontAwesomeIcon className={`text-2xl ${loading ? 'text-gray-400' : 'hover:text-white'}`} icon={faFilePdf} /></button>
                            )
                        }
                    </PDFDownloadLink>
                </div>
            </div>
        </div>
    )
}

export default Reporte