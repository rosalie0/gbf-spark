import { Image } from "@chakra-ui/react";

import Sorry from "./assets/Stamp17.png";
import Hurray from "./assets/Stamp2.png";
import AntEater from "./assets/Stamp261.png";

type resultBoxProps = {
  resultType: string;
  numberOfPulls: number;
};

export default function ResultBox({
  resultType,
  numberOfPulls,
}: resultBoxProps) {
  const numberOfPullsLeftOver = numberOfPulls - 300;
  const percentChance = ((numberOfPulls / 300) * 100).toFixed(1);

  if (resultType === "Success")
    return (
      <div className="result-box">
        <Image src={Hurray} />
        <h2>You can spark!</h2>
        <p>And you'd still have {numberOfPullsLeftOver} pulls left over!</p>
      </div>
    );

  if (resultType === "Failure")
    return (
      <div className="result-box">
        <Image src={Sorry} />
        <h2>You can't spark...</h2>
        <p>
          You only have {numberOfPulls} pulls, giving you a {percentChance}%
          chance of pulling the character you want.
        </p>
      </div>
    );

  if (resultType === "Waiting") {
    return (
      <div className="result-box">
        <Image src={AntEater} />
        <h2>Waiting...</h2>
      </div>
    );
  }

  return (
    <div className="result-box">
      <Image src={AntEater} />
      <h2>Waiting...</h2>
    </div>
  );
}
