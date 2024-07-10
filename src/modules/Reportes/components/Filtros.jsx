import SelectReportes from '@/components/SelectReportes'
import React from 'react'
import { filterAdapterReportes } from '../functions/filterAdapterReportes';

const Filtros = (props) => {

    const { tittleFiltro, setLoading, api, optionSelected, setOptionSelected, children, triggerReporte, setTriggerReporte } = props

    const options = filterAdapterReportes(api, setLoading)

    const handleChange = (value) => {
        setOptionSelected(value)
        setTriggerReporte(!triggerReporte)
    };

    return (
        <div className="reporte__filtro-contenido w-full mx-10">
            <div className="reporte__filtro-contenido-box bg-[#0000005c]">
                <div className="flex justify-center items-center">
                    <p className="text-slate-300 py-2 text-xs font-medium underline">SELECCIONAR OPCIÓN</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 pb-2">
                    <p className="text-xs text-slate-300">{tittleFiltro}</p>
                    <SelectReportes
                        handleChange={handleChange}
                        options={options}
                        optionSelected={optionSelected}
                    />
                </div>
            </div>
            <div className="reporte__filtro-contenido-boton h-12">
                {children}
            </div>
        </div>
    )
}

export default Filtros