import React from "react";
import {
  Element_flex,
  LandingPage_box,
  LandingPage_box_icon,
  Lp_arrow_bottom,
  Lp_content,
  Lp_wrap_alur,
  Wrap_landingPage,
  bg_circular,
  lp_bg_bulat,
  lp_no1,
  lp_no2,
  lp_no3,
  lp_no4,
  lp_text2,
} from "../assets/style_page/style_landingpage";

import { ArrowheadDownOutline } from "@emotion-icons/evaicons-outline/ArrowheadDownOutline";

import { RightArrowAlt } from "@emotion-icons/boxicons-regular/RightArrowAlt";

import bg_bulat from "./../assets/img/bg_circular_lines.svg";
import Aetna from "./../assets/img/Aetna.svg";
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

const LandingPage: React.FunctionComponent = () => {
  return (
    <>
      <img className={lp_bg_bulat} src={bg_bulat} alt="" />

      <Wrap_landingPage>
        <Lp_content>
          <Text_H2_white className={lp_text2}>
            Efficient Contact Management:
          </Text_H2_white>
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
            <Wrap_button_short>
              Simpan Kontak Baru
              <Icons_button>
                <RightArrowAlt className={svg_button} />
              </Icons_button>
            </Wrap_button_short>

            <Wrap_button_shortgy>
              Perbarui Kontak
              <Icons_button>
                <RightArrowAlt className={svg_button} />
              </Icons_button>
            </Wrap_button_shortgy>
          </Element_flex>
          <br />
        </Lp_content>

        <LandingPage_box className={lp_no1}>
          <LandingPage_box_icon>
            <img className={bg_circular} src={Aetna} alt="" />
          </LandingPage_box_icon>
          <Text_H6_white>Menyimpan Kontak</Text_H6_white>
        </LandingPage_box>

        <LandingPage_box className={lp_no2}>
          <LandingPage_box_icon>
            <img className={bg_circular} src={Aetna} alt="" />
          </LandingPage_box_icon>
          <Text_H6_white>Mencari Kontak</Text_H6_white>
        </LandingPage_box>

        <LandingPage_box className={lp_no3}>
          <LandingPage_box_icon>
            <img className={bg_circular} src={Aetna} alt="" />
          </LandingPage_box_icon>
          <Text_H6_white>Mengedit Kontak</Text_H6_white>
        </LandingPage_box>

        <LandingPage_box className={lp_no4}>
          <LandingPage_box_icon>
            <img className={bg_circular} src={Aetna} alt="" />
          </LandingPage_box_icon>
          <Text_H6_white>Menghapus Kontak</Text_H6_white>
        </LandingPage_box>

        <ArrowheadDownOutline className={Lp_arrow_bottom} />
      </Wrap_landingPage>

      <Lp_wrap_alur>
        <Wrap_button_shortgy>
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
