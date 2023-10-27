import { Viaje } from "../Models/Viajes.js";

const paginaInicio = (req, res) => {
    res.render("inicio", {
        pagina: 'Inicio'
    });
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

const paginaTestimoniales = (req, res) => { //req - lo que enviamos y resp - es lo que express nos responde
    
    res.render("testimoniales", {
        pagina: 'Testimoniales'
    });
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
    paginaTestimoniales, paginaDetalleViajes
}