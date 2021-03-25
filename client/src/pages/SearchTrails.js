import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import DarkSkyButton from "../components/DarkSkyButton";
import TrailsButton from "../components/TrailsButton";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album({ setTDState, setWDState, TDState, WDState }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <button
          onClick={() => {
            console.log(TDState);
            console.log(WDState);
          }}
        >
          Testing State
        </button>
        <Toolbar>
          <FilterHdrIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Project Cottonball
          </Typography>
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
              Let's go hiking
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
            {TDState.map((result, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {result.name}
                    </Typography>
                    <Typography>
                      {"City of " + result.city}.
                    </Typography>
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
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

// import React from "react";
// // import { useHistory } from "react-router-dom";
// import { Box, Grid, Container } from "@material-ui/core";
// import SimpleCard from "../components/SimpleCard";
// import NavBar from "../components/NavBar";
// import TrailsButton from "../components/TrailsButton";

// const SearchTrails = () => {
//   const header_style = {
//     color: "white",
//     backgroundColor: "DodgerBlue",
//     padding: "30px",
//     margin: "40px",
//     fontFamily: "Roboto"
//   };
//   return (
//     <div>
//       <NavBar />

//       <Box>
//         <Container>
//           <Grid
//             container
//             direction-xs-row
//             justify="center"
//             alignItems="center"
//             item
//             spacing={3}
//           >
//             <h1 style={header_style}>This is the Search Trails page</h1>
//           </Grid>
//           <Grid
//             container
//             direction="row"
//             justify="center"
//             alignItems="center"
//             spacing={3}
//           >
//             <SimpleCard xs={3} />
//             <SimpleCard xs={3} />
//             <SimpleCard xs={3} />
//             <SimpleCard xs={3} />
//           </Grid>
//         </Container>
//       </Box>
//     </div>
//   );
// };

// export default SearchTrails;
