import { Form, Select } from "antd"
import { Component } from "react"
import { connect } from "react-redux"
import merkAction from "../../../stores/merk/merk.action"

class SelectMerks extends Component {
  componentDidMount() {
    this.props.browse({ limit: 100 })
  }

  componentWillUnmount() {
    const { setMerkId } = this.props
    setMerkId("")
  }

  render() {
    const {
      merks,
      wrapperCol = { span: 24 },
      labelCol = { span: 24 },
      name = "merks",
      setMerkId,
    } = this.props

    return (
      <>
        <Form.Item
          labelCol={labelCol}
          wrapperCol={wrapperCol}
          label="Nama Merk"
          name={name}
          rules={[
            {
              required: true,
              message: "Nama Merk harus diisi!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Pilih Merk"
            optionFilterProp="children"
            onChange={(val) => {
              setMerkId(val)
            }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {merks &&
              merks.map((merk) => (
                <Select.Option key={merk.id} value={merk.id}>
                  {merk.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
      </>
    )
  }
}

class SelectMerksNoLabels extends Component {
  componentDidMount() {
    this.props.browse({ limit: 100 })
  }

  componentWillUnmount() {
    const { setMerkId } = this.props
    setMerkId("")
  }

  render() {
    const { merks, setMerkId } = this.props

    return (
      <Select
        showSearch
        placeholder="Pilih Merk"
        optionFilterProp="children"
        style={{ width: "100%" }}
        onChange={(val) => {
          setMerkId(val)
        }}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {merks &&
          merks.map((merk) => (
            <Select.Option key={merk.id} value={merk.id}>
              {merk.name}
            </Select.Option>
          ))}
      </Select>
    )
  }
}
export const SelectMerksNoLabel = connect(
  (state) => ({
    merks: state.merk.merks,
  }),
  {
    browse: merkAction.browse,
    setMerkId: merkAction.setMerkId,
  }
)(SelectMerksNoLabels)

export default connect(
  (state) => ({
    merks: state.merk.merks,
  }),
  {
    browse: merkAction.browse,
    setMerkId: merkAction.setMerkId,
  }
)(SelectMerks)
