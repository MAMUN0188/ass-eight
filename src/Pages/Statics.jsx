import { useEffect, useState } from "react";
import HeadingTwo from "../Components/HeadingTwo";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const Statics = () => {
    const [dat, setData] = useState([])

    useEffect(()=>{
        fetch('gadget.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div>
            <HeadingTwo title='Statistics' subtitle='Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'></HeadingTwo>
            <div className="mx-auto max-w-5xl text-center mt-5">
                <BarChart width={730} height={250}  data={dat}>
                <XAxis dataKey="name" />
                <YAxis dataKey="price"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
                <Bar dataKey="" fill="#82ca9d" />
            </BarChart>
            </div>
        </div>
    );
};

export default Statics;