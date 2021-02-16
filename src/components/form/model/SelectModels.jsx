import { Form, Select } from "antd"
import { Component } from "react"
import { connect } from "react-redux"
import modelAction from "../../../stores/model/model.action"

class SelectModels extends Component {
  componentDidMount() {
    const { browse } = this.props
    browse({ limit: 100 })
  }

  componentDidUpdate(nextProps) {
    const { groupModelId } = nextProps
    const { browseByGroupModelid } = this.props

    if (groupModelId !== this.props.groupModelId) {
      if (this.props.groupModelId !== "") {
        browseByGroupModelid(this.props.groupModelId)
      }
    }
  }

  render() {
    const { models } = this.props

    return (
      <>
        <Form.Item
          label="Model"
          name="modelId"
          rules={[
            {
              required: true,
              message: "Nama Model harus diisi!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Pilih Model"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {models &&
              models.map((model) => (
                <Select.Option key={model.id} value={model.id}>
                  {model.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
      </>
    )
  }
}

export class SelectModelsNoLabels extends Component {
  componentDidMount() {
    const { browse } = this.props
    browse({ limit: 100 })
  }

  componentDidUpdate(nextProps) {
    const { groupModelId } = nextProps
    const { browseByGroupModelid } = this.props

    if (groupModelId !== this.props.groupModelId) {
      if (this.props.groupModelId !== "") {
        browseByGroupModelid(this.props.groupModelId)
      }
    }
  }

  render() {
    const { models } = this.props

    return (
      <>
        <Select
          showSearch
          placeholder="Pilih Model"
          optionFilterProp="children"
          style={{ width: "100%" }}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {models &&
            models.map((model) => (
              <Select.Option key={model.id} value={model.id}>
                {model.name}
              </Select.Option>
            ))}
        </Select>
      </>
    )
  }
}

export const SelectModelsNoLabel = connect(
  (state) => ({
    models: state.model.models,
    groupModelId: state.groupModel.groupModelId,
  }),
  {
    browse: modelAction.browse,
    browseByGroupModelid: modelAction.browseByGroupModelId,
  }
)(SelectModelsNoLabels)

export default connect(
  (state) => ({
    models: state.model.models,
    groupModelId: state.groupModel.groupModelId,
  }),
  {
    browse: modelAction.browse,
    browseByGroupModelid: modelAction.browseByGroupModelId,
  }
)(SelectModels)
