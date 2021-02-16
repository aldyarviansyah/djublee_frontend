import { DeleteOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Card, Col, Input, PageHeader, Row, Table, Tooltip } from "antd"
import React, { Component } from "react"
import { connect } from "react-redux"
import Swal from "sweetalert2"
import routeKey from "../../apps/contanta-key/route.key"
import { SelectGroupModelsNoLabel } from "../../components/form/group-model/SelectGroupModels"
import { SelectMerksNoLabel } from "../../components/form/merk/SelectMerks"
import { SelectModelsNoLabel } from "../../components/form/model/SelectModels"
import carAction from "../../stores/car/car.action"

class Car extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Data Mobil",
      merkTab: "index-1",
      groupModelTab: "index-1",
      modelTab: "index-1",
    }
  }

  componentDidMount() {
    const { browse } = this.props
    browse({ limit: 10 })
  }

  onChange = (pagination, filters, sorter, extra) => {}

  render() {
    const { title } = this.state
    const { cars } = this.props
    return (
      <>
        <PageHeader
          className="site-page-header"
          title={title}
          subTitle="Total Data 0"
        />
        <Row style={{ margin: "20px 0 0 0" }}>
          <Col span="24">
            <Card>
              <Row align="middle" gutter={24}>
                <Col span="4">
                  <Input
                    placeholder="Cari Mobil"
                    suffix={
                      <Tooltip title="Cari Mobil">
                        <SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                      </Tooltip>
                    }
                  />
                </Col>

                <Col span="4">
                  <SelectMerksNoLabel></SelectMerksNoLabel>
                </Col>

                <Col span="4">
                  <SelectGroupModelsNoLabel></SelectGroupModelsNoLabel>
                </Col>

                <Col span="4">
                  <SelectModelsNoLabel></SelectModelsNoLabel>
                </Col>

                <Col span="8" style={{ textAlign: "right" }}>
                  <Button
                    type="primary"
                    size="large"
                    onClick={(e) => {
                      e.preventDefault()
                      this.props.history.push(routeKey.car.add)
                    }}
                  >
                    Tambah
                  </Button>
                </Col>

                <Col span="24" style={{ marginTop: "8px" }}>
                  <Table
                    columns={columns(this.props)}
                    dataSource={cars}
                    pagination={false}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}

const columns = (props) => {
  return [
    {
      title: "No",
      render: (item, record, idx) => <>{idx + 1}</>,
    },
    {
      title: "Merk",
      render: (item) => <>{item.model.groupModel.brand.name}</>,
    },
    {
      title: "Group Model",
      render: (item) => <>{item.model.groupModel.name}</>,
    },

    {
      title: "Model",
      render: (item) => <>{item.model.name}</>,
    },
    {
      title: "Tahun",
      dataIndex: "year",
    },
    {
      title: "Action",
      dataIndex: "",
      align: "right",
      render: (item, record, index) => {
        return (
          <>
            <Tooltip title="Edit">
              <Button
                type="primary"
                style={{ margin: "0 10px 0 0" }}
                shape="circle"
                icon={<EditOutlined />}
                onClick={() => {
                  props.history.push(routeKey.car.toEdit(item.id))
                }}
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                type="danger"
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={(e) => {
                  Swal.fire({
                    title: "Delete Mobil?",
                    showCancelButton: true,
                    confirmButtonText: `Hapus`,
                    cancelButtonText: `Tidak`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      props.delete(item.id, () => {
                        Swal.fire("Deleted!", "", "success")
                        props.browse()
                      })
                    }
                  })
                }}
              />
            </Tooltip>
          </>
        )
      },
    },
  ]
}

const mapState = (state) => ({
  cars: state.car.cars,
  pagination: state.car.pagination,
})
const mapDispatch = {
  browse: carAction.browse,
  delete: carAction.delete,
}

export default connect(mapState, mapDispatch)(Car)
