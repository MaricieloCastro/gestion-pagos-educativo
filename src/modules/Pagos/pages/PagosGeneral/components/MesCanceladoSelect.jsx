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

export function MesCanceladoSelect(props) {
  const { form, dato, disabled } = props;
  //console.log(dato);
  return (
    <FormField
      control={form.control}
      name="mes_cancelado"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Mes Cancelado:</FormLabel>
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
              <SelectItem value="ENERO">ENERO</SelectItem>
              <SelectItem value="FEBRERO">FEBRERO</SelectItem>
              <SelectItem value="MARZO">MARZO</SelectItem>
              <SelectItem value="ABRIL">ABRIL</SelectItem>
              <SelectItem value="MAYO">MAYO</SelectItem>
              <SelectItem value="JUNIO">JUNIO</SelectItem>
              <SelectItem value="JULIO">JULIO"</SelectItem>
              <SelectItem value="AGOSTO">AGOSTO</SelectItem>
              <SelectItem value="SEPTIEMBRE">SEPTIEMBRE</SelectItem>
              <SelectItem value="OCTUBRE">OCTUBRE</SelectItem>
              <SelectItem value="NOVIEMBRE">NOVIEMBRE</SelectItem>
              <SelectItem value="DICIEMBRE">DICIEMBRE</SelectItem>
              <SelectItem value="."></SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
