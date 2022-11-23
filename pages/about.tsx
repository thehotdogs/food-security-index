import { Table, Typography } from 'antd';
import Image from 'next/image';
import React from 'react';
import LayoutMain from '../components/LayoutMain';
import ImbaPic from '../public/imba.jpg';

function AboutUs() {
  const memberData = [
    {
      key: '1',
      name: 'Nathan Aldrich Wiryawan',
      id: '1006275',
      specialty: 'trolling',
    },
    {
      key: '2',
      name: 'Mohammed Ansar Ahmed',
      id: '1006015',
      specialty: 'HASS and math',
    },
    {
      key: '3',
      name: 'Tay Jia Jiun Joshua',
      id: '1005904',
      specialty: 'Support covering all',
    },
    {
      key: '4',
      name: 'Liau Xuan Xuan Valerie',
      id: '1006089',
      specialty: 'HASS and video editing',
    },
    {
      key: '5',
      name: 'Vincentius Roger Kuswara',
      id: '1006284',
      specialty: 'I wrote this',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Student ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Specialties',
      dataIndex: 'specialty',
      key: 'specialty',
    },
  ];
  return (
    <LayoutMain>
      <div className="flex flex-col justify-center items-center space-y-5">
        <Typography.Title level={2} className="m-5 pt-10">
          Hi! We are team IMBA! 👋
        </Typography.Title>
        <div className="justify-center p-5 w-full md:w-4/5 sm:w-full lg:w-3/5 xl:w-2/5">
          <Image src={ImbaPic} objectFit="contain" className="h-12"></Image>
        </div>
        <Typography.Text className="p-5 text-xl w-full md:w-4/5 sm:w-full lg:w-3/5 xl:w-2/5">
          Hi, we are group IMBA! We are analysts assigned by the UN to tackle
          the food security issue that has been globally present. Here are the
          list of our members (left to right)!
        </Typography.Text>
        <Table
          pagination={false}
          dataSource={memberData}
          columns={columns}
          className="w-full md:w-4/5 sm:w-full lg:w-3/5 xl:w-4/12"
        />
        <div className="h-6"></div>
      </div>
    </LayoutMain>
  );
}

export default AboutUs;
