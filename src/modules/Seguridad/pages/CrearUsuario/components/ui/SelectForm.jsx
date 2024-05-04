import * as React from "react";
import { useState, useEffect } from "react";
import { Spin } from "antd";
import axios from "axios";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function SelectForm(props) {
  const { form, dato, disabled, url, nameLabel, parametros } = props;
  //console.log(dato);
  let valor = dato.nombre;
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const select = await axios.get(`${url}`);
        setItem(select.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);
  if (loading) {
    return (
      <FormItem>
        <FormLabel>{nameLabel}</FormLabel>
        <Select>
          <FormControl>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem value="."></SelectItem>
          </SelectContent>
        </Select>
      </FormItem>
    );
  }

  return (
    <FormField
      control={form.control}
      name={parametros}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{nameLabel}</FormLabel>
          <Select
            defaultValue={valor}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {item.map((opcion) => (
                <SelectItem key={opcion.id} value={opcion.nombre}>
                  {opcion.nombre}
                </SelectItem>
              ))}
              <SelectItem value="."></SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
