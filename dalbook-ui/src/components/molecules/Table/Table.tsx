import {Table} from "antd";
import {DataType} from "@components/molecules/Table/Table.type";
import {ColumnsType} from "antd/es/table";
import {TableRowSelection} from "antd/es/table/interface";

type TTableProps = {
    columns: ColumnsType<DataType>;
    data: DataType[];
};

const rowSelection: TableRowSelection<DataType> = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
};


const Table = ({columns, data}:TTableProps) => {
    return (
        <Table
            columns={columns}
            rowSelection={{ ...rowSelection }}
            dataSource={data}
        />
    );
};

export default Table;