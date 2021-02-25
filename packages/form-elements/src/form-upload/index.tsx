import React, { FC, useState, useEffect } from 'react';
import {
  Upload, Form,
} from 'antd';
import { LoadingOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons';
import { FormItemProps } from 'antd/lib/form';
import { UploadProps, UploadChangeParam } from 'antd/lib/upload';
import configs from 'configs';
import styles from './index.module.less';

export interface FormUploadProps extends FormItemProps {
  accept: UploadProps['accept']
  action: UploadProps['action']
  url?: string
  width?: string
  height?: string
  formStatus?: IFormStatus
  // onChange: UploadProps['onChange']
}
const FormUpload: FC<FormUploadProps> = ({
  name,
  label,
  rules,
  accept,
  action,
  width,
  height,
  formStatus,
  className,
  // onChange,
  url,
}: FormUploadProps) => {
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  // const normFile = (file: any) => {
  //   console.log(file);
  //   return file.response;
  // };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
    if (url) {
      setImgUrl(url);
    }
  }, [url]);

  // function getBase64(img: any, callback: any) {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => callback(reader.result));
  //   reader.readAsDataURL(img);
  // }

  const changeHandler = ({ file, fileList }: UploadChangeParam): void => {
    console.log(fileList);
    const { status, response } = file;
    if (status && status === 'uploading') {
      setLoading(true);
    }
    if (status && status === 'done') {
      setLoading(false);
      const { data } = response;
      console.log(response);
      if (data) {
        setImgUrl(data.url);
        // antd的message方法
        // getBase64(file.originFileObj, (imageUrl: any) => {
        //   console.log(imgUrl);
        //   return setImgUrl(imageUrl);
        // });
      }
    }
  };

  // const beforeUploadFunc = (file: RcFile, FileList: RcFile[]): boolean | PromiseLike<void> => {
  //   console.log(file, FileList);
  //   setLoading(true);
  //   return true;
  // };

  const headers = {
    Authorization: configs('app.jwt'),
  };

  return (
    <Form.Item
      name={name}
      label={label}
      className={className}
      rules={rules}
      // getValueFromEvent={normFile}
      valuePropName="FileList"
    >
      <Upload
        accept={accept}
        action={action}
        headers={headers}
        disabled={formStatus === 'SHOW'}
        onChange={changeHandler}
        className={styles.formUploader}
        listType="picture-card"
        showUploadList={false}
        style={{ width, height }}
        data-value={imgUrl}
      >
        {imgUrl ? (
          <>
            {formStatus === 'EDIT' && (
            <div className={styles.sync}>
              <SyncOutlined />
              <span>更换图片</span>
            </div>
            )}
            <img
              src={imgUrl} alt="avatar"
              className={styles.img}
              style={{ width: '100%' }}
            />
          </>
        ) : uploadButton}
      </Upload>

    </Form.Item>
  );
};
export default FormUpload;
