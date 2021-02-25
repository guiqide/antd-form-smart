import React, {
  ReactNode, useImperativeHandle, forwardRef,
} from 'react';
import { Form } from 'antd';
import { FormProps } from 'antd/lib/form';
// import styles from './index.module.less';
import ElementContext from '../context';

export interface TFormProps extends FormProps {
  initialValues?: any
  children: ReactNode
  onFinish?: ((values: any) => void) | undefined
}

export interface IChildFunc {
  sendSubmit: () => void
  sendReset: () => void
}

const TForm = forwardRef<TFormProps, any>((props: TFormProps, ref: any) => {
  console.log();
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const [form] = Form.useForm();
  useImperativeHandle(ref, () => ({
    sendSubmit() {
      form.submit();
    },
    sendReset() {
      form.resetFields();
    },
  }));

  return (
    <ElementContext.Provider value={{ formInstance: form }}>
      <Form
        layout={props.layout}
        form={form}
        initialValues={props.initialValues}
        onFinish={props.onFinish}
        onValuesChange={props.onValuesChange}
        onFinishFailed={onFinishFailed}
      >
        {props.children}
      </Form>
    </ElementContext.Provider>
  );
});

export default TForm;
