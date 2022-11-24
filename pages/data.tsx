import { Table, Typography } from 'antd';
import React from 'react';
import LayoutMain from '../components/LayoutMain';
import useExcelData from '../components/useExcelData';

function data() {
  const { parsedCsvData, header } = useExcelData();

  const columns = [
    { title: 'Country', dataIndex: 'Country', key: 'Country' },
    { title: 'GDP Capita', dataIndex: 'GDP Capita', key: 'GDP Capita' },
    {
      title: 'Education Index',
      dataIndex: 'Education Index',
      key: 'Education Index',
    },
    {
      title: 'Corruption Score',
      dataIndex: 'Corruption Score',
      key: 'Corruption Score',
    },
    {
      title: 'Vaccination Rate (p%)',
      dataIndex: 'Vaccination Rate (p%)',
      key: 'Vaccination Rate (p%)',
    },
    {
      title: 'Political Stability Index',
      dataIndex: 'Political Stability Index',
      key: 'Political Stability Index',
    },
    {
      title: 'Crop Production Index',
      dataIndex: 'Crop Production Index',
      key: 'Crop Production Index',
    },
    {
      title: 'Percentage of Export (%)',
      dataIndex: 'Percentage of Export (%)',
      key: 'Percentage of Export (%)',
    },
    { title: 'Poverty Rate', dataIndex: 'Poverty Rate', key: 'Poverty Rate' },
    {
      title: 'Road Density  (km/100 km2)',
      dataIndex: 'Road Density  (km/100 km2)',
      key: 'Road Density  (km/100 km2)',
    },
    {
      title: 'Global Food Security Index (GSFI)',
      dataIndex: 'Global Food Security Index (GSFI)',
      key: 'Global Food Security Index (GSFI)',
    },
  ];
  const columnsRef = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    { title: 'Data', dataIndex: 'Data', key: 'Data' },
    {
      title: 'References',
      dataIndex: 'References',
      key: 'References',
    },
  ];

  const refData = [
    {
      key: 1,
      no: '1',
      Data: 'GDP per capita 2018',
      References:
        'https://www.kaggle.com/datasets/zgrcemta/world-gdpgdp-gdp-per-capita-and-annual-growths?search=gdp',
    },
    {
      key: 2,
      no: '2',
      Data: 'Education index',
      References: 'https://rankedex.com/society-rankings/education-index ',
    },
    {
      key: 3,
      no: 3,
      Data: 'Corruption perception index 2016',
      References:
        'https://www.kaggle.com/datasets/transparencyint/corruption-index',
    },
    {
      key: 4,
      no: 4,
      Data: '% of population vaccinated',
      References: 'https://ourworldindata.org/covid-vaccinations ',
    },
    {
      key: 5,
      no: 5,
      Data: 'Political Stability',
      References:
        'https://www.theglobaleconomy.com/rankings/wb_political_stability/',
    },
    {
      key: 6,
      no: 6,
      Data: 'Crop Production Index',
      References:
        'https://www.theglobaleconomy.com/rankings/crop_production_index/',
    },
    {
      key: 7,
      no: 7,
      Data: 'Production of Goods',
      References: 'https://www.fao.org/faostat/en/#data/QCL',
    },
    {
      key: 8,
      no: 8,
      Data: '% of food produce exported',
      References: 'Computed by taking goods exported/goods produced',
    },
    {
      key: 9,
      no: 9,
      Data: 'Poverty rate',
      References:
        'https://worldpopulationreview.com/country-rankings/poverty-rate-by-country',
    },
    {
      key: 10,
      no: 10,
      Data: 'Export of Goods',
      References: 'https://www.fao.org/faostat/en/#data/TCL',
    },
    {
      key: 11,
      no: 11,
      Data: 'Road density',
      References:
        'https://en.wikipedia.org/wiki/List_of_countries_by_road_network_size',
    },
    {
      key: 12,
      no: 12,
      Data: 'Food security index ',
      References:
        'https://impact.economist.com/sustainability/project/food-security-index/',
    },
  ];
  return (
    <LayoutMain>
      <div className="flex flex-col justify-center items-center py-10">
        <Typography.Title>Datasets</Typography.Title>
        <Table
          className="w-11/12"
          dataSource={parsedCsvData}
          columns={columns}
          scroll={{ x: true }}
        />
        <Typography.Title>References</Typography.Title>
        <Table
          className="w-11/12"
          dataSource={refData}
          columns={columnsRef}
          scroll={{ x: true }}
        />
      </div>
    </LayoutMain>
  );
}

export default data;
