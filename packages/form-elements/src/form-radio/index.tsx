import React, { FC } from 'react';
import { Radio, Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';

export interface IRadioOption {
  label: string
  value: string | number
}
export interface FormRadioProp extends FormItemProps {
  minLength?: number
  maxLength?: number
  formStatus?: IFormStatus
  options: IRadioOption[]
}
const FormRadio: FC<FormRadioProp> = ({
  name,
  label,
  rules,
  options,
  className,
  formStatus = 'EDIT',
}: FormRadioProp) => (
  <Form.Item
    name={name}
    label={label}
    className={className}
    rules={formStatus === 'EDIT' ? rules : []}
  >
    <Radio.Group disabled={formStatus === 'SHOW'}>
      {options.map((item) => <Radio key={item.value} value={item.value}>{item.label}</Radio>)}
    </Radio.Group>
  </Form.Item>
);
export default FormRadio;
