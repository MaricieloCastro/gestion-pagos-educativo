import React from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    Font,
} from '@react-pdf/renderer';
import jostRegular from '../fonts/Jost/Jost-Regular.ttf';
import jostBold from '../fonts/Jost/Jost-Bold.ttf';
import kadwaRegular from '../fonts/Kadwa/Kadwa-Regular.ttf';
import kadwaBold from '../fonts/Kadwa/Kadwa-Bold.ttf';

Font.register({ family: 'jost-regular', src: jostRegular });
Font.register({ family: 'jost-bold', src: jostBold });
Font.register({ family: 'kadwa-regular', src: kadwaRegular });
Font.register({ family: 'kadwa-bold', src: kadwaBold });

const styles = StyleSheet.create({
    cuerpo: { height: 'auto', padding: '30px', paddingBottom: '0px' },
    titleTabla: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        fontFamily: 'jost-bold',
        color: '#003862',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#000000',
    },
    titleTabla__title_1: {
        fontSize: 12,
        borderRightStyle: 'solid',
        borderRightWidth: '2px',
        borderRightColor: '#000000',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    titleTabla__title_2: { fontSize: 12 },
    titleTabla__title_3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        borderLeftStyle: 'solid',
        borderLeftWidth: '2px',
        borderLeftColor: '#000000',
        width: '175px',
    },
    titleTabla__title_3__item_1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        borderRightStyle: 'solid',
        borderRightWidth: '2px',
        borderRightColor: '#000000',
    },
    titleTabla__title_3__item_2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
    },
    table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        marginBottom: 20,
    },
    tableRow: { margin: 'auto', flexDirection: 'row' },
    tableCol: {
        width: '16.66%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
    },
    tableHeader: {
        backgroundColor: '#dcdcdc',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        paddingTop: '5px',
        paddingBottom: '5px',
        fontFamily: 'kadwa-bold',
        color: '#003862',
    },
    tableCell: {
        textAlign: 'center',
        fontFamily: 'kadwa-regular',
        color: '#003862',
        fontSize: 10,
        padding: 5,
    },
    totalRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        fontFamily: 'kadwa-bold',
        fontSize: 10,
        color: '#003862',
    },
    totalCell: {
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: '#bfbfbf',
        paddingTop: 5,
    },
    tableTotal: { display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' },
    tableColTotal: {
        width: '83.33%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#bfbfbf',
    },
    tableCellTotal: {
        textAlign: 'center',
        fontFamily: 'kadwa-bold',
        color: '#003862',
        fontSize: 10,
        padding: 5,
    },
    cajaVacia: {
        display: 'flex',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoVacio: {
        textAlign: 'center',
        fontFamily: 'kadwa-regular',
        color: '#003862',
        fontSize: 15,
    },
});

const MetodoPagoPDF = ({ data }) => {
    return (
        data.length === 0 ? (
            <View style={styles.cajaVacia}>
                <Text style={styles.textoVacio}>No existen datos registrados</Text>
            </View>
        ) : (
            data.map((itemGroup, groupIndex) => (
                <View wrap style={styles.cuerpo} key={groupIndex}>
                    <View wrap={false} style={styles.titleTabla}>
                        <View style={styles.titleTabla__title_1}><Text>Nro: {groupIndex + 1}</Text></View>
                        <View style={styles.titleTabla__title_2}><Text>{itemGroup.metodo}</Text></View>
                        <View style={styles.titleTabla__title_3}>
                            <View style={styles.titleTabla__title_3__item_1}><Text>Grado: {itemGroup.grado} </Text></View>
                            <View style={styles.titleTabla__title_3__item_2}><Text>Seccion: {itemGroup.seccion} </Text></View>
                        </View>
                    </View>
                    <View wrap style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}><Text style={styles.tableHeader}>Nro</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableHeader}>DNI</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableHeader}>Nombres</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableHeader}>Apellidos</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableHeader}>Fecha Pago</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableHeader}>Monto</Text></View>
                        </View>
                        {itemGroup.datos.map((item, itemIndex) => (
                            <View style={styles.tableRow} key={itemIndex}>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{itemIndex + 1}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.dni}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.nombres}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.apellidos}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.fecha_vencimiento}</Text></View>
                                <View style={styles.tableCol}><Text style={styles.tableCell}>{item.monto}</Text></View>
                            </View>
                        ))}
                        <View style={styles.tableTotal}>
                            <View style={styles.tableColTotal}><Text style={styles.tableHeader}>Total</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCellTotal}>S/. {itemGroup.total}</Text></View>
                        </View>
                    </View>
                </View>
            ))
        )
    )
}

export default MetodoPagoPDF