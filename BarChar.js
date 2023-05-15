import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

export default function BarChar() {
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
        <>
    <div className="text-bg-dark p-3">
        <h1 style={{ color: '#6fe87f' , fontWeight: 'bold'}}>{username}'s Monthly Goals Met</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 md:gap-10 mt-10 mr-20 mb-20 text-bg-dark p-3">
            <div className="bg-dark text-black rounded shadow p-5 text-bg-dark p-3" fill='dark'>
                <ResponsiveContainer height={350} fill='dark'>
                    <BarChart data={data} fill='dark'>
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey='day' domain={[1, 'dataMax']}/>
                        <YAxis fill='dark'/>
                        <Tooltip fill='dark'/>
                        <Bar name="Goals Reached" dataKey='goals_reached' fill='#6fe87f'/>
                        <Legend />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>    
    </div>
    </>
  )
}
