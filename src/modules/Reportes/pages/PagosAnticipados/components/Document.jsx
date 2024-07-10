import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  schoolInfo: {
    flex: 1,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF0000",
    marginBottom: 5,
    textAlign: "center",
  },
  address: {
    marginBottom: 10,
    textAlign: "center",
  },
  date: {
    textAlign: "right",
    marginBottom: 10,
  },
  table: {
    width: "100%",
    border: "1px solid #000000",
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#E4E4E4",
    border: "1px solid #000000",
    padding: 8,
    textAlign: "center",
  },
  tableRow: {
    border: "1px solid #000000",
    padding: 8,
    textAlign: "center",
  },
  totalRow: {
    borderTop: "1px solid #000000",
    padding: 8,
    textAlign: "right",
  },
});

const data = [
  {
    nro: 1,
    dni: "12345678",
    nombres: "Shande Andrés",
    apellidos: "Alvan Rios",
    fechaPago: "03/01/2023",
    monto: "S/. 300.00",
  },
];

const MyDocument = ({ selectedOption }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTOa3kxXUDiO9Cmvk8h3FL8lDTu_zxCI_fg&s"
          style={styles.logo}
        />
        <View style={styles.schoolInfo}>
          <Text style={styles.title}>Colegio Ciencias Tarapoto</Text>
          <Text style={styles.subtitle}>
            Reporte de métodos de pago por _______
          </Text>   
          <Text style={styles.address}>Jr. Perú 906, Tarapoto 22202, Perú</Text>
          <Text style={styles.date}>26-06-2024</Text>
        </View>
        <View style={{ width: 100 }}></View>
      </View>

      <View style={{ marginBottom: 20 }}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text>Nro</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text>DNI</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text>Nombres</Text>    
          </View>
          <View style={styles.tableHeader}>
            <Text>Apellidos</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text>Fecha Pago</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text>Monto</Text>
          </View>
        </View>

        {data.map((item, index) => (
          <View key={index} style={styles.table}>
            <View style={styles.tableRow}>
              <Text>{item.nro}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text>{item.dni}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text>{item.nombres}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text>{item.apellidos}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text>{item.fechaPago}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text>{item.monto}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.totalRow}>
        <Text>Total: S/. 300.00</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
