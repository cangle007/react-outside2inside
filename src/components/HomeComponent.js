import React, { Component } from 'react';
import headerlogo2 from '../images/headerlogo2.png';
import ReactPlayer from 'react-player';
import videoTest from '../images/cinema2.webm';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment
} from 'semantic-ui-react';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { index: 0, translateValue: 0 };
  }

  goToPreviousSlide = () => {
    //const { index, translateValue, set_index, set_translateValue } = this.props;
    const { index, translateValue } = this.state;
    if (index === 0) return;

    this.setState({
      translateValue: translateValue + this.slideWidth(),
      index: index - 1
    });
    //set_translateValue(translateValue + this.slideWidth());
    //set_index(index - 1);
  };

  goToNextSlide = () => {
    // const {
    //   images,
    //   index,
    //   translateValue,
    //   set_index,
    //   set_translateValue
    // } = this.props;
    const { images } = this.props;
    const { index, translateValue } = this.state;

    if (index === images.length - 1) {
      return this.setState({ translateValue: 0, index: 0 });
      //set_translateValue(0);
      //return set_index(0);
    }

    this.setState({
      translateValue: translateValue - this.slideWidth(),
      index: index + 1
    });
    // set_translateValue(translateValue - this.slideWidth());
    // set_index(index + 1);
  };

  slideWidth = () => document.querySelector('.slide').clientWidth;

  // componentDidMount = () => {
  //   window.setInterval(() => {
  //     this.goToNextSlide();
  //   }, 3000);
  // };
  render() {
    //const { translateValue, coolButtons } = this.props;
    const { fixed, translateValue } = this.state;

    return (
      <div>
        <section className="hero is-primary header-image">
          <div className="hero-body">
            <Menu inverted secondary size="large">
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>

            <Container text>
              <Header
                as="h1"
                content="Imagine-a-Company"
                inverted
                style={{
                  fontSize: '4em',
                  fontWeight: 'normal',
                  marginBottom: 0,
                  marginTop: '3em'
                }}
              />
              <Header
                as="h2"
                content="Do whatever you want when you want to."
                inverted
                style={{
                  fontSize: '1.7em',
                  fontWeight: 'normal',
                  marginTop: '1.5em'
                }}
              />
              <Button primary size="huge">
                Get Started
                <Icon name="right arrow" />
              </Button>

              <Button primary size="huge">
                Get Started
                <Icon name="right arrow" />
              </Button>
              <Button primary size="huge">
                Get Started
                <Icon name="right arrow" />
              </Button>
            </Container>

            {/* <Image src={headerlogo2} width="auto" height="700px" /> */}
          </div>
        </section>

        {/* <section className="hero is-primary header-image">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-2">
                Build a feedback-driven product with Roadmap
              </h1>
              <h2 className="subtitle is-4">
                Tell the story of your users feedback
              </h2>
              <p>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={videoTest}
                  playing
                />
              </p>
              <p>
                <br />
                <a
                  href="https://app.roadmap.space/#/signup"
                  className="button is-primary is-large">
                  Create your roadmap for free
                </a>
              </p>
            </div>
          </div>
        </section> */}

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  size="large"
                  src="/assets/images/wireframe/white-image.png"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Icon name="zoom" size="huge" />
                <Header as="h3" style={{ fontSize: '2em' }}>
                  The Issue
                </Header>
                <p style={{ fontSize: '1.33em', textAlign: 'center' }}>
                  6.3 million U.S. households had very low food security and yet{' '}
                  <label id="theIssue">$160 billion</label> worth of food
                  produce are wasted annually
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Icon name="unhide" size="huge" />
                <Header
                  as="h3"
                  style={{ fontSize: '2em', textAlign: 'center' }}>
                  Our Vision
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  To mobilize the community, non-profit organizations, and
                  businesses to reduce food waste by 10% through educational
                  programs, collaboration, and food waste recycling program by
                  year 2020
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Icon name="lightbulb" size="huge" />
                <Header
                  as="h3"
                  style={{ fontSize: '2em', textAlign: 'center' }}>
                  Our Solutions
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Partnership with non-profit organizations, school districts,
                  and business to create an effective pipeline to gather,
                  transport, distribute unwanted food to the underprivileged
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Breaking The Grid, Grabs Your Attention
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing
              massive amounts of whitespace and generic content that can seem
              massive, monolithic and worth your attention.
            </p>
            <Button as="a" size="large">
              Read More
            </Button>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
              <a href="#">Case Studies</a>
            </Divider>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Did We Tell You About Our Bananas?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as
              non-sequitur filler content, but it's really true. It took years
              of gene splicing and combinatory DNA research, but our bananas can
              really dance.
            </p>
            <Button as="a" size="large">
              I'm Still Quite Interested
            </Button>
          </Container>
        </Segment>

        <section style={{ padding: '8em 0em' }} className="slider">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            {this.props.images.map((images, i) => {
              return (
                <img
                  alt="arrayOfPictures"
                  key={i}
                  className="slide"
                  src={require(`../dist/img/${images}.jpg`)}
                  style={{
                    height: 800,
                    width: 1800
                  }}
                />
              );
            })}
          </div>

          <div className={'left-arrow'} onClick={this.goToPreviousSlide}>
            <img
              alt="leftArrow"
              src={require(`../dist/img/slider-left-arrow.svg`)}
            />
          </div>

          <div className={'right-arrow'} onClick={this.goToNextSlide}>
            <img
              alt="rightArrow"
              src={require(`../dist/img/slider-right-arrow.svg`)}
            />
          </div>
        </section>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Religious Ceremonies</List.Item>
                    <List.Item as="a">Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Banana Pre-Order</List.Item>
                    <List.Item as="a">DNA FAQ</List.Item>
                    <List.Item as="a">How To Access</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}
