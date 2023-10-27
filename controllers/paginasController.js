import { Viaje } from "../Models/Viajes.js";
import { Testimonial } from "../Models/Testimoniales.js";

const paginaInicio = async (req, res) => {


    // Consultar 3 viajes del modelo viaje


    const promiseDB = [];
    
    promiseDB.push(Viaje.findAll({ limit: 3}));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));

    try {
        // Con await promise.all, este no espera a que se ejecute una para pasar a la siguiente, 
        // ejecuta ambas al mismo tiempo y solamente se tomara el tiempo de demora
        // de la promesa que tarde mas y asi no sumara el tiempo de demora. (Hacer video de tiktok)
        const resultado = await Promise.all(promiseDB);

        res.render("inicio", {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });

    } catch (error) {
        console.log(error);
    }


   
}

const paginaNosotros = (req, res) => { //req - lo que enviamos y resp - es lo que express nos responde
    res.render("nosotros", {
        pagina: 'Nosotros'
    });
}


const paginaViajes = async (req, res) => { //req - lo que enviamos y resp - es lo que express nos responde
    
    //Consultar base de datos

    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render("viajes", {
        pagina: 'Proximos viajes',
        viajes
    });
}

const paginaTestimoniales = async  (req, res) => { //req - lo que enviamos y resp - es lo que express nos responde
    
    try {

        const testimoniales = await Testimonial.findAll();


        res.render("testimoniales", {
            pagina: 'Testimoniales',
            testimoniales
        });

        
    } catch (error) {
        console.log(error);
    }


  
}

// Muestra un viaje por su slug

const paginaDetalleViajes = async (req, res) => {
   const { slug } = req.params;

   console.log(req.params);

   try {

    const viaje = await Viaje.findOne({where : {slug}})

    res.render('viaje', {
        pagina: 'Informacion Viaje',
        viaje
    })
    
   } catch (error) {
    console.log(error);
   }
}

export {

    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
     paginaDetalleViajes
}