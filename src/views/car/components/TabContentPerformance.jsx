import { Col, Row } from "antd"
import { Component } from "react"
import PicturesWall from "../../../components/form/common/BulkImageUpload"
import InputForm from "../../../components/form/common/InputForm"

class TabContentPerformance extends Component {
  render() {
    return (
      <>
        <Row gutter={24} justify="center">
          <Col span="12">
            <InputForm label="Akselerasi 0/100 km/jam"></InputForm>
            <InputForm label="1/4 mile"></InputForm>
            <InputForm label="Tipe Bahan Bakar"></InputForm>
            <InputForm label="Konsumsi Bahan Bakar Tol"></InputForm>
          </Col>
          <Col span="12">
            <InputForm label="Top Speed"></InputForm>
            <InputForm label="Braking 100 km/jam"></InputForm>
            <InputForm label="Konsumsi Bahan Bakar Normal"></InputForm>
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

export default TabContentPerformance
