// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { caravana: 'RP-438', rfid: '032000000002724', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-439', rfid: '032000000002725', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-440', rfid: '032000000002726', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-441', rfid: '032000000002727', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-442', rfid: '032000000002728', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-443', rfid: '032000000002729', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-444', rfid: '032000000002730', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'RP-445', rfid: '032000000002731', campo: 'Sauce Viejo', fecha: '03/03/2022', peso: '350 Kg' },
    { caravana: 'ADA', rfid: '032000000002731', campo: 'Cama', fecha: '03/03/2022', peso: '350 Kg' }
  ])
}
