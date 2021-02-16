import { Col, Row } from "antd"
import Title from "antd/lib/typography/Title"
import { Component } from "react"
import PicturesWall from "../../../components/form/common/BulkImageUpload"
import InputForm from "../../../components/form/common/InputForm"

class TabContentEntertain extends Component {
  render() {
    return (
      <>
        <Row gutter={24} justify="center">
          <Col span="12">
            <InputForm label="USB & AUX Input"></InputForm>
            <InputForm label="Android Auto"></InputForm>
            <Title level={5}>Speaker</Title>
            <InputForm label="Brand" style={{ marginLeft: "16px" }}></InputForm>
            <InputForm
              label="Front Speaker"
              style={{ marginLeft: "16px" }}
            ></InputForm>
            <InputForm
              label="Rear Speaker"
              style={{ marginLeft: "16px" }}
            ></InputForm>
          </Col>
          <Col span="12">
            <InputForm label="Bluetooth"></InputForm>
            <InputForm label="Apple Car Play"></InputForm>
            <InputForm label="Radio/CD/DVD"></InputForm>
            <InputForm label="Rear TV Display"></InputForm>
            <InputForm label="Rear Passanger Controller"></InputForm>
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

export default TabContentEntertain
