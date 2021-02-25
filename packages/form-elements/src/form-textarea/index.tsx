import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
// import styles from './index.module.less';
export type FormTextareaProps = FormItemProps;

const FormTextarea: FC<FormTextareaProps> = ({
  name,
  label,
  rules,
  className,
}: FormTextareaProps) => {
  console.log(FormTextarea);
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      className={className}
    >
      <Input.TextArea />
    </Form.Item>
  );
};
export default FormTextarea;
