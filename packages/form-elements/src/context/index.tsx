import React from 'react';
// import { createContainer } from 'unstated-next';
import { FormInstance } from 'antd/lib/form';

// function useFormElement() {
//   const [formInstance, setFormInstance] = useState<FormInstance | undefined>(undefined);
//   return {
//     formInstance,
//     setFormInstance,
//   };
// }
export interface IFormElement {
  formInstance: FormInstance | null
}
export default React.createContext<IFormElement>({
  formInstance: null,
});
