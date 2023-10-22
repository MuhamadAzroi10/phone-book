import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Wrap_sidebar,
  Wrap_sidebar_icnMenu,
  Wrap_sidebar_itemm,
  Wrap_sidebar_itemm_active,
  Wrap_sidebar_list,
  Wrap_slide_up,
  Wrap_slide_up_icon,
} from "../../assets/style_navbar";
import { Text_H5_bold, Text_H6_semi } from "../../assets/style_text";

import { Home } from "@emotion-icons/boxicons-regular/Home";
import { PlusCircleFill } from "@emotion-icons/bootstrap/PlusCircleFill";
import { CircleWithMinus } from "@emotion-icons/entypo/CircleWithMinus";
import { svg_button } from "../../assets/style_button";
import { Ds_Element_flex2 } from "../../assets/style_page/style_dashboard";
import { MenuAltLeft } from "@emotion-icons/boxicons-regular/MenuAltLeft";
import { Element_flex } from "../../assets/style_page/style_landingpage";
import { ArrowRightCircleFill } from "@emotion-icons/bootstrap/ArrowRightCircleFill";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Wrap_sidebar className={isChecked ? "active" : ""}>
        <Element_flex>
          <Text_H5_bold>Menu</Text_H5_bold>
        </Element_flex>

        <Wrap_sidebar_list>
          <Link
            className={
              pathname === "/dashboard"
                ? Wrap_sidebar_itemm_active
                : Wrap_sidebar_itemm
            }
            to="/dashboard"
          >
            <Ds_Element_flex2>
              <Home className={svg_button} />
              Home
            </Ds_Element_flex2>
          </Link>
          <br />
          <Link
            className={
              pathname === "/add_contact/v1"
                ? Wrap_sidebar_itemm_active
                : Wrap_sidebar_itemm
            }
            to="/add_contact/v1"
          >
            <Ds_Element_flex2>
              <PlusCircleFill className={svg_button} />
              New Contact
            </Ds_Element_flex2>
          </Link>
          <br />
          <Link
            className={
              pathname === "/add_contact/v2"
                ? Wrap_sidebar_itemm_active
                : Wrap_sidebar_itemm
            }
            to="/add_contact/v2"
          >
            <Ds_Element_flex2>
              <CircleWithMinus className={svg_button} />
              Add Contact
            </Ds_Element_flex2>
          </Link>
        </Wrap_sidebar_list>

        <Wrap_slide_up onClick={handleCheckboxChange}>
          <ArrowRightCircleFill className={Wrap_slide_up_icon} />
        </Wrap_slide_up>
      </Wrap_sidebar>
    </>
  );
};

export default Sidebar;
