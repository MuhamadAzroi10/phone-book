import React, { useEffect, useState } from "react";

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
import {
  Table_box,
  Table_flex,
  Table_item,
  Table_list,
  Table_lists,
  Table_md,
  Wrap_table,
  imgEditHapus,
  imgEditTable,
} from "../assets/style_table";
import {
  Text_H5_bold,
  Text_H6_grey,
  Text_H6_reg,
  Text_H6_semi,
  custom_Text_H5_bold,
} from "../assets/style_text";
import { Wrap_input, elementInput, imgIconInput } from "../assets/style_input";

// -------------- icons

import { Search } from "@emotion-icons/bootstrap/Search";
import { EditAlt } from "@emotion-icons/boxicons-regular/EditAlt";
import { DotsThreeVertical } from "@emotion-icons/entypo/DotsThreeVertical";
import { Delete } from "@emotion-icons/material/Delete";

// -------------- component, query and type

import Pagenation from "../components/elements/Pagenation";
import Sidebar from "../components/elements/Sidebar";
import {
  DELETE_CONTACT_LIST,
  GET_CONTACT_LIST,
} from "../services/graphql/queries";
import { Contact, DataContact } from "../services/types/number";
import { formatDate } from "../components/elements_child/FormatDate";

// -------------- plugin
import { useMutation, useQuery } from "@apollo/client";
import { Chart, registerables } from "chart.js";
import Chart_Minggu from "../components/elements/Chart";
import Chart_Bulan from "../components/elements/Chart2";
import { useNavigate } from "react-router-dom";
import Pagenation2 from "../components/elements/Pagenation2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
Chart.register(...registerables);

