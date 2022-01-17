import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './App.css';

export default function App() {
  const [name, setName] = useState("");
  const [number,setNumber] = useState(null);
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("1");
  const [month, setMonth] = useState("Jan");
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
    setDate(e.target.value);
  }
  const handleSubmit = () => {
    console.log(name);
    console.log(number);
    console.log(password);
    console.log(date);
    
  }
  const handleReset = () => {
    setName("");
    setNumber(null);
    setMonth("Jan");
    setDate("1");
    setPassword("");
  }

  return (
    <div className='container'>
      <h2>Form Demo</h2>

      <div className='inlineBox'>
        <TextField
          onChange={e => setName(e.target.value)}
          value={name}
          label={"Full Name"} //optional
        />
      </div>
      <div className='inlineBox'>
        <TextField
          onChange={e => setNumber(e.target.value)}
          value={number || ""}
          label={"Card Number"} //optional
        />
      </div>
      <div className='inlineBox'>
        <TextField
            onChange={e => setPassword(e.target.value)}
            label="Password"
            value={password}
            autoComplete="current-password"
        />
      </div>
      <div className='inlineBox'>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel >Month</InputLabel>
          <Select
            id="selectTime"
            value={month}
            onChange={e => setMonth(e.target.value)}
            input={<OutlinedInput label="month" />}
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
            id="selectTime"
            value={date}
            onChange={handleChange}
            input={<OutlinedInput label="date" />}
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
      
      <div className='buttonGroup'>
        <Button variant="contained"  onClick={handleSubmit}>Submit</Button>
        <Button variant="contained" onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}
