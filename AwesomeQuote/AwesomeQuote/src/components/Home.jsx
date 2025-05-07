import { Link } from "react-router";

const Home = () => {
	const [favoritesOnly, setFavoritesOnly] = useState(false);
	const quotes = [
	  { id: 1, text: 'Stay hungry, stay foolish', author: 'Steve Jobs', favorite: false },
	  { id: 2, text: 'When you want something from your heart, the whole universe conspires in helping you to achieve it.', author: 'Paulo Coelho', favorite: true },
	];
	const displayed = favoritesOnly ? quotes.filter(q => q.favorite) : quotes;
	return (
		<div>
		<Navbar />
		<h2>Quotes Around the World</h2>
		<button onClick={() => setFavoritesOnly(false)}>All</button>
		<button onClick={() => setFavoritesOnly(true)}>Favorites</button>
		{displayed.map(q => (
		  <div key={q.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
			<p>{q.text}</p>
			<p>- {q.author}</p>
			<span>{q.favorite ? '❤️' : '🤍'}</span>
		  </div>
		))}
	  </div>
	);
};  


export default Home;
