import { Button, Card, Flex } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'


const Home: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <>
      <div className="box">
        <Flex>
          <Card onClick={() => navigate('/test1')} hoverable>{t("test1")}</Card>
          <Card onClick={() => navigate('/test2')} hoverable>{t("test2")}</Card>
        </Flex>
      </div>
    </>
  )
}

export default Home