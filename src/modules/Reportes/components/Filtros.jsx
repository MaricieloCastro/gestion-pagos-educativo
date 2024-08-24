import SelectReportes from '@/components/SelectReportes'
import React from 'react'
import { filterAdapterReportes } from '../functions/filterAdapterReportes';
import { ConfigProvider, DatePicker, Space } from 'antd';
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const Filtros = (props) => {

    const { tittleFiltro, setLoading, api, optionSelected, setOptionSelected, children, setFechas, activeRangePicker = true } = props

    const options = filterAdapterReportes(api, setLoading)

    const handleChange = (value) => {
        setOptionSelected(value)
    };

    const handleChangeRangePicker = (value) => {
        if (setFechas) {
            const fechaInicial = value[0] ? dayjs(value[0]).format('YYYY-MM-DD') : ''
            const fechaFinal = value[1] ? dayjs(value[1]).format('YYYY-MM-DD') : ''

            const newFechas = {
                fechaInicial: fechaInicial,
                fechaFinal: fechaFinal
            }

            console.log(newFechas)

            setFechas(newFechas)
        }
    }

    return (
        <div className="reporte__filtro-contenido w-full mx-10">
            <div className="reporte__filtro-contenido-box bg-[#0000005c]">
                <div className="flex justify-center items-center">
                    <p className="text-slate-300 py-2 text-xs font-medium underline">SELECCIONAR OPCIÓN</p>
                </div>
                <div className="flex justify-center items-center pb-2 gap-x-3 px-4">
                    <div className='flex flex-col gap-2 items-center'>
                        <p className="text-xs text-slate-300">{tittleFiltro}</p>
                        <SelectReportes
                            handleChange={handleChange}
                            options={options}
                            optionSelected={optionSelected}
                        />
                    </div>
                    {activeRangePicker && (
                        <div className='flex flex-col gap-2 items-center'>
                            <p className="text-xs text-slate-300">Rango:</p>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        borderRadius: "none",
                                    },
                                    components: {
                                        Select: {
                                            colorTextQuaternary: "#003862",
                                        },
                                    },
                                }}
                            >
                                <Space direction="vertical" size="middle">
                                    <Space.Compact
                                        size="large"
                                        className="w-full gap-1 min-w-48"
                                        direction="vertical"
                                    >
                                        <RangePicker onChange={handleChangeRangePicker} />
                                    </Space.Compact>
                                </Space>
                            </ConfigProvider>
                        </div>
                    )}
                </div>
            </div>
            <div className="reporte__filtro-contenido-boton h-12">
                {children}
            </div>
        </div>
    )
}

export default Filtros