import React, { useState } from 'react';
import { Form,  DatePicker, Button,  Input } from 'antd';
// import { Link } from 'react-router-dom';
import '../styles/Query2.css';


const Query4 = () => {
  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);

  const handleQuerySubmit = async (values) => {
    try {
      const response = await fetch(`/api/query3?startDate=${values.d_start_date.format('YYYY')}&endDate=${values.d_end_date.format('YYYY')}&d_tollid3=${values.d_tollid3}&d_tollid2=${values.d_tollid2}&d_tollid1=${values.d_tollid1}&d_vehicleid=${values.d_vehicleid}`);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="query4-container">
      <div className="query4-sub">
        <Form form={form} onFinish={handleQuerySubmit} initialValues={{ k: 5 }}>
          <Form.Item name="d_start_date" label="Enter the Start Year">
          <DatePicker picker="year" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="d_end_date" label="Enter the End year">
          <DatePicker picker="year" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="d_tollid3" label="Enter toll">
          <Input/>
          </Form.Item>
          <Form.Item name="d_tollid2" label="Enter toll">
          <Input/>
          </Form.Item>
          <Form.Item name="d_tollid1" label="Enter toll">
          <Input/>
          </Form.Item>
          <Form.Item name="d_vehicleid" label="Enter vehicleid">
          <Input/>
          </Form.Item>
         
          
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {queryResult.length > 0 && (
          <div className="query-result">
            <h3>Query Result:</h3>
            <table>
              <thead>
                <tr>
                  <th>Passing(cnt)</th>
                </tr>
              </thead>
              <tbody>
                {queryResult.map((resultItem, index) => (
                  <tr key={index}>
                    <td>{resultItem.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Query4;
 /*<h2>3:Between 2years ,toll-wise each vehicle passing count</h2>*/
