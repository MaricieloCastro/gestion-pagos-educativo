import DateTimeFiltros from '../Filtros/DateTimeFiltros';
import SelectFiltros from '../Filtros/SelectFiltros';

const Filter = ({ column, title, options }) => {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = column.columnDef.meta ?? {};

  const handleChangeSelect = (value) => {
    column.setFilterValue(value);
  };

  const handleChangeDateTime = (_, dateStr) => {
    column.setFilterValue(dateStr);
  };

  return filterVariant === 'range' ? (
    <div>
      <div className="flex space-x-2">
        {/* See faceted column filters example for min max values functionality */}
        <DebouncedInput
          type="number"
          value={columnFilterValue?.[0] ?? ''}
          onChange={(value) =>
            column.setFilterValue((old) => [value, old?.[1]])
          }
          placeholder={`Min`}
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          value={columnFilterValue?.[1] ?? ''}
          onChange={(value) =>
            column.setFilterValue((old) => [old?.[0], value])
          }
          placeholder={`Max`}
          className="w-24 border shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : filterVariant == 'dateTime' ? (
    <DateTimeFiltros
      handleChange={handleChangeDateTime}
      columnFilterValue={columnFilterValue?.toString()}
      title={title}
    />
  ) : (
    <SelectFiltros
      handleChange={handleChangeSelect}
      columnFilterValue={columnFilterValue?.toString()}
      title={title}
      options={options}
    />
  );
};

export default Filter;
