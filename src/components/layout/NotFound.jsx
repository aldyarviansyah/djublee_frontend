import { Component } from "react"

class NotFound extends Component {
  componentDidMount() {
    this.props.history.go(-1)
  }

  render() {
    return <>404 Not Found</>
  }
}

export default NotFound
