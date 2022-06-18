import { Link } from "react-router-dom";

function Donate() {
  const address = "0x643d0b821d30dc36d81bb827889bf7cba5142810";
  return (
    <>
      <h2>
        <Link to="/">guzus</Link> | Donate
      </h2>
      <div>
        <h3>ETH</h3>
        <p>{address}</p>
        <button
          onClick={() => {
            navigator.clipboard.writeText(address);
          }}
        >
          <h2>copy</h2>
        </button>
      </div>
    </>
  );
}

export { Donate };
