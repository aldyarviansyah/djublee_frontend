import { Card, Col, PageHeader, Row, Tabs } from "antd"
import Title from "antd/lib/typography/Title"
import React, { Component } from "react"
import CarForm from "./components/CarForm"

class CarAdd extends Component {
  render() {
    return (
      <>
        <PageHeader
          className="site-page-header"
          title="Data Mobil"
          subTitle="Tambah Data"
          onBack={() => this.props.history.go(-1)}
        />
        <Row style={{ margin: "20px 0 0 0" }}>
          <Col span="24">
            <Card>
              <Tabs>
                <Tabs.TabPane
                  tab={
                    <Title style={{ margin: 0 }} level={5}>
                      Massukkan Data Mobil
                    </Title>
                  }
                  key="1"
                >
                  <Row align="middle">
                    <Col span="24">
                      <CarForm type={"input-car-form"}></CarForm>
                    </Col>
                  </Row>
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={
                    <Title style={{ margin: 0 }} level={5}>
                      Copy Data Mobil
                    </Title>
                  }
                  key="2"
                >
                  <Row align="middle">
                    <Col span="24">
                      <CarForm type={"copy-car-form"}></CarForm>
                    </Col>
                  </Row>
                </Tabs.TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}

export default CarAdd
