export default function Summary({ cart }) {

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.qty || 1),
    0
  );

  return (
    <div className="summaryContent">
      <div className="wayToPay">
        <h3 style={{ color: "white" }}>Order Summary</h3>
        <p>SECURE PAYMENT <br/> Powered By Symantec</p>
        <div className="cards"></div>
      </div>

      <div className="summaryTotal">
        <p>Total: $ {total.toFixed(2)} USD</p>
        <button>Pay For Order</button>
      </div>
    </div>
  );
}
