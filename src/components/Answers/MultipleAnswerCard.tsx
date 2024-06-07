import { Checkbox, Form } from 'antd';
import { Answers as IAnswers } from '../../data/data';

const MultipleAnswerCard = ({ answers, id }: IAnswers) => {
  const answersOption = answers?.map((item) => ({ label: item, value: item }));

  return (
    <Form.Item name={id}>
      <Checkbox.Group
        options={answersOption}
        style={{ flexDirection: 'column', gap: '8px' }}
      />
    </Form.Item>
  );
};

export default MultipleAnswerCard;
