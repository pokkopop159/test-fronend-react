import { useTranslation } from "react-i18next"
import Form from "../components/Form"
import Table from "../components/Table"


const test2: React.FC = () => {
  const { t } = useTranslation()
  

  return (
    <>
    <h1>{t("Manage form pages")}</h1>
      <Form />
      <Table />
    </>
  )
}

export default test2