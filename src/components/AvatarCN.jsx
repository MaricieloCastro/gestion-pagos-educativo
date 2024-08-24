import { useContext, useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AuthContext from '../contexts/AuthContext'

const AvatarCN = () => {
  let { user, authTokens } = useContext(AuthContext)
  let { ruta_fotografica } = user

  const [fotoPerfil, setFotoPerfil] = useState(ruta_fotografica)

  console.log('authTokens', authTokens)

  useEffect(() => {
    setFotoPerfil(ruta_fotografica)
  }, [ruta_fotografica, authTokens])

  return (
    <Avatar>
      <AvatarImage src={fotoPerfil} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default AvatarCN
