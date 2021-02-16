import { LogoutOutlined, UserOutlined } from "@ant-design/icons"
import { Dropdown, Menu } from "antd"
import Avatar from "antd/lib/avatar/avatar"
import { Header } from "antd/lib/layout/layout"
import { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import storage from "../../apps/helpers/storage.helper"
import authAction from "../../stores/auth/auth.action"

const Mmenu = (props) => (
  <Menu>
    <Menu.Item
      onClick={(e) => {
        props.history.push("/profile-user")
      }}
      key="0"
      icon={<UserOutlined />}
    >
      Profile
    </Menu.Item>
    <Menu.Item
      onClick={(e) => {
        props.logout(() => {
          props.history.replace("/auth/login")
        })
      }}
      key="1"
      icon={<LogoutOutlined />}
    >
      Logout
    </Menu.Item>
  </Menu>
)

class NavHeader extends Component {
  render() {
    return (
      <Header className="shadow">
        <Dropdown
          overlay={<Mmenu {...this.props} />}
          placement="bottomRight"
          trigger={["click"]}
        >
          <div
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
            style={{
              display: "inline-block",
              height: "64px",
              cursor: "pointer",
            }}
          >
            Hi,{" "}
            <b style={{ textTransform: "capitalize" }}>{storage.get("role")}</b>{" "}
            <Avatar shape="square" icon={<UserOutlined />} />
          </div>
        </Dropdown>
      </Header>
    )
  }
}

const mapState = (state) => ({})
const mapDispatch = {
  logout: authAction.logout,
}

export default withRouter(connect(mapState, mapDispatch)(NavHeader))
