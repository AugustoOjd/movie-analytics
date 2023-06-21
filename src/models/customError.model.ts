
export default class CustomError extends Error {
    
    name: string 
    httpCode: number
    description: string
    isOperational: boolean
    
    constructor(name: string, httpCode: number, description: string, isOperational: boolean) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);
    
      this.name = name;
      this.httpCode = httpCode;
      this.description = description
      this.isOperational = isOperational;
    
      Error.captureStackTrace(this);
    }
   }