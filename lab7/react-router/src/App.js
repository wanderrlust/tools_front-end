import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import User from './User';
import Login from './Login';

const isAuthenticated = false;

const PrivateRoute = ({ children }) => {
	return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
	return (
		<Router>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/profile">Profile</Link>
				<Link to="/settings">Settings</Link>
			</nav>
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route
						path="/settings"
						element={
							<PrivateRoute>
								<Settings />
							</PrivateRoute>
						}
					/>
					<Route path="/user/:id" element={<User />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
