import React from "react";
import { useState, useEffect } from "react";
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
import { Button } from "@/components/ui/button";
export default function formularioPagos(props) {
  const { nameLabel, form, parametros, type, disabled, dato } = props;
  function handleInputChange(event) {
    setInputValue(event.target.value.toUpperCase());
  }

  //Para convertir en mayuscula
  //const [inputValue, setInputValue] = useState("");
  return (
    <FormField
      control={form.control}
      name={parametros}
      render={({ field }) => (
        //Nombre
        <FormItem>
          <FormLabel>{nameLabel}</FormLabel>
          <FormControl>
            <div className="flex">
              <Button type="button">PE S/</Button>
              <Input
                //placeholder={dato}
                {...field}
                type={type}
                //onChange={handleInputChange}
                disabled={disabled}
                //value={inputValue}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
