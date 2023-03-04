import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise: any;

export default function CandleChart() {
	const onLoadScriptRef = useRef<any>();

	useEffect(() => {
		onLoadScriptRef.current = createWidget;

		if (!tvScriptLoadingPromise) {
			tvScriptLoadingPromise = new Promise((resolve) => {
				const script = document.createElement("script");
				script.id = "tradingview-widget-loading-script";
				script.src = "https://s3.tradingview.com/tv.js";
				script.type = "text/javascript";
				script.onload = resolve;

				document.head.appendChild(script);
			});
		}

		tvScriptLoadingPromise.then(
			() => onLoadScriptRef.current && onLoadScriptRef.current()
		);

		return () => (onLoadScriptRef.current = null);

		function createWidget() {
			if (
				document.getElementById("tradingview_66bce") &&
				"TradingView" in window
			) {
				new window.TradingView.widget({
					autosize: false,
					symbol: "NASDAQ:AAPL",
					interval: "D",
					timezone: "Etc/UTC",
					theme: "light",
					style: "1",
					locale: "en",
					toolbar_bg: "#f1f3f6",
					enable_publishing: false,
					hide_top_toolbar: true,
					hide_legend: true,
					allow_symbol_change: true,
					container_id: "tradingview_f8ab1",
				});
			}
		}
	}, []);

	return (
		<div className="">
			<div id="tradingview_66bce" />
		</div>
	);
}
