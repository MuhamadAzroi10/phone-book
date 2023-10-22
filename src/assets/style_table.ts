import styled from "@emotion/styled/macro";
import { css } from "@emotion/css";

export const Wrap_table = styled.div`
  border-radius: 12px;
  width: 100wh;
  overflow: auto;
  background: white;
  padding: 20px;
`;

export const Table_md = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 0.9em;
  border-radius: 5px 5px 0 0;
  min-width: 600px;
`;

export const Table_item = styled.tr`
  border-radius: 8px;
  .body {
    border-bottom: 1px solid white;
  }

  &:nth-of-type(even) {
    background: rgb(251, 251, 255);
    background: linear-gradient(
      90deg,
      rgba(251, 251, 255, 1) 0%,
      rgba(243, 243, 255, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  $:last-of-type {
    border-bottom: 2px solid #f6f6fd;
  }

  &:hover {
    background-color: #f6f6fd;
    color: #000;
  }
`;

export const Table_list = styled.td`
  padding: 15px 15px;
  text-align: left;
`;
export const Table_flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Table_lists = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-weight: bold;
  border-bottom: 3px solid #f6f6fd;
  color: grey;
`;

export const Table_box = styled.div`
  background: #f3f3ff;
  height: 35px;
  width: 35px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    background-color: white;
  }
`;

export const imgEditTable = css`
  width: 20px;
  color: #101065;
`;
export const imgEditHapus = css`
  width: 20px;
  color: #101065;
`;

export const WrapNavigation = styled.div`
   {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
export const WrapNoNavigation = styled.div`
   {
    display: flex;
    // align-items: center;
    // gap: 20px;
  }
`;
export const PageNumbers = styled.div`
   {
    // padding: 7px 13px;
    // cursor: pointer;
    // border-radius: 50%;
    // color: black;
  }
`;

export const PageNumberButton = css`
   {
    padding: 7px 13px;
    cursor: pointer;
    border-radius: 50%;
    color: black;

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
export const NoTable = css`
   {
    width: 30px !important;
  }
`;
