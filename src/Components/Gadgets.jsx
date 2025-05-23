import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Card from './Card';

const Gadgets = () => {
    const { categoryName } = useParams()
    const data = useLoaderData()
    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        if (categoryName) {
            const filtered = [...data].filter(dt => dt.category === categoryName)
            setGadgets(filtered)
        }
        else {
            setGadgets(data)
        }
    }, [data, categoryName])

    return (
        <div className='w-4/5 grid grid-cols-3 gap-2 justify-between'>
            {
                gadgets.map(gadget => <Card gadget={gadget}></Card>)
            }
        </div>
    );
};

export default Gadgets;