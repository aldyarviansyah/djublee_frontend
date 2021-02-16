import { DatePicker, Form } from "antd"
import { Component } from "react"

class YearPicker extends Component {
  state = {
    value: "",
  }

  render() {
    const { label = "Label", name = "name", required = false } = this.props
    return (
      <>
        <Form.Item
          label={label}
          name={name}
          rules={[
            {
              required: required,
              message: `${label} harus diisi!`,
            },
          ]}
        >
          <DatePicker style={{ width: "100%" }} picker="year" />
        </Form.Item>
      </>
    )
  }
}

export default YearPicker
