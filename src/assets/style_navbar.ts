import styled from "@emotion/styled/macro";
import { css } from "@emotion/css";
import { DsCheckbox } from "./style_page/style_dashboard";

export const Wrap_sidebar = styled.div`
  height: calc(100vh - 155px);
  width: 250px;
  background: var(
    --Gradient-02,
    linear-gradient(74deg, #5b75fe 1.97%, white 100.42%)
  );
  border-radius: 12px;
  position: fixed;
  padding: 24px 12px;
  z-index: 999;

  @media (max-width: 768px) {
    margin-left: -300px;

    &.active {
      margin-left: 0px;
    }
  }
`;

export const Wrap_sidebar_list = styled.div`
  height: calc(100vh - 250px);
  width: 220px;
  background: white;
  border-radius: 12px;
  position: fixed;
  margin-top: 10px;
  padding: 24px 12px;
  text-decoration: none;
`;
export const Wrap_sidebar_itemm = css`
  text-decoration: none;
  color: grey;
`;
export const Wrap_sidebar_itemm_active = css`
  text-decoration: none;
  color: #5555d7;
  font-weight: bold;
`;
export const Wrap_sidebar_icnMenu = css`
  width: 30px;

  @media (max-width: 768px) {
    color: red;
    position: relative;
  }
`;
export const Wrap_slide_up = styled.div`
  position: relative;
  right: -60px;
  top: 20%;
  border-radius: 50%;
  background: white;
  background: var(
    --Gradient-02,
    linear-gradient(74deg, #5b75fe 1.97%, white 200.42%)
  );
  height: 250px;
  width: 240px;
  display: none;
  z-index: -1;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const Wrap_slide_up_icon = css`
  width: 20px;
  color: white;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0%, -50%);
`;
