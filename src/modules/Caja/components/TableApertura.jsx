import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Caja",
    width: 100,
    dataIndex: "name",
    fixed: "left",
  },
  {
    title: "Monto Inicial",
    width: 100,
    dataIndex: "age",
  },
  {
    title: "Fecha Apertura",
    dataIndex: "address",
    fixed: "left",
  },
  {
    title: "Fecha Cierre",
    dataIndex: "address",
  },
  {
    title: "Turno",
    dataIndex: "address",
  },
  {
    title: "Estado",
    dataIndex: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park",
  },
];
const TableApertura = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 500,
    }}
    pagination={false}
    bordered
  />
);
export default TableApertura;
