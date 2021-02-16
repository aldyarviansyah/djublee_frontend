import { Checkbox, Col, Form, Row } from "antd"
import { Component } from "react"
import PicturesWall from "../../../components/form/common/BulkImageUpload"
import InputForm from "../../../components/form/common/InputForm"

class TabContentSafety extends Component {
  render() {
    return (
      <>
        <Row gutter={24} justify="center">
          <Col span="12">
            <InputForm label="Seat Belts"></InputForm>
            <Form.Item label="Airbags">
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
            <InputForm label="Electronic Stability Control"></InputForm>
            <InputForm label="Rear Cross Traffic Alert"></InputForm>
            <InputForm label="Forward Collision Warning"></InputForm>
            <InputForm label="Blind Spot Warning"></InputForm>
            <InputForm label="Night Vision"></InputForm>
            <InputForm label="Engine Immobilizer"></InputForm>
          </Col>
          <Col span="12">
            <InputForm label="Seat Belts Reminder"></InputForm>
            <InputForm label="Child Safety Lock"></InputForm>
            <InputForm label="Abs"></InputForm>
            <InputForm label="Automatic Emergency Brake"></InputForm>
            <InputForm label="Adaptive Cruise Control"></InputForm>
            <InputForm label="Lane Departure Warning & Assist"></InputForm>
            <InputForm label="Autonomus Driving"></InputForm>
            <InputForm label="Anti Theft Alarm"></InputForm>
            <InputForm label="Crash Test Rating"></InputForm>
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

export default TabContentSafety
