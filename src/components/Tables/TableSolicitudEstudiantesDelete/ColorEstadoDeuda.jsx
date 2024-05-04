import React from 'react'

const ColorEstadoDeuda = (props) => {
    const {estado} = props
  return (
  <>
    {
        estado ? (
            <div className='w-3 h-4 bg-green-500' />
        ):(
            <div className='w-3 h-4 bg-orange-500' />
        )
    }
  </>
  )
}

export default ColorEstadoDeuda