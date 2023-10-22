import React, { useEffect, useState, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// -------------- style

import {
  Ds_Element_flex,
  Ds_Element_flex2,
  Ds_Element_flex_left,
  Ds_Element_flex_right,
  Ds_Wrap_input,
  Ds_content,
  Ds_navbar,
  Ds_wrap,
} from "../assets/style_page/style_dashboard";
import { Wrap_table } from "../assets/style_table";
import {
  Text_H5_bold,
  Text_H6_grey,
  custom_Text_H5_bold,
} from "../assets/style_text";
import { Wrap_input, elementInput, imgIconInput } from "../assets/style_input";

// -------------- icons

import { UserPin } from "@emotion-icons/boxicons-solid/UserPin";
import { RightArrowAlt } from "@emotion-icons/boxicons-regular/RightArrowAlt";

// -------------- component, query and type

import Sidebar from "../components/elements/Sidebar";
import {
  ADD_CONTACT_LIST,
  EDIT_CONTACT_LIST,
  GET_CONTACT_LIST,
  GET_CONTACT_LIST_BYID,
} from "../services/graphql/queries";

// -------------- plugin
import { useMutation, useQuery } from "@apollo/client";
import { Chart, registerables } from "chart.js";
import Chart_Minggu from "../components/elements/Chart";
import Chart_Bulan from "../components/elements/Chart2";
import {
  Icons_button,
  Wrap_button_long,
  svg_button,
} from "../assets/style_button";
import { useNavigate, useParams } from "react-router-dom";
Chart.register(...registerables);

type idParams = {
  id: string;
};

interface PhoneInput {
  value: string;
}

const DetailContact2 = () => {
  const navigation = useNavigate();

  const [contact, setContact] = useState<any>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phones, setPhones] = useState<PhoneInput[]>([]);

  const { id } = useParams<idParams>();

  const {
    loading: queryLoadingById,
    error: queryErrorById,
    data: queryDataById,
    refetch,
  } = useQuery(GET_CONTACT_LIST_BYID, {
    variables: {
      id: id,
    },
  });

  const [editTodo, { loading: addLoading, error: addError }] =
    useMutation(EDIT_CONTACT_LIST);
  const handleAddContactList = async () => {
    if (firstName != "" && lastName != "") {
      try {
        const result = await editTodo({
          variables: {
            id: id,
            _set: {
              first_name: `${firstName.slice(1)}`,
            },
          },
        });

        refetch();
        navigation("/dashboard");
      } catch (error: any) {
        toast.error(addError?.message);
      }
    } else {
      toast.error("Inputan Tidak Boleh Kosong");
    }
  };

  useEffect(() => {
    setFirstName(queryDataById?.contact_by_pk.first_name);
    setLastName(queryDataById?.contact_by_pk.last_name);
    setPhones(queryDataById?.contact_by_pk.phones);
  }, [queryDataById, queryLoadingById, queryDataById]);

  return (
    <>
      <ToastContainer />
      <Ds_navbar>
        <Ds_Element_flex2>
          <Ds_Element_flex_left>
            <Text_H5_bold className={custom_Text_H5_bold}>
              Phone Book Goto{" "}
            </Text_H5_bold>
          </Ds_Element_flex_left>
          <Ds_Element_flex_right></Ds_Element_flex_right>
        </Ds_Element_flex2>
      </Ds_navbar>
      <Ds_wrap>
        <br />
        <br />
        <br />
        <br />

        <Sidebar />

        <Ds_content>
          <Ds_Element_flex>
            <Ds_Element_flex_left>
              <Wrap_table>
                <Text_H5_bold>Detail Contact</Text_H5_bold>
                <Text_H6_grey>view your contact details</Text_H6_grey>
                <br />
                <Text_H6_grey>First Name</Text_H6_grey>
                <Wrap_input>
                  <UserPin className={imgIconInput} />
                  <input
                    value={firstName?.slice(1)}
                    readOnly={true}
                    className={elementInput}
                    type="text"
                    placeholder="First Name"
                  />
                </Wrap_input>

                <Text_H6_grey>Last Name</Text_H6_grey>
                <Wrap_input>
                  <UserPin className={imgIconInput} />
                  <input
                    value={lastName}
                    readOnly={true}
                    className={elementInput}
                    type="text"
                    placeholder="Last Name"
                  />
                </Wrap_input>

                {phones?.map((data: any, index: number) => (
                  <>
                    <Text_H6_grey>Phone Number</Text_H6_grey>
                    <Wrap_input>
                      <UserPin className={imgIconInput} />
                      <input
                        readOnly={true}
                        value={data.number}
                        className={elementInput}
                        type="text"
                        placeholder="08xxxxxxxxx"
                      />
                    </Wrap_input>
                  </>
                ))}
              </Wrap_table>

              <br />

              <Wrap_button_long onClick={() => handleAddContactList()}>
                Remove Favorite
                <Icons_button>
                  <RightArrowAlt className={svg_button} />
                </Icons_button>
              </Wrap_button_long>

              <br />

              <br />
            </Ds_Element_flex_left>
            <Ds_Element_flex_right>
              <Ds_Wrap_input>
                <Text_H5_bold>Storage Quantity of the Month </Text_H5_bold>
                <Text_H6_grey>
                  Manage charts that can be viewed monthly
                </Text_H6_grey>
                {/* <br /> */}

                <Chart_Minggu DataPerrent={contact} />
                <br />
              </Ds_Wrap_input>
              <br />
              <Ds_Wrap_input>
                <Text_H5_bold>Storage Quantity of the Year </Text_H5_bold>
                <Text_H6_grey>
                  Manage charts that can be viewed year
                </Text_H6_grey>
                {/* <br /> */}

                <Chart_Bulan DataPerrent={contact} />
                <br />
              </Ds_Wrap_input>
            </Ds_Element_flex_right>
          </Ds_Element_flex>
        </Ds_content>
      </Ds_wrap>
    </>
  );
};

export default DetailContact2;
