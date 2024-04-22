import MenuLateral from '@/components/MenuLateral'
import React from 'react'
import ButtonsAdmin from './components/ButtonsAdmin'
import ListaAdmin from './components/ListaAdmin'

import './PanelAdministrador.scss'

const PanelAdministrador = () => {
    return (
        <div className="flex h-screen blue-oscuro overflow-hidden">
            <MenuLateral>
                <div className='panel-administrador h-screen max-h-[calc(100vh-50px)] mx-4 mb-4 gap-4'>
                    <div className='panel-administrador__seccion-1 bg-blue-oscuro'>
                        1
                    </div>
                    <div className='panel-administrador__seccion-2 gap-4 '>
                        <div className='panel-administrador__seccion-2-1 gap-4'>
                            <div className='panel-administrador__seccion-2-1-1 bg-blue-oscuro'>
                                <ListaAdmin />
                            </div>
                            <div className='panel-administrador__seccion-2-1-2 bg-blue-oscuro'>
                                <ButtonsAdmin />
                            </div>
                        </div>
                        <div className='panel-administrador__seccion-2-2 bg-blue-oscuro'>y</div>
                    </div>
                </div>
            </MenuLateral>
        </div>
    )
}

export default PanelAdministrador