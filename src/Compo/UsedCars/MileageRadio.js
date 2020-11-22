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
   
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <RadioGroup aria-label="quiz" name="quiz"  style={{flexDirection: 'row'}}>
          <FormControlLabel value="10000" control={<Radio  onChange={()=>props.getRadioBtnFilterData(10000,'mileage')}/>} label="10,000km & less" />
          <FormControlLabel value="30000" control={<Radio  onChange={()=>props.getRadioBtnFilterData(30000,'mileage')}/>} label="30,000km & less" />
          <FormControlLabel value="50000" control={<Radio  onChange={()=>props.getRadioBtnFilterData(50000,'mileage')}/>} label="50,000km & less" />
          <FormControlLabel value="75000" control={<Radio  onChange={()=>props.getRadioBtnFilterData(75000,'mileage')}/>} label="75,000km & less" />
          <FormControlLabel value="100000" control={<Radio  onChange={()=>props.getRadioBtnFilterData(10000,'mileage')}/>} label="1,00,000km & less" />
          
        </RadioGroup>
      </FormControl>
   
  );
}
