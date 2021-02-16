import { Upload } from "antd"
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons"
import { Component } from "react"

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result))
  reader.readAsDataURL(img)
}

class AvatarUpload extends Component {
  state = {
    loading: false,
  }

  handleChange = (info) => {
    const { onChange = () => {} } = this.props

    if (info.file.status === "uploading") {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === "error") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      )
      onChange(info.file.originFileObj)
    }
  }

  render() {
    const { loading, imageUrl } = this.state

    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    )
    return (
      <Upload
        name="avatar"
        accept="image/*"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        onChange={this.handleChange}
      >
        {this.props.children ? (
          this.props.children
        ) : (
          <>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                style={{ width: "100%", maxHeight: "102px" }}
              />
            ) : (
              uploadButton
            )}
          </>
        )}
      </Upload>
    )
  }
}

export default AvatarUpload
