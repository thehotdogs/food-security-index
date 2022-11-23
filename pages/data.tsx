// @ts-nocheck
import React, { useEffect, useState } from 'react';
import LayoutMain from '../components/LayoutMain';
import csvData from '../data/megasheet';
//import csvFile from '../data/megasheet.csv';
import Papa from 'papaparse';
import { Scatter } from '@ant-design/plots';
import { Col, Row, Typography, Spin } from 'antd';
import useExcelData from '../components/useExcelData';

function data() {
  // console.log(csvData);

  const [loading, setLoading] = useState(false);
  const { parsedCsvData, header } = useExcelData();
  //console.log(parsedCsvData, header);

  const DemoScatter = ({ header }) => {
    setLoading(true);
    const cleanedData = parsedCsvData.filter((item) => {
      const yValue = item['Global Food Security Index (GSFI)'];
      const xValue = item[header];
      if (xValue === '#N/A' || yValue === '#N/A') {
        return false;
      }
      return true;
    });

    const data = cleanedData.map((item) => {
      const yValue = Number(item['Global Food Security Index (GSFI)']);
      const xValue = Number(item[header]);
      return {
        'Food Security Index': yValue,
        [header]: xValue,
        Country: item['Country'],
      };
    });
    const config = {
      data,
      margin: 0,
      xField: `${header}`,
      yField: 'Food Security Index',
      size: 4,
      tooltip: {
        fields: ['Country', `${header}`, 'Food Security Index'],
      },
      pointStyle: {
        stroke: '#777777',
        lineWidth: 0,
        fill: '#5B8FF9',
      },
      regressionLine: {
        type: 'quad', // linear, exp, loess, log, poly, pow, quad
      },
    };
    setLoading(false);
    return <Scatter {...config} />;
  };

  return (
    <LayoutMain>
      <Spin tip="Loading..." spinning={loading} size="large">
        <div className="inline" style={{ padding: '5rem' }}>
          <Row justify="center">
            {parsedCsvData.length != 0 &&
              header[0].map((header) => {
                if (
                  header === 'Country' ||
                  header === 'Global Food Security Index (GSFI)'
                ) {
                  return;
                }

                return (
                  <Col span={7} offset={1} key={header}>
                    <Typography.Title level={5} className="m-2">
                      {header}
                    </Typography.Title>
                    <div
                      className="p-5"
                      style={{ minHeight: '10rem', width: '100%' }}
                    >
                      <DemoScatter header={header} />
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Spin>
    </LayoutMain>
  );
}

export default data;
