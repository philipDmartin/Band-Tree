import React, { useState, useEffect } from "react"

export const BandContext = React.createContext()

export const BandProvider = (props) => {
    const [theBands, setBands] = useState([])

    const getBands = () => {
        return fetch("http://localhost:8088/bands")
            .then(res => res.json())
            .then(setBands)
    }

    const addBand = band => {
        return fetch("http://localhost:8088/bands", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(band)
        })
            .then(getBands)
    }

    const deleteBand = band => {
        return fetch(`http://localhost:8088/bands/${band.id}`, {
            method: "DELETE"
        })
        .then(getBands)
    }

    const updateBand = band => {
        return fetch(`http://localhost:8088/bands/${band.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(band)
        })
            .then(getBands)
    }

    useEffect(() => {
        getBands()
    }, [])

    useEffect(() => {
        console.log(theBands)
        console.log("bands app state changed")
        // if (checkedMessages.length == messages.length){
        //     console.log("time to get messages")
        // }
    }, [theBands])
      
    return (
        <BandContext.Provider value={{
            theBands, addBand, deleteBand, updateBand
        }}>
            {props.children}
        </BandContext.Provider>
    )
}
