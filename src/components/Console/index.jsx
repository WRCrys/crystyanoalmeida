import React from 'react'
import useStyles from './styles';
import { Grid, Paper } from '@material-ui/core';

const Console = () => {

  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Grid className={classes.console}>
        <Grid item xs={12} className={classes.bar}>
          <Grid item xs={2} className={classes.groupButtons}>
            <Paper spacing={1} className={classes.closeButton}></Paper>
            <Paper spacing={1} className={classes.minimizeButton}></Paper>
            <Paper spacing={1} className={classes.maxmizeButton}></Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.title}>
          <h3 className={classes.titleStyleClass}>
            Crystyano
            <span className={classes.titleStyleWhite}>
              .
            </span>
            <span className={classes.titleStyleMethod}>
              Almeida
            </span>
            <span className={classes.titleStyleWhite}>
              ();
            </span>
          </h3>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Console