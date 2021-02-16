import { Form, Select } from "antd"
import { Component } from "react"
import { connect } from "react-redux"
import groupModelAction from "../../../stores/group-model/group-model.action"

class SelectGroupModels extends Component {
  componentDidMount() {
    const { browse } = this.props
    browse({ limit: 100 })
  }

  componentDidUpdate(nextProps) {
    const { merkId } = nextProps
    const { browseByMerkId } = this.props

    if (merkId !== this.props.merkId) {
      if (this.props.merkId !== "") {
        browseByMerkId(this.props.merkId)
      }
    }
  }

  render() {
    const {
      groupModels,
      wrapperCol = { span: 24 },
      labelCol = { span: 24 },
      name = "groupModels",
      setGroupModelId,
    } = this.props

    return (
      <>
        <Form.Item
          wrapperCol={wrapperCol}
          labelCol={labelCol}
          label="Group Model"
          name={name}
          rules={[
            {
              required: true,
              message: "Nama Group Model harus diisi!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Pilih Group Model"
            optionFilterProp="children"
            onChange={(val) => {
              setGroupModelId(val)
            }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {groupModels &&
              groupModels.map((groupModel) => (
                <Select.Option key={groupModel.id} value={groupModel.id}>
                  {groupModel.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
      </>
    )
  }
}

export class SelectGroupModelsNoLabels extends Component {
  componentDidMount() {
    const { browse } = this.props
    browse({ limit: 100 })
  }

  componentDidUpdate(nextProps) {
    const { merkId } = nextProps
    const { browseByMerkId } = this.props

    if (merkId !== this.props.merkId) {
      if (this.props.merkId !== "") {
        browseByMerkId(this.props.merkId)
      }
    }
  }

  render() {
    const { groupModels, setGroupModelId } = this.props

    return (
      <>
        <Select
          showSearch
          placeholder="Pilih Group Model"
          optionFilterProp="children"
          style={{ width: "100%" }}
          onChange={(val) => {
            setGroupModelId(val)
          }}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {groupModels &&
            groupModels.map((groupModel) => (
              <Select.Option key={groupModel.id} value={groupModel.id}>
                {groupModel.name}
              </Select.Option>
            ))}
        </Select>
      </>
    )
  }
}

export const SelectGroupModelsNoLabel = connect(
  (state) => ({
    groupModels: state.groupModel.groupModels,
    merkId: state.merk.merkId,
  }),
  {
    browse: groupModelAction.browse,
    browseByMerkId: groupModelAction.browseByMerkId,
    setGroupModelId: groupModelAction.setGroupModelId,
  }
)(SelectGroupModelsNoLabels)

export default connect(
  (state) => ({
    groupModels: state.groupModel.groupModels,
    merkId: state.merk.merkId,
  }),
  {
    browse: groupModelAction.browse,
    browseByMerkId: groupModelAction.browseByMerkId,
    setGroupModelId: groupModelAction.setGroupModelId,
  }
)(SelectGroupModels)
