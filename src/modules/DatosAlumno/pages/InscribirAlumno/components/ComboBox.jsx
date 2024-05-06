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

export function DistritosSelect(props) {
  const { form, dato, disabled } = props;
  //console.log(dato);
  // let valor = dato.nombre;
  return (
    <FormField
      control={form.control}
      name="departamento"
      render={({ field }) => (
        <FormItem>
          <FormLabel>DISTRITO:</FormLabel>
          <Select
            // defaultValue={valor}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="SAN MARTIN">SAN MARTIN</SelectItem>
              <SelectItem value="LIMA">LIMA</SelectItem>
              <SelectItem value="TUMBES">TUMBES</SelectItem>
              <SelectItem value="PIURA">PIURA</SelectItem>
              <SelectItem value="."></SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
