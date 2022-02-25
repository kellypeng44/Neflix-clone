import { useEffect, useState } from "react";
import axios from "axios";

function Home({type}){
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    // called whenever genre and type is modified
    useEffect(() => {
        const getRandomList = async() => {
            try {
                const res = await axios.get(
                    `list${type ? "?type="+type : ""}${genre ? "?genre="+genre : ""}`
                );
                setLists(res.data);
            } catch(err) {
                console.log(err);
            }
        }; 
    }, [ genre, type ]);
};

export default Home;