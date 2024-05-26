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

export function AreaDesaprobadaSelect(props) {
  const { form, dato, disabled } = props;
  //console.log(dato);
  return (
    <FormField
      control={form.control}
      name="area_desaprobada"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Area Desaprobada:</FormLabel>
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
              <SelectItem value="MATEMÁTICA">MATEMÁTICA</SelectItem>
              <SelectItem value="COMUNICACIÓN">COMUNICACIÓN</SelectItem>
              <SelectItem value="."></SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}
