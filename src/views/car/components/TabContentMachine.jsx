import { Col, Row } from "antd"
import { Component } from "react"
import PicturesWall from "../../../components/form/common/BulkImageUpload"
import InputForm from "../../../components/form/common/InputForm"

class TabContentMachine extends Component {
  render() {
    return (
      <>
        <Row gutter={24} justify="center">
          <Col span="12">
            <InputForm label="Tipe"></InputForm>
            <InputForm label="Kapasitas Tangki"></InputForm>
            <InputForm label="Max. Torque"></InputForm>
            <InputForm label="Valve per Cylinder"></InputForm>
            <InputForm label="Transmisi"></InputForm>
            <InputForm label="Clutch"></InputForm>
          </Col>
          <Col span="12">
            <InputForm label="Kapasitas Mesin"></InputForm>
            <InputForm label="Max. Power"></InputForm>
            <InputForm label="Cylinder"></InputForm>
            <InputForm label="Turbo Charged"></InputForm>
            <InputForm label="Gearbox"></InputForm>
          </Col>
          <Col
            span="22"
            style={{ background: "#F0F2F5", padding: "24px 24px 16px 24px" }}
          >
            <PicturesWall></PicturesWall>
          </Col>
        </Row>
      </>
    )
  }
}

export default TabContentMachine
