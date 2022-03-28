import React from "react";
import "./ProfilePage.css";
import profilepic from "../../img/profilepic.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const ProfilePage = () => {
    return (
        <>
            <div className="profile-wrap">
                <div className="profile-header"></div>
                <div className="profile-info">
                    <img
                        className="profile-info-picture"
                        src={profilepic}
                    ></img>
                    <h2 className="profile-info-name">Jayke Alan</h2>
                    <p className="profile-info-user">@jayke_alan</p>
                    <p className="profile-info-location">
                        <LocationOnIcon />
                        Prague, Czech Republic
                    </p>
                    <p className="profile-info-bio">
                        trying to watch more films :~)
                    </p>
                </div>
            </div>
        </>
    );
};
