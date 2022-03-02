import React from "react";
import "./User.scss";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function User() {
  return (
    <div id="user">
      <img
        src="https://i.pravatar.cc/1000"
        alt="avatar"
        className="user__avatar"
      />
      <h1 className="user__name">Matthieu Clay</h1>
      <p className="user__profession">Consultant informatique</p>
      <div className="user__infos">
        <p className="user__info">
          <LocationOnIcon />
          Marcq-en-Baroeul
        </p>
        <p className="user__info">
          <PhoneIcon />
          <a href="tel:+33700000000">+33.7.00.00.00.00</a>
        </p>
        <p className="user__info">
          <MailIcon />
          <a href="mailto:matthieu.clay@outlook.fr">matthieu.clay@outlook.fr</a>
        </p>
        <p className="user__info">
          <EventIcon />
          Date de naissance : 29 Décembre 1997
        </p>
      </div>
    </div>
  );
}

export default User;
