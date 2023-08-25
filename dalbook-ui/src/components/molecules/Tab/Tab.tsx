import {TTabItem} from "@components/molecules/Tab/Tab.type";
import {Tabs} from "antd";

type TTabProps = {
    items: TTabItem[];
    onChange: () => void;
};

const Tab = ({items, onChange}:TTabProps) => {
    return (
        <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
        />
    );
};

export default Tab;