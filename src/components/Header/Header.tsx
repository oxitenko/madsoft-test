import { Flex, Typography } from 'antd';
import Countdown from '../Countdown/Countdown';
import { testType } from '../../data/data';

const Header = () => {
  const isTimer: testType = 'timerOn';

  return (
    <Flex
      style={{
        width: '47vw',
        alignItems: 'baseline',
        gap: '24px',
        marginBottom: '30px',
      }}
    >
      <Typography.Title style={{ margin: '0px' }} level={1}>
        Testing
      </Typography.Title>
      {isTimer === 'timerOn' && <Countdown />}
    </Flex>
  );
};

export default Header;
