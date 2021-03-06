import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={3}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={9}>
          <h4 style={{marginTop:'0px', marginBottom:'0px'}}>{this.props.schoolName}</h4>
          <p><i>{this.props.degree}</i></p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
