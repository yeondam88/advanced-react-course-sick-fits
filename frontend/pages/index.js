import Items from "../components/Items";

const Home = props => (
  <p>
    <Items page={parseFloat(props.query.page) || 1} />
  </p>
);

export default Home;
