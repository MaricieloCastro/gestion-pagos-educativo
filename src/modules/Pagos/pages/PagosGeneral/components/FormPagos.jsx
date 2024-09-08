import { useState, useEffect, useContext } from "react";
import "./FormPagos.scss";
import DatosView from "./DatosView";
import { Button } from "@/components/ui/button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AvatarPagos from "./AvatarPagos";
import moment from "moment";
import { postAxios, putAxios } from "@/functions/methods";
import AuthContext from "@/contexts/AuthContext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
//URL
import {
  AREAURL,
  MESESURL,
  METODOPAGOURL,
  PAGOSURL,
  PENDIENTEALUMNOSURL,
} from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/ConstObj";
import { SelectForm } from "@/modules/Seguridad/pages/CrearUsuario/components/ui/SelectForm";
//Importaciones para el formularioI
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormularioPagos from "./formularioPagos";
import Formulario from "@/modules/Seguridad/pages/CrearUsuario/components/ui/formulario";
import { CondicionVentaSelect } from "./CondicionVentaSelect";
import Calendario from "@/modules/Seguridad/pages/CrearUsuario/compenetes/reuse/Calendario";
import { Link, useParams } from "react-router-dom";
import ModalPagosConfirmacion from "./ModalPagosConfirmacion";
import ModalCarga from "@/components/Modal/ModalCarga";
import ModalImprimir from "./ModalImprimir";
import { Input } from "antd";

