import React from "react";

import Copyright from "../components/Copyright";

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SearchTrails = ({ setTDState, setWDState, TDState, WDState }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
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
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Developed by <Link color="inherit" href="https://github.com/kaitekelly">Kaite Kelly</Link> {"&"} <Link color="inherit" href="https://github.com/JMantis0">Jesse Mazur</Link>
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
};

export default SearchTrails;

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
