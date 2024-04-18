import React from 'react'
import { Menu, Space } from 'antd'
import { Button, Flex } from 'antd'
import { 
  CaretLeftOutlined, 
  CaretRightOutlined, 
  CaretUpOutlined, 
  CaretDownOutlined,
  DeleteFilled,
  EditFilled,
  HeartFilled,
  MutedFilled,
  SkinFilled,
  ThunderboltFilled,
 } from '@ant-design/icons'

const test1 = () => {
  return (
    <>
    <Flex justify='center'>
      <Space>
      <Button><CaretLeftOutlined /></Button>
      <Button><CaretUpOutlined /></Button>
      <Button><CaretDownOutlined /></Button>
      <Button><CaretRightOutlined /></Button>
      </Space>
    </Flex>
    <Flex justify='center'>
      <Button><DeleteFilled /></Button>
      <Button><EditFilled /></Button>
      <Button><HeartFilled /></Button>
      <Button><MutedFilled /></Button>
      <Button><SkinFilled /></Button>
      <Button><ThunderboltFilled /></Button>
    </Flex>
    </>
  )
}

export default test1