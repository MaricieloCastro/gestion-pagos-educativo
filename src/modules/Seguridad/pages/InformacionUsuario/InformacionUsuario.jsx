import MenuLateral from '@/components/MenuLateral'
import FormSeguridad from '../../components/FormSeguridad'
import {
  DEFAULT_VALUES_INFORMACION_USUARIO,
  FORM_SCHEMA_INFORMACION_USUARIO
} from './constants/InformacionUsuarioConstants'

const InformacionUsuarioPrueba = () => {
  return (
    <MenuLateral>
      <FormSeguridad
        editAdmin={true}
        DEFAULT_VALUES={DEFAULT_VALUES_INFORMACION_USUARIO}
        FORM_SCHEMA={FORM_SCHEMA_INFORMACION_USUARIO}
      />
    </MenuLateral>
  )
}

export default InformacionUsuarioPrueba
