import React from 'react';
import { Grid, Header, Divider, Container } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
      <Container fluid>
        <Grid columns={3} padded className="black-background">
          <Grid.Column>
            <Header as="h5" className="footertxt">NAVIGATION</Header>
            <Divider />
            <Header as="h5">About Us</Header>
            <Header as="h5">Videos</Header>
            <Header as="h5">Store Locations</Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h5">MAIN MENU</Header>
            <Divider />
            <Header as="h5">Men</Header>
            <Header as="h5">Women</Header>
            <Header as="h5">Kids</Header>
          </Grid.Column>
          <Grid.Column>
            <Header as="h5">CONNECT</Header>
            <Divider />
            <Header as="h5">Sign up for the latest updates</Header>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
