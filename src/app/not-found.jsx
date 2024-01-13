import Link from "next/link";

const Notfound = () => {
  return (
    <div>
      <h2>Notfound</h2>
      <p>Your page doesn't exist</p>
      <Link href={"/"}>Return to Home</Link>
    </div>
  );
};

export default Notfound;
