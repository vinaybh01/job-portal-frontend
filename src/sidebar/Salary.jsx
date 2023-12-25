import InputField from "../component/InputField";
import Button from "./Button";

function Salary({ handleChange, handleClick }) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2 ">Salary</h3>
      <div className="flex">
        <Button onClickHandler={handleClick} value="Hourly" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test2"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>
          All
        </label>
        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 1000000k"
          name="test2"
        />
      </div>
    </div>
  );
}

export default Salary;
