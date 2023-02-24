import HomePage from './HomePage';

interface Props {
  searchParams: {
    q: string;
  };
}

const Home = async (props: Props) => <HomePage {...props} />;

export default Home;
