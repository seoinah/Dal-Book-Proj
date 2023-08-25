import React from "react";
import styled from "styled-components"
import {Layout, Button} from "antd";
const {Sider} = Layout;

export const CustomSider = styled(Sider)`
 &&& {
    min-width: 250px;
    width: 250px;
  }
`;

export const lnbLogoStyle: React.CSSProperties = {
    height: '32px',
    margin: '16px',
    background: 'rgba(255,255,255,.2)',
    borderRadius: '6px'
};

export const FoldButton = styled(Button)`
    display: block
`