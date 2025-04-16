import { tickets } from "./data";
import StatsSummary from "./components/StatsSummary";
import TicketBoard from "./components/TicketBoard";

function App() {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Support Ticket Viewer</h2>
      <StatsSummary tickets={tickets} />
      <TicketBoard tickets={tickets} />
    </div>
  );
}

export default App;
