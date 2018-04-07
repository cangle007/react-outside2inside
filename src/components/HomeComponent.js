import React, { Component } from 'react';
import headerlogo2 from '../images/headerlogo2.png';
import ReactPlayer from 'react-player';
import uglyProduce from '../dist/img/uglyProduce.webm';
import InViewMonitor from 'react-inview-monitor';
import matthew from '../dist/img/matthew.png';

import {
  Button,
  Container,
  Divider,
  Grid,
  Card,
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

    this.state = {
      index: 0,
      indexLogos: 0,
      translateValue: 0,
      translateValueLogos: 0
    };
  }

  goToPreviousSlide = () => {
    const { index, translateValue } = this.state;
    if (index === 0) return;

    this.setState({
      translateValue: translateValue + this.slideWidth(),
      index: index - 1
    });
  };

  goToNextSlide = () => {
    const { images } = this.props;
    const { index, translateValue } = this.state;

    if (index === images.length - 1) {
      return this.setState({ translateValue: 0, index: 0 });
    }

    this.setState({
      translateValue: translateValue - this.slideWidth(),
      index: index + 1
    });
  };

  goToNextSliderLogos = () => {
    const { indexLogos, translateValueLogos } = this.state;

    if (indexLogos === 3) {
      return this.setState({ indexLogos: 0, translateValueLogos: 0 });
    }

    this.setState({
      translateValueLogos: translateValueLogos - this.slideWidthLogos(),
      indexLogos: indexLogos + 1
    });
  };

  slideWidth = () => document.querySelector('.slide').clientWidth;
  slideWidthLogos = () => document.querySelector('.logosSlide').clientWidth;

  componentDidMount = () => {
    window.setInterval(() => {
      this.goToNextSlide();
    }, 3000);

    window.setInterval(() => {
      this.goToNextSliderLogos();
    }, 2000);
  };
  render() {
    const { translateValue, translateValueLogos } = this.state;
    console.log('my props---------', this.props);
    console.log('my state---------', this.state);
    return (
      <div>
        <section className="header-image">
          <div className="header-body">
            <Menu inverted secondary size="large">
              <Container>
                {/* <div className="basicBox">
                  Home
                  <svg
                    width="100"
                    height="40"
                    viewBox="0 0 100 40"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" fill="none" width="100" height="40" />
                  </svg>
                </div>
                <div className="basicBox">
                  Work
                  <svg
                    width="100"
                    height="40"
                    viewBox="0 0 100 40"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" fill="none" width="100" height="40" />
                  </svg>
                </div>
                <div className="basicBox">
                  About Us
                  <svg
                    width="100"
                    height="40"
                    viewBox="0 0 100 40"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" fill="none" width="100" height="40" />
                  </svg>
                </div> */}

                <div className="svg-wrapper">
                  <svg
                    height="40"
                    width="150"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect id="shape" height="40" width="150" />
                  </svg>
                  <div className="words">
                    <p>HOME</p>
                  </div>
                </div>
                <div className="svg-wrapper">
                  <svg
                    height="40"
                    width="150"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect id="shape" height="40" width="150" />
                  </svg>
                  <div className="words">
                    <p>WORK</p>
                  </div>
                </div>

                <div className="svg-wrapper">
                  <svg
                    height="40"
                    width="150"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect id="shape" height="40" width="150" />
                  </svg>
                  <div className="words">
                    <p>ABOUT US</p>
                  </div>
                </div>

                {/* <Menu.Item as="a">Home</Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item> */}
                <Menu.Item style={{ marginLeft: '23.0em' }}>
                  <Button>Log in</Button>
                  <Button as="a" style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>

            <Container text>
              <Header
                content="Outside2Inside"
                style={{
                  fontSize: '6em',
                  fontWeight: 'bold',
                  //marginBottom: 0,
                  marginTop: '1.3em',
                  marginLeft: '1.0em',
                  color: 'green'
                }}
              />

              <Header
                content="Prevent, Recover and Recycle"
                style={{
                  fontSize: '2.5em',
                  fontWeight: 'bold',
                  //marginBottom: 0,
                  //marginTop: '1.3em',
                  marginLeft: '4.2em',
                  color: 'green'
                }}
              />
              {/* <Header
                content="Prevent, Recover and Recycle"
                style={{
                  fontSize: '3em',
                  fontWeight: 'normal',
                  marginTop: '0.0em',
                  marginLeft: '.3em',
                  color: 'green'
                }}
              /> */}
              <div
                className="actions"
                style={{
                  marginTop: '2.0em'
                }}>
                <InViewMonitor
                  classNameNotInView="vis-hidden"
                  classNameInView="animated fadeInUp">
                  <ul className=" button-list">
                    <li>
                      <a href="/" className="donate-button">
                        Donate
                      </a>
                    </li>

                    <li>
                      <a href="/" className="volunteer-button">
                        Volunteer Today
                      </a>
                    </li>
                  </ul>
                </InViewMonitor>
              </div>
            </Container>
          </div>
        </section>

        <div className="parallax-01">
          <h2 className="label-section-01">With your help</h2>
          <p className="content-section-01">
            We’ve recovered
            <span className="stat stat-short">155,000</span>produce, and fed
            <span className="stat stat-short">5 thousand</span> people around
            the nation
          </p>
        </div>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: '2.1em' }}>
                  We Prevent, Recover, and Recycle Food
                </Header>
                <p style={{ fontSize: '1.30em' }}>
                  Outside2Inside was founded in 2010, in response to the
                  question:
                </p>
                <p
                  style={{
                    fontSize: '1.33em',
                    fontWeight: 'Bold',
                    fontStyle: 'italic'
                  }}>
                  “How can we reduce food waste and redistribute excessive
                  produces to those who need it?”
                </p>
                <p style={{ fontSize: '1.30em' }}>
                  This idea captivated professions from all fields to come
                  together to collaborate and explore new ways of using
                  technologies, shaping social policies, and using educational
                  platform to turn a simple idea into reality that could feed
                  6.3 million of U.S. households
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={7}>
                <InViewMonitor
                  childPropsInView={{ playing: true }}
                  toggleChildPropsOnInView={true}
                  intoViewMargin="-100px">
                  <ReactPlayer
                    loop="true"
                    onStart
                    width="100%"
                    height="100%"
                    url={uglyProduce}
                  />
                </InViewMonitor>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid columns="equal" stackable>
            {/* celled="internally" */}
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Icon name="zoom" size="huge" style={{ color: '#f9cab7' }} />
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
                <Icon name="unhide" size="huge" style={{ color: '#f9cab7' }} />
                <Header
                  as="h3"
                  style={{ fontSize: '2em', textAlign: 'center' }}>
                  Our Vision
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  To reduce food waste by 10% through educational platforms,
                  social policies, technologies and food waste recycling program
                  by year 2020
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Icon
                  name="lightbulb"
                  size="huge"
                  style={{ color: '#f9cab7' }}
                />
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
              <a href="/">Case Studies</a>
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

        <div className="parallax-02">
          <h2
            style={{
              color: 'white',
              paddingTop: 60,
              paddingLeft: 300,
              fontSize: '30px',
              fontFamily: 'Gotham-Bold'
            }}>
            <div
              style={{
                height: 20,
                width: 800,
                margin: 10
              }}>
              SINCE 2010 OUR PROGRAMS HAVE REACHED MORE THAN 5,000 KIDS AND
              ADULTS
            </div>
          </h2>
        </div>

        <h2 className="label-section-03">Our Programs</h2>
        <Grid columns={4} style={{ padding: '4em 0em' }}>
          <Grid.Row>
            <Grid.Column className="hover-grow">
              <InViewMonitor
                classNameNotInView="vis-hidden"
                classNameInView="animated jackInTheBox">
                <Card>
                  <Image src={matthew} />
                  <Card.Content>
                    <Card.Header>Self Awareness Courses</Card.Header>
                    <Card.Description>
                      brief details about program
                    </Card.Description>
                  </Card.Content>
                </Card>
              </InViewMonitor>
            </Grid.Column>
            <Grid.Column className="hover-grow">
              <InViewMonitor
                classNameNotInView="vis-hidden"
                classNameInView="animated jackInTheBox">
                <Card>
                  <Image src={matthew} />
                  <Card.Content>
                    <Card.Header>Farms2School</Card.Header>
                    <Card.Description>
                      brief details about program
                    </Card.Description>
                  </Card.Content>
                </Card>
              </InViewMonitor>
            </Grid.Column>
            <Grid.Column className="hover-grow">
              <InViewMonitor
                classNameNotInView="vis-hidden"
                classNameInView="animated jackInTheBox">
                <Card>
                  <Image src={matthew} />
                  <Card.Content>
                    <Card.Header>Kids Food Waste Awareness</Card.Header>
                    <Card.Description>
                      brief details about program
                    </Card.Description>
                  </Card.Content>
                </Card>
              </InViewMonitor>
            </Grid.Column>
            <Grid.Column className="hover-grow">
              <InViewMonitor
                classNameNotInView="vis-hidden"
                classNameInView="animated jackInTheBox">
                <Card>
                  <Image src={matthew} />
                  <Card.Content>
                    <Card.Header>Composing Community</Card.Header>
                    <Card.Description>
                      brief details about program
                    </Card.Description>
                  </Card.Content>
                </Card>
              </InViewMonitor>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <section style={{ padding: '10em 0em' }} className="slider">
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

        <div className="parallax-03">
          <h2
            style={{
              color: 'white',
              paddingTop: 35,
              fontSize: 30,
              fontFamily: 'Gotham-Bold'
            }}>
            PARTNERS WE LOVE WORKING WITH
          </h2>
          <section className="logos-slider">
            <div
              style={{
                transform: `translateX(${translateValueLogos}px)`,
                transition: 'transform ease-out 0.45s'
              }}>
              {this.props.logoImages.map((images, i) => {
                return (
                  <img
                    alt="arrayOfLogoImages"
                    key={i}
                    className="logosSlide"
                    src={require(`../dist/img/${images}.png`)}
                    style={{
                      height: 150,
                      width: 200,
                      margin: 40
                    }}
                  />
                );
              })}
            </div>
          </section>
        </div>

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
