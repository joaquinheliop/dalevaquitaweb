export default function handler(req, res) {
    res.status(200).json([
        {
            campo: 'Sauce Viejo',
            animales: '30',
            duenios: '3',
            cuigs: ['ED', 'TO', 'HE']
        },
        {
            campo: 'Cayasta',
            animales: '20',
            duenios: '3',
            cuigs: ['ED', 'TO', 'HE']
        },
        {
            campo: 'Potrero de engorde',
            animales: '28',
            duenios: '4',
            cuigs: ['ED', 'TO', 'HE', 'GA']
        },
        {
            campo: 'Para la venta',
            animales: '10',
            duenios: '1',
            cuigs: ['ED']
        },

    ])
}