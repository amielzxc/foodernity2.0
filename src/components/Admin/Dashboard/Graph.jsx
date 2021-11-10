import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

function Graph() {
  const categoriesArray = useSelector(
    (state) => state.dashboard.categoriesArray
  );
  const receivedDonationsArray = useSelector(
    (state) => state.dashboard.receivedDonationsArray
  );
  const distributedDonationsArray = useSelector(
    (state) => state.dashboard.distributedDonationsArray
  );
  const data = {
    labels: categoriesArray,
    datasets: [
      {
        label: "Distributed Donations",
        data: distributedDonationsArray,
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "Received Donations",
        data: receivedDonationsArray,
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 1",
      },
    ],
  };
  return <Bar data={data} />;
}

export default Graph;
