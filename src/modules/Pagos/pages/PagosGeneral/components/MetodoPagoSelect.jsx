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

export function MetodoPagoSelect(props) {
  const { form, dato, disabled } = props;
  //console.log(dato);
  return (
    <FormField
      control={form.control}
      name="metodo_pago"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Metodo de Pago:</FormLabel>
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
              <SelectItem value="EFECTIVO">EFECTIVO</SelectItem>
              <SelectItem value="YAPE">YAPE</SelectItem>
              <SelectItem value="PLIN">PLIN</SelectItem>
              <SelectItem value="BCP">BCP</SelectItem>
              <SelectItem value="BBVA">BBVA</SelectItem>
              <SelectItem value="."></SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
