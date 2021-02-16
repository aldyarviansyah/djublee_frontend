import { Button, Card, Col, Form, Modal, Row, Tabs } from "antd"
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Title from "antd/lib/typography/Title"
import SelectModels from "../../../components/form/model/SelectModels"
import SelectMerks from "../../../components/form/merk/SelectMerks"
import SelectGroupModels from "../../../components/form/group-model/SelectGroupModels"
import YearPicker from "../../../components/form/common/YearPicker"
import TabContentExterior from "./TabContentExterior"
import TabContentInterior from "./TabContentInterior"
import TabContentDimension from "./TabContentDimension"
import TabContentMachine from "./TabContentMachine"
import TabContentPerformance from "./TabContentPerformance"
import TabContentSafety from "./TabContentSafety"
import TabContentEntertain from "./TabContentEntertain"
import InputForm from "../../../components/form/common/InputForm"
import InputFileForm from "../../../components/form/common/InputUpload"
import AvatarUpload from "../../../components/form/common/AvatarUpload"
import carAction from "../../../stores/car/car.action"
import { connect } from "react-redux"
import routeKey from "../../../apps/contanta-key/route.key"
import moment from "moment"

const tailLayout = {
  wrapperCol: { offset: 0, span: 6 },
}

const spesificationTabs = [
  {
    key: "tab-exterior",
    title: "Exterior",
    content: TabContentExterior,
  },
  {
    key: "tab-interior",
    title: "Interior",
    content: TabContentInterior,
  },
  {
    key: "tab-dimension",
    title: "Dimensi",
    content: TabContentDimension,
  },
  {
    key: "tab-machine",
    title: "Mesin",
    content: TabContentMachine,
  },
  {
    key: "tab-performance",
    title: "Performa",
    content: TabContentPerformance,
  },
  {
    key: "tab-safety",
    title: "Safety",
    content: TabContentSafety,
  },
  {
    key: "tab-entertain",
    title: "Entertaiment & Koneksi",
    content: TabContentEntertain,
  },
]

class CarForm extends Component {
  carForm = React.createRef()
  constructor(props) {
    super(props)
    this.state = {
      modalCopy: false,
    }
  }

  componentDidMount() {
    const { car } = this.props

    if (car !== undefined) {
      this.carForm.current.setFieldsValue({
        modelId: car.modelId,
        year: moment(new Date(Date.now()).setFullYear(car.year)),
      })
    }
  }

  componentWillUnmount() {
    this.props.reset()
  }

  onFinish = (form) => {
    const { add, edit, match, history } = this.props
    form.year = "2020"

    if (match.params.id === undefined) {
      add(form, () => {
        history.replace(routeKey.car.views)
      })
    } else {
      edit(match.params.id, form, () => {
        history.replace(routeKey.car.views)
      })
    }
  }

  onFinishFailed = () => {}

  toggleModalCopy = () => {
    this.setState({
      modalCopy: !this.state.modalCopy,
    })
  }

  render() {
    const { modalCopy } = this.state
    const { type = "input" } = this.props

    return (
      <>
        <Form
          layout="vertical"
          ref={this.carForm}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Card
            title={
              <Title level={5} style={{ margin: 0 }}>
                Info Mobil
              </Title>
            }
          >
            <Row gutter={24}>
              {type.includes("copy") && (
                <Col span="24" style={{ marginBottom: "24px" }}>
                  <Button
                    type="primary"
                    size="large"
                    onClick={this.toggleModalCopy}
                  >
                    Copy Data
                  </Button>
                </Col>
              )}
              <Col span="12">
                <SelectMerks name="brandId"></SelectMerks>
                <SelectGroupModels name="groupModelId"></SelectGroupModels>
                <SelectModels name="modelId"></SelectModels>
              </Col>
              <Col span="12">
                {type.includes("copy") ? (
                  <>
                    <YearPicker label="Dari" name="from" required></YearPicker>
                    <YearPicker label="Ke" name="to" required></YearPicker>
                  </>
                ) : (
                  <YearPicker label="Tahun" name="year" required></YearPicker>
                )}
              </Col>
            </Row>
          </Card>

          <Card
            style={{ marginTop: "24px" }}
            title={
              <Title level={5} style={{ margin: 0 }}>
                Input Foto Mobil
              </Title>
            }
          >
            <AvatarUpload></AvatarUpload>
          </Card>

          <Card
            style={{ marginTop: "24px" }}
            title={
              <Title level={5} style={{ margin: 0 }}>
                Spesifikasi
              </Title>
            }
          >
            <Tabs defaultActiveKey="1" type="card">
              {spesificationTabs.map((tab) => (
                <Tabs.TabPane tab={tab.title} key={tab.key}>
                  <div style={{ padding: "0" }}>
                    <tab.content></tab.content>
                  </div>
                </Tabs.TabPane>
              ))}
            </Tabs>
          </Card>

          <Card
            style={{ marginTop: "24px" }}
            title={
              <Title level={5} style={{ margin: 0 }}>
                Input Video
              </Title>
            }
          >
            <Row gutter={24}>
              <Col span="12">
                <video width="100%" controls>
                  Your browser does not support HTML video.
                </video>
              </Col>
              <Col span="12">
                <InputFileForm label="Upload Video"></InputFileForm>
                <InputForm label="Headline Video"></InputForm>
                <InputForm label="Link Video"></InputForm>
              </Col>
            </Row>
          </Card>

          <Card
            style={{ marginTop: "24px" }}
            title={
              <Title level={5} style={{ margin: 0 }}>
                Report
              </Title>
            }
          >
            <InputFileForm label="Upload Report"></InputFileForm>
          </Card>

          <Form.Item {...tailLayout} style={{ marginTop: "30px" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "10px" }}
            >
              Save
            </Button>
            <Button
              type="secondary"
              htmlType="button"
              onClick={() => {
                this.props.history.go(-1)
              }}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
        <Modal
          title={
            <Title level={5} style={{ margin: 0 }}>
              Copy Data Form
            </Title>
          }
          visible={modalCopy}
          onOk={this.toggleModalCopy}
          onCancel={this.toggleModalCopy}
          footer={[
            <Button key="Batal" onClick={this.toggleModalCopy}>
              Tutup
            </Button>,
            <Button key="submit" type="primary" onClick={this.toggleModalCopy}>
              Copy
            </Button>,
          ]}
        >
          <Form layout="vertical">
            <Row gutter="24">
              <Col span="12">
                <SelectMerks></SelectMerks>
              </Col>
              <Col span="12">
                <SelectGroupModels></SelectGroupModels>
              </Col>
              <Col span="12">
                <SelectModels></SelectModels>
              </Col>
              <Col span="12">
                <YearPicker label="Tahun" name="tahun"></YearPicker>
              </Col>
            </Row>
          </Form>
        </Modal>
      </>
    )
  }
}

const mapState = (state) => ({})

const mapDispatch = {
  add: carAction.add,
  edit: carAction.edit,
  reset: carAction.reset,
}

export default withRouter(connect(mapState, mapDispatch)(CarForm))
