import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Logo from "../../../assets/img/escudoCiencias.png";
// Estilos para el PDF
const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    margin: 5,
    marginLeft: "auto",
    padding: 10,
    //flexGrow: 1,
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: "11px",
  },
  labelI: {
    fontWeight: "normal",
    fontSize: "10px",
  },
  tableContainer: {
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontSize: "10px",
    alignItems: "center",
    padding: 5,
  },
  tableHeader: {
    fontWeight: "bold",
  },
  tableCell: {
    fontWeight: "normal",
    flex: 1,
    textAlign: "center",
  },
});

// Componente para renderizar el PDF
const PdfMovimientosDia = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.logo} src={Logo} />
        <Text style={styles.title}>
          INSTITUCIÓN EDUCATIVA PARTICULAR CIENCIAS E.I.R.L.
        </Text>
        <Text>RUC: 20450406156</Text>
        <Text style={styles.heading}>Resumen de Ingresos y Egresos</Text>
      </View>
      <View style={styles.tableContainer}>
        <Text style={styles.heading}>DETALLE DE TRANSACCIONES</Text>
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.tableHeader]}>ID</Text>
          <Text style={[styles.tableCell, styles.tableHeader]}>Fecha</Text>
          <Text style={[styles.tableCell, styles.tableHeader]}>
            Tipo Movimiento
          </Text>
          <Text style={[styles.tableCell, styles.tableHeader]}>Monto</Text>
          <Text style={[styles.tableCell, styles.tableHeader]}>
            Descripción
          </Text>
        </View>
        {data.map((item) => (
          <View style={styles.tableRow} key={item.id}>
            <Text style={styles.tableCell}>{item.id}</Text>
            <Text style={styles.tableCell}>{item.fecha}</Text>
            <Text style={styles.tableCell}>{item.tipo_movimiento}</Text>
            <Text style={styles.tableCell}>{item.monto}</Text>
            <Text style={styles.tableCell}>{item.descripcion}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Ingresos:</Text>
          <Text style={styles.labelI}>
            Total: {calculateTotal(data, "INGRESO")}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Egresos:</Text>
          <Text style={styles.labelI}>
            Total: {calculateTotal(data, "EGRESO")}
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

// Función para calcular el total de ingresos o egresos
const calculateTotal = (data, type) => {
  const filteredData = data.filter((item) => item.tipo_movimiento === type);
  const total = filteredData.reduce(
    (acc, curr) => acc + parseFloat(curr.monto),
    0
  );
  return total.toFixed(2);
};

export default PdfMovimientosDia;
