import React from 'react';
import {
    Document,
    Text,
    Page,
    StyleSheet,
    Image,
    View,
    Font,
} from '@react-pdf/renderer';
import escudoCiencias from '../../../../../public/img/escudoCiencias.png';
import jostRegular from '../fonts/Jost/Jost-Regular.ttf';
import jostBold from '../fonts/Jost/Jost-Bold.ttf';
import kadwaRegular from '../fonts/Kadwa/Kadwa-Regular.ttf';
import kadwaBold from '../fonts/Kadwa/Kadwa-Bold.ttf';

Font.register({ family: 'jost-regular', src: jostRegular });
Font.register({ family: 'jost-bold', src: jostBold });
Font.register({ family: 'kadwa-regular', src: kadwaRegular });
Font.register({ family: 'kadwa-bold', src: kadwaBold });

const styles = StyleSheet.create({
    page: { display: 'flex', flexDirection: 'column' },
    cabecera: { display: 'flex', flexDirection: 'row', height: '25%' },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '40%',
    },
    tittleCabecera: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        height: '100%',
        width: '65%',
    },
    imageEscudo: { width: '65%' },
    tittleCabecera_tittle: {
        fontFamily: 'jost-regular',
        fontSize: '25px',
        color: '#040404',
    },
    tittleCabecera__tittle_2: {
        fontFamily: 'kadwa-bold',
        fontSize: '12px',
        color: '#FF0909',
    },
    tittleCabecera__tittle_caja: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15px',
        fontFamily: 'jost-regular',
        color: '#003862',
    },
});

const PDF = ({ nombreReporte, optionSelected, currentDate, children }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.cabecera}>
                    <View style={styles.logo}>
                        <Image style={styles.imageEscudo} src={escudoCiencias} />
                    </View>
                    <View style={styles.tittleCabecera}>
                        <Text style={styles.tittleCabecera_tittle}>Colegio Ciencias Tarapoto</Text>
                        <Text style={styles.tittleCabecera__tittle_2}>
                            Reporte de {nombreReporte} por {optionSelected === "" ? "todos" : optionSelected.toLowerCase()}
                        </Text>
                        <View style={styles.tittleCabecera__tittle_caja}>
                            <Text>Jr. Perú 906, Tarapoto 22202, Perú</Text>
                            <Text>{currentDate.format('DD/MM/YYYY')}</Text>
                        </View>
                    </View>
                </View>
                <>
                    {children}
                </>
            </Page>
        </Document >
    );
};

export default PDF;
