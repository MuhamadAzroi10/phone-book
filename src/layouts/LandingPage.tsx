import React from "react";
import {
  Element_flex,
  Lp_arrow_bottom,
  Lp_content,
  Lp_wrap_alur,
  Wrap_landingPage,
  lp_bg_bulat,
} from "../assets/style_page/style_landingpage";

import { ArrowheadDownOutline } from "@emotion-icons/evaicons-outline/ArrowheadDownOutline";

import { RightArrowAlt } from "@emotion-icons/boxicons-regular/RightArrowAlt";

import bg_bulat from "./../assets/img/bg_circular_lines.svg";

import {
  Text_H1_white,
  Text_H2_white,
  Text_H6_white,
} from "../assets/style_text";
import {
  Icons_button,
  Wrap_button_short,
  Wrap_button_shortgy,
  svg_button,
} from "../assets/style_button";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <>
      <img className={lp_bg_bulat} src={bg_bulat} alt="" />

      <Wrap_landingPage>
        <Lp_content>
          <Text_H2_white>Efficient Contact Management:</Text_H2_white>
          <Text_H2_white>Store, Search, and Connect with Ease!</Text_H2_white>
          <Text_H1_white>Phone Book</Text_H1_white>
          <Text_H6_white>
            Contact management is how you store and organize information about
            your friends, family, and acquaintances,
          </Text_H6_white>
          <Text_H6_white>
            making it easy to find and reach out to them when you need
          </Text_H6_white>

          <br />

          <Element_flex>
            <Wrap_button_short onClick={() => navigate("/add_contact/v1")}>
              Simpan Kontak Baru
              <Icons_button>
                <RightArrowAlt className={svg_button} />
              </Icons_button>
            </Wrap_button_short>

            <Wrap_button_shortgy onClick={() => navigate("/add_contact/v2")}>
              Perbarui Kontak
              <Icons_button>
                <RightArrowAlt className={svg_button} />
              </Icons_button>
            </Wrap_button_shortgy>
          </Element_flex>
          <br />
        </Lp_content>

        <ArrowheadDownOutline className={Lp_arrow_bottom} />
      </Wrap_landingPage>

      <Lp_wrap_alur>
        <Wrap_button_shortgy onClick={() => navigate("/dashboard")}>
          Dashboard Contact
          <Icons_button>
            <RightArrowAlt className={svg_button} />
          </Icons_button>
        </Wrap_button_shortgy>
      </Lp_wrap_alur>
    </>
  );
};

export default LandingPage;
