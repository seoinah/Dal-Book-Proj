import { Layout, Space } from 'antd';
import {Routes, Route} from 'react-router-dom'
import {contentStyle} from "@component/templates/Layout/Layout.styles";
import {Lnb} from "@component/organisms/Lnb/Lnb";
import {allRoutes} from "@common/routes/allRoutes";
const {Content} = Layout;

const LayoutDiv = () => {

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <Lnb />
                <Content style={contentStyle}>
                    <Routes>
                        {allRoutes.map(({ path, component, authorization }, key) =>
                            <Route
                                key={key}
                                path={path}
                                element={component}
                            />
                        )}
                    </Routes>
                </Content>
            </Layout>
        </Space>
    );
};

export default LayoutDiv;