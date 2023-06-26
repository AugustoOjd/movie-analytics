import request from 'supertest'
import app from '../../src/server'
import { sequelize } from '../../src/db/pgConnection';
import { User } from '../../src/db/models/user.table';

const userMock = {
  firstName: 'mockname', 
  email: 'mock@gmail.com', 
  password: '123456'
}


describe('User Api', function() {

  beforeAll(async ()=>{
      await sequelize.authenticate()
  })

  afterAll(async ()=>{
    
    await User.destroy({
      where: {
        email: userMock.email
      }
    })
    await sequelize.close()

  })

  
  it('Get users api/user', async ()=> {
    const resp = await request(app).get('/api/user')

    expect(resp.status).toBe(200)
    expect(resp.headers['content-type']).toContain('json')
    expect(resp.body.payload).toBeDefined()

  });

  it('Register user /api/user/signup', async ()=>{
    
    const resp= await request(app).post('/api/user/signup').send(userMock)
    
      expect(resp.status).toBe(201)
      expect(resp.headers['content-type']).toContain('json')
      expect(resp.body.payload.firstName).toBe(userMock.firstName)
      expect(resp.body.payload.email).toBe(userMock.email)
      expect(resp.body.payload.role).toBe('user')
      expect(resp.body.payload.wallet).toBe(100)
      expect(resp.body.payload.status).toBe(true)
      expect(resp.body.payload.type).toBe('regular')
  })

  it('Login user /api/user/signin', async ()=>{

    const resp = await request(app).post('/api/user/signin').send({email: 'ana@gmail.com', password: '123'})

    expect(resp.status).toBe(200)
    expect(resp.headers['content-type']).toContain('json')
    expect(resp.body.payload.email).toBe('ana@gmail.com')
    expect(resp.body.payload.firstName).toBe('ana')
  })



});