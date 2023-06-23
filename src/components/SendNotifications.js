import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SendNotification() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      message: data.get("message"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              background:
                "linear-gradient(107deg, rgb(226, 8, 128) 30%, rgb(103, 76, 159) 70%, rgb(53, 197, 243) 100%)",
            }}
          >
            <NotificationsIcon />
          </Avatar>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              autoComplete="text"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="recipient"
              label="Recipient"
              name="recipient"
              autoComplete="text"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background:
                  "linear-gradient(107deg, rgb(226, 8, 128) 30%, rgb(103, 76, 159) 70%, rgb(53, 197, 243) 100%)",
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
