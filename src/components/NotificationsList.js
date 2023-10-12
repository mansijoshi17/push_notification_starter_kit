import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import * as PushAPI from "@pushprotocol/restapi";

export default function NotificationList({ address, setCount }) {
  const [notifications, setNotification] = React.useState([]);
  React.useEffect(() => {
    const init = async () => {
      try {
        const spams = await PushAPI.user.getFeeds({
          user: `eip155:5:${address}`, // user address in CAIP
          spam: true,
          env: "staging",
        });
        console.log(spams);
        setCount(spams.length);
        setNotification(spams);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {notifications &&
        notifications.map((notification) => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={notification.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {notification.app}
                      </Typography>
                      -- {notification.message}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
    </List>
  );
}
