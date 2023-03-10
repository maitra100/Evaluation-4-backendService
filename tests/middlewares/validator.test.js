const validation=require('../../src/middlewares/validator');

describe('validator',()=>{
  describe('content name validation',()=>{
    it('should return error if name is not provided',()=>{
      const req={
        body:{
          name:true
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateContentName(req,res,next);
      expect(res.send).toHaveBeenCalledWith('"name" must be a string');
    });
    it('should call next if name is provided',()=>{
      const req={
        body:{
          name:'test'
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateContentName(req,res,next);
      expect(next).toHaveBeenCalled();
    });
  });
  describe('add attribute validation',()=>{
    it('should return error if name is not provided',()=>{
      const req={
        body:{
          name:true
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateAddAttribute(req,res,next);
      expect(res.send).toHaveBeenCalledWith('"name" must be a string');
    });
    it('should return error if attribute is not provided',()=>{
      const req={
        body:{
          name:'test',
          attribute:true
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateAddAttribute(req,res,next);
      expect(res.send).toHaveBeenCalledWith('"attribute" must be a string');
    });
    it('should call next if name and attribute are provided',()=>{
      const req={
        body:{
          name:'test',
          attribute:'test'
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateAddAttribute(req,res,next);
      expect(next).toHaveBeenCalled();
    });
  } );
  describe('delete attribute validation',()=>{
    it('should return error if id is not provided',()=>{
      const req={
        params:{
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateDeleteAttribute(req,res,next);
      expect(res.send).toHaveBeenCalledWith('"id" is required');
    });
    it('should return error if attribute is not provided',()=>{
      const req={
        params:{
          id:1
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateDeleteAttribute(req,res,next);
      expect(res.send).toHaveBeenCalledWith('"attribute" is required');
    });
    it('should call next if id and attribute are provided',()=>{
      const req={
        body:{
          id:1,
          attribute:'test'
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateDeleteAttribute(req,res,next);
      expect(next).toHaveBeenCalled();
    });
  }
  );
  describe('update attribute validation',()=>{
    it('should return error if attribute is not provided',()=>{
      const req={
        body:{
          name:'test'
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateUpdateAttribute(req,res,next);
      expect(res.send).toHaveBeenCalledWith('"oldAttribute" is required');
    });
    it('should call next if name, attribute and values are provided',()=>{
      const req={
        body:{
          name:'test',
          attribute:'test',
          values:['test']
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateUpdateAttribute(req,res,next);
      expect(next).toHaveBeenCalled();
    });
  } );
  describe('edit content type name validation',()=>{
    it('should return error if id is not provided',()=>{
      const req={
        body:{
          newName:'test'
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateEditContentTypeName(req,res,next);
      expect(res.send).toHaveBeenCalledWith('"id" is required');
    });
    it('should return error if newName is not provided',()=>{
      const req={
        body:{
          id:1
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateEditContentTypeName(req,res,next);
      expect(res.send).toHaveBeenCalledWith('"newName" is required');
    });
    it('should call next if id and newName are provided',()=>{
      const req={
        body:{
          id:1,
          newName:'test'
        }
      };
      const res={
        send:jest.fn()
      };
      const next=jest.fn();
      validation.validateEditContentTypeName(req,res,next);
      expect(next).toHaveBeenCalled();
    });
  } );
  describe('delete content type validation',()=>{
  } );
});