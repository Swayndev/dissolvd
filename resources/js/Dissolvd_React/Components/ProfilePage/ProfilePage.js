import React, { Fragment, useState, useContext } from "react";
import { UserContext } from "../../../context/context";

import "./ProfilePage.css";
import profilepic from "../../img/profilepic.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Watched } from "./Watched/Watched";
import { Watchlist } from "./Watchlist/Watchlist";

export const ProfilePage = () => {
    
    const [value, setValue] = useState("1");

    const { user } = useContext(UserContext);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log('this is user from ProfilePage', user)
    return (
        <>
            <div className="profile-wrap">
                <div className="profile-header"></div>
                <div className="profile-info">
                    <img
                        className="profile-info-picture"
                        src={profilepic}
                    ></img>
                    {user &&
                        <Fragment>
                            <h2 className="profile-info-name">{user.username}</h2>
                            
                            <p className="profile-info-user">{user.email}</p>
                        </Fragment>
                    }
                    <p className="profile-info-location">
                        <LocationOnIcon />
                        Prague, Czech Republic
                    </p>
                    <p className="profile-info-bio">
                        trying to watch more films :~)
                    </p>
                </div>
                <Box sx={{ width: "100%", typography: "body1" }} centered>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList onChange={handleChange}>
                                <Tab icon={<PersonIcon />} value="1" />
                                <Tab icon={<VisibilityIcon />} value="2" />
                                <Tab icon={<WatchLaterIcon />} value="3" />
                                <Tab icon={<FavoriteIcon />} value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">Top 4 favourites</TabPanel>
                        <TabPanel value="2">
                            <Watched />
                        </TabPanel>
                        <TabPanel value="3">
                            <Watchlist />
                        </TabPanel>
                        <TabPanel value="4">Favourites</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </>
    );
};
