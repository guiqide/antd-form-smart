import React, { FC } from 'react';
import { Select, Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';

// import styles from './index.module.less';
// export interface FormSelectProps {
// }
const { Option } = Select;

export interface FormSelectProps extends FormItemProps {
  optionIsObject?: boolean
  optionsValue?: string | number
  optionsLabel?: string
  options: (string | object)[] | undefined | null
  placeholder?: string
  defaultValue?: string
  formStatus?: IFormStatus
}

const FormSelect: FC<FormSelectProps> = ({
  name,
  label,
  rules,
  options,
  placeholder,
  defaultValue,
  optionsValue,
  optionsLabel,
  className,
  noStyle,
  formStatus = 'EDIT',
}: FormSelectProps) => (
  <Form.Item
    name={name}
    label={label}
    noStyle={noStyle}
    className={className}
    rules={formStatus === 'EDIT' ? rules : []}
  >
    <Select
      showSearch
      disabled={formStatus === 'SHOW'}
      placeholder={placeholder}
      optionFilterProp="children"
      filterOption
      defaultValue={defaultValue}
    >
      {
          options?.map((item: string | any, index: number) => {
            if (typeof item === 'object' && item !== null && optionsValue && optionsLabel) {
              return <Option key={index} value={item[optionsValue]}>{item[optionsLabel]}</Option>;
            } if (typeof item === 'string') {
              return <Option key={index} value={item}>{item}</Option>;
            }
            return undefined;
          })
        }
    </Select>
  </Form.Item>
);
export default FormSelect;
