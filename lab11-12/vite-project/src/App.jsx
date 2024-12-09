import { Routes, Route, Link } from 'react-router-dom';

function Home() {
	return <h1>Головна сторінка</h1>;
}

function About() {
	return <h1>Про нас</h1>;
}

export default function App() {
	return (
		<div>
			<nav>
				<Link to="/">Головна</Link> | <Link to="/about">Про нас</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}
