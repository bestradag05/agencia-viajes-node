import express  from 'express';


const router = express.Router();

router.get('/', (req, res) => { //req - lo que enviamos y resp - es lo que express nos responde
    
    res.render("inicio", {
        pagina: 'Inicio'
    });
});

router.get('/nosotros', (req, res) => { //req - lo que enviamos y resp - es lo que express nos responde
    res.render("nosotros", {
        pagina: 'Nosotros'
    });
});


router.get('/viajes', (req, res) => { //req - lo que enviamos y resp - es lo que express nos responde
    
    res.render("viajes", {
        pagina: 'Viajes'
    });
});

router.get('/testimoniales', (req, res) => { //req - lo que enviamos y resp - es lo que express nos responde
    
    res.render("testimoniales", {
        pagina: 'Testimoniales'
    });
});


export default router;