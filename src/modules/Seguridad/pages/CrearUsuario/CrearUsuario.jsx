import MenuLateral from '@/components/MenuLateral'
import FormSeguridad from '../../components/FormSeguridad'
import {
  DEFAULT_VALUES_CREAR_USUARIO,
  FORM_SCHEMA_CREAR_USUARIO
} from './constants/CrearUsuarioConstants'

const CrearUsuarioPrueba = () => {
  return (
    <MenuLateral>
      <FormSeguridad
        DEFAULT_VALUES={DEFAULT_VALUES_CREAR_USUARIO}
        FORM_SCHEMA={FORM_SCHEMA_CREAR_USUARIO}
      />
    </MenuLateral>
  )
}

export default CrearUsuarioPrueba
