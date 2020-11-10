import Link from 'next/link';
import Tabs from "../components/Tab/Tabs";
import Hero from '../components/Hero';
import TopNav from '../components/TopNav';
import MediaQuery from 'react-responsive';

const Home = props => (
	<>
	<Hero></Hero> 
	<Tabs>
	<div label="Small Dishes"></div>
	<div label="Pho"></div>
	<div label="Banh Mi"></div>
	<div label="Rice"></div>
	<div label="Vermicelli"></div>
	<div label="Vegetarian"></div>
	<div label="Bar"></div>
	<div label="Dessert"></div>
  </Tabs>
	</>
);
{/* <ContextDescendantRadioButton/> */}

export default Home;
