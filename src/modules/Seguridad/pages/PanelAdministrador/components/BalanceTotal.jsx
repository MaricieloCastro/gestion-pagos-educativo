import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Pastel from './Pastel'

const BalanceTotal = () => {
    return (
        <>
            <div className="panel-administrador__seccion-1-1">
                <div className="text-white-texto font-light text-[2vh]">
                    <p>BALANCE TOTAL:</p>
                    <div className="flex justify-start items-center gap-2">
                        <p>Este mes</p>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start text-white-texto">
                    <div>
                        <h1 className="font-medium tracking-wide text-[5vh]">
                            1000.00
                        </h1>
                        <p className="font-light text-[1.4vh] ml-2">Soles</p>
                    </div>
                </div>
                <div className="flex justify-start items-center font-light text-[1.4vh] text-white-texto gap-1">
                    <p>Ultimo mes:</p>
                    <p>S/. 1300.75</p>
                </div>
            </div>
            <div className="panel-administrador__seccion-1-1-pasteles gap-2 px-10">
                <Pastel total={1000} valor={0} label="INSCRIPCIÓN" />
                <Pastel total={1000} valor={400} label="MATRICULA" />
                <Pastel total={1000} valor={600} label="MENSUALIDAD" />
                <Pastel total={1000} valor={0} label="C. DESAPROBADO" />
            </div>
        </>
    )
}

export default BalanceTotal