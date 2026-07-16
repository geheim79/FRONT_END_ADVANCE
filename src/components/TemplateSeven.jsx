import React, { useState } from 'react';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const PhoneInput = ({ id, value = {}, onChange }) => {
  const [prefix, setPrefix] = useState('86');
  const [phone, setPhone] = useState('');
  const triggerChange = changedValue => {
    onChange?.({ ...value, ...changedValue });
  };
  const onPrefixChange = newPrefix => {
    if (!('prefix' in value)) {
      setPrefix(newPrefix);
    }
    triggerChange({ prefix: newPrefix });
  };
  const onPhoneChange = e => {
    const newPhone = e.target.value;
    if (!('phone' in value)) {
      setPhone(newPhone);
    }
    triggerChange({ phone: newPhone });
  };
  return (
    <span id={id}>
      <Space.Compact block>
        <Select
          value={value.prefix || prefix}
          onChange={onPrefixChange}
          style={{ width: 70 }}
          options={[
            { label: '+86', value: '86' },
            { label: '+87', value: '87' },
          ]}
        />
        <Input value={value.phone || phone} onChange={onPhoneChange} style={{ width: '100%' }} />
      </Space.Compact>
    </span>
  );
};
const DonationInput = ({ id, value = {}, onChange }) => {
  const [amount, setAmount] = useState();
  const [currency, setCurrency] = useState('USD');
  const triggerChange = changedValue => {
    onChange?.({ ...value, ...changedValue });
  };
  const onAmountChange = newAmount => {
    if (!('amount' in value)) {
      setAmount(newAmount ?? undefined);
    }
    triggerChange({ amount: newAmount ?? undefined });
  };
  const onCurrencyChange = newCurrency => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({ currency: newCurrency });
  };
  return (
    <span id={id}>
      <Space.Compact block>
        <InputNumber
          value={value.amount ?? amount}
          onChange={onAmountChange}
          style={{ width: '100%' }}
        />
        <Select
          value={value.currency || currency}
          onChange={onCurrencyChange}
          style={{ width: 70 }}
          options={[
            { label: '$', value: 'USD' },
            { label: '¥', value: 'CNY' },
          ]}
        />
      </Space.Compact>
    </span>
  );
};
const App = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = value => {
    setAutoCompleteResult(value ? ['.com', '.org', '.net'].map(domain => `${value}${domain}`) : []);
  };
  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        phone: { prefix: '86' },
        donation: { currency: 'USD' },
      }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
  
      <Form.Item
        name="Выбрать подписку"
        label="Выбрать подписку"
        rules={[{ required: true, message: 'Выбрать подписку' }]}
      >
        <Select
          placeholder="select your gender"
          defaultValue={'Бесплатный'}
          options={[
            { label: 'Бесплатный', value: 'Бесплатный' },
            { label: 'Премиум', value: 'Премиум' },
            { label: 'Про', value: 'Про' },
          ]}
        />
      </Form.Item>

    

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Согласен с условиями <a href=""></a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Подтвердить
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;