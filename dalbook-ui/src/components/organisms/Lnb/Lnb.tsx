import {
    LeftOutlined,
    RightOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import useToggle from "@common/hooks/useToggle";
import {CustomSider, FoldButton, lnbLogoStyle} from "@components/organisms/Lnb/Lnb.styles";
import {Tooltip, Menu} from "antd";

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

const Lnb = () => {
    const [fold, setFold] = useToggle();

    return (
        <CustomSider trigger={null} collapsible collapsed={fold} >
            <div className="demo-logo-vertical" style={lnbLogoStyle}/>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={menu}
            />
            <Tooltip title="Menu">
                <FoldButton
                    shape="circle"
                    icon={fold ? <RightOutlined /> : <LeftOutlined />}
                    onClick={() => setFold(!fold)}
                />
            </Tooltip>
        </CustomSider>
    );
};

export default Lnb;
