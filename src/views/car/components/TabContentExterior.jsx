import { Checkbox, Col, Form, Row } from "antd"
import { Component } from "react"
import PicturesWall from "../../../components/form/common/BulkImageUpload"
import InputForm from "../../../components/form/common/InputForm"

class TabContentExterior extends Component {
  render() {
    return (
      <>
        <Row gutter={24} justify="center">
          <Col span="12">
            <InputForm
              label="Warna"
              name="color"
              placeholder="contoh: Hitam"
            ></InputForm>
            <Form.Item label="Spion" name="spion">
              <Checkbox style={{ display: "block" }}>Electric</Checkbox>
              <Checkbox style={{ display: "block", margin: 0 }}>
                Folding
              </Checkbox>
              <Checkbox style={{ display: "block", margin: 0 }}>
                Lampu Signal
              </Checkbox>
            </Form.Item>
            <InputForm
              label="Fog Lamp"
              name="fogLamp"
              placeholder="Fog Lamp"
            ></InputForm>
            <InputForm
              label="Door Handle"
              name="doorHandle"
              placeholder=""
            ></InputForm>
            <Form.Item label="Keyless Entry" name="keylessEntry">
              <Checkbox style={{ display: "block", margin: 0 }}>
                Pintu Penumpang
              </Checkbox>
              <Checkbox style={{ display: "block", margin: 0 }}>
                Bagasi
              </Checkbox>
            </Form.Item>
            <InputForm
              label="Sun Roof"
              name="doorHandle"
              placeholder=""
            ></InputForm>
          </Col>
          <Col span="12">
            <InputForm label="Tipe Cat" name="catType"></InputForm>
            <InputForm label="Head Light" name="headLight"></InputForm>
            <InputForm label="Tail Light" name="tailLight"></InputForm>
            <InputForm label="Signal Light" name="signalLight"></InputForm>
            <InputForm label="Door Soft Case" name="doorSoftCase"></InputForm>
            <InputForm label="Parking Sensor" name="parkingSensor"></InputForm>
            <InputForm label="Bentuk Knalpot" name="exchauseShape"></InputForm>
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

export default TabContentExterior
