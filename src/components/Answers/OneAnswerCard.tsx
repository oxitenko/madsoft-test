import { Form, Radio, Space } from 'antd';
import { Answers as IAnswers } from '../../data/data';

const OneAnswerCard = ({ answers, id }: IAnswers) => {
  return (
    <Form.Item name={id}>
      <Radio.Group>
        <Space direction="vertical">
          {answers?.map((item) => (
            <Radio key={item} value={item}>
              {item}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
};

export default OneAnswerCard;
