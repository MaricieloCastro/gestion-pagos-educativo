import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Space, ConfigProvider } from 'antd';

const InputFiltros = (props) => {
  const { setFilteringSearch, filteringSearch } = props;

  const handleChange = (e) => {
    setFilteringSearch(e.target.value);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 'none',
        },
      }}
    >
      <Space direction="vertical" size="middle">
        <Space.Compact size="large" className="w-full min-w-28">
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Buscar"
            value={filteringSearch}
            onChange={handleChange}
          />
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};
export default InputFiltros;
