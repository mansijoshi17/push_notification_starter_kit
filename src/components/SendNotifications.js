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
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

// TODO remove, this demo shouldn't need to reset the theme.

const PK = process.env.REACT_APP_PUSH_PRIVATE_KEY; // channel private key
const Pkey = `0x${PK}`;
const _signer = new ethers.Wallet(Pkey);

const defaultTheme = createTheme();
// REACT_APP_PUSH_PRIVATE_KEY

export default function SendNotification() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title"),
      message: data.get("message"),
    });
    try {
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer: _signer,
        type: 3, // broadcast
        identityType: 2, // direct payload
        notification: {
          title: `CodeCrunch Techschool`,
          body: `Tutorial`,
        },
        payload: {
          title: `${data.get("title")}`,
          body: `${data.get("message")}`,
          cta: "",
          img: "",
        },
        recipients: `eip155:5:${data.get("recipient")}`,
        channel: "eip155:5:0x73AF87F754c235a69E5DFB1C3450767292a7e974", // your channel address
        env: "staging",
      });
      console.log(apiResponse);
    } catch (err) {
      console.error("Error: ", err);
    }
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
