import React from "react";
import { array, func, object } from "prop-types";

import { useAuth0 } from "@auth0/auth0-react";

import Copyright from "../components/Copyright";
import MenuButton from "../components/MenuButton";
import { Bones } from "react-bones/lib";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DarkSkyButton from "../components/DarkSkyButton";
import TrailsButton from "../components/TrailsButton";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const SearchTrails = ({ setTDState, setWDState, TDState, WDState }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();

  if (isLoading) {
    return (
      <div>
        <Bones width={window.innerWidth} height={window.innerHeight * 0.1} />
        <div style={{ padding: 30 }} />
        <Bones width={window.innerWidth} height={window.innerHeight * 0.25} />
        <div style={{ padding: 50 }} />
        <Bones width={window.innerWidth} height={window.innerHeight * 0.1} />
        <div style={{ padding: 10 }} />
        <Bones width={window.innerWidth} height={window.innerHeight * 0.1} />
        <div style={{ padding: 10 }} />
        <Bones width={window.innerWidth} height={window.innerHeight * 0.1} />
        <div style={{ padding: 10 }} />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <div>You are not logged in</div>;
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <FilterHdrIcon className={classes.icon} />
          <Typography variant="h6" color="inherit">
            Project Cottonball
          </Typography>
          <MenuButton />
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Hi, {user.nickname}! Let's go hiking
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Search Puget Sound Region Trails and Local Weather Conditions
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <TrailsButton setTDState={setTDState} />
                </Grid>
                <Grid item>
                  <DarkSkyButton setWDState={setWDState} />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {TDState.map((place, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {place.name}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="h2">
                      Activities
                      <ul>
                        {place.activities.map((activity, index) => {
                          //Capitalize the activity name
                          const name= activity.activity_type_name;
                          const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
                          return <li key={index}>{nameCapitalized}</li>
                        })}
                      </ul>
                    </Typography>
                    <Typography>{"City of " + place.city}.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Developed by{" "}
          <Link color="inherit" href="https://github.com/kaitekelly">
            Kaite Kelly
          </Link>{" "}
          {"&"}{" "}
          <Link color="inherit" href="https://github.com/JMantis0">
            Jesse Mazur
          </Link>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

SearchTrails.propTypes = {
  setWDState: func,
  setTDState: func,
  WDState: object,
  TDState: array
};

export default SearchTrails;
