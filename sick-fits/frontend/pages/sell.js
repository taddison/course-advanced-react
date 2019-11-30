import Link from "next/link";

const Sell = props => (
  <div>
    <p>Howdy sir, would you like to sell some bees?</p>
    <Link href="/">
      <a>No, go home.</a>
    </Link>
  </div>
);

export default Sell;
