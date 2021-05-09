import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale'
import { BASE_URL } from 'utils/requests'
type ChartData = {
    series: number[];
    labels: string[];
}
const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ series: [], labels: [] });

    useEffect(() => {
        // or axios.get(BASE_URL + 'sales/amount-by-seller')
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(reponse => {
                const data = reponse.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);
                setChartData({ series: mySeries, labels: myLabels });
            });
    }, []);

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;

