import * as React from "react";
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

export function CondicionVentaSelect(props) {
  const { form, dato, disabled } = props;
  //console.log(dato);
  return (
    <FormField
      control={form.control}
      name="condicion_venta"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Condicion de Venta:</FormLabel>
          <Select
            //defaultValue={valor}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="ALCONTADO">AL CONTADO</SelectItem>
              <SelectItem value="CREDITO">CRÉDITO</SelectItem>
              <SelectItem value=" "></SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
