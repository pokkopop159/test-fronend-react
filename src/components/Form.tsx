import { Button, DatePicker, Form, Input, Radio, Select } from 'antd'
import React, { useEffect } from 'react'
import { adddata, appSelector, savedata } from '../store/slices/appSlics'
import { useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { useAppDispatch } from '../store/store'
import { useTranslation } from 'react-i18next'


const DataForm: React.FC = () => {
  const { Option } = Select
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const rules = [{
    required: true, 
    message: t('Please input!')
  }]
  const rulesSelect = [{
    required: true, 
    message: t('Please select!')
  }]
  const Nationality = [
    {
      value: "British / English",
      label: "British / English"
    },
    {
      value: "Thai",
      label: "Thai"
    },
    {
      value: "Estonian",
      label: "Estonian",
    },
    {
      value: "Finnish",
      label: "Finnish",
    },
  ]

  const onFinish = (values: string[]) => {
    const newdata = {
      key: randomkey + 100,
      ...values
    }
    dispatch(adddata(newdata))
    window.location.reload()
  }

  useEffect(() => {
    if( localStorage.getItem("Data")){
      const save = JSON.parse(localStorage.getItem("Data") || "")
      dispatch(savedata(save))
    }
  }, [])

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const randomkey = Math.floor(Math.random() * 88888)

  
  
  return (
    <div className='Flexbox'>
    <Form  form={form} name='dataForm' onFinish={onFinish} >
        <Form.Item label={t('Name Titles')} name='tname' rules={rulesSelect} >
          <Select 
            options={[
              { value: "Mr.", label: "Mr." },
              { value: "Mrs.", label: "Mrs." },
              { value: "Ms.", label: "Ms." },
            ]}
          />
        </Form.Item>
        <Form.Item label={t("First Name")} name='fname' rules={rules} >
          <Input />
        </Form.Item>
        <Form.Item label={t("Last Name")} name='lname' rules={rules} >
          <Input />
        </Form.Item>
        <Form.Item label={t('Date')}  rules={rules}>
          <DatePicker placeholder={t('MM/DD/YYYY')} format='MM/DD/YYYY/' />
        </Form.Item>
        <Form.Item label={t('Nationality')} name='nationality' rules={rulesSelect} >
          <Select options={Nationality}/>
        </Form.Item>
        <Form.Item label={t('ID Card')} name='idcard'>
          <Input type='number' />
        </Form.Item>
        <Form.Item label={t('Gender')} name='gender' rules={rulesSelect}>
          <Radio.Group options={[t('Male'), t('Female'), t('Not specified')]}/>
        </Form.Item>
        <Form.Item label={t('Phone')} name='phone' rules={rules} >
          <Input />
        </Form.Item>
        <Form.Item label={t('Passport')} name='passport' >
          <Input />
        </Form.Item>
        <Form.Item label={t('Expected Salary')} name='salary' rules={rules} >
          <Input type='number'/>
        </Form.Item>
        <Form.Item>
          <Button type='default' htmlType='reset'>{t("reset")}</Button>
          <Button type='primary' htmlType='submit' >{t("submit")}</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default DataForm