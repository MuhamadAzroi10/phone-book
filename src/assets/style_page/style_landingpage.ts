import styled from "@emotion/styled/macro";
import { css } from "@emotion/css";

export const Wrap_landingPage = styled.div`
  background: var(
    --Gradient-02,
    linear-gradient(74deg, #5b75fe 1.97%, white 100.42%)
  );
  width: 100%;
  height: 100vh;
  overflow: hide;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Element_flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  justify-content: space-between;
`;
export const LandingPage_box = styled.div`
  border-radius: 400px;
  background: linear-gradient(
    90deg,
    rgba(231, 189, 249, 0.51) 0.15%,
    rgba(255, 255, 255, 0.12) 100.01%
  );
  backdrop-filter: blur(64.23429870605469px);
  z-index: 2;
  gap: 10px;
  display: flex;
  padding: 8px 16px 8px 8px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

export const LandingPage_box_icon = styled.div`
  fill: linear-gradient(180deg, #f1e0f9 0%, rgba(255, 255, 255, 0.81) 100%);
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
export const bg_circular = css`
  width: 100%;
`;
export const lp_no1 = css`
  left: 10%;
  top: 23%;
`;
export const lp_no2 = css`
  left: 15%;
  top: 70%;
`;
export const lp_no3 = css`
  right: 5%;
  top: 50%;
`;
export const lp_no4 = css`
  right: 10%;
  top: 23%;
`;

export const lp_text2 = css`
  @media (max-width: 420px) {
    font-size: 10px;
  }
`;
export const lp_bg_bulat = css`
  position: absolute;
  z-index: 1;
  opacity: 0.2;
  width: 100%;
  max-height: 100vh;
  margin-left: -500px;
`;
export const Lp_content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const wrap_lp_bg_bulat = styled.div`
  position: relative;
  width: 100%;
  overflow: hide;
`;

export const Lp_wrap_alur = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Lp_alur = styled.div`
  width: 100%;
  background: white;
  heght: 100px;
  border-radius: 15px 15px 0 0;
  position: relative;
  margin-top: -90px;
  z-index: 100;
`;
export const Lp_arrow_bottom = css`
  position: absolute;
  width: 60px;
  z-index: 4;
  bottom: 20px;
  color: blue;
`;
