import React, { useState } from 'react';
import { Form,  DatePicker, Button,  Input } from 'antd';
// import { Link } from 'react-router-dom';
import '../styles/Query1.css';


const Query2 = () => {
  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);

  const handleQuerySubmit = async (values) => {
    try {
      const response = await fetch(`/api/query1?startDate=${values.d_start_date.format('YYYY')}&endDate=${values.d_end_date.format('YYYY')}&d_vehicletype=${values.d_vehicletype}&d_tollid1=${values.d_tollid1}`);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="query4-container">
      <div className="query4-sub">
        <h2>1:Between 2years ,Toll-wise ,vehicletype-wise Total amount collected</h2>
        <Form form={form} onFinish={handleQuerySubmit} initialValues={{ k: 5 }}>
          <Form.Item name="d_start_date" label="Enter the Start Year">
          <DatePicker picker="year" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="d_end_date" label="Enter the End year">
          <DatePicker picker="year" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="d_vehicletype" label="Enter vehicle type">
          <Input/>
          </Form.Item>
          <Form.Item name="d_tollid1" label="Enter tollid">
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
                  <th>Toll</th>
                  <th>Vehicle</th>
                  <th>Amt</th>
                </tr>
              </thead>
              <tbody>
                {queryResult.map((resultItem, index) => (
                  <tr key={index}>
                    <td>{resultItem.toll}</td>
                    <td>{resultItem.vehicletype}</td>
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

export default Query2;

