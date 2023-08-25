import {
    LeftOutlined,
    RightOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Tooltip } from 'antd';
import useToggle from "@common/hooks/useToggle";
import {foldBtnStyle, lnbLogoStyle, siderStyle} from "@components/organisms/Lnb/Lnb.styles";
const { Sider } = Layout;

const menu = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: 'nav 1',
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
    },
    {
        key: '3',
        icon: <UploadOutlined />,
        label: 'nav 3',
    },
]

export const Lnb = () => {
    const [fold, setFold] = useToggle();

    return (
        <Sider trigger={null} collapsible collapsed={fold} style={siderStyle}>
            <div className="demo-logo-vertical" style={lnbLogoStyle}/>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={menu}
            />
            <Tooltip title="Menu">
                <Button
                    style={foldBtnStyle}
                    shape="circle"
                    icon={fold ? <RightOutlined /> : <LeftOutlined />}
                    onClick={() => setFold(!fold)}
                />
            </Tooltip>
        </Sider>
    );
};
