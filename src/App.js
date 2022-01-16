import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './App.css';

export default function App() {
  const [textValue, setTextValue] = useState("");
  const [number,setNumber] = useState(null);
  const [time, setTime] = useState([]);
  const Dates = [
    1,
    2,
    3,
    30,
    31
  ];
  const Months = [
    "Jan",
    "Feb",
    "Mar"
  ];


 
  const handleChange = (e) => {
    setTime(e.target.value);
  }

  const handleSubmit = () => {
    console.log(textValue);
    console.log(number);
    console.log(time);
  }
  const handleReset = () => {
    setTextValue("");
    setNumber(0);
    setTime([]);
  }
  return (

    <div className='container'>
      <h2>Form Demo</h2>
      <div className='inlineBox'>
        <TextField
          onChange={e => setTextValue(e.target.value)}
          value={textValue}
          label={"Full Name"} //optional
        />
      </div>
      
      <div className='inlineBox'>
        <TextField
          onChange={e => setNumber(e.target.value)}
          value={number}
          label={"card number"} //optional
        />
      </div>
      <div className='inlineBox'>
        <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
        />
      </div>
      <div className='inlineBox'>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel >Month</InputLabel>
          <Select
            value={time}
            onChange={handleChange}
            input={<OutlinedInput label="time" />}
          >
            {Months.map((month) => (
              <MenuItem
                key={month}
                value={month}
              >
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel >Date</InputLabel>
          <Select
            value={time}
            onChange={handleChange}
            input={<OutlinedInput label="time" />}
          >
            {Dates.map((date) => (
              <MenuItem
                key={date}
                value={date}
              >
                {date}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      
      <div>
        <Button variant="contained"  onClick={handleSubmit}>Submit</Button>
        <Button variant="contained" onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}
