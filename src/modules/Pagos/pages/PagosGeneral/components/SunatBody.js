// // export const SUNAT = {
// //   personaId: "665248a370419f0015e8a074",
// //   personaToken:
// //     "DEV_f1qz2uXCRNohX1UBx1TpTbvUEIce7Owu3f1efWwVwyGKkrZcQrckN8ARE2LRHhpx",
// //   fileName: `20450406156-03-B001-${suggestedNumber}`,
// //   documentBody: {
// //     "cbc:UBLVersionID": {
// //       _text: "2.1",
// //     },
// //     "cbc:CustomizationID": {
// //       _text: "2.0",
// //     },
// //     "cbc:ID": {
// //       _text: `B001-${suggestedNumber}`,
// //     },
// //     "cbc:IssueDate": {
// //       _text: "2024-05-25",
// //     },
// //     "cbc:IssueTime": {
// //       _text: "17:12:10",
// //     },
// //     "cbc:InvoiceTypeCode": {
// //       _attributes: {
// //         listID: "0101",
// //       },
// //       _text: "03",
// //     },
// //     "cbc:Note": [
// //       {
// //         _text: `${precio_unitario} CON 00/100 SOLES`,
// //         _attributes: {
// //           languageLocaleID: "1000",
// //         },
// //       },
// //       {
// //         _text: { descripcion },
// //       },
// //     ],
// //     "cbc:DocumentCurrencyCode": {
// //       _text: "PEN",
// //     },
// //     "cac:AccountingSupplierParty": {
// //       "cac:Party": {
// //         "cac:PartyIdentification": {
// //           "cbc:ID": {
// //             _attributes: {
// //               schemeID: "6",
// //             },
// //             _text: "20450406156",
// //           },
// //         },
// //         "cac:PartyName": {
// //           "cbc:Name": {
// //             _text: "Colegio Ciencias",
// //           },
// //         },
// //         "cac:PartyLegalEntity": {
// //           "cbc:RegistrationName": {
// //             _text: "INSTITUCION EDUCATIVA  PARTICULAR CIENCIAS E.I.R.L.",
// //           },
// //           "cac:RegistrationAddress": {
// //             "cbc:AddressTypeCode": {
// //               _text: "0000",
// //             },
// //             "cac:AddressLine": {
// //               "cbc:Line": {
// //                 _text:
// //                   "JR. PERU 908 CON JR. ESPAÑA NRO. 908 TARAPOTO SAN MARTIN SAN MARTIN",
// //               },
// //             },
// //           },
// //         },
// //       },
// //     },
// //     "cac:AccountingCustomerParty": {
// //       "cac:Party": {
// //         "cac:PartyIdentification": {
// //           "cbc:ID": {
// //             _attributes: {
// //               schemeID: "1",
// //             },
// //             _text: codigo,
// //           },
// //         },
// //         "cac:PartyLegalEntity": {
// //           "cbc:RegistrationName": {
// //             _text: alumno,
// //           },
// //           "cac:RegistrationAddress": {
// //             "cac:AddressLine": {
// //               "cbc:Line": {
// //                 _text: inputDireccion,
// //               },
// //             },
// //           },
// //         },
// //       },
// //     },
// //     "cac:TaxTotal": {
// //       "cbc:TaxAmount": {
// //         _attributes: {
// //           currencyID: "PEN",
// //         },
// //         _text: 0,
// //       },
// //       "cac:TaxSubtotal": [
// //         {
// //           "cbc:TaxableAmount": {
// //             _attributes: {
// //               currencyID: "PEN",
// //             },
// //             _text: Number(desc),
// //           },
// //           "cbc:TaxAmount": {
// //             _attributes: {
// //               currencyID: "PEN",
// //             },
// //             _text: 0,
// //           },
// //           "cac:TaxCategory": {
// //             "cac:TaxScheme": {
// //               "cbc:ID": {
// //                 _text: "9997",
// //               },
// //               "cbc:Name": {
// //                 _text: "EXO",
// //               },
// //               "cbc:TaxTypeCode": {
// //                 _text: "VAT",
// //               },
// //             },
// //           },
// //         },
// //       ],
// //     },
// //     "cac:LegalMonetaryTotal": {
// //       "cbc:LineExtensionAmount": {
// //         _attributes: {
// //           currencyID: "PEN",
// //         },
// //         _text: Number(desc_aplicado),
// //       },
// //       "cbc:TaxInclusiveAmount": {
// //         _attributes: {
// //           currencyID: "PEN",
// //         },
// //         _text: Number(desc_aplicado),
// //       },
// //       "cbc:PayableAmount": {
// //         _attributes: {
// //           currencyID: "PEN",
// //         },
// //         _text: Number(total_pagar),
// //       },
// //     },
// //     "cac:InvoiceLine": [
// //       {
// //         "cbc:ID": {
// //           _text: 1,
// //         },
// //         "cbc:InvoicedQuantity": {
// //           _attributes: {
// //             unitCode: "NIU",
// //           },
// //           _text: 1,
// //         },
// //         "cbc:LineExtensionAmount": {
// //           _attributes: {
// //             currencyID: "PEN",
// //           },
// //           _text: Number(montosPagos.monto),
// //         },
// //         "cac:PricingReference": {
// //           "cac:AlternativeConditionPrice": {
// //             "cbc:PriceAmount": {
// //               _attributes: {
// //                 currencyID: "PEN",
// //               },
// //               _text: Number(montosPagos.monto),
// //             },
// //             "cbc:PriceTypeCode": {
// //               _text: "01",
// //             },
// //           },
// //         },
// //         "cac:TaxTotal": {
// //           "cbc:TaxAmount": {
// //             _attributes: {
// //               currencyID: "PEN",
// //             },
// //             _text: 0,
// //           },
// //           "cac:TaxSubtotal": [
// //             {
// //               "cbc:TaxableAmount": {
// //                 _attributes: {
// //                   currencyID: "PEN",
// //                 },
// //                 _text: Number(montosPagos.monto),
// //               },
// //               "cbc:TaxAmount": {
// //                 _attributes: {
// //                   currencyID: "PEN",
// //                 },
// //                 _text: 0,
// //               },
// //               "cac:TaxCategory": {
// //                 "cbc:Percent": {
// //                   _text: 0,
// //                 },
// //                 "cbc:TaxExemptionReasonCode": {
// //                   _text: "20",
// //                 },
// //                 "cac:TaxScheme": {
// //                   "cbc:ID": {
// //                     _text: "9997",
// //                   },
// //                   "cbc:Name": {
// //                     _text: "EXO",
// //                   },
// //                   "cbc:TaxTypeCode": {
// //                     _text: "VAT",
// //                   },
// //                 },
// //               },
// //             },
// //           ],
// //         },
// //         "cac:Item": {
// //           "cbc:Description": {
// //             _text: descripcion,
// //           },
// //           "cac:SellersItemIdentification": {
// //             "cbc:ID": {
// //               _text: "P4",
// //             },
// //           },
// //         },
// //         "cac:Price": {
// //           "cbc:PriceAmount": {
// //             _attributes: {
// //               currencyID: "PEN",
// //             },
// //             _text: Number(precio_unitario),
// //           },
// //         },
// //       },
// //     ],
// //   },
// // };

