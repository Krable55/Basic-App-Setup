import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { drawerMenuTheme } from "../../../../public/CSS/themes";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import { toggleMenu } from "../../../reducers/dashboardReducer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

class DrawerMenu extends Component {
  constructor(props) {
    super(props);
  }

  // toggleDrawer = open => event => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   // setState({ ...state, [side]: open });
  // };

  sideList = side => (
    <div
      className={this.props.classes.list}
      role="presentation"
      // onClick={this.toggleDrawer(side, false)}
      // onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  fullList = side => (
    <div
      className={this.props.classes.fullList}
      // role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  render() {
    const { classes, menu } = this.props;
    return (
      <div>
        <Drawer open={menu} onClose={this.props.toggleMenu}>
          <div className={classes.toolbar} />
          {this.sideList("left")}
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user, request, dashboard } = state;
  return {
    user: user,
    menu: dashboard.menu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(toggleMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(drawerMenuTheme)(DrawerMenu));
