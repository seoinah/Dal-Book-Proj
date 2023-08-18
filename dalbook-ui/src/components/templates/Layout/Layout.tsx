import {headerStyle, contentStyle, footerStyle} from "@/components/templates/Layout/Layout.styles";
import { Layout, Space } from 'antd';
import {Lnb} from "@/components/organisms/Lnb/Lnb";
const { Header, Footer, Content } = Layout;

export const Layout = (props: { children: any; }) => {

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <Lnb />
                <Layout>
                    <Header style={headerStyle}>Header</Header>
                    <Content style={contentStyle}>Content</Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
            </Layout>
        </Space>
    );
};
