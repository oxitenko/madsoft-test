import { Button, Flex, Form, Result, Steps } from 'antd';
import { useEffect } from 'react';
import { tests } from '../../data/data';
import Question from '../Question/Question';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Main = () => {
  const [qn, setQN] = useLocalStorage('num', '0');
  const index = Number(qn);
  const items = tests.map((item) => ({ key: item.id, title: '' }));

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setQN((Number(qn) + 1).toString());
  };

  useEffect(() => {
    if (index === tests.length) {
      window.localStorage.clear();
    }
  }, [index, setQN]);

  return (
    <Flex vertical gap={36}>
      <Steps current={index} items={items} />
      <Form
        name="answers-form"
        onFinish={onFinish}
        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        {index > tests.length - 1 ? (
          <Result status="success" title="Test complite" />
        ) : (
          <Question
            type={tests[index]?.type}
            question={tests[index]?.question}
            answers={tests[index]?.answers}
            id={tests[index]?.id}
          />
        )}
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            style={{ width: 'fit-content' }}
            disabled={index > tests.length - 1}
          >
            Send answer
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default Main;
