import { Form, Input } from 'antd';
import { Answers as IAnswers } from '../../data/data';

const FreeLongAnswerCard = ({ id }: IAnswers) => {
  return (
    <Form.Item name={id}>
      <Input.TextArea
        style={{ resize: 'none', height: '100px' }}
        placeholder="Give a detailed answer"
      />
    </Form.Item>
  );
};

export default FreeLongAnswerCard;
