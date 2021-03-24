import React from "react";
// import { useHistory } from "react-router-dom";
import { Box, Grid, Container } from "@material-ui/core";
import SimpleCard from "../components/SimpleCard";
// import NavBar from "../components/NavBar";
import TrailsButton from "../components/TrailsButton";
// import { blue } from "@material-ui/core/colors";
// import TrailCard from "../components/TrailCard";


const SearchTrails = () => {
    const header_style = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "30px",
        margin: "40px",
        fontFamily: "Roboto"
    }
  return (
 
    <div>
      <Box>
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            xs={12}
            spacing={3}
          >
            <h1 style={header_style}>This is the Search Trails page</h1>
          </Grid>
          <Grid container spacing={1}></Grid>
          <SimpleCard />
        </Container>
      </Box>
    </div>
  );
};

export default SearchTrails;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import NoSsr from '@material-ui/core/NoSsr';
// // import Link from 'docs/src/modules/components/Link';

// const useStyles = makeStyles(
//   (theme) => ({
//     root: {
//       padding: theme.spacing(2),
//       minHeight: 160,
//       marginTop: theme.spacing(8),
//     },

//     link: {
//       marginTop: theme.spacing(1),
//       display: 'block',
//     },
//     img: {
//       maxWidth: 960,
//       width: '100%',
//       height: 'auto',
//       marginTop: theme.spacing(4),
//     },
//     button: {
//       margin: theme.spacing(4, 0, 6),
//     },
//   }),
//   { name: 'Themes' },
// );

// export default function Themes() {
//   const classes = useStyles();
//   const t = useSelector((state) => state.options.t);
//   const theme = useTheme();

//   return (
//     <div className={classes.root}>
//       <NoSsr defer>
//         <Container maxWidth="md">
//           <Typography variant="h4" component="h2" align="center" gutterBottom>
//             {t('themes')}
//           </Typography>
//           <Typography variant="body1" align="center" gutterBottom>
//             {t('themesDescr')}
//           </Typography>
//           <Link
//             href="https://material-ui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=home-store"
//             data-ga-event-category="store"
//             data-ga-event-action="click"
//             data-ga-event-label="home"
//             className={classes.link}
//           >
//             <NoSsr defer>
//               <img
//                 className={classes.img}
//                 alt={t('themesButton')}
//                 src={`/static/images/themes-${theme.palette.type}.jpg`}
//                 loading="eager"
//                 width={500}
//                 height={307}
//               />
//             </NoSsr>
//           </Link>
//           <Grid container justify="center">
//             <Button
//               variant="outlined"
//               data-ga-event-category="store"
//               data-ga-event-action="click"
//               data-ga-event-label="home"
//               href="https://material-ui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=home-store"
//               className={classes.button}
//             >
//               {t('themesButton')}
//             </Button>
//           </Grid>
//         </Container>
//       </NoSsr>
//     </div>
//   );
// }
