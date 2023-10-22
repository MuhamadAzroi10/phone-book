import styled from "@emotion/styled/macro";
import { css } from "@emotion/css";

export const Wrap_button_long = styled.button`
  background: #5555d7;
  color: white;
  padding: 16px 50px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 100%;
`;

export const Wrap_button_short = styled.button`
  background: #5555d7;
  color: white;
  padding: 16px 50px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const Wrap_button_shortgy = styled.button`
  background: #f3f3ff;
  color: #5555d7;
  padding: 16px 50px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1px solid #5555d7;
`;
export const Wrap_button_longgy = styled.button`
  background: #f3f3ff;
  color: #5555d7;
  padding: 16px 50px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  height: 2.9em;
  cursor: pointer;
  width: 100%;
  border: 1px solid #5555d7;
`;

export const Icons_button = styled.div`
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.9em;
  width: 0%;
  top: 3px;
  border-radius: 8px;
  right: 0.3em;
  transition: all 0.3s;

  ${Wrap_button_shortgy}:hover & {
    width: calc(100% - 0.6em);
  }
  ${Wrap_button_longgy}:hover & {
    width: calc(100% - 0.6em);
  }
  ${Wrap_button_long}:hover & {
    width: calc(100% - 0.6em);
  }
  ${Wrap_button_short}:hover & {
    width: calc(100% - 0.6em);
  }
`;

export const svg_button = css`
  width: 1.1em;
  transition: transform 0.3s;
  color: #7b52b9;
`;
