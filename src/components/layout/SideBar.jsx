import {
  BarcodeOutlined,
  CalendarOutlined,
  CarOutlined,
  GroupOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Menu } from "antd"
import Sider from "antd/lib/layout/Sider"
import SubMenu from "antd/lib/menu/SubMenu"
import { Component } from "react"
import { NavLink, withRouter } from "react-router-dom"
import storage from "../../apps/helpers/storage.helper"

const role = {
  master: "~master",
}

const menus = [
  {
    to: "/",
    title: "Dashboard",
    icon: <HomeOutlined />,
    role: "~master, ~superviser, ~admin, ~finance, ~sales",
  },
  {
    to: "/create-user",
    title: "Create User",
    icon: <UserAddOutlined />,
    role: "~master,",
  },
  {
    to: "/car",
    title: "Mobil",
    icon: <CarOutlined />,
    role: "~master, ~superviser, ~admin, ~finance, ~sales",
    childrens: [
      {
        to: "/car/",
        title: "Master",
        icon: <CarOutlined />,
        role: "~master,",
        childrens: [
          {
            to: "/car/master",
            title: "Mobil",
            icon: <CarOutlined />,
            role: "~master",
          },
          {
            to: "/car/merk",
            title: "Merk",
            icon: <UnorderedListOutlined />,
            role: "~master",
          },
          {
            to: "/car/group-model",
            title: "Group Model",
            icon: <GroupOutlined />,
            role: "~master",
          },
          {
            to: "/car/model",
            title: "Model",
            icon: <BarcodeOutlined />,
            role: "~master",
          },
          {
            to: "/car/year",
            title: "Tahun",
            icon: <CalendarOutlined />,
            role: "~master",
          },
        ],
      },
      {
        to: "/car/specification",
        title: "Spesifikasi",
        icon: <CarOutlined />,
        role: "~master, ~superviser, ~admin,",
      },
      {
        to: "/car/file",
        title: "Listing",
        icon: <CarOutlined />,
        role: "~master, ~superviser, ~admin, ~finance, ~sales",
      },
      {
        to: "/car/sell",
        title: "Transaksi",
        icon: <CarOutlined />,
        role: "~master, ~superviser, ~admin, ~sales",
      },
      {
        to: "/car/nego",
        title: "Nego",
        icon: <CarOutlined />,
        role: "~master, ~superviser, ~admin,",
      },
      {
        to: "/car/market",
        title: "Market",
        icon: <CarOutlined />,
        role: "~master, ~superviser, ~admin, ~sales",
      },
      {
        to: "/car/credit",
        title: "Credit",
        icon: <CarOutlined />,
        role: "~master, ~superviser,",
      },
    ],
  },
  {
    to: "/user",
    title: "User",
    icon: <UserOutlined />,
    role: "~master, ~superviser",
    childrens: [
      {
        to: "/user/master",
        title: "User",
        icon: <UserOutlined />,
        role: "~master, ~superviser",
      },
      {
        to: "/user/admin",
        title: "User Admin",
        icon: <UserOutlined />,
        role: "~master, ~superviser",
      },
      {
        to: "/user/access",
        title: "Role Access",
        icon: <UserOutlined />,
        role: "~master, ~superviser",
      },
      {
        to: "/user/review",
        title: "Review",
        icon: <UserOutlined />,
        role: "~master, ~superviser",
      },
      {
        to: "/user/asign-status",
        title: "Asign Status Mitra",
        icon: <UserOutlined />,
        role: "~master, ~superviser",
      },
      {
        to: "/user/subscription",
        title: "Subskripsi",
        icon: <UserOutlined />,
        role: "~master, ~superviser",
      },
      {
        to: "/user/notification",
        title: "Notifikasi",
        icon: <UserOutlined />,
        role: "~master, ~superviser",
      },
    ],
  },
  {
    to: "/auction",
    title: "Lelang",
    icon: <CarOutlined />,
    role: "~master, ~superviser,",
    childrens: [
      {
        to: "/auction/master",
        title: "Master",
        icon: <CarOutlined />,
        role: "~master, ~superviser,",
      },
    ],
  },
  {
    to: "/lebaga-pembayaran",
    title: "Lembaga Pembayaran",
    icon: <CarOutlined />,
    role: "~master, ~superviser,",
    childrens: [
      {
        to: "/lebaga-pembayaran/master",
        title: "Lembaga Pembayaran",
        icon: <CarOutlined />,
        role: "~master, ~superviser,",
      },
    ],
  },
  {
    to: "/products",
    title: "Products",
    icon: <CarOutlined />,
    role: "~master, ~superviser,",
    childrens: [
      {
        to: "/products/banner",
        title: "Banner",
        icon: <CarOutlined />,
        role: "~master, ~superviser,",
      },
      {
        to: "/products/beli",
        title: "Djubli Beli",
        icon: <CarOutlined />,
        role: "~master, ~superviser,",
      },
      {
        to: "/products/help",
        title: "Djubli Help",
        icon: <CarOutlined />,
        role: "~master, ~superviser,",
      },
      {
        to: "/products/report",
        title: "Djubli Report",
        icon: <CarOutlined />,
        role: "~master, ~superviser,",
      },
    ],
  },
  {
    to: "/news",
    title: "Berita",
    icon: <CarOutlined />,
    role: "~master, ~superviser, ~admin, ~finance, ~sales",
  },
]

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      activeKey: [],
      openKey: [],
    }
  }

  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  componentDidMount() {
    const activePath = this.props.match.path.split("/")

    const idx = menus.findIndex((menu) => menu.to === `/${activePath[1]}`)
    let sIdx = -1

    if (menus[idx].childrens !== undefined) {
      sIdx = menus[idx].childrens.findIndex(
        (child) => child.to === `/${activePath[1]}/`
      )

      if (sIdx !== -1) {
        let ssIdx = menus[idx].childrens[sIdx].childrens.findIndex(
          (child) => child.to === `/${activePath[1]}/${activePath[2]}`
        )

        if (ssIdx !== -1) {
          this.setState({
            activeKey: [`/${activePath[1]}/${activePath[2]}`],
            openKey: [`/${activePath[1]}`, `/${activePath[1]}/`],
          })
        } else {
          this.setState({
            activeKey: [`/${activePath[1]}/${activePath[2]}`],
            openKey: [`/${activePath[1]}`],
          })
        }
      } else {
        this.setState({
          activeKey: [`/${activePath[1]}/${activePath[2]}`],
          openKey: [`/${activePath[1]}`],
        })
      }
    } else {
      this.setState({
        activeKey: [`/${activePath[1]}`],
      })
    }
  }

  onOpenChange = (val) => {
    this.setState({ openKey: val })
  }

  render() {
    const { collapsed, activeKey, openKey } = this.state
    const activeRole = storage.get("role")

    return (
      <Sider
        width="265px"
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo">DjuBlee</div>
        <Menu
          theme="dark"
          openKeys={openKey}
          selectedKeys={activeKey}
          onOpenChange={this.onOpenChange}
          mode="inline"
        >
          {menus.map((menu) => (
            <>
              {menu.childrens !== undefined ? (
                <>
                  {menu.role.includes(`~${activeRole}`) ? (
                    <SubMenu key={menu.to} icon={menu.icon} title={menu.title}>
                      {menu.childrens.map((child) => {
                        if (child.childrens !== undefined) {
                          if (child.role.includes(`~${activeRole}`)) {
                            return (
                              <SubMenu key={child.to} title={child.title}>
                                {child.childrens.map((subChild) => (
                                  <>
                                    {subChild.role.includes(
                                      `~${activeRole}`
                                    ) ? (
                                      <Menu.Item key={subChild.to}>
                                        <NavLink to={subChild.to}>
                                          {subChild.title}
                                        </NavLink>
                                      </Menu.Item>
                                    ) : null}
                                  </>
                                ))}
                              </SubMenu>
                            )
                          } else {
                            return null
                          }
                        } else {
                          if (child.role.includes(`~${activeRole}`)) {
                            return (
                              <Menu.Item key={child.to}>
                                <NavLink to={child.to}>{child.title}</NavLink>
                              </Menu.Item>
                            )
                          } else {
                            return null
                          }
                        }
                      })}
                    </SubMenu>
                  ) : null}
                </>
              ) : (
                <>
                  {menu.role.includes(`~${activeRole}`) ? (
                    <Menu.Item key={menu.to} icon={menu.icon}>
                      <NavLink to={menu.to}>{menu.title}</NavLink>
                    </Menu.Item>
                  ) : null}
                </>
              )}
            </>
          ))}
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(SideBar)
