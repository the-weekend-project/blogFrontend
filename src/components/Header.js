import React from "react"
import { Link, browserHistory } from "react-router"
import AppBar from "material-ui/lib/app-bar"
import IconButton from "material-ui/lib/icon-button"
import FontIcon from "material-ui/lib/font-icon"

function handleTouchTap() {
  browserHistory.push("/posts")
}

const Header = () => (
  <AppBar
    title="The Weekend Project"
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<Link to="/posts"><IconButton><FontIcon className="material-icons">home</FontIcon></IconButton></Link>}
    iconElementRight={<IconButton><FontIcon className="material-icons">mail</FontIcon></IconButton>}
  />
)

export default Header
