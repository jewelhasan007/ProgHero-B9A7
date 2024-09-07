import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";


const Chart = () => {

    const dataChart = [
        { name: 'Week 1', Math: 85, Physics: 90, Chemistry: 88 },
        { name: 'Week 2', Math: 78, Physics: 82, Chemistry: 79 },
        { name: 'Week 3', Math: 92, Physics: 88, Chemistry: 95 },
        { name: 'Week 4', Math: 76, Physics: 85, Chemistry: 80 },
      ];

    return (
        <div>
            <h1 className="text-center font-bold">Please see the student marks chart</h1>

            <LineChart width={500} height={500} data={dataChart} >
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
<Line dataKey="Math" stroke="black"> </Line>
<Line dataKey="Physics" stroke="red"> </Line>
<Line dataKey="Chemistry" stroke="blue"> </Line>

            </LineChart>

        </div>
    );
};

export default Chart;