import { Layout } from 'antd';
import {Routes, Route} from 'react-router-dom'
import {allRoutes} from "@common/routes/allRoutes";
import {contentStyle, wrapStyle} from "@components/templates/Layout/Layout.styles";
import {Lnb} from "@components/organisms/Lnb/Lnb";
const {Content} = Layout;

const LayoutDiv = () => {

    return (
        <Layout style={wrapStyle}>
            <Lnb />
            <Layout>
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
        </Layout>
    );
};

export default LayoutDiv;