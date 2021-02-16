import { Form, Input } from "antd"
import { Component } from "react"

class InputFileForm extends Component {
  render() {
    const {
      label = "Label",
      name = "name",
      required = false,
      placeholder = "",
      style = "",
    } = this.props
    return (
      <>
        <Form.Item
          label={label}
          name={name}
          style={style}
          rules={[
            {
              required: required,
              message: `${label} harus diisi!`,
            },
          ]}
        >
          <Input
            type="file"
            placeholder={placeholder === "" ? label : placeholder}
          />
        </Form.Item>
      </>
    )
  }
}

export default InputFileForm
