import { SearchOutlined } from '@ant-design/icons';
import { Input, Space, ConfigProvider } from 'antd';

import PropTypes from 'prop-types';

const InputConsult = (props) => {
  const { handleChange } = props;

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 'none',
          colorText: '#004F82',
          colorTextPlaceholder: '#7f94a4'
        },
        components: {
          Input: {
            addonBg: '#C1C1C1',
            colorBgContainer: 'none'
          }
        }
      }}
    >
      <Space direction='vertical' size='middle'>
        <Space.Compact
          size='large'
          className='w-full min-w-36 border-1 border-blue-claro'
        >
          <Input
            addonBefore={<SearchOutlined />}
            placeholder='Ingrese 3 letras...'
            onChange={handleChange}
          />
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};
export default InputConsult;

InputConsult.propTypes = {
  handleChange: PropTypes.func
};
