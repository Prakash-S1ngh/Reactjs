import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from 'react-router-dom';
import Spin from '../components/Spin';
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

function Home() {
  const { loading } = useContext(AppContext);
  
  return (
    <div className="App App2">
      {loading ? (
        <Spin />
      ) : (
        <div className="App">
          <Header />
          <Blog />
          <Footer />
        </div>
      )}
      <Link to='/'>Home</Link>
    </div>
  );
}

export default Home;
