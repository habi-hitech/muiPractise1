import { Button, TextField, Typography } from "@mui/material";

const App = () => {
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
      <TextField />
    </>
  );
};

export default App;
