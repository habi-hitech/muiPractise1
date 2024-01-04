import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <Typography variant="h4" align="center" fontWeight="bold" noWrap>
        Hello World !!!
      </Typography>
      <Button
        color="success"
        variant="contained"
        size="large"
        sx={{ mr: 3 }}
        onClick={() => alert("Button clicked")}
      >
        Secondary
      </Button>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          placeholder="Name"
          variant="outlined"
          sx={{ pr: 3 }}
          value={inputs.name}
          onChange={handleChange}
        />
        <TextField
          name="email"
          placeholder="Email"
          variant="standard"
          sx={{ pr: 3 }}
          onChange={handleChange}
        />
        <TextField
          password="password"
          placeholder="Password"
          variant="filled"
          type="password"
          sx={{ pr: 3 }}
          onChange={handleChange}
        />
        <Typography>
          {inputs.name} + {inputs.email}
        </Typography>
        <Button type="submit">Sumbit</Button>
      </form>
    </>
  );
};

export default App;
