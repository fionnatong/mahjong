import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

enum SetupFields {
  PlayerOne = 'Player 1',
  PlayerTwo = 'Player 2',
  PlayerThree = 'Player 3',
  PlayerFour = 'Player 4',
  Bet = 'Bet'
}

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8 }
}

const buttonLayout = {
  wrapperCol: { offset: 3 }
}

const Setup = (): JSX.Element => {
  const [form] = Form.useForm();

  const initialValues: {[key in SetupFields]?: any} = {
    [SetupFields.Bet]: 0.1
  }

  const onFinish = (values: any): void => {
    console.log('---onFinish:', values);
  }
  
  return (
  <Form form={form} layout='horizontal' {...formItemLayout} onFinish={onFinish} initialValues={initialValues}>
    <Form.Item name={SetupFields.PlayerOne} label={SetupFields.PlayerOne}>
      <Input placeholder={SetupFields.PlayerOne} />
    </Form.Item>

    <Form.Item name={SetupFields.PlayerTwo} label={SetupFields.PlayerTwo}>
      <Input placeholder={SetupFields.PlayerTwo} />
    </Form.Item>

    <Form.Item name={SetupFields.PlayerThree} label={SetupFields.PlayerThree}>
      <Input placeholder={SetupFields.PlayerThree} />
    </Form.Item>

    <Form.Item name={SetupFields.PlayerFour} label={SetupFields.PlayerFour}>
      <Input placeholder={SetupFields.PlayerFour} />
    </Form.Item>

    <Form.Item name={SetupFields.Bet} label={SetupFields.Bet}>
      <InputNumber
        min={0.1}
        step={0.1}
        placeholder={SetupFields.Bet}
        formatter={(value) => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      />
    </Form.Item>

    <Form.Item {...buttonLayout}>
      <Button type='primary' htmlType='submit'>Start</Button>
    </Form.Item>
  </Form>
  );
}

export default Setup;