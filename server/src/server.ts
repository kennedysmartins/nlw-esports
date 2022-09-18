import express from 'express'

const app = express()


app.get('/games', (resquest, response) => {
    return response.json([]);
})

app.post('/ads', (resquest, response) => {
    return response.json([]);
})


// localhost:3333/ads
app.get('/games/:id/ads', (request, response) => {
    const gameId = request.params.id;

    return response.json([
        { id: 1, name: 'Anuncio 1' },
        { id: 2, name: 'Anuncio 2' }
    ])
})

app.get('/ads/:id/discord', (request, response) => {
    const adId = request.params.id;

    return response.json([])
})

app.listen(3333)