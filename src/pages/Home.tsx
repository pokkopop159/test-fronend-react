import { Button } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <>
      <div className="box">
        <ul>
          <Button onClick={() => navigate('/test1')}>test1</Button>
          <Button onClick={() => navigate('/test2')}>test2</Button>
        </ul>
      </div>
    </>
  )
}

export default Home