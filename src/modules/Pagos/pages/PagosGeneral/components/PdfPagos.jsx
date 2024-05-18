import React from "react";
import {
  Page,
  Document,
  Text,
  StyleSheet,
  Image,
  View,
} from "@react-pdf/renderer";
import Logo from "../../../../../assets/img/escudoCiencias.png";
export default function PdfPagoa() {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      lineHeight: 1.5,
      flexDirection: "column",
    },
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
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#bfbfbf",
      marginBottom: 20,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCell: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#bfbfbf",
      padding: 5,
    },
    section: {
      marginBottom: 10,
    },
    label: {
      fontWeight: "bold",
    },
    qrCode: {
      width: 60,
      height: 60,
      marginLeft: "auto",
      marginRight: 0,
    },
  });
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.logo} src={Logo} />
          <Text style={styles.title}>
            INSTITUCIÓN EDUCATIVA PARTICULAR CIENCIAS E.I.R.L.
          </Text>
          <Text>RUC: 20450406156</Text>
          <Text>BOLETA DE VENTA ELECTRÓNICA</Text>
          <Text>B001-00023610</Text>
        </View>

        <View style={styles.section}>
          <Text>Fecha Emisión: 08/09/2023</Text>
          <Text>Fecha de Vencimiento: 08/09/2023</Text>
          <Text>Moneda: SOLES</Text>
          <Text>Condición de Venta: CONTADO</Text>
        </View>

        <View style={styles.section}>
          <Text>Datos del Alumno:</Text>
          <Text>Señor(es): MARCELO GOMEZ SANCHEZ</Text>
          <Text>DNI: 71456922</Text>
          <Text>Dirección: BOLOGNESI 735</Text>
          <Text>Grado: 5 to</Text>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { width: "10%" }]}>CANT.</Text>
            <Text style={[styles.tableCell, { width: "10%" }]}>U/M</Text>
            <Text style={[styles.tableCell, { width: "50%" }]}>
              DESCRIPCIÓN
            </Text>
            <Text style={[styles.tableCell, { width: "15%" }]}>P.U.</Text>
            <Text style={[styles.tableCell, { width: "15%" }]}>IMPORTE</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { width: "10%" }]}>1.000</Text>
            <Text style={[styles.tableCell, { width: "10%" }]}>UND</Text>
            <Text style={[styles.tableCell, { width: "50%" }]}>
              CUOTA DE ENSEÑANZA SETIEMBRE 2023
            </Text>
            <Text style={[styles.tableCell, { width: "15%" }]}>200</Text>
            <Text style={[styles.tableCell, { width: "15%" }]}>200</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text>OP. EXONERADAS S/: 0.00</Text>
          <Text>IGV S/: 0.00</Text>
          <Text>DESCUENTOS S/: 0.00</Text>
          <Text style={{ fontWeight: "bold" }}>TOTAL S/: 200</Text>
        </View>

        <View style={styles.section}>
          <Text>SON: CUATROCIENTOS CON 00/100 SOLES</Text>
        </View>

        <View style={styles.section}>
          <Text>Representación impresa de la BOLETA DE VENTA ELECTRÓNICA</Text>
          <Text>visita http://mifacturasunat.com</Text>
          <Text>
            SERVICIOS PRESTADOS EN LA AMAZONIA PARA SER CONSUMIDOS EN LA MISMA
          </Text>
          <Text>Resumen: 8BrfdJkXTV6boZ7jpi5wX4elKLY=</Text>
        </View>

        <Image
          style={styles.qrCode}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/QRCode.png"
        />
      </Page>
    </Document>
  );
}
