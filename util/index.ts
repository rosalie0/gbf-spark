export type SparkCalculcatorForm = {
  cerulean: number;
  crystals: number;
  singleTickets: number;
  tenTickets: number;
};

export const calculateNumberOfPulls = (form: SparkCalculcatorForm) => {
  const crystalsAsPulls = Math.floor(form.crystals / 300); // 300 crystals is equal to 1 pull
  const tenTicketsAsPulls = form.tenTickets * 10; // 1 tenTicket is is equal to 10 pulls.
  const numberOfPulls =
    form.cerulean + form.singleTickets + crystalsAsPulls + tenTicketsAsPulls;
  return numberOfPulls;
};
