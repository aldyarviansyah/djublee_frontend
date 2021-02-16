import { Checkbox, Col, Form, Row } from "antd"
import Title from "antd/lib/typography/Title"
import { Component } from "react"
import PicturesWall from "../../../components/form/common/BulkImageUpload"
import InputForm from "../../../components/form/common/InputForm"

class TabContentInterior extends Component {
  render() {
    return (
      <>
        <Row gutter={24} justify="center">
          <Col span="12">
            <InputForm label="Jok Kulit"></InputForm>
            <InputForm label="Power Bagasi"></InputForm>
            <Form.Item label="Central Lock">
              <Checkbox style={{ display: "block", margin: 0 }}>
                Driver
              </Checkbox>
              <Checkbox style={{ display: "block", margin: 0 }}>
                Front Passanger
              </Checkbox>
              <Checkbox style={{ display: "block", margin: 0 }}>
                Rear Passanger
              </Checkbox>
            </Form.Item>
            <InputForm label="Digital Dashboard"></InputForm>
            <InputForm label="Head Up Display"></InputForm>
            <Title level={5}>Touch Screen Display</Title>
            <InputForm
              label="Jumlah"
              style={{ marginLeft: "16px" }}
            ></InputForm>
            <InputForm
              label="Ukuran"
              style={{ marginLeft: "16px" }}
            ></InputForm>
            <Title level={5}>Number Of Vents</Title>
            <InputForm label="Front" style={{ marginLeft: "16px" }}></InputForm>
            <InputForm label="Rear" style={{ marginLeft: "16px" }}></InputForm>
            <InputForm label="Rear Passangger TV"></InputForm>
            <InputForm label="Cool Box"></InputForm>
            <InputForm label="Vanity Mirror"></InputForm>
          </Col>
          <Col span="12">
            <InputForm label="Power Window"></InputForm>
            <InputForm label="Power Seat"></InputForm>
            <InputForm label="Engine Start / Stop"></InputForm>
            <Form.Item label="Central Lock">
              <Checkbox style={{ display: "block", margin: 0 }}>
                Adjustable
              </Checkbox>
              <Checkbox style={{ display: "block", margin: 0 }}>
                Cruise Control
              </Checkbox>
              <Checkbox style={{ display: "block", margin: 0 }}>
                Audio Control
              </Checkbox>
              <Checkbox style={{ display: "block", margin: 0 }}>
                Gearshift Paddle
              </Checkbox>
            </Form.Item>
            <InputForm label="Navigation"></InputForm>
            <Title level={5}>Air Conditioner</Title>
            <InputForm
              label="Double Blower"
              style={{ marginLeft: "16px" }}
            ></InputForm>
            <InputForm
              label="Touch Screen Control"
              style={{ marginLeft: "16px" }}
            ></InputForm>
            <InputForm label="Voice Command/Control"></InputForm>
            <InputForm label="Rear Passanger Controller"></InputForm>
            <InputForm label="Ambience Lightning"></InputForm>
            <InputForm label="Folding Table"></InputForm>
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

export default TabContentInterior
