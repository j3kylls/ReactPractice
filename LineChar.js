import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

export default function LineChar() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('/Banger.txt')
        .then(response => response.text())
        .then(text => {
          const rows = text.split('\n');
          const chartData = rows.map(row => {
            const [day, goals_reached] = row.split(',');
            return { day, goals_reached: parseInt(goals_reached, 10) };
          });
          setData(chartData);
          console.log(chartData);
        });
    }, []);
    let username = 'Username';
  return (
    <div className="text-bg-dark p-3">
        <div className="bg-dark text-black rounded shadow p-5">
        <h1 style={{ color: '#6fe87f' , fontWeight: 'bold'}}>{username}'s Progress</h1>
            <ResponsiveContainer height={350}>
            <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="2 2"/>
          <XAxis dataKey="day" domain={[1, 'dataMax']}/>
          <YAxis dataKey="goals_reached" unit=" goals" />
          <Tooltip/>
          <Legend />
          <Scatter name="Progress" data={data} fill='#6fe87f' line shape="circle" activeDot={{ r: 8 }} />
        </ScatterChart>
            </ResponsiveContainer>
          </div>
          </div>
  )
}
