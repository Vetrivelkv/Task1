import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import { InputField } from "../UIControls/InputField";

const General_Details = (props) => {
  const {
    formField: { firstName, lastName },
  } = props;
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default General_Details;
