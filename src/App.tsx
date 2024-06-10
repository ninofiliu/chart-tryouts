import { Resizable } from "./Resizable";
import { ChartJS } from "./ChartJS";
import { data } from "./data";

export const App = () => {
  return (
    <Resizable>
      <ChartJS data={data} />
    </Resizable>
  );
};
