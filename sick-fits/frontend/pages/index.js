import Link from "next/link";

const Home = props => (
  <div>
    <p>I am home!</p>
    <Link href="/sell">
      <a>Sell stuff</a>
    </Link>
  </div>
);

export default Home;
