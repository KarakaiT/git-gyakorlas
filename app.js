const orders = [

    {id: 1,
     pizza: "Hawaii",
     extra: "Kukorica",
     ital: "Cola",
     ár: 1500,
    },

    {id: 2,
     pizza: "Szalámi",
     extra: "Tojás",
     ital: "Sprite",
     ár: 1310,
    },

    {id: 3,
     pizza: "Bolonai",
     extra: "Szósz",
     ital: "Soproni",
     ár: 1760,
    },

    {id: 4,
     pizza: "Magyaros",
     extra: "Csípős paprika",
     ital: "Traubi Soda",
     ár: 1900,
    },

    {id: 5,
     pizza: "Inyenc",
     extra: "Marhavelő",
     ital: "Víz",
     ár: 2500,
    },

    {id: 6,
     pizza: "Kívánság",
     extra: "Sajt",
     ital: "Fanta",
     ár: 1950,
    },
]

setTimeout(() =>{

    let output = "";

    orders.forEach((rendeles)=>{


        output += `<div class="order">
                    <h2>${rendeles.pizza}</h2>
                    <p>${rendeles.extra}</p>
                    <p>${rendeles.ital}</p>
                    <p>${rendeles.ár}</p>
                    </div>
        
        `
    })

    document.body.innerHTML = output;

}, 1000)
