import { ConfigProvider, Pagination } from 'antd';
import PropTypes from 'prop-types';

const ListasPagination = ({ total, page, setPage, setPageSize }) => {
  const handleChange = (currentPage, sizePagination) => {
    setPage(currentPage - 1);
    setPageSize(sizePagination);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorTextDisabled: '#0077d2',
            itemActiveBg: '#d9d9d9',
            colorText: '#d9d9d9',
            itemBg: '#d9d9d9'
          }
        }
      }}
    >
      <Pagination
        defaultCurrent={1}
        total={total}
        current={page + 1}
        showSizeChanger
        onChange={handleChange}
        pageSizeOptions={['10', '20', '30', '40', '50']}
      />
    </ConfigProvider>
  );
};
export default ListasPagination;

ListasPagination.propTypes = {
  total: PropTypes.number,
  page: PropTypes.number,
  setPage: PropTypes.func,
  setPageSize: PropTypes.func
};
