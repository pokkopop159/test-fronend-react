import React from 'react'
import { useTranslation } from 'react-i18next'
import {  Select } from 'antd'

const languageSelector = () => {
  const {i18n, t} = useTranslation()

  const items = [
    {
      key: "EN", 
      label: "EN"
    },
    {
      key: "TH", 
      label: t("TH")
    },
  ]
  
  const ChangLanguage = (item: string) => {
    i18n.changeLanguage(item)
  }

  
  return (
    <div className='header'>
      <Select
        defaultValue={localStorage.getItem('i18nextLng')}
        onChange={ChangLanguage}
      >
        {
        items.map((lng) => {
          return (
            <div
              className={(lng.key === i18n.language ? "selected" : "")}
              key={lng.key}
            >
            </div>
            )
        })
      }
      </Select>
    </div>
  )
}

export default languageSelector