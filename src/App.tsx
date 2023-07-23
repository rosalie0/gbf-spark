import { useState } from "react";
import "./App.css";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

type SparkCalculcatorForm = {
  cerulean: number;
  crystals: number;
  singleTickets: number;
  tenTickets: number;
};
const intialState: SparkCalculcatorForm = {
  cerulean: 0,
  crystals: 0,
  singleTickets: 0,
  tenTickets: 0,
};
const calculateNumberOfPulls = (form: SparkCalculcatorForm) => {
  const crystalsAsPulls = Math.floor(form.crystals / 300); // 300 crystals is equal to 1 pull
  const tenTicketsAsPulls = form.tenTickets * 10; // 1 tenTicket is is equal to 10 pulls.
  const numberOfPulls =
    form.cerulean + form.singleTickets + crystalsAsPulls + tenTicketsAsPulls;
  return numberOfPulls;
};

function App() {
  const [state, setState] = useState(intialState);
  const handleCerulean = (value: string) => {
    setState({ ...state, cerulean: Number(value) });
  };
  const handleCrystals = (value: string) => {
    setState({ ...state, crystals: Number(value) });
  };
  const handleSingleTicket = (value: string) => {
    setState({ ...state, singleTickets: Number(value) });
  };
  const handleTenTickets = (value: string) => {
    setState({ ...state, tenTickets: Number(value) });
  };
  const numberOfPulls = calculateNumberOfPulls(state);
  const canSpark = numberOfPulls >= 300;
  const percentChance = ((numberOfPulls / 300) * 100).toFixed(2);
  const numberOfPullsLeftOver = numberOfPulls - 300;
  return (
    <div>
      <h1>Granblue Fantasy Spark Calculator</h1>
      <div className="form">
        <div className="input-wrapper">
          <div>
            <div className="input-label">Cerulean Sparks</div>
            <div className="input-label">already obtained</div>
          </div>
          <NumberInput min={0} size="lg" maxW={32} onChange={handleCerulean}>
            <NumberInputField />
          </NumberInput>
        </div>
        <div className="input-wrapper">
          Crystals
          <NumberInput min={0} size="lg" maxW={32} onChange={handleCrystals}>
            <NumberInputField />
          </NumberInput>
        </div>
        <div className="input-wrapper">
          Single Tickets
          <NumberInput
            min={0}
            size="lg"
            maxW={32}
            onChange={handleSingleTicket}
          >
            <NumberInputField />
          </NumberInput>
        </div>
        <div className="input-wrapper">
          x10 tickets
          <NumberInput min={0} size="lg" maxW={32} onChange={handleTenTickets}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        {canSpark ? (
          <div>
            <h2 className="color-green">You can spark!</h2>
            <p>And you'd still have {numberOfPullsLeftOver} pulls left over!</p>
          </div>
        ) : (
          <div>
            <h2 className="color-red">You can't spark...</h2>
            <p>
              You only have {numberOfPulls} pulls, which means you have a{" "}
              {percentChance}% chance of pulling the character you want.
            </p>
          </div>
        )}
        <h2>Number of Pulls: {numberOfPulls}</h2>
      </div>
    </div>
  );
}

export default App;
