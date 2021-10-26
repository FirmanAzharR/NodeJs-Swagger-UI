const express = require('express')

const app = express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/openapi.json');

app.get('/', (req,res)=>{
    res.send({"a":123})
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// router.use('/api-docs', swaggerUi.serve);
// app.get('/api-docs',  swaggerUi.setup(swaggerDocument))


const port = 3000
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})