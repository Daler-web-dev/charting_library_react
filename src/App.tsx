import { useState } from "react";
import "./App.css";
import CandleChart from "./CandleChart";
import TradingViewChart from "./ChartMy";

function App() {
	return (
		<div>
			<div className="chart-container">
				<TradingViewChart/>
				{/* <CandleChart/> */}
			</div>
		</div>
	);
}

export default App;
