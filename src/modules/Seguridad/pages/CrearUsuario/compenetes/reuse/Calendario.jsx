import React from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import { date } from "zod";

const onChange = (date, dateString, onChange) => {
  console.log(dateString);
};
export default function Calendario(props) {
  const { nameLabel, form, disabled, dato, name } = props;
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        //Nombre
        <FormItem>
          <FormLabel>{nameLabel}</FormLabel>
          <FormControl>
            <Space direction="vertical">
              <DatePicker
                //defaultPickerValue="12/02-04"
                onChange={(date, dateString) => {
                  field.onChange(dateString);
                }}
                format="YYYY-MM-DD"
                defaultValue={moment(dato)}
                placeholder=""
                disabled={disabled}
              />
            </Space>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
