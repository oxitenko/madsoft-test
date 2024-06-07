import { CountdownProps, Statistic, message } from 'antd';
import moment from 'moment';

const Countdown = () => {
  const { Countdown } = Statistic;

  const deadline = moment().add(30, 'm').valueOf();

  const onFinish: CountdownProps['onFinish'] = () => {
    message.info('Time is over!');
  };

  return <Countdown value={deadline} onFinish={onFinish} />;
};

export default Countdown;
