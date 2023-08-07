export type SparkCalculcatorForm = {
  cerulean: undefined | number;
  crystals: undefined | number;
  singleTickets: undefined | number;
  tenTickets: undefined | number;
};

export const calculateNumberOfPulls = (form: SparkCalculcatorForm) => {
  const crystalsAsPulls = Math.floor((form.crystals ?? 0) / 300); // 300 crystals is equal to 1 pull
  const tenTicketsAsPulls = (form.tenTickets ?? 0) * 10; // 1 tenTicket is is equal to 10 pulls.
  const numberOfPulls =
    (form.cerulean ?? 0) +
    (form.singleTickets ?? 0) +
    crystalsAsPulls +
    tenTicketsAsPulls;
  return numberOfPulls;
};
