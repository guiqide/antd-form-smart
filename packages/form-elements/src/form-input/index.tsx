import React, { FC } from 'react';
import { Input, Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';

export interface FormInputProps extends FormItemProps {
  type?: InputProps['type']
  minLength?: number
  maxLength?: number
  formStatus?: IFormStatus
}
const FormInput: FC<FormInputProps> = ({
  name,
  label,
  rules,
  type,
  noStyle,
  className,
  dependencies,
  formStatus = 'EDIT',
}: FormInputProps) => (
  <Form.Item
    className={className}
    name={name}
    noStyle={noStyle}
    label={label}
    dependencies={dependencies}
    rules={formStatus === 'EDIT' ? rules : []}
  >
    <Input disabled={formStatus === 'SHOW'} type={type} />
  </Form.Item>
);
export default FormInput;
