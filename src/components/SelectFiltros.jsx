import { Select, ConfigProvider } from 'antd';
import PropTypes from 'prop-types';

const SelectFiltros = (props) => {
  const {
    title,
    classNameTitle,
    options,
    defaultValue,
    bgSelect,
    colorFlecha,
    bgElevated,
    colorText,
    controlItemBgActive,
    controlItemBgHover,
    setFilteringColumn,
    columnValue,
    columnSelect,
    setColumnSelect
  } = props;

  const handleChange = (value) => {
    // Actualizar solo el valor de "value" en el estado del filtro de tipo
    if (value === 'TODOS') {
      value = '';
      console.log('efectivamente');
    }
    setFilteringColumn([{ id: columnSelect, value }]);
  };

  return (
    <div>
      <p className={classNameTitle}>{title}:</p>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
            colorText: `${colorText}`
            // colorBorder: "none",
          },
          components: {
            Select: {
              colorTextQuaternary: `${colorFlecha}`,
              colorTextPlaceholder: '#B5B5B5',
              colorBgContainer: `${bgSelect}`,
              colorBgElevated: `${bgElevated}`,
              controlItemBgActive: `${controlItemBgActive}`,
              controlItemBgHover: `${controlItemBgHover}`,
              colorBorder: '#003862'
            }
          }
        }}
      >
        <Select
          defaultValue={defaultValue}
          className='w-full min-w-36 h-11'
          onChange={handleChange}
          onClick={() => {
            setColumnSelect(columnValue);
          }}
          options={options}
        />
      </ConfigProvider>
    </div>
  );
};

export default SelectFiltros;

SelectFiltros.propTypes = {
  title: PropTypes.string,
  classNameTitle: PropTypes.string,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  bgSelect: PropTypes.string,
  colorFlecha: PropTypes.string,
  bgElevated: PropTypes.string,
  colorText: PropTypes.string,
  controlItemBgActive: PropTypes.string,
  controlItemBgHover: PropTypes.string,
  setFilteringColumn: PropTypes.func,
  columnValue: PropTypes.string,
  columnSelect: PropTypes.string,
  setColumnSelect: PropTypes.func
};
