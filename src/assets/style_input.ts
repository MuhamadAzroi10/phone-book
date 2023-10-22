import styled from "@emotion/styled/macro";
import { css } from "@emotion/css";

export const Wrap_input = styled.div`
  display: flex;
  line-height: 30px;
  align-items: center;
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;
export const imgIconInput = css`
  width: 20px;
  color: #101065;
  position: absolute;
  padding: 3px 0 0px 15px;
`;
export const elementInput = css`
  width: 100%;
  height: 45px;
  line-height: 30px;
  padding: 0 5rem;
  padding-left: 3rem;
  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  background-color: #f8fafc;
  color: #0d0c22;
  transition: 0.5s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: rgba(129, 140, 248);
    background-color: #fff;
    box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
  }
  &:hover {
    outline: none;
    border-color: rgba(129, 140, 248);
    background-color: #fff;
    box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
  }
`;
