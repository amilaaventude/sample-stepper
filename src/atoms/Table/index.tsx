import { Button, Popconfirm, Space, Table } from 'antd';
import React, { useState } from 'react';

interface ParentCompProps {
  columnsData: Columns[];
}

interface Columns {
  key?: React.Key;
  title: string;
  dataIndex: string;
  sorter: sorter;
  render?: boolean

}

interface sorter {
  compare: any;
  multiple: number;
}

const TableElement = (props: ParentCompProps) => {
  const { columnsData, ...rest } = props;

  //   const columns = [
  //     {
  //       title: 'Name',
  //       dataIndex: 'name',
  //     },
  //     {
  //       title: 'Age',
  //       dataIndex: 'age',
  //     },
  //     {
  //       title: 'Address',
  //       dataIndex: 'address',
  //     },
  //   ];



  const columns = [];
  for (let i = 0; i < columnsData.length; i += 1) {
    if (columnsData[i].render) {
      columns.push({
        title: columnsData[i].title,
        dataIndex: columnsData[i].dataIndex,
        render: (record: { key: React.Key }) =>
          columnsData[i].dataIndex != null ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      });
    } else {
      columns.push({
        title: columnsData[i].title,
        dataIndex: columnsData[i].dataIndex,
        sorter: {
          compare: (a: any, b: any) => { return a.math - b.math },
          multiple: 2,

        }
      });
    }
  }



  const data = [
    {
      key: '1',
      reference: 'John Brown',
      supplierCode: 'sasa',
      CustomerCode: 'sasas',
      companyName: 'sasas',
    },
    {
      key: '2',
      reference: 'Aohn Brown',
      supplierCode: 'sasa',
      CustomerCode: 'sasas',
      companyName: 'sasas',
    }


  ];

  const [dataTable, setDataSource] = useState(data);


  const handleDelete = (key: React.Key) => {
    const dataSource: any[] = [dataTable];
    console.log(dataSource);
    setDataSource(dataSource.filter((item: { key: React.Key; }) => item.key !== key));
  };


  // const columns = [
  //     {
  //       title: 'COMPANY NAME',
  //       dataIndex: 'name',
  //     },
  //     {
  //       title: 'REFERENCE NO',
  //       dataIndex: 'chinese',
  //       sorter: {
  //         compare: (a:any, b:any) => {return a.chinese - b.chinese},
  //         multiple: 3,
  //       },
  //     },
  //     {
  //       title: 'SUPPLIER  CODE',
  //       dataIndex: 'math',
  //       sorter: {
  //         compare: (a:any, b:any) =>{ return  a.math - b.math},
  //         multiple: 2,
  //       },
  //     },
  //     {
  //       title: 'CUSTOMER CODE',
  //       dataIndex: 'english',
  //       sorter: {
  //         compare: (a:any, b:any) => {return a.english - b.english},
  //         multiple: 1,
  //       },
  //     },
  //   ];



  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default TableElement;


