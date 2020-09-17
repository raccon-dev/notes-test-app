import React from "react";
import "./header.css";
import { notesHandler } from "../../redux/actions/setNotes";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { ReactComponent as RuFlag } from "./ruFlag.svg";
import { ReactComponent as EnFlag } from "./enFlag.svg";
import { ReactComponent as UaFlag } from "./uaFlag.svg";
import { ReactComponent as IconAdd } from "./iconAdd.svg";

const Header = () => {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  const dispatch = useDispatch();

  const onAddHandler = () => {
    dispatch(
      notesHandler("", "POST", {
        notesBody: "Start type something",
        noteColor: "white",
      })
    );
  };

  return (
    <header id="header">
      <div className="container">
        <nav className="navigation">
          <div className="localization">
            <button onClick={() => handleClick("ru")} className="loc loc-RU">
              <RuFlag />
            </button>
            <button onClick={() => handleClick("en")} className="loc loc-EN">
              <EnFlag />
            </button>
            <button onClick={() => handleClick("ua")} className="loc loc-UA">
              <UaFlag />
            </button>
          </div>
          <h1>
            <a href="/" className="logo">
              {t("title.1")}
            </a>
          </h1>
          <p className="description">{t("description.1")} </p>
        </nav>
        <div className="help-section">
          <p>
            Click Add Button <br /> to create a new note!
          </p>
          <img
            className="arrow-bottom"
            src="./assets/img/bottom-right-arrow.png"
            alt="arrow-bottom-right"
          />
        </div>
        <button onClick={(e) => onAddHandler()} className=" btn-addNotes">
          <IconAdd />
        </button>
      </div>
    </header>
  );
};

export default Header;
