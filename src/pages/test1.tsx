import React, { useState } from 'react'
import { Card, Flex } from 'antd'
import './shapes.scss'
import { useTranslation } from 'react-i18next'

const test1: React.FC = () => {
  const [ar1, setAr1] = useState<any>(['square', 'rectangle', 'circle'])
  const [ar2, setAr2] = useState<any>(['oval', 'trapezoid', 'parallelogram'])
  const { t } = useTranslation()

  const shuffleArrey = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      // [ar1[i], ar2[j]] = [ar2[j], ar1[i]];
      // [ar2[i], ar1[j]] = [ar1[j], ar2[i]];
    }
    return array
  }

  const shuffleArreys = () => {
    const shuffleAr1 = shuffleArrey([...ar1])
    const shuffleAr2 = shuffleArrey([...ar2])
    setAr1(shuffleAr1)
    setAr2(shuffleAr2)
  }

  const triangleleft = () => {
    const shiftar2 = ar2.shift() //shift ดึงข้อมูลแรกสุดออก
    const shiftar1 = ar1.shift()
    setAr1([
      ...ar1, shiftar2
    ])
    setAr2([
      ...ar2, shiftar1
    ])
  }

  const triangleright = () => {
    const popar1 = ar1.pop()
    const popar2 = ar2.pop()
    setAr2([
      popar1, ...ar2
    ])
    setAr1([
      popar2, ...ar1
    ])
  }

  const swap = () => {
    setAr1(ar2)
    setAr2(ar1)
  }

  return (
    <>
      <h1>{t("Layout & Style")}</h1>
      <Flex >
        <Card hoverable onClick={triangleleft}><p className="triangle-left " /></Card>
        <Card hoverable onClick={swap}><p className="triangle-up" /></Card>
        <Card hoverable onClick={swap}><p className="triangle-down" /></Card>
        <Card hoverable onClick={triangleright}><p className="triangle-right" /></Card>
      </Flex>

      <Flex >
        {ar1.map((item: any) => {
          return (
            <Card className={item} hoverable onClick={shuffleArreys}><p className={item} /></Card>
          )
        })}
      </Flex>
      <Flex>
        {ar2.map((item: any) => {
          return (
            <Card className={item} hoverable onClick={shuffleArreys}><p className={item} /></Card>
          )
        })}
      </Flex>
    </>
  )
}

export default test1