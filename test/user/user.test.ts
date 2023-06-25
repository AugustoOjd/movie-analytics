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

  
  it('Get api/user with 200', ()=> {
    request(app)
      .get('/api/user')
      .expect(200);
  });

  it('Register user /api/user', async ()=>{
    
    const resp= await request(app).post('/api/user').send(userMock)
    
      expect(resp.status).toBe(201)
      expect(resp.body.payload.firstName).toBe(userMock.firstName)
      expect(resp.body.payload.email).toBe(userMock.email)
      expect(resp.body.payload.role).toBe('user')
      expect(resp.body.payload.wallet).toBe(100)
      expect(resp.body.payload.status).toBe(true)
      expect(resp.body.payload.type).toBe('regular')
  })



});