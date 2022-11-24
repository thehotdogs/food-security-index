// @ts-nocheck
import { Gauge } from '@ant-design/plots';
import {
  Radio,
  Typography,
  AutoComplete,
  Table,
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  Button,
  message,
} from 'antd';
import React, { useState } from 'react';
import LayoutMain from '../components/LayoutMain';
import countryList from '../components/country';
import useExcelData from '../components/useExcelData';

function calculator() {
  const [percentage, setPercentage] = useState(0);
  const [mode, setMode] = useState('country');
  const [countryDetail, setCountryDetail] = useState([]);
  const { parsedCsvData, header } = useExcelData();
  const [form] = Form.useForm();
  //console.log(parsedCsvData, header);
  const DemoGauge = () => {
    const config = {
      percent: percentage,
      range: {
        ticks: [0, 1 / 3, 2 / 3, 1],
        color: ['#F4664A', '#FAAD14', '#30BF78'],
      },
      indicator: {
        pointer: {
          style: {
            stroke: '#D0D0D0',
          },
        },
        pin: {
          style: {
            stroke: '#D0D0D0',
          },
        },
      },
      axis: {
        label: {
          formatter(v: any) {
            return Number(v) * 1000;
          },
        },
        subTickLine: {
          count: 3,
        },
      },
      statistic: {
        content: {
          formatter: ({ percent }: any) =>
            `GSFI: ${(percent * 1000).toFixed(0)}`,
          style: {
            fontSize: '36px',
            lineHeight: '36px',
          },
        },
      },
    };
    return <Gauge {...config} />;
  };

  const handleCountrySelect = (inputValue: any, option: any) => {
    const targetCountry = parsedCsvData.filter((obj) => {
      return obj['Country'] == inputValue;
    });
    setPercentage(targetCountry[0]['Global Food Security Index (GSFI)'] / 1000);
    let dataArr = [];
    let iter = 0;
    for (const propt in targetCountry[0]) {
      dataArr.push({
        key: iter,
        data: propt,
        value: targetCountry[0][propt],
      });
      iter += 1;
    }
    setCountryDetail(dataArr);
  };
  const CountryItems = () => {
    const columns = [
      {
        title: 'Data',
        dataIndex: 'data',
        key: 'data',
      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
      },
    ];

    return (
      <div className="flex flex-col items-center">
        <div className="w-full">
          <Typography.Text className="pr-3">Insert country :</Typography.Text>

          <AutoComplete
            options={countryList}
            placeholder="e.g. Indonesia"
            filterOption={(inputValue, option) =>
              option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            onSelect={(inputValue: any, option: any) => {
              handleCountrySelect(inputValue, option);
            }}
          />
        </div>
        {countryDetail === {} ? (
          <></>
        ) : (
          <Table
            className="my-5 lg:w-96 lg:h-96 min-h-screen min-w-screen"
            pagination={false}
            dataSource={countryDetail}
            columns={columns}
          />
        )}
      </div>
    );
  };
  const ManualItems = () => {
    const [form] = Form.useForm();
    const layout = {
      labelCol: { span: 12 },
      wrapperCol: { span: 16 },
    };
    const onFinish = (values: any) => {
      for (const propt in values) {
        if (!values[propt]) {
          message.error('Invalid input!');
          return;
        }
      }
      const result =
        16.299 +
        61.3 * Math.log(values['corruption']) +
        21.293 * Math.log(values['GDP']) +
        140.8769 * values['education'] +
        1.124 * values['vac'] +
        16.71 * Math.log(values['export']);

      //console.log(values, result);
      setPercentage(result / 1000);
    };
    const generateRandom = () => {
      form.setFieldsValue({
        corruption: Math.round(Math.random() * 10000) / 100,
        GDP: Math.round(Math.random() * 100000 * 100) / 100,
        education: Math.round(Math.random() * 100) / 100,
        vac: Math.round(Math.random() * 10000) / 100,
        export: Math.round(Math.random() * 10000) / 100,
      });
      //setPercentage(result / 1000);
      return;
    };
    return (
      <div className="w-96">
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="GDP"
            label="GDP CAPITA"
            rules={[{ type: 'number', min: 0, max: 10000000 }]}
          >
            <InputNumber step="1000" addonAfter="0 to 100k" />
          </Form.Item>
          <Form.Item
            name="education"
            label="Education Index"
            rules={[{ type: 'number', min: 0, max: 1 }]}
          >
            <InputNumber step="0.01" addonAfter="0 to 1" />
          </Form.Item>
          <Form.Item
            name="corruption"
            label="Corruption Score"
            rules={[{ type: 'number', min: 0, max: 100 }]}
          >
            <InputNumber addonAfter="%" />
          </Form.Item>
          <Form.Item
            name="vac"
            label="Vaccination Rate"
            rules={[{ type: 'number', min: 0, max: 100 }]}
          >
            <InputNumber addonAfter="%" />
          </Form.Item>
          <Form.Item
            name="export"
            label="Percentage of Export"
            rules={[{ type: 'number', min: 0, max: 100 }]}
          >
            <InputNumber addonAfter="%" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className=" m-5">
              Calculate
            </Button>
            <Button type="primary" onClick={generateRandom} className=" m-5">
              Generate Random
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
  return (
    <LayoutMain>
      <div className="flex flex-col justify-center items-center space-y-5">
        <Typography.Title className="mt-10">
          Calculate Global Food Security Index
        </Typography.Title>
        <Radio.Group
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          buttonStyle="solid"
          size="large"
        >
          <Radio.Button type="primary" value="country">
            Country Mode
          </Radio.Button>
          <Radio.Button type="primary" value="manual">
            Manual mode
          </Radio.Button>
        </Radio.Group>

        {/* <Row align="middle">
          <Col span={4}>
            <Typography.Title level={3}>GSFI Score: </Typography.Title>
          </Col>
          <Col span={20}>
            <DemoGauge />
          </Col>
        </Row> */}
        <div className="w-full h-full lg:w-3/12 lg:h-3/12">
          <DemoGauge />
        </div>

        {mode === 'country' ? <CountryItems /> : <ManualItems />}

        <div className="flex flex-row"></div>
      </div>
    </LayoutMain>
  );
}

export default calculator;