// // export const SUNATFACTURA = {
// //   personaId: "665248a370419f0015e8a074",
// //   personaToken:
// //     "DEV_f1qz2uXCRNohX1UBx1TpTbvUEIce7Owu3f1efWwVwyGKkrZcQrckN8ARE2LRHhpx",
// //   fileName: `20450406156-01-F001-${fCorrelativo.suggestedNumber}`,
// //   documentBody: {
// //     "cbc:UBLVersionID": {
// //       _text: "2.1",
// //     },
// //     "cbc:CustomizationID": {
// //       _text: "2.0",
// //     },
// //     "cbc:ID": {
// //       _text: `F001-${fCorrelativo.suggestedNumber}`,
// //     },
// //     "cbc:IssueDate": {
// //       _text: "2024-07-10",
// //     },
// //     "cbc:IssueTime": {
// //       _text: "14:34:02",
// //     },
// //     "cbc:InvoiceTypeCode": {
// //       _attributes: {
// //         listID: "0101",
// //       },
// //       _text: "01",
// //     },
// //     "cbc:Note": [
// //       {
// //         _text: "CUATROCIENTOS  CON 00/100 SOLES",
// //         _attributes: {
// //           languageLocaleID: "1000",
// //         },
// //       },
// //     ],
// //     "cbc:DocumentCurrencyCode": {
// //       _text: "PEN",
// //     },
// //     "cac:AccountingSupplierParty": {
// //       "cac:Party": {
// //         "cac:PartyIdentification": {
// //           "cbc:ID": {
// //             _attributes: {
// //               schemeID: "6",
// //             },
// //             _text: "20450406156",
// //           },
// //         },
// //         "cac:PartyName": {
// //           "cbc:Name": {
// //             _text: "Colegio Ciencias",
// //           },
// //         },
// //         "cac:PartyLegalEntity": {
// //           "cbc:RegistrationName": {
// //             _text: "INSTITUCION EDUCATIVA  PARTICULAR CIENCIAS E.I.R.L.",
// //           },
// //           "cac:RegistrationAddress": {
// //             "cbc:AddressTypeCode": {
// //               _text: "0000",
// //             },
// //             "cac:AddressLine": {
// //               "cbc:Line": {
// //                 _text:
// //                   "JR. PERU 908 CON JR. ESPAÑA NRO. 908 TARAPOTO SAN MARTIN SAN MARTIN",
// //               },
// //             },
// //           },
// //         },
// //       },
// //     },
// //     "cac:AccountingCustomerParty": {
// //       "cac:Party": {
// //         "cac:PartyIdentification": {
// //           "cbc:ID": {
// //             _attributes: {
// //               schemeID: "6",
// //             },
// //             _text: String(inputValue),
// //           },
// //         },
// //         "cac:PartyLegalEntity": {
// //           "cbc:RegistrationName": {
// //             _text: "SHANDE",
// //           },
// //           "cac:RegistrationAddress": {
// //             "cac:AddressLine": {
// //               "cbc:Line": {
// //                 _text:
// //                   "PJ. Santa Isabel NRO. 253 URB. Fonavi TARAPOTO SAN MARTIN SAN MARTIN",
// //               },
// //             },
// //           },
// //         },
// //       },
// //     },
// //     "cac:TaxTotal": {
// //       "cbc:TaxAmount": {
// //         _attributes: {
// //           currencyID: "PEN",
// //         },
// //         _text: 0,
// //       },
// //       "cac:TaxSubtotal": [
// //         {
// //           "cbc:TaxableAmount": {
// //             _attributes: {
// //               currencyID: "PEN",
// //             },
// //             _text: 400,
// //           },
// //           "cbc:TaxAmount": {
// //             _attributes: {
// //               currencyID: "PEN",
// //             },
// //             _text: 0,
// //           },
// //           "cac:TaxCategory": {
// //             "cac:TaxScheme": {
// //               "cbc:ID": {
// //                 _text: "9997",
// //               },
// //               "cbc:Name": {
// //                 _text: "EXO",
// //               },
// //               "cbc:TaxTypeCode": {
// //                 _text: "VAT",
// //               },
// //             },
// //           },
// //         },
// //       ],
// //     },
// //     "cac:LegalMonetaryTotal": {
// //       "cbc:LineExtensionAmount": {
// //         _attributes: {
// //           currencyID: "PEN",
// //         },
// //         _text: 400,
// //       },
// //       "cbc:TaxInclusiveAmount": {
// //         _attributes: {
// //           currencyID: "PEN",
// //         },
// //         _text: 400,
// //       },
// //       "cbc:PayableAmount": {
// //         _attributes: {
// //           currencyID: "PEN",
// //         },
// //         _text: 400,
// //       },
// //     },
// //     "cac:PaymentTerms": [
// //       {
// //         "cbc:ID": {
// //           _text: "FormaPago",
// //         },
// //         "cbc:PaymentMeansID": {
// //           _text: "Contado",
// //         },
// //       },
// //     ],
// //     "cac:InvoiceLine": [
// //       {
// //         "cbc:ID": {
// //           _text: 1,
// //         },
// //         "cbc:InvoicedQuantity": {
// //           _attributes: {
// //             unitCode: "NIU",
// //           },
// //           _text: 1,
// //         },
// //         "cbc:LineExtensionAmount": {
// //           _attributes: {
// //             currencyID: "PEN",
// //           },
// //           _text: 400,
// //         },
// //         "cac:PricingReference": {
// //           "cac:AlternativeConditionPrice": {
// //             "cbc:PriceAmount": {
// //               _attributes: {
// //                 currencyID: "PEN",
// //               },
// //               _text: 400,
// //             },
// //             "cbc:PriceTypeCode": {
// //               _text: "01",
// //             },
// //           },
// //         },
// //         "cac:TaxTotal": {
// //           "cbc:TaxAmount": {
// //             _attributes: {
// //               currencyID: "PEN",
// //             },
// //             _text: 0,
// //           },
// //           "cac:TaxSubtotal": [
// //             {
// //               "cbc:TaxableAmount": {
// //                 _attributes: {
// //                   currencyID: "PEN",
// //                 },
// //                 _text: 400,
// //               },
// //               "cbc:TaxAmount": {
// //                 _attributes: {
// //                   currencyID: "PEN",
// //                 },
// //                 _text: 0,
// //               },
// //               "cac:TaxCategory": {
// //                 "cbc:Percent": {
// //                   _text: 0,
// //                 },
// //                 "cbc:TaxExemptionReasonCode": {
// //                   _text: "20",
// //                 },
// //                 "cac:TaxScheme": {
// //                   "cbc:ID": {
// //                     _text: "9997",
// //                   },
// //                   "cbc:Name": {
// //                     _text: "EXO",
// //                   },
// //                   "cbc:TaxTypeCode": {
// //                     _text: "VAT",
// //                   },
// //                 },
// //               },
// //             },
// //           ],
// //         },
// //         "cac:Item": {
// //           "cbc:Description": {
// //             _text: `${descripcion}`,
// //           },
// //           "cac:SellersItemIdentification": {
// //             "cbc:ID": {
// //               _text: `${tipo_pago}`,
// //             },
// //           },
// //         },
// //         "cac:Price": {
// //           "cbc:PriceAmount": {
// //             _attributes: {
// //               currencyID: "PEN",
// //             },
// //             _text: 400,
// //           },
// //         },
// //       },
// //     ],
// //   },
// // };
