import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTACT_LIST } from "./../services/graphql/queries";

import {
  Table_box,
  Table_item,
  Table_list,
  Table_lists,
  Table_md,
  Wrap_table,
  imgEditTable,
  imgEditHapus,
  Table_flex,
} from "../assets/style_table";

import { RightArrowAlt } from "@emotion-icons/boxicons-regular/RightArrowAlt";
import { EditAlt } from "@emotion-icons/boxicons-regular/EditAlt";
import { DotsThreeVertical } from "@emotion-icons/entypo/DotsThreeVertical";
import { UserPin } from "@emotion-icons/boxicons-solid/UserPin";
import {
  Text_H3_bold,
  Text_H6_grey,
  Text_H6_reg,
  Text_H6_semi,
} from "../assets/style_text";
import {
  Icons_button,
  Wrap_button_long,
  Wrap_button_longgy,
  Wrap_button_short,
  Wrap_button_shortgy,
  svg_button,
} from "../assets/style_button";
import { Wrap_input, elementInput, imgIconInput } from "../assets/style_input";
import { Ds_navbar } from "../assets/style_page/style_dashboard";

const HomePage = () => {
  const searchCriteria = {
    first_name: { _like: "%John%" },
  };
  const { loading, error, data } = useQuery(GET_CONTACT_LIST, {
    variables: { where: searchCriteria },
  });

  return (
    <div>
      <br />
      <Ds_navbar>
        <Text_H3_bold>Selamat Datang </Text_H3_bold>
      </Ds_navbar>
      <Wrap_button_long>
        isis
        <Icons_button>
          <RightArrowAlt className={svg_button} />
        </Icons_button>
      </Wrap_button_long>

      <br />

      <Wrap_button_short>
        isis
        <Icons_button>
          <RightArrowAlt className={svg_button} />
        </Icons_button>
      </Wrap_button_short>

      <br />

      <Wrap_button_shortgy>
        isis
        <Icons_button>
          <RightArrowAlt className={svg_button} />
        </Icons_button>
      </Wrap_button_shortgy>
      <br />

      <Wrap_button_longgy>
        isis
        <Icons_button>
          <RightArrowAlt className={svg_button} />
        </Icons_button>
      </Wrap_button_longgy>

      <br />

      <Wrap_input>
        <UserPin className={imgIconInput} />
        <input
          className={elementInput}
          type="password"
          placeholder="password"
        />
      </Wrap_input>

      <br />

      <br />

      <Wrap_table>
        <Text_H3_bold>Contact</Text_H3_bold>
        <Text_H6_grey>
          Manage All exiting contact or add a new contact
        </Text_H6_grey>
        <br />
        <Table_md>
          <thead>
            <Table_item className="head">
              <Table_lists className="head">
                <Text_H6_semi>No</Text_H6_semi>
              </Table_lists>
              <Table_lists className="head">
                <Text_H6_semi> Nama</Text_H6_semi>
              </Table_lists>
              <Table_lists className="head">
                <Text_H6_semi> Tanggal Tersimpan</Text_H6_semi>
              </Table_lists>
              <Table_lists className="head">
                <Text_H6_semi> Action</Text_H6_semi>
              </Table_lists>
            </Table_item>
          </thead>
          <tbody>
            <Table_item className="body">
              <Table_list className="body">
                <Text_H6_reg>1</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Text_H6_reg>Muhamad Azroi</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Text_H6_reg>28 November 2023</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Table_flex>
                  <Table_box>
                    <EditAlt className={imgEditTable} />
                  </Table_box>
                  <Table_box>
                    <DotsThreeVertical className={imgEditHapus} />
                  </Table_box>
                </Table_flex>
              </Table_list>
            </Table_item>
            <Table_item className="body">
              <Table_list className="body">
                <Text_H6_reg>1</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Text_H6_reg>Muhamad Azroi</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Text_H6_reg>28 November 2023</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Table_flex>
                  <Table_box>
                    <EditAlt className={imgEditTable} />
                  </Table_box>
                  <Table_box>
                    <DotsThreeVertical className={imgEditHapus} />
                  </Table_box>
                </Table_flex>
              </Table_list>
            </Table_item>
            <Table_item className="body">
              <Table_list className="body">
                <Text_H6_reg>1</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Text_H6_reg>Muhamad Azroi</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Text_H6_reg>28 November 2023</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Table_flex>
                  <Table_box>
                    <EditAlt className={imgEditTable} />
                  </Table_box>
                  <Table_box>
                    <DotsThreeVertical className={imgEditHapus} />
                  </Table_box>
                </Table_flex>
              </Table_list>
            </Table_item>
            <Table_item className="body">
              <Table_list className="body">
                <Text_H6_reg>1</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Text_H6_reg>Muhamad Azroi</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Text_H6_reg>28 November 2023</Text_H6_reg>
              </Table_list>
              <Table_list className="body">
                <Table_flex>
                  <Table_box>
                    <EditAlt className={imgEditTable} />
                  </Table_box>
                  <Table_box>
                    <DotsThreeVertical className={imgEditHapus} />
                  </Table_box>
                </Table_flex>
              </Table_list>
            </Table_item>
          </tbody>
        </Table_md>
      </Wrap_table>
    </div>
  );
};

export default HomePage;
