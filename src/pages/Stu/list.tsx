import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { stuGet } from '@/api/stu';

interface DataType {
    key: string;
    name: string;
    age: number;
    city: string;
    score: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '分数',
        key: 'score',
        dataIndex: 'score',
    },
    {
        title: '城市',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: any, record: any) => (
            <Space size="middle">
                <Button type="link" size='small'>编辑</Button>
                <Button type="link" size='small'>删除</Button>
            </Space>
        ),
    },
];

const App: React.FC = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        console.log('学员列表')
        stuGet().then((res: any) => {
            console.log(res.data)
            setData(res.data)
        })

        console.log(data)
    }, [])
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default App;