const Dash = () => {
  // -------------- state
  const { loading, error, data, refetch } = useQuery(GET_CONTACT_LIST);
  const [contact, setContact] = useState<Contact[]>([]);
  const [pagePagenation, setPagePagenation] = useState<number>();
  const [contactPagenation, setContactPagenation] = useState<any>([]);
  const [contactPagenation2, setContactPagenation2] = useState<any>([]);
  const [search, setSearch] = useState<string>("");
  const navigation = useNavigate();

  // -------------- func
  const DataPagenation = (data: string): void => {
    setContactPagenation(data);
  };
  const DataPagenation2 = (data: string): void => {
    setContactPagenation2(data);
  };

  const DataPagePagenation = (data: number): void => {
    setPagePagenation(data);
  };

  const inputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.value;
    setSearch(data);
  };

  // -------------- gql
  const [
    deleteItem,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation(DELETE_CONTACT_LIST);
  const DeleteContact = (data: number): void => {
    const userConfirmed = window.confirm(
      "Apakah Anda yakin ingin melanjutkan?"
    );
    if (userConfirmed) {
      deleteItem({
        variables: {
          id: data,
        },
      })
        .then((result) => {
          refetch();
          toast.success("has been successfully deleted");
        })

        .catch((error) => {
          console.error("Terjadi kesalahan saat mengirim mutasi:", error);
        });
    } else {
    }
  };

  // -------------- construct
  useEffect(() => {
    if (!loading && !error && data) {
      setContact(data.contact);
    }
  }, [loading, error, deleteData, deleteError, deleteLoading, data]);

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
          <Ds_Element_flex_right>
            <Wrap_input>
              <Search className={imgIconInput} />
              <input
                className={elementInput}
                type="text"
                placeholder="Search"
                onChange={inputSearch}
              />
            </Wrap_input>
          </Ds_Element_flex_right>
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
              {contactPagenation && search.length >= 1 ? (
                <Wrap_table>
                  <Text_H5_bold>Search Contact</Text_H5_bold>
                  <Text_H6_grey>
                    Search for contacts according to your needs
                  </Text_H6_grey>
                  <br />
                  <Table_md>
                    <thead>
                      <Table_item className="head">
                        <Table_lists className="head">
                          <Text_H6_semi> Nama</Text_H6_semi>
                        </Table_lists>
                        <Table_lists className="head">
                          <Text_H6_semi> Date Saved</Text_H6_semi>
                        </Table_lists>
                        <Table_lists className="head">
                          <Text_H6_semi> Action</Text_H6_semi>
                        </Table_lists>
                      </Table_item>
                    </thead>
                    <tbody>
                      {contact
                        .filter((response: Contact) => {
                          if (search === "") {
                            return response;
                          } else if (
                            response.first_name
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                            response.last_name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return response;
                          }
                        })
                        .map((response: Contact, index: number) => (
                          <Table_item className="body">
                            <Table_list className="body">
                              <Text_H6_reg>
                                {response.first_name.charAt(0) == "*"
                                  ? response.first_name?.slice(1)
                                  : response.first_name}
                                {response.last_name}
                              </Text_H6_reg>
                            </Table_list>
                            <Table_list className="body">
                              <Text_H6_reg>
                                {formatDate(response.created_at)}
                              </Text_H6_reg>
                            </Table_list>
                            <Table_list className="body">
                              <Table_flex>
                                <Table_box
                                  onClick={() =>
                                    navigation("/edit_contact/" + response.id)
                                  }
                                >
                                  <EditAlt className={imgEditTable} />
                                </Table_box>
                                <Table_box
                                  onClick={() => DeleteContact(response.id)}
                                >
                                  <Delete className={imgEditTable} />
                                </Table_box>
                                <Table_box
                                  onClick={() =>
                                    navigation(
                                      "/detail_contact/favorit/" + response.id
                                    )
                                  }
                                >
                                  <DotsThreeVertical className={imgEditHapus} />
                                </Table_box>
                              </Table_flex>
                            </Table_list>
                          </Table_item>
                        ))}
                    </tbody>
                  </Table_md>
                </Wrap_table>
              ) : (
                <>
                  <Wrap_table>
                    <Text_H5_bold>Contact Favorit</Text_H5_bold>
                    <Text_H6_grey>
                      Manage All exiting contact or add a new contact Favorit
                    </Text_H6_grey>
                    <br />
                    <Table_md>
                      <thead>
                        <Table_item className="head">
                          <Table_lists className="head">
                            <Text_H6_semi> Nama</Text_H6_semi>
                          </Table_lists>
                          <Table_lists className="head">
                            <Text_H6_semi> Date Saved</Text_H6_semi>
                          </Table_lists>
                          <Table_lists className="head">
                            <Text_H6_semi> Action</Text_H6_semi>
                          </Table_lists>
                        </Table_item>
                      </thead>
                      <tbody>
                        {contactPagenation
                          .filter((response: any) => {
                            if (
                              response.first_name.toLowerCase().includes("*")
                            ) {
                              return response;
                            }
                          })
                          .map((response: Contact, index: number) => (
                            <>
                              <Table_item className="body">
                                <Table_list className="body">
                                  <Text_H6_reg>
                                    {response.first_name?.slice(1)}
                                    {response.last_name}
                                  </Text_H6_reg>
                                </Table_list>
                                <Table_list className="body">
                                  <Text_H6_reg>
                                    {formatDate(response.created_at)}
                                  </Text_H6_reg>
                                </Table_list>
                                <Table_list className="body">
                                  <Table_flex>
                                    <Table_box
                                      onClick={() =>
                                        navigation(
                                          "/edit_contact/" + response.id
                                        )
                                      }
                                    >
                                      <EditAlt className={imgEditTable} />
                                    </Table_box>
                                    <Table_box
                                      onClick={() => DeleteContact(response.id)}
                                    >
                                      <Delete className={imgEditTable} />
                                    </Table_box>

                                    {response.first_name.charAt(0) == "*" ? (
                                      <Table_box
                                        onClick={() =>
                                          navigation(
                                            "/detail_contact/favorit/" +
                                              response.id
                                          )
                                        }
                                      >
                                        <DotsThreeVertical
                                          className={imgEditHapus}
                                        />
                                      </Table_box>
                                    ) : (
                                      <Table_box
                                        onClick={() =>
                                          navigation(
                                            "/detail_contact/" + response.id
                                          )
                                        }
                                      >
                                        <DotsThreeVertical
                                          className={imgEditHapus}
                                        />
                                      </Table_box>
                                    )}
                                  </Table_flex>
                                </Table_list>
                              </Table_item>
                            </>
                          ))}

                        <br />

                        <Pagenation
                          getDataTable={DataPagenation}
                          page={DataPagePagenation}
                          DataPerrent={contact}
                        />
                        {/* ====== */}
                      </tbody>
                    </Table_md>
                  </Wrap_table>
                  <br />
                  <Wrap_table>
                    <Text_H5_bold>Contact </Text_H5_bold>
                    <Text_H6_grey>
                      Manage All exiting contact or add a new contact
                    </Text_H6_grey>
                    <br />
                    <Table_md>
                      <thead>
                        <Table_item className="head">
                          <Table_lists className="head">
                            <Text_H6_semi> Name</Text_H6_semi>
                          </Table_lists>
                          <Table_lists className="head">
                            <Text_H6_semi> Date Saved</Text_H6_semi>
                          </Table_lists>
                          <Table_lists className="head">
                            <Text_H6_semi> Action</Text_H6_semi>
                          </Table_lists>
                        </Table_item>
                      </thead>
                      <tbody>
                        {contactPagenation2
                          .filter((response: any) => {
                            if (
                              !response?.first_name.toLowerCase().includes("*")
                            ) {
                              return response;
                            }
                          })
                          .map((response: Contact, index: number) => (
                            <Table_item className="body">
                              <Table_list className="body">
                                <Text_H6_reg>
                                  {response.first_name} {response.last_name}
                                </Text_H6_reg>
                              </Table_list>
                              <Table_list className="body">
                                <Text_H6_reg>
                                  {formatDate(response.created_at)}
                                </Text_H6_reg>
                              </Table_list>
                              <Table_list className="body">
                                <Table_flex>
                                  <Table_box
                                    onClick={() =>
                                      navigation("/edit_contact/" + response.id)
                                    }
                                  >
                                    <EditAlt className={imgEditTable} />
                                  </Table_box>
                                  <Table_box
                                    onClick={() => DeleteContact(response.id)}
                                  >
                                    <Delete className={imgEditTable} />
                                  </Table_box>
                                  <Table_box
                                    onClick={() =>
                                      navigation(
                                        "/detail_contact/" + response.id
                                      )
                                    }
                                  >
                                    <DotsThreeVertical
                                      className={imgEditHapus}
                                    />
                                  </Table_box>
                                </Table_flex>
                              </Table_list>
                            </Table_item>
                          ))}

                        <br />
                        <Pagenation2
                          getDataTable={DataPagenation2}
                          page={DataPagePagenation}
                          DataPerrent={contact}
                        />
                        {/* ====== */}
                      </tbody>
                    </Table_md>
                  </Wrap_table>
                </>
              )}

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

export default Dash;
