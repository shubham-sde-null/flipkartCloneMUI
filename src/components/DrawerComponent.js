import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import CompareIcon from "@mui/icons-material/Compare";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import UpcomingIcon from "@mui/icons-material/Upcoming";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import FilterAltIcon from "@mui/icons-material/FilterAlt";

import PersonIcon from "@mui/icons-material/Person";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import WorkIcon from "@mui/icons-material/Work";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import { listStyle3 } from "../Contexts/listStyle";
import { listStyle3, listStyle } from "../contexts/listStyles";
import { Link } from "react-router-dom";
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FavoriteOutlined } from "@material-ui/icons";
function DrawerComp({ categories }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "#F5F5F1" },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <List sx={{ padding: "0px" }}>
          {categories.map((item, index) => (
            <ListItemButton
              key={index}
              divider
              onClick={() => {
                setOpen(false);
              }}
              sx={{
                background: index === 0 ? "#2874f0" : "",
              }}
            >
              <ListItemIcon sx={{ alignItems: "center" }}>
                <IconButton style={index === 0 ? listStyle : listStyle3}>
                  {index === 0 ? (
                    <PersonIcon />
                  ) : index === 1 ? (
                    <OfflineBoltIcon />
                  ) : index === 2 ? (
                    <UpcomingIcon />
                  ) : index === 3 ? (
                    <LocalOfferIcon />
                  ) : index === 4 ? (
                    <WorkIcon />
                  ) : index === 5 ? (
                    <ConfirmationNumberIcon />
                  ) : index === 6 ? (
                    <ShoppingCartIcon />
                  ) : index === 7 ? (
                    <FavoriteIcon />
                  ) : index === 8 ? (
                    <PersonIcon />
                  ) : (
                    <NotificationsIcon />
                  )}
                </IconButton>
                <ListItemText sx={{ color: "#838383", fontWeight: "bold" }}>
                  <Link
                    style={index === 0 ? listStyle : listStyle3}
                    to={
                      index === 0
                        ? "/"
                        : index === 1
                        ? "/comparemobiles"
                        : index === 2
                        ? "/upcomingmobiles"
                        : index === 3
                        ? "/latestnews"
                        : index === 4
                        ? "/bestmobiles"
                        : index === 5
                        ? "/latestmobiles"
                        : index === 7
                        ? "mobilesbyfeatures"
                        : "/"
                    }
                  >
                    {item}
                  </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
