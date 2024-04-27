import React from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts'

const GraficoBarras = () => {
    const data = [
        {
            name: "Yape",
            valor: 350,
        },
        {
            name: "Plin",
            valor: 200,
        },
        {
            name: "BCP",
            valor: 250,
        },
        {
            name: "Int.",
            valor: 50,
        },
        {
            name: "Efectivo",
            valor: 150,
        }
    ]

    return (
        <>
            <div className="flex justify-center px-3">
                <ResponsiveContainer>
                    <BarChart width={250} height={250} data={data}>
                        {/* <XAxis tickSize={3} axisLine={false} dataKey="name" /> */}
                        <Tooltip />
                        <Bar fill='#003560' dataKey="valor" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='metodos-pago'>
                <div className='flex justify-between items-center text-[1.6vh] mx-3 border-b-1 text-white-texto'>
                    <p>MÉTODOS DE PAGO</p>
                    <p>RECAUDADO</p>
                </div>
                <div className='grid grid-cols-2 px-3 text-[1.6vh]'>
                    <div className='grid text-center items-center text-white-texto'>
                        <p>Yape</p>
                        <p>Plin</p>
                        <p>Bcp</p>
                        <p>Interbank</p>
                        <p>Efectivo</p>
                    </div>
                    <div className='grid text-right items-center text-white-texto mr-3'>
                        <p>S/. 350.00</p>
                        <p>S/. 200.00</p>
                        <p>S/. 250.00</p>
                        <p>S/. 50.00</p>
                        <p>S/. 150.00</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 text-center items-center text-[1.6vh] text-white-texto mx-3 border-t-1'>
                    <p>TOTAL</p>
                    <p className='text-right mr-3'>S/. 1000.00</p>
                </div>
            </div>
        </>
    )
}

export default GraficoBarras