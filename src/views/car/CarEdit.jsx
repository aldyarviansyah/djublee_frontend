import { Card, Col, PageHeader, Row } from "antd"
import Title from "antd/lib/typography/Title"
import React, { Component } from "react"
import { connect } from "react-redux"
import carAction from "../../stores/car/car.action"
import CarForm from "./components/CarForm"

class CarEdit extends Component {
  componentDidMount() {
    const { read, match } = this.props

    read(match.params.id)
  }

  render() {
    const { car } = this.props

    return (
      <>
        <PageHeader
          className="site-page-header"
          title="Data Mobil"
          subTitle="Edit Data"
          onBack={() => this.props.history.go(-1)}
        />
        <Row style={{ margin: "20px 0 0 0" }}>
          <Col span="24">
            <Card title={<Title level={5}>Ubah Data Mobil</Title>}>
              <Row align="middle">
                <Col span="24">{car && <CarForm car={car}></CarForm>}</Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}

const mapState = (state) => ({
  car: state.car.car,
})
const mapDispatch = {
  read: carAction.read,
}

export default connect(mapState, mapDispatch)(CarEdit)
