import Link from 'next/link';
import Tabs from "../components/Tab/Tabs";
import Hero from '../components/Hero';
import TopNav from '../components/TopNav';
import MediaQuery from 'react-responsive';

const Home = props => (
	<>
	
	<Hero/> 
  
	<Tabs>
	<div label="Small Dishes">
		After 'while, <em>Crocodile</em>!
	</div>
	<div label="Pho">
		After 'while, <em>Crocodile</em>!
	</div>
	<div label="Banh Mi">
		Banh Mi
	</div>
	<div label="Rice">
		Com Ga, Com Tam 
	</div>
	<div label="Vermicelli">
		Canh chua ca loc <em>extinct</em>!
	</div>

	<div label="Vegetarian">
		Canh chua ca loc <em>extinct</em>!
	</div>
	<div label="Bar">
		Canh chua ca loc <em>extinct</em>!
	</div>
	<div label="Dessert">
		Canh chua ca loc <em>extinct</em>!
	</div>
  </Tabs>
	</>
);
{/* <ContextDescendantRadioButton/> */}

export default Home;
