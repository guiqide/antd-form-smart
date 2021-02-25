import React, {
  FC,
} from 'react';
import { Cascader, Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { CascaderOptionType } from 'antd/lib/cascader';
// import _ from 'lodash';
// import ElementContext from '../context';

type tplotOptions = {
  [key: string]: any
};

type namePath = (tplotOptions | string)[];
export interface FormCascaderProps extends FormItemProps {
  options: CascaderOptionType[]
  formStatus?: IFormStatus
  effectTransfer?: any // 在使用effectTransfer时，要保证初次渲染组建时，第一个参数即表单对象已经完成构建，否则会产生对回写时的bug，同时要保证name数组只有一个属性，这样可以方便取值
}
const FormCascader: FC<FormCascaderProps> = ({
  name,
  label,
  rules,
  options,
  noStyle,
  className,
  formStatus = 'EDIT',
}: FormCascaderProps) => (
  <Form.Item
    className={className}
    noStyle={noStyle}
    name={name}
    label={label}
    rules={formStatus === 'EDIT' ? rules : []}
  >
    <Cascader
      // onChange={changeHandler}
      disabled={formStatus === 'SHOW'}
      options={options}
    />
  </Form.Item>
);
// const { formInstance } = useContext(ElementContext);

// let formData: object | null;
// // 初始化前端需要的数组
// function initApiStruct(data: object | null) {
//   /* eslint-disable no-param-reassign */
//   if (name && typeof data === 'object' && data !== null) {
//     data[name as string] = [];
//   }
// }

// // 将effectTransfer的字段回填到name中
// function refillApiData(eApi: tplotOptions, data: tplotOptions) {
//   debugger;
//   const arr = eApi.map((val: string) => {
//     const res = val.split('.')
//       .reduce((acc, cur: string) => (acc ? acc[cur] : undefined), data);
//     return res;
//   });
//   const fileItem = formInstance?.getFieldInstance(name as string);
//   fileItem.setValue(arr);
// }

// // 根据effectTransfer第一个下标是否有值判断是否回填
// /* eslint-disable react-hooks/exhaustive-deps */
// useEffect(() => {
//   if (effectTransfer) {
//     console.log(JSON.stringify(effectTransfer));
//     const form: object | null = effectTransfer.shift();
//     formData = form;
//     if (!formData) {
//       initApiStruct(formData);
//     } else if (name) {
//       refillApiData(effectTransfer, formData);
//     }
//   }
//   // console.log(JSON.stringify(formData));
// }, []);

// // 当组件change时静默更新effectTransfer中的值
// const changeHandler = (value: any) => {
//   debugger;
//   const data = _.clone(formData);
//   /* eslint-disable no-unused-expressions */
//   let subIndex = 0;
//   effectTransfer?.forEach((val: string | undefined) => {
//     if (typeof val === 'string') {
//       val.split('.').reduce((acc: tplotOptions, cur: string, index: number, arr: string[]) => {
//         if (index < arr.length - 1) {
//           return acc ? acc[cur] : acc;
//         }
//         if (acc && value[subIndex] !== acc[cur]) {
//           acc[cur] = value[subIndex];
//         }
//         subIndex += 1;
//         return acc;
//       }, data);
//     }
//   });
//   console.log(value, JSON.stringify(data));
// };

export default FormCascader;
