import { Layout } from 'antd';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  return (
    <Layout
      style={{
        width: '100wh',
        height: '100vh',
        padding: '24px',
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      <Header />
      <Main />
    </Layout>
  );
}

export default App;
