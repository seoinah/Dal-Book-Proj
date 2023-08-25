import { Layout, Space } from 'antd';
import {Routes, Route} from 'react-router-dom'
import {allRoutes} from "@common/routes/allRoutes";
import {contentStyle} from "@components/templates/Layout/Layout.styles";
import {Lnb} from "@components/organisms/Lnb/Lnb";
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