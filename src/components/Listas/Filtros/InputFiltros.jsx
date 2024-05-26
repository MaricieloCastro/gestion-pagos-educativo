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
          colorText: "#004F82",
          colorTextPlaceholder: "#003862",
        },
        components: {
          Input: {
            addonBg: "#C1C1C1",
            colorBgContainer: "none"
          }
        }
      }}
    >
      <Space direction="vertical" size="middle">
        <Space.Compact size="large" className="w-full min-w-36 border-1 border-blue-claro">
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Buscar..."
            value={filteringSearch}
            onChange={handleChange}
          />
        </Space.Compact>
      </Space>
    </ConfigProvider>
  );
};
export default InputFiltros;
