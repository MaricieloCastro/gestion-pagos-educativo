// Preview.js
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './PDF/PDF';

const Preview = ({ children }) => (
    <PDFViewer width="100%" height="100%" showToolbar={false}>
        {children}
    </PDFViewer>
);

export default Preview;