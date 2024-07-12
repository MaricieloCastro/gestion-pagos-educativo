import './PerfilUsario.scss'
import ApiUser from '../../components/ui/ApiUser'
export default function PerfilUsario(props) {
  const { disabled, indice, ButtonView, textButton, load } = props
  return (
    <div className='perfil-usario'>
      <div className='perfil-usario_datos'>
        {/* <InputForm nombre={nombre} apellido={apellido} edad={edad} /> */}
        <ApiUser
          disabled={disabled}
          indice={indice}
          ButtonView={ButtonView}
          textButton={textButton}
          //Esto es para reconocer a la pantalla de creación
          load={load}
        />
      </div>
    </div>
  )
}
