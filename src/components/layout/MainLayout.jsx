import Layout, { Content, Footer } from "antd/lib/layout/layout"
import { Component } from "react"
import NavHeader from "./NavHeader"
import SideBar from "./SideBar"

class MainLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Layout>
          <SideBar></SideBar>
          <Layout>
            <NavHeader></NavHeader>
            <Content style={{ padding: "20px" }}>{children}</Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </>
    )
  }
}

export default MainLayout
