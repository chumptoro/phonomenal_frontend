import Link from 'next/link';
import Tabs from "../components/Tab/Tabs";

const Home = props => (
	<Tabs>
	{/* <div label="Fan Favorites">
		See ya later, <em>Alligator</em>!
	</div> */}

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
);

export default Home;
