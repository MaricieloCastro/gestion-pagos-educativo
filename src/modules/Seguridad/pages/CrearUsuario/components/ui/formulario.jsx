import React from "react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export default function formulario(props) {
  const { nameLabel, form, parametros, type, disabled, dato } = props;
  console.log(dato);
  function handleInputChange(event) {
    setInputValue(event.target.value.toUpperCase());
  }
  //Para convertir en mayuscula
  const [inputValue, setInputValue] = useState("");
  return (
    <FormField
      control={form.control}
      name={parametros}
      render={({ field }) => (
        //Nombre
        <FormItem>
          <FormLabel>{nameLabel}</FormLabel>
          <FormControl>
            <Input
              placeholder={dato}
              {...field}
              type={type}
              // value={inputValue}
              // onChange={handleInputChange}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
