import { useEffect, useState } from "react";
import "./App.css";
import { SparkCalculcatorForm, calculateNumberOfPulls } from "../util/";
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

import ResultBox from "./ResultBox";

const intialState: SparkCalculcatorForm = {
  cerulean: undefined,
  crystals: undefined,
  singleTickets: undefined,
  tenTickets: undefined,
};

function App() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  const paddingXForm = isMobile ? "0" : "6rem";

  const [state, setState] = useState(intialState);
  const [isTouched, setIsTouched] = useState(false);
  const [isFilledOut, setIsFilledOut] = useState(false);

  useEffect(() => {
    const formValues = Object.values(state);
    setIsTouched(formValues.some((ele) => ele !== undefined));
    // if any of its values are not undefined, its touched.
  }, [state]);

  useEffect(() => {
    const formValues = Object.values(state);
    setIsFilledOut(!formValues.some((ele) => ele === undefined));
    // if any of its values are not undefined, its touched.
  }, [state]);

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
  console.log(numberOfPulls);
  const canSpark = numberOfPulls >= 300;

  const showWaiting = !isTouched;
  const showSuccess = isTouched && canSpark;
  const showFailure = isTouched && !canSpark;

  let resultColor = "orange.300";
  if (showSuccess) resultColor = "green.300";
  if (showFailure) resultColor = "red.300";

  // if (isFilledOut && canSpark) resultColor = "green.300";
  // if (isFilledOut && !canSpark) resultColor = "red.300";
  console.log(state);

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
              <div className="input-label">Times already</div>
              <div className="input-label">pulled</div>
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
          bg={resultColor}
          width={"full"}
          //minW="container.sm"
          color="whiteAlpha.900"
          rounded="lg"
          padding={isMobile ? "0" : "2rem"}
        >
          {showWaiting && (
            <ResultBox resultType="Waiting" numberOfPulls={numberOfPulls} />
          )}
          {showSuccess && (
            <ResultBox resultType="Success" numberOfPulls={numberOfPulls} />
          )}
          {showFailure && (
            <ResultBox resultType="Failure" numberOfPulls={numberOfPulls} />
          )}
        </Box>
      </Container>
    </div>
  );
}

export default App;