import Escudo from "/public/img/escudoCiencias.png";
//Parametro ZOD
const FormSchemaII = z.object({
  ruc: z.string().min(0, {
    message: "campo obligatorio",
  }),
});
const FormSchema = z.object({
  año_lectivo: z.string().min(1, {
    message: "El campo tiene que ser llenado",
  }),
  mes_cancelado: z.string().min(0, {
    message: "campo obligatorio",
  }),
  area_desaprobada: z.string().min(0, {
    message: "campo obligatorio",
  }),
  fecha_vencimiento: z.string().min(1, {
    message: "campo obligatorio",
  }),
  condicion_venta: z.string().min(1, {
    message: "campo obligatorio",
  }),
  metodo_pago: z.string().min(1, {
    message: "campo obligatorio",
  }),
  descripcion: z.string().min(1, {
    message: "campo obligatorio",
  }),
  monto: z.string().min(1, {
    message: "campo obligatorio",
  }),
  monto_previo: z.string().min(1, {
    message: "campo obligatorio",
  }),
  descuento_aplicado: z.string().min(1, {
    message: "campo obligatorio",
  }),
  total_pagar: z.string().min(1, {
    message: "campo obligatorio",
  }),
  tipo_pago: z.string().min(1, {
    message: "campo obligatorio",
  }),
  um: z.string().min(1, {
    message: "campo obligatorio",
  }),
  precio_unitario: z.string().min(1, {
    message: "campo obligatorio",
  }),
  moneda: z.string().min(1, {
    message: "campo obligatorio",
  }),
  id_pendiente: z.string().min(0, {
    message: "campo obligatorio",
  }),
  codigo_recibo: z.string().min(0, {
    message: "campo obligatorio",
  }),
  id_Document: z.string().min(0, {
    message: "campo obligatorio",
  }),
  ruc: z.string().min(0, {
    message: "campo obligatorio",
  }),
  pagante: z.string().min(0, {
    message: "campo obligatorio",
  }),
  tipo_comprobante: z
    .string()
    .nonempty({ message: "Debe seleccionar al menos un tipo de comprobante" }),
});
export default function FormPagos(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { general, tipo_pago, pendientes, correlativo, fCorrelativo } = props;
  const { lastNumber, personaId, suggestedNumber } = correlativo;

  //console.log(correlativo);
  //console.log(lastNumber);
  //CONTROLO DE LOS PENDIENTES Y ACTUALIZACIÓN
  const { alumnos, crnograma_pago } = pendientes;
  const montosPagos = crnograma_pago.tipo_pago;

  const PendienteId = pendientes.id.toString();
  //console.log(PendienteId);
  const { descripcion, mes_cancelado } = crnograma_pago;
  const fechaDefault = moment();

  const fecha = fechaDefault.format("YYYY-MM-DD");
  const hora = fechaDefault.format("hh:mm:ss");
  const año = fechaDefault.format("YYYY");
  const param = useParams();
  const { pagos, id } = param;

  const { monto_previo, desc_aplicado } = pendientes;
  let desc = desc_aplicado;
  if (pagos == 2 || pagos == 4 || pagos == 3) {
    desc = 0;
  }
  const total_pagar = (montosPagos.monto - desc).toString();

  const um = "UNIDAD";
  const precio_unitario = monto_previo;
  const moneda = "SOLES";
  console.log(montosPagos.monto, precio_unitario);
  //Usetate del modal de carga
  const [modalLoading, setModalLoading] = useState(false);
  const [bDisable, setBDisable] = useState();

  //Lógica para designar los inpust que estarán disponibless

  const tipoPago = pagos;
  useEffect(() => {
    if (pagos == 1) {
      mensualidad();
    } else if (pagos == 2) {
      matricula();
    } else {
      cursoD();
    }
  }, []);

  //Para identificar los tipos de pagos
  const [comprobante, setComprobante] = useState("BOLETA");
  //Lógica para recargar la página cada que cambiamos el tipo de pago
  const [reload, setReload] = useState();
  //Funcion de recargar
  function recargar() {
    window.location.reload();
    setReload(false);
  }
  //Esa función solo se ejecutará si el valor de reload es True, y para
  //no crear un loop infinito entonces cambiamos de valor en la función a reload a false
  //no olvidemos que es un hook
  if (reload) {
    recargar();
  }

  const [numCom, setNumCom] = useState(`B001-${suggestedNumber}`);
  //useEfecct para el numCom
  console.log(comprobante);

  let numeroComprobante = numCom;
  console.log(numeroComprobante);
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      codigo_recibo: "",
      tipo_comprobante: "BOLETA",
      año_lectivo: año || "",
      mes_cancelado: "",
      area_desaprobada: "",
      fecha_vencimiento: fecha || "",
      condicion_venta: "ALCONTADO",
      metodo_pago: "EFECTIVO",
      descripcion: descripcion || "",
      monto: "",
      monto_previo: montosPagos.monto || "",
      descuento_aplicado: desc.toString() || "",
      total_pagar: total_pagar || "",
      tipo_pago: tipoPago,
      um: um || "",
      precio_unitario: precio_unitario || "",
      moneda: moneda || "",
      id_pendiente: PendienteId || "",
      id_Document: "",
      ruc: general.codigo || "",
      pagante: general.alumno || "",
    },
  });
  const formII = useForm({
    resolver: zodResolver(FormSchemaII),
    defaultValues: {
      ruc: "",
    },
  });

  //Captura el valor del input en el cual se registrar el RUC
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  //Para campturar los valors del input RUC
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    SUNATFATURA.documentBody["cac:AccountingCustomerParty"]["cac:Party"][
      "cac:PartyIdentification"
    ]["cbc:ID"]._text = e.target.value;
  };
  //STATE DE PAGANTE RUC
  const [paganteRuc, setPaganteRuc] = useState("");
  //Para la captura de los valores que introduzco en el input de dirección
  const [inputDireccion, setInputDireccion] = useState();
  const handleInputDirección = (e) => {
    setInputDireccion(e.target.value);
    SUNATFATURA.documentBody["cac:AccountingCustomerParty"]["cac:Party"][
      "cac:PartyLegalEntity"
    ]["cac:RegistrationAddress"]["cac:AddressLine"]["cbc:Line"]._text =
      e.target.value;
    console.log(e.target.value);
    SUNATFATURA.documentBody["cac:AccountingCustomerParty"]["cac:Party"][
      "cac:PartyLegalEntity"
    ]["cbc:RegistrationName"]._text = paganteRuc;
    SUNAT.documentBody["cac:AccountingCustomerParty"]["cac:Party"][
      "cac:PartyLegalEntity"
    ]["cac:RegistrationAddress"]["cac:AddressLine"]["cbc:Line"]._text =
      e.target.value;
  };

  const onApiReniec = async () => {
    const value = {
      ruc: inputValue,
    };
    try {
      console.log(value);
      //Enviamos el documento con el link y el cuerpo de la boleta
      const response = await axios.post(
        "http://127.0.0.1:8000/caja/api/reniec/pagos",
        value
      );
      console.log("operacion exitosa:", response.data);
      console.log(response.data.data.razonSocial);
      form.setValue("pagante", response.data.data.razonSocial);
      setPaganteRuc(response.data.data.razonSocial);
      form.setValue("ruc", response.data.data.numeroDocumento);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };

  useEffect(() => {
    if (comprobante == "BOLETA") {
      setNumCom(`B001-${suggestedNumber}`);
      form.setValue("codigo_recibo", numCom);
    } else {
      setNumCom(`F001-${fCorrelativo.suggestedNumber}`);
      form.setValue("codigo_recibo", numCom);
    }
  }, [suggestedNumber, numCom, setNumCom, comprobante]);
  console.log(numCom);

  // PARA AGRAGAR LOS CAMPOS SEGÚN EL TIPO DE COMPROBANTE
  const [selectedValue, setSelectedValue] = useState(false);
  //Esto sirve para que se muestre y se bloqueen los inputs según el tipo de comprobante

  //tipos de pagos
  const [buttonCD, setButtonCD] = useState();
  const [buttonM, setButtonM] = useState();
  const {
    alumno,
    codigo,
    beneficio,
    turno,
    grado,
    seccion,
    estado,
    ruta_fotografia,
  } = general;

  const [tPago, setTPago] = useState();
  function mensualidad() {
    setButtonCD(true);
    setButtonM(false);
    setTPago("MENSUALIDAD");
  }
  function matricula() {
    setButtonCD(true);
    setButtonM(true);
    setTPago("MATRICULA");
  }
  function cursoD() {
    setButtonCD(false);
    setButtonM(true);
    setTPago("CURSO DESAPROBADO");
  }
  //console.log(buttonCD, buttonM);
  //Se actualiza el token
  //Cambia de color el label
  const [Ruc, SetRuc] = useState();
  const [paga, SetPaga] = useState();
  let { authTokens, user } = useContext(AuthContext);
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + String(authTokens.access),
  };
  async function onSubmit(values) {
    console.log(values);
    SetRuc(values.ruc);
    SetPaga(values.pagante);
    delete values.año_lectivo;
    delete values.descuento_aplicado;
    delete values.monto_previo;
    delete values.descripcion;
    delete values.tipo_pago;
    delete values.total_pagar;
    delete values.mes_cancelado;
    delete values.pagante;
    delete values.ruc;
    console.log(values);
    await postAxios(PAGOSURL, values, headers, setReload, reload);
  }

  const ButtonView = true;
  //Lógica para no rendirizar los botones de pagos
  const [mostrarBotones, setMostrarBotones] = useState(true);
  const [modalPrint, setModalPrint] = useState(false);
  useEffect(() => {
    // Lógica para determinar si mostrar o no el botón
    const usuarioEnInicio = ButtonView; // Cambia esto a tu lógica real
    if (usuarioEnInicio) {
      setMostrarBotones(true);
    } else {
      setMostrarBotones(false);
    }
  }, []);
  const [urlBoleta, seturlBoleta] = useState();
  const [SUNAT, setSunat] = useState({
    personaId: "665248a370419f0015e8a074",
    personaToken:
      "DEV_f1qz2uXCRNohX1UBx1TpTbvUEIce7Owu3f1efWwVwyGKkrZcQrckN8ARE2LRHhpx",
    fileName: `20450406156-03-B001-${suggestedNumber}`,
    documentBody: {
      "cbc:UBLVersionID": {
        _text: "2.1",
      },
      "cbc:CustomizationID": {
        _text: "2.0",
      },
      "cbc:ID": {
        _text: `B001-${suggestedNumber}`,
      },
      "cbc:IssueDate": {
        _text: fecha,
      },
      "cbc:IssueTime": {
        _text: hora,
      },
      "cbc:InvoiceTypeCode": {
        _attributes: {
          listID: "0101",
        },
        _text: "03",
      },
      "cbc:Note": [
        {
          _text: `${precio_unitario} CON 00/100 SOLES`,
          _attributes: {
            languageLocaleID: "1000",
          },
        },
        {
          _text: descripcion,
        },
      ],
      "cbc:DocumentCurrencyCode": {
        _text: "PEN",
      },
      "cac:AccountingSupplierParty": {
        "cac:Party": {
          "cac:PartyIdentification": {
            "cbc:ID": {
              _attributes: {
                schemeID: "6",
              },
              _text: "20450406156",
            },
          },
          "cac:PartyName": {
            "cbc:Name": {
              _text: "Colegio Ciencias",
            },
          },
          "cac:PartyLegalEntity": {
            "cbc:RegistrationName": {
              _text: "INSTITUCION EDUCATIVA  PARTICULAR CIENCIAS E.I.R.L.",
            },
            "cac:RegistrationAddress": {
              "cbc:AddressTypeCode": {
                _text: "0000",
              },
              "cac:AddressLine": {
                "cbc:Line": {
                  _text:
                    "JR. PERU 908 CON JR. ESPAÑA NRO. 908 TARAPOTO SAN MARTIN SAN MARTIN",
                },
              },
            },
          },
        },
      },
      "cac:AccountingCustomerParty": {
        "cac:Party": {
          "cac:PartyIdentification": {
            "cbc:ID": {
              _attributes: {
                schemeID: "1",
              },
              _text: codigo,
            },
          },
          "cac:PartyLegalEntity": {
            "cbc:RegistrationName": {
              _text: alumno,
            },
            "cac:RegistrationAddress": {
              "cac:AddressLine": {
                "cbc:Line": {
                  _text: inputDireccion,
                },
              },
            },
          },
        },
      },
      "cac:TaxTotal": {
        "cbc:TaxAmount": {
          _attributes: {
            currencyID: "PEN",
          },
          _text: 0,
        },
        "cac:TaxSubtotal": [
          {
            "cbc:TaxableAmount": {
              _attributes: {
                currencyID: "PEN",
              },
              _text: Number(desc),
            },
            "cbc:TaxAmount": {
              _attributes: {
                currencyID: "PEN",
              },
              _text: 0,
            },
            "cac:TaxCategory": {
              "cac:TaxScheme": {
                "cbc:ID": {
                  _text: "9997",
                },
                "cbc:Name": {
                  _text: "EXO",
                },
                "cbc:TaxTypeCode": {
                  _text: "VAT",
                },
              },
            },
          },
        ],
      },
      "cac:LegalMonetaryTotal": {
        "cbc:LineExtensionAmount": {
          _attributes: {
            currencyID: "PEN",
          },
          _text: Number(desc),
        },
        "cbc:TaxInclusiveAmount": {
          _attributes: {
            currencyID: "PEN",
          },
          _text: Number(desc),
        },
        "cbc:PayableAmount": {
          _attributes: {
            currencyID: "PEN",
          },
          _text: Number(total_pagar),
        },
      },
      "cac:InvoiceLine": [
        {
          "cbc:ID": {
            _text: 1,
          },
          "cbc:InvoicedQuantity": {
            _attributes: {
              unitCode: "NIU",
            },
            _text: 1,
          },
          "cbc:LineExtensionAmount": {
            _attributes: {
              currencyID: "PEN",
            },
            _text: Number(montosPagos.monto),
          },
          "cac:PricingReference": {
            "cac:AlternativeConditionPrice": {
              "cbc:PriceAmount": {
                _attributes: {
                  currencyID: "PEN",
                },
                _text: Number(montosPagos.monto),
              },
              "cbc:PriceTypeCode": {
                _text: "01",
              },
            },
          },
          "cac:TaxTotal": {
            "cbc:TaxAmount": {
              _attributes: {
                currencyID: "PEN",
              },
              _text: 0,
            },
            "cac:TaxSubtotal": [
              {
                "cbc:TaxableAmount": {
                  _attributes: {
                    currencyID: "PEN",
                  },
                  _text: Number(montosPagos.monto),
                },
                "cbc:TaxAmount": {
                  _attributes: {
                    currencyID: "PEN",
                  },
                  _text: 0,
                },
                "cac:TaxCategory": {
                  "cbc:Percent": {
                    _text: 0,
                  },
                  "cbc:TaxExemptionReasonCode": {
                    _text: "20",
                  },
                  "cac:TaxScheme": {
                    "cbc:ID": {
                      _text: "9997",
                    },
                    "cbc:Name": {
                      _text: "EXO",
                    },
                    "cbc:TaxTypeCode": {
                      _text: "VAT",
                    },
                  },
                },
              },
            ],
          },
          "cac:Item": {
            "cbc:Description": {
              _text: "",
            },
            "cac:SellersItemIdentification": {
              "cbc:ID": {
                _text: "P4",
              },
            },
          },
          "cac:Price": {
            "cbc:PriceAmount": {
              _attributes: {
                currencyID: "PEN",
              },
              _text: Number(precio_unitario),
            },
          },
        },
      ],
    },
  });
  //Variable para la SUNAT
  const [SUNATFATURA, setSUNATFACTURA] = useState({
    personaId: "665248a370419f0015e8a074",
    personaToken:
      "DEV_f1qz2uXCRNohX1UBx1TpTbvUEIce7Owu3f1efWwVwyGKkrZcQrckN8ARE2LRHhpx",
    fileName: `20450406156-01-F001-${fCorrelativo.suggestedNumber}`,
    documentBody: {
      "cbc:UBLVersionID": {
        _text: "2.1",
      },
      "cbc:CustomizationID": {
        _text: "2.0",
      },
      "cbc:ID": {
        _text: `F001-${fCorrelativo.suggestedNumber}`,
      },
      "cbc:IssueDate": {
        _text: fecha,
      },
      "cbc:IssueTime": {
        _text: hora,
      },
      "cbc:InvoiceTypeCode": {
        _attributes: {
          listID: "0101",
        },
        _text: "01",
      },
      "cbc:Note": [
        {
          _text: "CUATROCIENTOS  CON 00/100 SOLES",
          _attributes: {
            languageLocaleID: "1000",
          },
        },
      ],
      "cbc:DocumentCurrencyCode": {
        _text: "PEN",
      },
      "cac:AccountingSupplierParty": {
        "cac:Party": {
          "cac:PartyIdentification": {
            "cbc:ID": {
              _attributes: {
                schemeID: "6",
              },
              _text: "20450406156",
            },
          },
          "cac:PartyName": {
            "cbc:Name": {
              _text: "Colegio Ciencias",
            },
          },
          "cac:PartyLegalEntity": {
            "cbc:RegistrationName": {
              _text: "INSTITUCION EDUCATIVA  PARTICULAR CIENCIAS E.I.R.L.",
            },
            "cac:RegistrationAddress": {
              "cbc:AddressTypeCode": {
                _text: "0000",
              },
              "cac:AddressLine": {
                "cbc:Line": {
                  _text:
                    "JR. PERU 908 CON JR. ESPAÑA NRO. 908 TARAPOTO SAN MARTIN SAN MARTIN",
                },
              },
            },
          },
        },
      },
      "cac:AccountingCustomerParty": {
        "cac:Party": {
          "cac:PartyIdentification": {
            "cbc:ID": {
              _attributes: {
                schemeID: "6",
              },
              _text: "RUC",
            },
          },
          "cac:PartyLegalEntity": {
            "cbc:RegistrationName": {
              _text: "SHANDE",
            },
            "cac:RegistrationAddress": {
              "cac:AddressLine": {
                "cbc:Line": {
                  _text:
                    //Este valor cambia con los eventos
                    "PJ. Santa Isabel NRO. 253 URB. Fonavi TARAPOTO SAN MARTIN SAN MARTIN",
                },
              },
            },
          },
        },
      },
      "cac:TaxTotal": {
        "cbc:TaxAmount": {
          _attributes: {
            currencyID: "PEN",
          },
          _text: 0,
        },
        "cac:TaxSubtotal": [
          {
            "cbc:TaxableAmount": {
              _attributes: {
                currencyID: "PEN",
              },
              _text: Number(montosPagos.monto),
            },
            "cbc:TaxAmount": {
              _attributes: {
                currencyID: "PEN",
              },
              _text: 0,
            },
            "cac:TaxCategory": {
              "cac:TaxScheme": {
                "cbc:ID": {
                  _text: "9997",
                },
                "cbc:Name": {
                  _text: "EXO",
                },
                "cbc:TaxTypeCode": {
                  _text: "VAT",
                },
              },
            },
          },
        ],
      },
      "cac:LegalMonetaryTotal": {
        "cbc:LineExtensionAmount": {
          _attributes: {
            currencyID: "PEN",
          },
          _text: Number(total_pagar),
        },
        "cbc:TaxInclusiveAmount": {
          _attributes: {
            currencyID: "PEN",
          },
          _text: Number(total_pagar),
        },
        "cbc:PayableAmount": {
          _attributes: {
            currencyID: "PEN",
          },
          _text: Number(total_pagar),
        },
      },
      "cac:PaymentTerms": [
        {
          "cbc:ID": {
            _text: "FormaPago",
          },
          "cbc:PaymentMeansID": {
            _text: "Contado",
          },
        },
      ],
      "cac:InvoiceLine": [
        {
          "cbc:ID": {
            _text: 1,
          },
          "cbc:InvoicedQuantity": {
            _attributes: {
              unitCode: "NIU",
            },
            _text: 1,
          },
          "cbc:LineExtensionAmount": {
            _attributes: {
              currencyID: "PEN",
            },
            _text: Number(montosPagos.monto),
          },
          "cac:PricingReference": {
            "cac:AlternativeConditionPrice": {
              "cbc:PriceAmount": {
                _attributes: {
                  currencyID: "PEN",
                },
                _text: Number(montosPagos.monto),
              },
              "cbc:PriceTypeCode": {
                _text: "01",
              },
            },
          },
          "cac:TaxTotal": {
            "cbc:TaxAmount": {
              _attributes: {
                currencyID: "PEN",
              },
              _text: 0,
            },
            "cac:TaxSubtotal": [
              {
                "cbc:TaxableAmount": {
                  _attributes: {
                    currencyID: "PEN",
                  },
                  _text: Number(montosPagos.monto),
                },
                "cbc:TaxAmount": {
                  _attributes: {
                    currencyID: "PEN",
                  },
                  _text: 0,
                },
                "cac:TaxCategory": {
                  "cbc:Percent": {
                    _text: 0,
                  },
                  "cbc:TaxExemptionReasonCode": {
                    _text: "20",
                  },
                  "cac:TaxScheme": {
                    "cbc:ID": {
                      _text: "9997",
                    },
                    "cbc:Name": {
                      _text: "EXO",
                    },
                    "cbc:TaxTypeCode": {
                      _text: "VAT",
                    },
                  },
                },
              },
            ],
          },
          "cac:Item": {
            "cbc:Description": {
              _text: `${descripcion}`,
            },
            // "cac:SellersItemIdentification": {
            //   "cbc:ID": {
            //     _text: tPago,
            //   },
            // },
          },
          "cac:Price": {
            "cbc:PriceAmount": {
              _attributes: {
                currencyID: "PEN",
              },
              _text: 400,
            },
          },
        },
      ],
    },
  });

  const [bodySunat, setBodySunat] = useState(SUNAT);
  const handleSelectChange = (value) => {
    if (value == "FACTURA") {
      setSelectedValue(true);
      setComprobante("FACTURA");
      form.setValue("pagante", "");
      form.setValue("ruc", "");
      setBodySunat(SUNATFATURA);
    } else {
      setSelectedValue(false);
      form.setValue("pagante", alumno);
      form.setValue("ruc", codigo);
      setComprobante("BOLETA");
      setBodySunat(SUNAT);

      form.setValue("codigo_recibo", numCom);
    }
  };
  console.log(bodySunat);
  //Logica para API SUNAR
  const ApiSunat = async () => {
    try {
      //Enviamos el documento con el link y el cuerpo de la boleta
      const response = await axios.post(
        "https://back.apisunat.com/personas/v1/sendBill",
        bodySunat
      );
      console.log("operacion exitosa:", response.data);
      //Guardamos el id del documento que hemos generado
      const documentId = response.data.documentId;
      //Actualizamos el vamor del id documento para eniar a la base de datos
      form.setValue("id_Document", documentId);
      //Ejecutamos el post a PAGOS
      form.handleSubmit(onSubmit)();
      console.log(documentId);
      // Generamos el archiv PDF
      const responses = await axios.get(
        `https://back.apisunat.com/documents/${documentId}/getById`,
        bodySunat
      );
      console.log("operacion exitosa:", responses.data);
      const file = responses.data.fileName;
      console.log(file);
      seturlBoleta(
        `https://back.apisunat.com/documents/${documentId}/getPDF/A4/${file}.pdf`
      );
      //window.open(url, "_blank");
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };
  function ConsoleLog(value) {
    setIsModalOpen(true), console.log(value);
  }
  function Validacion() {
    form.handleSubmit(ConsoleLog)();
  }
  const [vuelto, setVuelto] = useState(0);

  //Evento para sacar el valor de input con el Hook Form
  const handleValueChange = (e) => {
    const { value } = e.target;
    const numericValue = parseFloat(value) || 0;
    const vuelto = total_pagar - numericValue;
    if (vuelto < 1) {
      setBDisable(false);
    } else {
      setBDisable(true);
    }
    if (numericValue == 0) {
      setVuelto(0);
      setBDisable(false);
    } else {
      setVuelto(vuelto); // Resta el valor ingresado del total
    }
  };
  console.log(vuelto);
  return (
    <Form {...form} {...formII}>
      <form>
        <div className="pagos">
          <div className="pagos-alumno">
            <div className="pagos-alumno_foto">
              <AvatarPagos estado={estado} Foto={ruta_fotografia} />
            </div>
            <div className="pagos-alumno_datos">
              <div className="pagos-alumno_datos-nombres">{alumno}</div>
              <DatosView celda="DNI:" dato={codigo} />
              <DatosView celda="BENEFIO:" dato={beneficio}></DatosView>
              <DatosView celda="TURNO:" dato={turno}></DatosView>
              <div className="pagos-alumno_datos-año">
                <DatosView celda="GRADO:" dato={grado} />
                <DatosView celda="SECCIÓN:" dato={seccion} />
              </div>
            </div>
            <div className="pagos-alumno_botones">
              <div className="pagos-alumno_botones-informacion">
                <Button type="button">
                  <ModeEditIcon /> INFORMACIÓN
                </Button>
              </div>
              {mostrarBotones && (
                <>
                  <Button type="button">HISTORIAL DE PAGOS</Button>
                  <Link to={`http://localhost:5173/pagos/${id}/1`}>
                    <Button
                      onClick={() => {
                        setReload(true);
                        mensualidad();
                      }}
                      type="button"
                    >
                      MENSUALIDAD
                    </Button>
                  </Link>
                  <Link to={`http://localhost:5173/pagos/${id}/2`}>
                    <Button
                      type="button"
                      onClick={() => {
                        setReload(true);
                        matricula();
                      }}
                    >
                      MATRICULA
                    </Button>
                  </Link>
                  <Link to={`http://localhost:5173/pagos/${id}/3`}>
                    <Button
                      type="button"
                      onClick={() => {
                        setReload(true);
                        cursoD();
                      }}
                    >
                      CURSO DESAPROBADO
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="pagos-dato">
            <div className="pagos-dato_body">
              <div className="pagos-dato_body-titulo">
                <div className="pagos-dato_body-titulo-colegio">
                  <img src={Escudo}></img>
                  <section className="pagos-dato_body-titulo-colegio_datos">
                    <h2>I.E.P "CIENCIAS"</h2>
                    <p>INSTITUCION EDUCATIVA PARTICULAR CIENCIAS E.I.R.L.</p>
                    <p>
                      JR. PERU 908 CON JR. ESPAÑA NRO. 908 TARAPOTO SAN MARTIN
                      SAN MARTIN
                    </p>
                  </section>
                </div>
                <div className="pagos-dato_body-titulo-recibo">
                  <div className="pagos-dato_body-titulo-recibo_datos">
                    <h2>R.U.C. N° 20450406156</h2>
                    <h2 className="comprobante">
                      <FormField
                        control={form.control}
                        name="tipo_comprobante"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              defaultValue="BOLETA"
                              onValueChange={(value) => {
                                field.onChange(value),
                                  handleSelectChange(value);
                              }}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="BOLETA">BOLETA</SelectItem>
                                <SelectItem value="FACTURA">FACTURA</SelectItem>
                                <SelectItem value=" "></SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      ELECTRÓNICA
                    </h2>
                    <Formulario
                      form={form}
                      nameLabel=""
                      parametros="codigo_recibo"
                      disabled="true"
                    />
                  </div>
                </div>
              </div>
              <div className="pagos-dato_body-pagante">
                <div className="pagos-dato_body-pagante-uno">
                  <div className="inputs-font">
                    <FontAwesomeIcon icon={faUser} className="fuente ml-2" />
                    {/* <Input placeholder="Alumno" value={alumno} /> */}
                    <Formulario
                      form={form}
                      nameLabel=""
                      parametros="pagante"
                      dato="Pagante"
                    />
                  </div>
                  <div className="inputs-font">
                    {/* <Input placeholder="Número de Documento" value={codigo} /> */}
                    <Button type="button" onClick={onApiReniec}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>

                    <FormField
                      control={form.control}
                      name="ruc"
                      render={({ field }) => (
                        //Nombre
                        <FormItem>
                          <FormControl>
                            <Input
                              className="pt-3"
                              placeholder="R.U.C"
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                handleInputChange(e);
                              }}
                              //value={inputValue}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="pagos-dato_body-pagante-dos">
                  <div className="inputs-font">
                    <FontAwesomeIcon icon={faHouse} className="ml-2" />
                    <Input
                      placeholder="Dirección (opcional)"
                      className="direccion"
                      onChange={(e) => {
                        handleInputDirección(e);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="pagos-dato_body-recibo">
                <div className="pagos-dato_body-recibo-date">
                  <section>
                    <Calendario
                      className="flex-container"
                      nameLabel="Fecha de Emision:"
                      form={form}
                      disabled={true}
                      name="fecha_pago"
                    />
                  </section>
                  <section>
                    {selectedValue && (
                      <Calendario
                        className="flex-container"
                        nameLabel="Fecha de Vencimiento:"
                        form={form}
                        name="fecha_pago"
                        disabled={true}
                      />
                    )}
                  </section>
                </div>
                <div className="pagos-dato_body-recibo-table">
                  <div className="pagos-dato_body-recibo-table-uno">
                    <div>
                      <h2>CANT</h2>
                    </div>
                    <div>
                      <h2>TIPO DE PAGO</h2>
                    </div>
                    <div>
                      <h2>DESCRIPCIÓN</h2>
                    </div>
                    <div>
                      <h2>P.UNI</h2>
                    </div>
                    <div>
                      <h2>TOTAL</h2>
                    </div>
                  </div>
                  <div className="pagos-dato_body-recibo-table-dos">
                    <div>
                      <Input className="mt-2" value="1" disabled="true"></Input>
                    </div>
                    <div>
                      <Input
                        className="mt-2"
                        value={tPago}
                        disabled="true"
                      ></Input>
                    </div>
                    <div>
                      <Formulario
                        form={form}
                        nameLabel=""
                        parametros="descripcion"
                        disabled={true}
                      />
                    </div>
                    <div>
                      <h2>
                        <Formulario
                          form={form}
                          nameLabel=""
                          parametros="monto_previo"
                          disabled={true}
                        />
                      </h2>
                    </div>
                    <div>
                      <h2>
                        <Formulario
                          form={form}
                          nameLabel=""
                          parametros="monto_previo"
                          disabled={true}
                        />
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="pagos-dato_body-recibo-montos">
                  <div className="pagos-dato_body-recibo-montos-cero">
                    <SelectForm
                      form={form}
                      disabled={true}
                      url={MESESURL}
                      dato={mes_cancelado}
                      nameLabel="Mes Cancelado:"
                      parametros="mes_cancelado"
                    />
                    <SelectForm
                      form={form}
                      disabled={buttonCD}
                      url={AREAURL}
                      dato=""
                      nameLabel="Area  Desaprobada:"
                      parametros="area_desaprobada"
                    />
                    <SelectForm
                      form={form}
                      url={METODOPAGOURL}
                      dato="EFECTIVO"
                      nameLabel="Metodo de Pago:"
                      parametros="metodo_pago"
                    />
                    <CondicionVentaSelect form={form} dato="ALCONTADO" />
                  </div>
                  <div className="pagos-dato_body-recibo-montos-cerouno">
                    <div className="pagos-dato_body-recibo-montos-dos">
                      <section>
                        <Formulario
                          form={form}
                          nameLabel="Descuento Aplicado"
                          parametros="descuento_aplicado"
                          disabled={true}
                        />
                      </section>
                      <section>
                        <FormField
                          control={form.control}
                          name="monto"
                          render={({ field }) => (
                            //Nombre

                            <FormItem>
                              <FormLabel>Monto:</FormLabel>
                              <FormControl>
                                <div className="flex">
                                  <Input
                                    //placeholder={dato}
                                    {...field}
                                    type="number"
                                    //onChange={handleInputChange}
                                    //disabled="false"
                                    onChange={(e) => {
                                      field.onChange(e);
                                      handleValueChange(e);
                                    }}
                                    //value={inputValue}
                                  />
                                </div>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </section>
                      <section>
                        <div className="space-y-0">
                          <label>Vuelto:</label>
                          <p>S/{-1 * vuelto}</p>
                        </div>
                      </section>
                      <section>
                        <Formulario
                          form={form}
                          nameLabel="Total a Pagar"
                          parametros="total_pagar"
                          disabled={true}
                        />
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagos-dato_body-recibo-botones">
                <div className="pagos-dato_body-recibo-botones-uno">
                  <Button
                    className="registrar-pago"
                    disabled={bDisable}
                    type="button"
                    onClick={() => {
                      Validacion();
                    }} //{ApiSunat}
                  >
                    Emitir Recibo de Pago
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="pagos-dato">
            <div className="pagos-dato_uno">
              <div className="pagos-dato_uno-uno">
                <FormField
                  control={form.control}
                  name="tipo_comprobante"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de Comprobante::</FormLabel>
                      <Select
                        defaultValue="BOLETA"
                        onValueChange={(value) => {
                          field.onChange(value), handleSelectChange(value);
                        }}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="BOLETA">BOLETA</SelectItem>
                          <SelectItem value="FACTURA">FACTURA</SelectItem>
                          <SelectItem value=" "></SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                {selectedValue && (
                  <Formulario form={form} nameLabel="RUC:" parametros="ruc" />
                )}
                <Formulario
                  form={form}
                  nameLabel="Pagante:"
                  parametros="pagante"
                />
                <SelectForm
                  form={form}
                  disabled={true}
                  url={MESESURL}
                  dato={mes_cancelado}
                  nameLabel="Mes Cancelado:"
                  parametros="mes_cancelado"
                />

                <FormularioPagos
                  form={form}
                  nameLabel="Descuento Aplicado:"
                  parametros="descuento_aplicado"
                  type="number"
                  disabled={true}
                />
              </div>
              <div className="pagos-dato_uno-dos">
                <Calendario
                  className="flex-container"
                  nameLabel="Fecha de Pago:"
                  form={form}
                  disabled={true}
                  name="fecha_pago"
                />
                {selectedValue && (
                  <Calendario
                    className="flex-container"
                    nameLabel="Fecha de Vencimiento:"
                    form={form}
                    name="fecha_pago"
                    disabled={true}
                  />
                )}
                <SelectForm
                  form={form}
                  url={METODOPAGOURL}
                  dato="EFECTIVO"
                  nameLabel="Metodo de Pago:"
                  parametros="metodo_pago"
                />
                <SelectForm
                  form={form}
                  disabled={buttonCD}
                  url={AREAURL}
                  dato=""
                  nameLabel="Area  Desaprobada:"
                  parametros="area_desaprobada"
                />
                
                {/* <FormularioPagos
                  form={form}
                  nameLabel="Monto:"
                  parametros="monto"
                  onValueChange={handleValueChange}
                  disabled={false}
                  type="number"
                /> 
              </div>
              <div className="pagos-dato_uno-tres">
                <Formulario
                  form={form}
                  nameLabel="Numero de Comprobante:"
                  //dato={numCom}
                  disabled={true}
                  parametros="codigo_recibo"
                />
                <CondicionVentaSelect form={form} dato="ALCONTADO" />
                <FormularioPagos
                  form={form}
                  nameLabel="Monto Previo:"
                  parametros="monto_previo"
                  disabled={true}
                  type="number"
                />
                
                <div>
                  <h2 className="flex gap-2 text-white  ">
                    Vuelto: <p>S/{-1 * vuelto}</p>
                  </h2>
                </div>
              </div>
            </div>
            <div className="pagos-dato_dos">
              
            </div>
           
          </div> */}
        </div>
      </form>
      <ModalPagosConfirmacion
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        func={ApiSunat}
        funcII={onSubmit}
        setModalLoading={setModalLoading}
        form={form}
        modalPrint={setModalPrint}
      />
      <ModalCarga modalLoading={modalLoading} titulo="Realizando Pago" />
      <ModalImprimir
        modalPrint={modalPrint}
        setModalPrint={setModalPrint}
        titulo="Boleta de Pago"
        id={general.id}
        urlBoleta={urlBoleta}
      />
    </Form>
  );
}
