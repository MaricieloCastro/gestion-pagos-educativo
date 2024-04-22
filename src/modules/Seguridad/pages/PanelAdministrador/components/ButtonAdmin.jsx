import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const ButtonAdmin = (props) => {

    const { icon, title, notification, goTo } = props

    const navigate = useNavigate();

    const handleClick = () => {
        console.log(goTo)
    }

    return (
        <div className='panel-administrador__seccion-2-1-2-botones-childrens bg-blue-claro'>
            <button className='h-full w-full flex flex-col justify-between items-center py-2' onClick={handleClick}>
                <FontAwesomeIcon icon={icon} className='text-white-texto h-14 mt-7' />
                <p className='text-white-texto'>{title}</p>
            </button>
            {notification && (
                <div className='panel-administrador__seccion-2-1-2-botones-childrens-notification z-30'>
                    17
                </div>
            )}
        </div>
    )
}

export default ButtonAdmin