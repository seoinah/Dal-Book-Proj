import { ConfigProvider } from 'antd';
import {CreateBtn} from "@components/molecules/Button/Button.styles";

const CreateButton = ({title = "등록"}) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: '#6D5BD0',
                    },
                },
            }}
        >
            <CreateBtn type="primary" size={"large"}>{title}</CreateBtn>
        </ConfigProvider>
    );
};

export default CreateButton;