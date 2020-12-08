import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function ErrorRadios(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{textAlign:"initial"}}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        {/* <FormLabel component="legend">Pop quiz: Material-UI is...</FormLabel> */}
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="" control={<Radio onChange={(e)=>props.getRadioBtnFilterData(0,'year',e)}/>} label="Any" />

          <FormControlLabel value="2019" control={<Radio onChange={(e)=>props.getRadioBtnFilterData(2019,'year',e)}/>} label="2019 & above" />
          <FormControlLabel value="2017" control={<Radio onChange={(e)=>props.getRadioBtnFilterData(2017,'year',e)}/>} label="2017 & above" />
          <FormControlLabel value="2015" control={<Radio onChange={(e)=>props.getRadioBtnFilterData(2015,'year',e)}/>} label="2015 & above" />
          <FormControlLabel value="2013" control={<Radio onChange={(e)=>props.getRadioBtnFilterData(2013,'year',e)}/>} label="2013 & above" />
          <FormControlLabel value="2011" control={<Radio onChange={(e)=>props.getRadioBtnFilterData(2011,'year',e)}/>} label="2011 & above" />
          <FormControlLabel value="2009" control={<Radio onChange={(e)=>props.getRadioBtnFilterData(2009,'year',e)}/>} label="2009 & above" />
        </RadioGroup>
      </FormControl>
    </form>
  );
}
