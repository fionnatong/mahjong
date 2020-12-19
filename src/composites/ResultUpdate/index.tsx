import React from 'react';
import { Form, Radio, Button, Divider } from 'antd';
import { ResultUpdateFields, WIN_OPTIONS } from '../../constants'

interface ResultUpdateProps {
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

const ResultUpdate = (props: ResultUpdateProps): JSX.Element => {
  const [form] = Form.useForm();

  return (
    <div className='update-results'>
      <Divider orientation='left'>Results</Divider>
      <Form form={form} {...formItemLayout} onFinish={props.onUpdateResults}>
        <Form.Item name={ResultUpdateFields.Winner} label={ResultUpdateFields.Winner} rules={[{ required: true }]}>
          <Radio.Group options={props.playerNames} optionType='button' />
        </Form.Item>

        <Form.Item name={ResultUpdateFields.WinType} label={ResultUpdateFields.WinType} rules={[{ required: true }]}>
          <Radio.Group options={Object.values(WIN_OPTIONS)} optionType='button' />
        </Form.Item>

        <Form.Item name={ResultUpdateFields.Loser} label={ResultUpdateFields.Loser}>
          <Radio.Group options={props.playerNames} optionType='button' />
        </Form.Item>

        <Form.Item name={ResultUpdateFields.Tai} label={ResultUpdateFields.Tai} rules={[{ required: true }]}>
          <Radio.Group options={['1', '2', '3', '4', '5']} optionType='button' />
        </Form.Item>

        <Form.Item {...buttonLayout}>
          <Button type='primary' htmlType='submit'>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ResultUpdate;