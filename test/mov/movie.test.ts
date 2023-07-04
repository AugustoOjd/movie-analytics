import request from 'supertest'
import app from '../../src/server'
import { Op } from 'sequelize';
import { sequelize } from '../../src/db/pgConnection';
import { Movie } from '../../src/db/models/movie.table';


const movieMock = {
    title: 'titlemock', 
    description: 'description mock', 
    price: 12, 
    category: 'action', 
    release: '1882', 
    image: 'mocklinkimg', 
    duration: '2h 20m', 
    seasons: 2
}

const movieFreeMock = {
    title: 'titleFreeMock', 
    description: 'description FreeMock', 
    price: 12, 
    category: 'action', 
    release: '1882', 
    image: 'FreeMocklinkimg', 
    duration: '2h 20m', 
    seasons: 2
}



describe('Movie Api', ()=>{

    beforeAll(async ()=>{
        await sequelize.authenticate()
        await request(app).post('/api/user/signin').send({email: 'ana@gmail.com', password: '123'})
    })
  
    afterAll(async ()=>{
      
      await Movie.destroy({
        where: {
          title: {
            [Op.or]: [ movieMock.title, movieFreeMock.title]
          }
        }
      })
      await sequelize.close()
  
    })


    it('get movies /api/movie', async ()=>{
        const resp = await request(app).get('/api/movie')

            expect(resp.status).toBe(200)
            expect(resp.headers['content-type']).toContain('json')
            expect(resp.body.payload).toBeDefined()
    })

    it('post movie premium /api/movie', async()=>{
        const respVip = await request(app).post('/api/movie?vip=1').send(movieMock)

        expect(respVip.status).toBe(201)
        expect(respVip.headers['content-type']).toContain('json')
        expect(respVip.body.payload.title).toBe(movieMock.title)
        expect(respVip.body.payload.premium).toBe(true)
        expect(respVip.body.payload.price).toBe(movieMock.price)
    })

    it('post movie free /api/movie', async ()=>{
        const respFree = await request(app).post('/api/movie?vip=0').send(movieFreeMock).cookies['']

        expect(respFree.status).toBe(201)
        expect(respFree.headers['content-type']).toContain('json')
        expect(respFree.body.payload.premium).toBe(false)
        expect(respFree.body.payload.price).toBe(0)
        expect(respFree.body.payload.title).toBe(movieFreeMock.title)
        expect(respFree.body.payload.category).toBe(movieFreeMock.category)
        expect(respFree.body.payload.release).toBe(movieFreeMock.release)
    })

    it('get by id movie /api/movie', async ()=>{

        const resp = await request(app).get(`/api/movie/detail/1`)

        expect(resp.status).toBe(200)
        expect(resp.headers['content-type']).toContain('json')
        expect(resp.body.payload.title).toBe('john wick 4')
        expect(resp.body.payload.price).toBe('0')
    })
})