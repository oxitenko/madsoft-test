import { Form, Input } from 'antd';
import { Answers as IAnswers } from '../../data/data';

const FreeShortAnswerCard = ({ id }: IAnswers) => {
  return (
    <Form.Item name={id}>
      <Input.TextArea
        style={{ resize: 'none', height: '50px' }}
        placeholder="Give a short answer"
      />
    </Form.Item>
  );
};

export default FreeShortAnswerCard;
