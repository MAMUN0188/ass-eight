import toast from "react-hot-toast"

//get data
const getAllWish = () =>{
    const all = localStorage.getItem('wish')
    if(all){
        const wish = JSON.parse(all)
        return wish
    }
    else{
        return []
    }
}
//set data
const addWish = (gadgets) =>{
    const wish = getAllWish()
    const isExist = wish.find(w => w.id === gadgets.id)
    if(isExist) return toast.error('Wish Item Already Added')
    wish.push(gadgets)
    localStorage.setItem('wish', JSON.stringify(wish))    
    toast.success('Wish Item Added Successfully')
}

//remove data
const handleRemove = (id) =>{
    const wish = getAllWish()
    const remaining = wish.filter(ws => ws.id !== id)
    localStorage.setItem('wish', JSON.stringify(remaining))
    toast.success('Wish Item Deleted Successfully')
}

export {addWish, getAllWish, handleRemove}