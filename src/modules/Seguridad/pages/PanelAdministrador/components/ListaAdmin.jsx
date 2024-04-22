import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const ListaAdmin = () => {
    return (
        <>
            <div>

            </div>
            <div className='panel-administrador__seccion-2-1-1-botonLista'>
                <div className='flex justify-center items-center'>
                    <p className='font-semibold text-white-linea'>LISTA DE USUARIOS</p>
                </div>
                <button className='bg-white-texto'>
                    <FontAwesomeIcon icon={faCaretRight} className='text-blue-oscuro' />
                </button>
            </div>
        </>
    )
}

export default ListaAdmin