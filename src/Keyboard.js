import Key from "./Key";
import { calcData } from "./utils/constants";
const Keyboard = ({ handleInput }) => (
  <div className="keys">
    {calcData.map((key) => (
      <Key key={key.id} keyData={key} handleInput={handleInput} />
    ))}
  </div>
);
export default Keyboard;
