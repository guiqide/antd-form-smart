import React, { FC } from 'react';
// import styles from './index.module.less';
import { Form, InputNumber } from 'antd';
import { FormItemProps } from 'antd/lib/form';
// import { InputNumberProps } from 'antd/lib/input-number';
export interface FormNumberProps extends FormItemProps {
  min: number
  max: number
}
const FormNumber: FC<FormNumberProps> = ({
  name,
  label,
  rules,
  className,
}: FormNumberProps) => (
  <Form.Item
    name={name}
    className={className}
    label={label}
    rules={rules}
  >
    <InputNumber />
  </Form.Item>
);

export default FormNumber;
