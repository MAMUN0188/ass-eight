import toast from "react-hot-toast"

//get data 
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites')
    if(all){
        const favorites = JSON.parse(all)
        return favorites
    }
    else{
        return []
    }
}
//add data
const addFavorites = (gadgets) =>{
    const favorites = getAllFavorites()
    const isExixt = favorites.find(fav => fav.id === gadgets.id)
    if(isExixt) return toast.error('Player already added!');
    favorites.push(gadgets)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Added Successfully!')
}
//remove data
const removeFav = (id) =>{
    const favorites = getAllFavorites()
    const remaining = favorites.filter(fav => fav.id !==id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
    toast.success('Removed Successfully!')
}

export {addFavorites, getAllFavorites, removeFav}