import React from 'react'

const Pastel = (props) => {
    const { total, valor, label } = props;

    let porcentaje = (valor / total) * 100

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="h-[15vh] w-[15vh] rounded-full grid mb-1 text-white-texto bg-blue-claro font-medium text-[1.8vh]">
                <div className="rounded-t-full border-1 border-white-texto border-b-0 flex justify-center items-center">
                    <p>S/. {valor}</p>
                </div>
                <div className="rounded-b-full border-1 border-white-texto flex justify-center items-center">
                    <p>{porcentaje}%</p>
                </div>
            </div>
            <p className="text-[1.5vh] text-white-texto">{label}</p>
        </div>
    )
}

export default Pastel