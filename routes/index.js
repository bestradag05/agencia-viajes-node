import express  from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViajes
} from '../controllers/paginasController.js';


const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros );


router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimoniales);


export default router;