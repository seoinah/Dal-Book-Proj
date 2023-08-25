import {
    LeftOutlined,
    RightOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import useToggle from "@common/hooks/useToggle";
import {CustomSider, FoldButton, UnFoldButton, lnbLogoStyle} from "@components/organisms/Lnb/Lnb.styles";
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
                {
                    fold?
                    <UnFoldButton
                        shape="circle"
                        icon={<RightOutlined />}
                        onClick={() => setFold(!fold)}
                    />
                    :
                    <FoldButton
                        shape="circle"
                        icon={<LeftOutlined />}
                        onClick={() => setFold(!fold)}
                    />
                }
            </Tooltip>
        </CustomSider>
    );
};

export default Lnb;
