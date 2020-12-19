import React from 'react';
import { Form, Radio, InputNumber, Button, Divider } from 'antd';
import { ResultUpdateFields } from '../../constants'

interface MiscUpdateProps {
  playerNames: string[];
  onUpdateResults: (values: any) => void;
}

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 8 }
}

const buttonLayout = {
  wrapperCol: { offset: 3 }
}

const MiscUpdate = (props: MiscUpdateProps): JSX.Element => {
  const [form] = Form.useForm();

  return (
    <div className='update-results'>
      <Divider orientation='left'>Misc score update</Divider>
      <Form form={form} {...formItemLayout} onFinish={props.onUpdateResults}>
        <Form.Item name={ResultUpdateFields.Winner} label={ResultUpdateFields.Winner} rules={[{ required: true }]}>
          <Radio.Group options={props.playerNames} optionType='button' />
        </Form.Item>

        <Form.Item name={ResultUpdateFields.Loser} label={ResultUpdateFields.Loser} rules={[{ required: true }]}>
          <Radio.Group options={props.playerNames} optionType='button' />
        </Form.Item>

        <Form.Item name={ResultUpdateFields.Amount} label={ResultUpdateFields.Amount} rules={[{ required: true }]}>
          <InputNumber
            min={0.1}
            step={0.1}
            placeholder={ResultUpdateFields.Amount}
            formatter={(value) => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          />
        </Form.Item>

        <Form.Item {...buttonLayout}>
          <Button type='primary' htmlType='submit'>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MiscUpdate;