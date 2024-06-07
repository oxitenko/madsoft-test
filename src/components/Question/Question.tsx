import { Card, Flex, Typography } from 'antd';
import { Question as IQuestion } from '../../data/data';
import FreeLongAnswerCard from '../Answers/FreeLongAnswerCard';
import FreeShortAnswerCard from '../Answers/FreeShortAnswerCard';
import OneAnswerCard from '../Answers/OneAnswerCard';
import MultipleAnswerCard from '../Answers/MultipleAnswerCard';

type Props = Omit<IQuestion, 'rightAnswers'>;

const renderAnswers = (type: string, answers: string[], id: number) => {
  switch (type) {
    case 'one':
      return <OneAnswerCard answers={answers} id={id} />;

    case 'multiple':
      return <MultipleAnswerCard answers={answers} id={id} />;

    case 'freeLong':
      return <FreeLongAnswerCard id={id} />;

    case 'freeShort':
      return <FreeShortAnswerCard id={id} />;

    default:
      console.log('Type not exist');
  }
};

const Question = ({ type, question, answers, id }: Props) => {
  return (
    <Card style={{ height: '230px' }}>
      <Flex vertical gap={24}>
        <Typography.Text strong style={{ fontSize: '16px' }}>
          {question}
        </Typography.Text>
        {renderAnswers(type, answers, id)}
      </Flex>
    </Card>
  );
};

export default Question;
