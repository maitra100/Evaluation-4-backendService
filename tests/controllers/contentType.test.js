const contentTypeController = require('../../src/controllers/contentType');
const contentTypeServices=require('../../src/services/contentType');

describe('content type controller',()=>{
  describe('add content type',()=>{
    it('should add content type',async()=>{
      jest.spyOn(contentTypeServices,'addContentTypeService').mockResolvedValue({name:'test',attributes:['first','second']});
      const mockReq={body:{name:'test',attributes:['first','second']}};
      const mockRes={json:jest.fn()};
      await contentTypeController.addContentType(mockReq,mockRes);
      expect(mockRes.json).toHaveBeenCalledWith({name:'test',attributes:['first','second']});
    });
    it('should throw an error if content type already exists',async()=>{
      jest.spyOn(contentTypeServices,'addContentTypeService').mockRejectedValue(new Error('content type already exists'));
      const mockReq={body:{name:'test',attributes:['first','second']}};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await contentTypeController.addContentType(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('content type already exists');
    });
  });
  describe('add attribute',()=>{
    it('should add attribute',async()=>{
      jest.spyOn(contentTypeServices,'addAttributeService').mockResolvedValue({name:'test',attributes:['first','second','third']});
      const mockReq={body:{name:'test',attribute:'third'}};
      const mockRes={status:jest.fn().mockReturnThis(),json:jest.fn()};
      await contentTypeController.addAttribute(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({name:'test',attributes:['first','second','third']});
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(contentTypeServices,'addAttributeService').mockRejectedValue(new Error('content type does not exist'));
      const mockReq={body:{name:'test',attribute:'third'}};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await contentTypeController.addAttribute(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('content type does not exist');
    });
  });
  describe('delete attribute',()=>{
    it('should delete attribute',async()=>{
      jest.spyOn(contentTypeServices,'deleteAttributeService').mockResolvedValue({name:'test',attributes:['first']});
      const mockReq={params:{id:1,attribute:'second'}};
      const mockRes={status:jest.fn().mockReturnThis(),json:jest.fn()};
      await contentTypeController.deleteAttribute(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({name:'test',attributes:['first']});
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(contentTypeServices,'deleteAttributeService').mockRejectedValue(new Error('content type does not exist'));
      const mockReq={params:{id:1,attribute:'third'}};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await contentTypeController.deleteAttribute(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('content type does not exist');
    });
  });
  describe('update attribute',()=>{
    it('should update attribute',async()=>{
      jest.spyOn(contentTypeServices,'updateAttributeService').mockResolvedValue({name:'test',attributes:['first','second']});
      const mockReq={body:{name:'test',oldAttribute:'first',newAttribute:'second'}};
      const mockRes={status:jest.fn().mockReturnThis(),json:jest.fn()};
      await contentTypeController.updateAttribute(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({name:'test',attributes:['first','second']});
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(contentTypeServices,'updateAttributeService').mockRejectedValue(new Error('content type does not exist'));
      const mockReq={body:{name:'test',oldAttribute:'first',newAttribute:'second'}};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await contentTypeController.updateAttribute(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('content type does not exist');
    });
  });
  describe( 'get content type',()=>{
    it('should get content type',async()=>{
      jest.spyOn(contentTypeServices,'getContentTypeService').mockResolvedValue({name:'test',attributes:['first','second']});
      const mockReq={params:{id:1}};
      const mockRes={status:jest.fn().mockReturnThis(),json:jest.fn()};
      await contentTypeController.getContentType(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({name:'test',attributes:['first','second']});
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(contentTypeServices,'getContentTypeService').mockRejectedValue(new Error('content type does not exist'));
      const mockReq={params:{id:1}};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await contentTypeController.getContentType(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('content type does not exist');
    });
  });
  describe('get specific content type',()=> {
    it('should get specific content type',async()=>{
      jest.spyOn(contentTypeServices,'getSpecificContentTypeService').mockResolvedValue({name:'test',attributes:['first','second']});
      const mockReq={params:{id:1}};
      const mockRes={status:jest.fn().mockReturnThis(),json:jest.fn()};
      await contentTypeController.getSpecificContentType(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith({name:'test',attributes:['first','second']});
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(contentTypeServices,'getSpecificContentTypeService').mockRejectedValue(new Error('content type does not exist'));
      const mockReq={params:{id:1}};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await contentTypeController.getSpecificContentType(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('content type does not exist');
    });
  });
  describe('edit content-type',()=>{
    it('should edit content-type',async()=>{
      jest.spyOn(contentTypeServices,'editContentTypeNameService').mockResolvedValue({name:'test',attributes:['first','second']});
      const mockReq={body:{name:'test',newName:'test1'}};
      const mockRes={send:jest.fn()};
      await contentTypeController.editContentTypeName(mockReq,mockRes);
      expect(mockRes.send).toHaveBeenCalledWith({name:'test',attributes:['first','second']});
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(contentTypeServices,'editContentTypeNameService').mockRejectedValue(new Error('content type does not exist'));
      const mockReq={body:{name:'test',newName:'test1'}};
      const mockRes = {
        send: jest.fn()
      };
      await contentTypeController.editContentTypeName(mockReq,mockRes);
      expect(mockRes.send).toHaveBeenCalledWith('content type does not exist');
    });
  });
});