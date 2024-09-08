import { Button, ConfigProvider, Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ButtonFormSeguridad = (props) => {
  const { icon, text, htmlType, style, onClick } = props

  return style === 1 ? (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: '4px',
          colorBorder: 'none'
        },
        components: {
          Button: {
            colorBorderBg: 'red',
            defaultHoverBorderColor: 'none',
            defaultHoverColor: 'white',
            defaultHoverBg: '#2daf67'
          }
        }
      }}
    >
      <Space direction='vertical' size='large'>
        <Space.Compact size='large' className='w-full min-w-28'>
          {icon ? (
            <Button
              className='w-full text-sm font-inter text-white bg-green-boton'
              icon={<FontAwesomeIcon icon={icon} size='lg' />}
              iconposition='start'
              htmlType={htmlType}
              onClick={onClick}
            >
              {text}
            </Button>
          ) : (
            <Button
              className='w-full text-sm font-inter text-white bg-green-boton'
              htmlType={htmlType}
              onClick={onClick}
            >
              {text}
            </Button>
          )}
        </Space.Compact>
      </Space>
    </ConfigProvider>
  ) : (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: '4px',
          colorBorder: 'none'
        },
        components: {
          Button: {
            defaultHoverBorderColor: 'none',
            defaultHoverColor: 'white',
            defaultHoverBg: '#07548d'
          }
        }
      }}
    >
      <Space direction='vertical' size='large'>
        <Space.Compact size='large' className='w-full min-w-28'>
          {icon ? (
            <Button
              className='w-full text-sm font-inter text-white bg-[#0466af]'
              icon={<FontAwesomeIcon icon={icon} size='lg' />}
              iconposition='start'
              htmlType={htmlType}
              onClick={onClick}
            >
              {text}
            </Button>
          ) : (
            <Button
              className='w-full text-sm font-inter text-white bg-[#0466af]'
              htmlType={htmlType}
              onClick={onClick}
            >
              {text}
            </Button>
          )}
        </Space.Compact>
      </Space>
    </ConfigProvider>
  )
}
export default ButtonFormSeguridad
