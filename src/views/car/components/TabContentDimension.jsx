import { Col, Row } from "antd"
import { Component } from "react"
import PicturesWall from "../../../components/form/common/BulkImageUpload"
import InputForm from "../../../components/form/common/InputForm"

class TabContentDimension extends Component {
  render() {
    return (
      <>
        <Row gutter={24} justify="center">
          <Col span="12">
            <InputForm label="LxWxH (mm)"></InputForm>
            <InputForm label="Wheel Base"></InputForm>
            <InputForm label="Kapasitas Bagasi"></InputForm>
          </Col>
          <Col span="12">
            <InputForm label="Ground Clearance"></InputForm>
            <InputForm label="Kapasitas Penumpang"></InputForm>
            <InputForm label="Jumlah Pintu"></InputForm>
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

export default TabContentDimension
