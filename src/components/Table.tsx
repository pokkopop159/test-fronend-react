import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { appSelector, deletedata } from "../store/slices/appSlics"
import { useAppDispatch } from "../store/store"
import { Button, Space, Table, TableColumnsType } from 'antd'
import { useTranslation } from 'react-i18next'

interface DataType {
    key: React.Key;
    tname: string;
    fname: string;
    lname: string;
    phone: number;
    nationality: string;
}


const Tabledata: React.FC = () => {
    const { t } = useTranslation()
    const appReducer = useSelector(appSelector)
    const dispatch = useAppDispatch()
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>();
    const data =  appReducer.data

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    }

    const handleDelete = (key: React.Key[]) => {
        console.log("กดเเล้ว",key)
        dispatch(deletedata(key))
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: t('Fist Name'),
            key: 'fname',
            dataIndex: 'fname',
            showSorterTooltip: { target: 'full-header' },
            sorter: (a, b) => a.fname.length - b.fname.length,
            sortDirections: ['descend'],
        },
        {
            title: t('Last Name'),
            dataIndex: 'lname',
            key: 'lname',
            showSorterTooltip: { target: 'full-header' },
            sorter: (a, b) => a.lname.length - b.lname.length,
            sortDirections: ['descend'],
        },
        {
            title: t('Phone'),
            dataIndex: 'phone',
            key: 'phone',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.phone - b.phone
        },
        {
            title: t('Nationality'),
            dataIndex: 'nationality',
            key: 'nationality',
            sorter: (a, b) => a.nationality.length - b.nationality.length,
            sortDirections: ['descend']
        },
        {
            title: t('Action'),
            key: 'action',
            render: (_ , record) => <a onClick={() => handleDelete(record.key)}>{t("Delete")}</a>
        }
    ]

    return (
        <div>
            <div>
                <Button type='primary' onClick={() => handleDelete(selectedRowKeys)}>
                    {t("Delete")}
                </Button>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    )
}

export default Tabledata