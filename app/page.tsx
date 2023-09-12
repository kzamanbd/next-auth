import Link from "next/link";

const Home = () => {
	return (
		<div>
			<Link href="/login">Login</Link>
			<Link href="/register">Register</Link>
		</div>
	);
};

export default Home;
