import { useTranslation } from "react-i18next"
import Form from "../components/Form"
import Table from "../components/Table"
import { useState } from "react"


const test2: React.FC = () => {
  const { t } = useTranslation()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [key, setKey] = useState<any>()

  return (
    <>
      <h1>{t("Manage form pages")}</h1>
      <Form isEditProps={isEdit} setIsEditProps={setIsEdit} keyProps={key}/>
      <Table setIsEditProps={setIsEdit} isEditProps={isEdit} setKeyProps={setKey} />
    </>
  )
}

export default test2