import '../styles/Form.css';
import React from 'react';
import axios from 'axios';
import { Cascader, Form, Input,DatePicker, Select,Button  } from 'antd';

//const { Option } = Select;
const { Option } = Select;
const options = [
  {
    value: 'Ariyalur',
    label: 'Ariyalur',
  },
  {
    value: 'Chennai',
    label: 'Chennai',
  },
  {
    value: 'Coimbatore',
    label: 'Coimbatore',
  },
  {
    value: 'Cuddalore',
    label: 'Cuddalore',
  },
  {
    value: 'Dharmapuri',
    label: 'Dharmapuri',
  },
  {
    value: 'Dindigul',
    label: 'Dindigul',
  },
  {
    value: 'Erode',
    label: 'Erode',
  },
  {
    value: 'Kallakurichi',
    label: 'Kallakurichi',
  },
  {
    value: 'Kanchipuram',
    label: 'Kanchipuram',
  },
  {
    value: 'Kanyakumari',
    label: 'Kanyakumari',
  },
  {
    value: 'Karur',
    label: 'Karur',
  },
  {
    value: 'Krishnagiri',
    label: 'Krishnagiri',
  },
  {
    value: 'Madurai',
    label: 'Madurai',
  },
  {
    value: 'Nagapattinam',
    label: 'Nagapattinam',
  },
  {
    value: 'Namakkal',
    label: 'Namakkal',
  },
  {
    value: 'Nilgiris',
    label: 'Nilgiris',
  },
  {
    value: 'Perambalur',
    label: 'Perambalur',
  },
  {
    value: 'Pudukkottai',
    label: 'Pudukkottai',
  },
  {
    value: 'Ramanathapuram',
    label: 'Ramanathapuram',
  },
  {
    value: 'Rameswaram',
    label: 'Rameswaram',
  },
  {
    value: 'Salem',
    label: 'Salem',
  },
  {
    value: 'Sivaganga',
    label: 'Sivaganga',
  },
  {
    value: 'Tenkasi',
    label: 'Tenkasi',
  },
  {
    value: 'Thanjavur',
    label: 'Thanjavur',
  },
  {
    value: 'Theni',
    label: 'Theni',
  },
  {
    value: 'Thoothukudi',
    label: 'Thoothukudi',
  },
  {
    value: 'Tiruchirappalli',
    label: 'Tiruchirappalli',
  },
  {
    value: 'Tirunelveli',
    label: 'Tirunelveli',
  },
  {
    value: 'Tirupathur',
    label: 'Tirupathur',
  },
  {
    value: 'Tiruppur',
    label: 'Tiruppur',
  },
  {
    value: 'Tiruvallur',
    label: 'Tiruvallur',
  },
  {
    value: 'Tiruvannamalai',
    label: 'Tiruvannamalai',
  },
  {
    value: 'Tiruvarur',
    label: 'Tiruvarur',
  },
  {
    value: 'Vellore',
    label: 'Vellore',
  },
  {
    value: 'Viluppuram',
    label: 'Viluppuram',
  },
  {
    value: 'Virudhunagar',
    label: 'Virudhunagar',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const options1 = [
  {
    value: 'Ariyalur',
    label: 'Ariyalur',
  },
  {
    value: 'Chennai',
    label: 'Chennai',
  },
  {
    value: 'Coimbatore',
    label: 'Coimbatore',
  },
  {
    value: 'Cuddalore',
    label: 'Cuddalore',
  },
  {
    value: 'Dharmapuri',
    label: 'Dharmapuri',
  },
  {
    value: 'Dindigul',
    label: 'Dindigul',
  },
  {
    value: 'Erode',
    label: 'Erode',
  },
  {
    value: 'Kallakurichi',
    label: 'Kallakurichi',
  },
  {
    value: 'Kanchipuram',
    label: 'Kanchipuram',
  },
  {
    value: 'Kanyakumari',
    label: 'Kanyakumari',
  },
  {
    value: 'Karur',
    label: 'Karur',
  },
  {
    value: 'Krishnagiri',
    label: 'Krishnagiri',
  },
  {
    value: 'Madurai',
    label: 'Madurai',
  },
  {
    value: 'Nagapattinam',
    label: 'Nagapattinam',
  },
  {
    value: 'Namakkal',
    label: 'Namakkal',
  },
  {
    value: 'Nilgiris',
    label: 'Nilgiris',
  },
  {
    value: 'Perambalur',
    label: 'Perambalur',
  },
  {
    value: 'Pudukkottai',
    label: 'Pudukkottai',
  },
  {
    value: 'Ramanathapuram',
    label: 'Ramanathapuram',
  },
  {
    value: 'Rameswaram',
    label: 'Rameswaram',
  },
  {
    value: 'Salem',
    label: 'Salem',
  },
  {
    value: 'Sivaganga',
    label: 'Sivaganga',
  },
  {
    value: 'Tenkasi',
    label: 'Tenkasi',
  },
  {
    value: 'Thanjavur',
    label: 'Thanjavur',
  },
  {
    value: 'Theni',
    label: 'Theni',
  },
  {
    value: 'Thoothukudi',
    label: 'Thoothukudi',
  },
  {
    value: 'Tiruchirappalli',
    label: 'Tiruchirappalli',
  },
  {
    value: 'Tirunelveli',
    label: 'Tirunelveli',
  },
  {
    value: 'Tirupathur',
    label: 'Tirupathur',
  },
  {
    value: 'Tiruppur',
    label: 'Tiruppur',
  },
  {
    value: 'Tiruvallur',
    label: 'Tiruvallur',
  },
  {
    value: 'Tiruvannamalai',
    label: 'Tiruvannamalai',
  },
  {
    value: 'Tiruvarur',
    label: 'Tiruvarur',
  },
  {
    value: 'Vellore',
    label: 'Vellore',
  },
  {
    value: 'Viluppuram',
    label: 'Viluppuram',
  },
  {
    value: 'Virudhunagar',
    label: 'Virudhunagar',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];
  

  /*const era = [
    {
      value: 'Chera',
      label: 'Chera'
    },
    {
      value: 'Chola',
      label: 'Chola'
    },
    {
      value: 'Pandya',
      label: 'Pandya'
    },
    ];
    const category = [
      {
        value: 'Small Size',
        label: 'Small Size'
      },
      {
        value: 'Midsize',
        label: 'Midsize'
      },
      {
        value: 'Large Size',
        label: 'Large Size'
      },
      ];*/
  
  
export default function Home() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      alert('toll Form data submitted successfully');
      await axios.post('/api/register', values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCascaderChange = (field, value) => {
    const joinedValue = value.join(', ');
    form.setFieldsValue({ [field]: joinedValue });
  };

  return (
    <div className="App">
      <h2>TOLL MANAGEMENT</h2>
      <Form form={form} onFinish={handleSubmit}>
        
            <Form.Item
              name="d_vehicleid"
              label="Vehicle Id"
              rules={[
                {
                  required: true,
                  message: 'Please enter vehicle id',
                },
              ]}
            >
              <Input />
            </Form.Item>
          
         
            <Form.Item
              name="d_vehicletype"
              label="Vehicle Type"
              rules={[
                {
                  required: true,
                  message: 'Please enter vehicle type',
                },
              ]}
            >
              <Input />
            </Form.Item>
          

        
            <Form.Item
              name="d_source"
              label="Source"
              rules={[
                {
                  required: true,
                  message: 'Please select a source',
                },
              ]}
              
            >
            <Cascader options={options} placeholder="Please select" />              
            </Form.Item>
        

          
            <Form.Item
              name="d_destination"
              label="Destination"
              rules={[
                {
                  required: true,
                  message: 'Please select a destination',
                },
              ]}
              
            >
            <Cascader options={options1} placeholder="Please select" />
            </Form.Item>
              
        
           
            <Form.Item
              name="d_year"
              label="Year"
              rules={[
                {
                  required: true,
                  message: 'Please select a year',
                },
              ]}
            >
             <Form.Item name="d_year" >
            <DatePicker picker="year" style={{ width: '100%' }} />
          </Form.Item>
            </Form.Item>


            <Form.Item
              name="d_time"
              label=" Time"
              rules={[
                {
                  required: true,
                  message: 'Please select a  time',
                },
              ]}
            >
              <Input type="time" />
            </Form.Item>

          
            <Form.Item
              name="d_tollid1"
              label="Toll Id1"
              rules={[
                {
                  required: true,
                  message: 'Please enter tollid1',
                },
              ]}
              
            >    
             <Input type="text" />
            </Form.Item>
          


         
            <Form.Item
              name="d_tollid2"
              label="Toll Id2"
              rules={[
                {
                  required: true,
                  message: 'Please enter tollid2',
                },
              ]}
              
            >
             <Input type="text" />

              
            </Form.Item>
        
          
            <Form.Item
              name="d_tollid3"
              label="Toll Id3"
              rules={[
                {
                  required: true,
                  message: 'Please enter the tollid3',
                },
              ]}
              
            >
               <Input type="text" />
  
            </Form.Item>
            
            <Form.Item
              name="d_amtoll1"
              label="Amt_Toll1"
              rules={[
                {
                  required: true,
                  message: 'Please enter tollamt',
                },
              ]}
            >
              <Input type="number" min={50} />
            </Form.Item>

            <Form.Item
              name="d_amtoll2"
              label="Amt_Toll2"
              rules={[
                {
                  required: true,
                  message: 'Please enter tollamount',
                },
              ]}
            >
              <Input type="number" min={50} />
            </Form.Item>

            <Form.Item
              name="d_amtoll3"
              label="Amt_Toll3"
              rules={[
                {
                  required: true,
                  message: 'Please enter tollamt',
                },
              ]}
            >
              <Input type="number" min={50} />
            </Form.Item>

            <Form.Item
              name="d_total"
              label="Amt_Total"
              rules={[
                {
                  required: true,
                  message: 'Please enter tollamount',
                },
              ]}
            >
              <Input type="number" min={150} />
            </Form.Item>
            
             
          <br/>

<br/>
        <Button className='button' type="primary" htmlType="submit">
            
          Register
          
        </Button>
      </Form>
    </div>
  );
}

