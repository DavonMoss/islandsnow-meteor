import React from 'react';
import { Grid, Menu, Icon } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
      <Grid centered>
        <Menu borderless>
          <Menu.Item>
            <Menu.Item>MEN <Icon name="dropdown"/></Menu.Item>
            <Menu.Item>WOMEN <Icon name="dropdown"/></Menu.Item>
            <Menu.Item>KIDS <Icon name="dropdown"/></Menu.Item>
            <Menu.Item>BRANDS <Icon name="dropdown"/></Menu.Item>
            <Menu.Item>SEARCH <Icon name="dropdown"/></Menu.Item>
          </Menu.Item>
        </Menu>
      </Grid>
    );
  }
}
