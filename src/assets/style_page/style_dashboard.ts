import styled from "@emotion/styled/macro";
import { css } from "@emotion/css";

export const Ds_wrap = styled.div`
  padding: 0 20px;
`;

export const DsCheckbox = styled.input`
  // display: none;
`;

export const Ds_content = styled.div`
  margin-left: 290px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
export const Ds_navbar = styled.div`
  width: 100%
  background: white;
  padding: 13px 20px 0 20px;
  border-radius: 0 0 12px 12px;
  position: fixed;
  background: var(
    --Gradient-02,
    linear-gradient(74deg, #5b75fe 1.97%, white 100.42%)
  );
  width: 100%;
  z-index: 8;
  color: white;
`;
export const Ds_Element_flex = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1000px) {
    display: block;
  }
`;
export const Ds_Element_flex2 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Ds_Element_flex_left = styled.div`
  width: 60%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const Ds_Element_flex_right = styled.div`
  width: 40%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Ds_Wrap_input = styled.div`
  border-radius: 12px;
  width: 100wh;
  overflow: auto;
  background: white;
  padding: 20px;
`;

export const Ds_wrap_chart = css`
  height: 900px;
`;
