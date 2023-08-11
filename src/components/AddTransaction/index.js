import { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onChangeText = (event) => setText(event.target.value);

  const onChangeAmount = (event) => setAmount(event.target.value);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={onChangeText}
            placeholder="Enter text..."
          />
        </div>
        <div class="form-control">
          <label htmFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={onChangeAmount}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};
export default AddTransaction;
