import styled from "styled-components";
import { Layout, Row, Col } from 'antd';
const { Header } = Layout;

export const ContentHeader = styled(Header)`
    display: inline-table;
    padding: 0;
    background-color: #f8f3fc;
`
export const TitleRow = styled(Row)`
    padding: 0 15px;
`;

export const TitleH1Area = styled(Col)`
    padding: inherit;
`;

export const TitleH1 = styled("h1")`
    margin: auto;
`;

export const TitleBtnArea = styled(Col)`
    display: flex;
    padding: inherit;
    justify-content: flex-end;
    align-items: center;
`;