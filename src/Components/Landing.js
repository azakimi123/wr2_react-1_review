import React from 'react';

function Landing(props) {
    const animalSelectionMapped = props.animalSelection.map((animal, i) => {
        return (
            <div key={i}>
                <h1>{animal.name}</h1>
                <img src ={animal.img} alt= 'lovable animal'/>

            </div>
        )
    })

    return (
        <main>
            <h3>Give us a home!</h3>
            {animalSelectionMapped}
        </main>
    )

}


export default Landing;