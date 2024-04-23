import { Button, DatePicker, Form, Input, Radio, Select } from 'antd'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useAppDispatch } from '../store/store'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { appSelector } from '../store/slices/appSlics'

interface EditProps {
    isEditProps: boolean
    setIsEditProps?: Dispatch<SetStateAction<boolean>>
    keyProps: React.Key
  }

const Editform = ({isEditProps, setIsEditProps, keyProps}: EditProps) => {
    const [form] = Form.useForm()
    const appReducer = useSelector(appSelector)
    const { t } = useTranslation()
    const data = appReducer.data
    const Item: any = data.find((item: any) => item.key === keyProps)
    console.log(Item)
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
        console.log(values)
    }

    const onCancel = () => {
        if(setIsEditProps){
        setIsEditProps(!isEditProps)
      }
      }
    return (
        <div className='Flexbox'>
           <Form form={form} name='dataForm' onFinish={onFinish} >
                    <Form.Item label={t('Name Titles')} name='tname' >
                        <Select
                            options={[
                                { value: "Mr.", label: "Mr." },
                                { value: "Mrs.", label: "Mrs." },
                                { value: "Ms.", label: "Ms." },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label={t("First Name")} name='fname'  >
                        <Input />
                    </Form.Item>
                    <Form.Item label={t("Last Name")} name='lname'  >
                        <Input />
                    </Form.Item>
                    <Form.Item label={t('Date')} name="date" >
                        <DatePicker placeholder={t('MM/DD/YYYY')} format='MM/DD/YYYY/' />
                    </Form.Item>
                    <Form.Item label={t('Nationality')} name='nationality'  >
                        <Select options={Nationality} />
                    </Form.Item>
                    <Form.Item label={t('ID Card')} name='idcard'>
                        <Input />
                    </Form.Item>
                    <Form.Item label={t('Gender')} name='gender' >
                        <Radio.Group options={[t('Male'), t('Female'), t('Not specified')]} />
                    </Form.Item>
                    <Form.Item label={t('Phone')} name='phone'  >
                        <Input />
                    </Form.Item>
                    <Form.Item label={t('Passport')} name='passport' >
                        <Input />
                    </Form.Item>
                    <Form.Item label={t('Expected Salary')} name='salary'  >
                        <Input type='number' />
                    </Form.Item>
                <Form.Item>
                  <Button type="default" onClick={onCancel}>{t("Cancel")} </Button>
                  <Button type='primary' htmlType='submit' >{t("Update")}</Button>
                </Form.Item>
                </Form>
        </div>
    )
}

export default Editform