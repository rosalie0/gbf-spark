import { useState } from "react";
import "./App.css";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Container,
  Divider,
  useMediaQuery,
  Box,
  Image,
} from "@chakra-ui/react";
import Sorry from "./assets/Stamp17.png";
import Hurray from "./assets/Stamp2.png";
import { SparkCalculcatorForm, calculateNumberOfPulls } from "../util/";

const intialState: SparkCalculcatorForm = {
  cerulean: 0,
  crystals: 0,
  singleTickets: 0,
  tenTickets: 0,
};

function App() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const paddingXForm = isMobile ? "0" : "6rem";

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
      <Container
        centerContent
        maxW="container.sm"
        bg="whiteAlpha.800"
        color="gray.900"
        rounded="lg"
        dropShadow="lg"
        paddingY="1rem"
      >
        <div className="header-box">
          <h1>Granblue Fantasy Spark Calculator</h1>
        </div>
        <Divider borderColor="gray.400" />
        <Container
          maxW="container.sm"
          paddingX={paddingXForm}
          paddingTop={"2rem"}
          paddingBottom={"1rem"}
          fontSize={"lg"}
        >
          <div className="input-wrapper">
            <div>
              <div className="input-label">Cerulean Sparks</div>
              <div className="input-label">already obtained</div>
            </div>
            <NumberInput min={0} size="lg" maxW={32} onChange={handleCerulean}>
              <NumberInputField
                borderColor="transparent"
                background={"whiteAlpha.800"}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className="input-wrapper">
            Crystals
            <NumberInput min={0} size="lg" maxW={32} onChange={handleCrystals}>
              <NumberInputField
                borderColor="transparent"
                background={"whiteAlpha.800"}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
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
              <NumberInputField
                borderColor="transparent"
                background={"whiteAlpha.800"}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
          <div className="input-wrapper">
            x10 tickets
            <NumberInput
              min={0}
              size="lg"
              maxW={32}
              onChange={handleTenTickets}
            >
              <NumberInputField
                borderColor="transparent"
                background={"whiteAlpha.800"}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </div>
        </Container>
        <Box
          bg={canSpark ? "green.300" : "red.300"}
          color="whiteAlpha.900"
          rounded="lg"
          padding={isMobile ? "0" : "2rem"}
        >
          {canSpark ? (
            <div className="result-box">
              <Image src={Hurray} />
              <h2>You can spark!</h2>
              <p>
                And you'd still have {numberOfPullsLeftOver} pulls left over!
              </p>
            </div>
          ) : (
            <div className="result-box">
              <Image src={Sorry} />
              <h2>You can't spark...</h2>
              <p>
                You only have {numberOfPulls} pulls, which means you have a{" "}
                {percentChance}% chance of pulling the character you want.
              </p>
            </div>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default App;
