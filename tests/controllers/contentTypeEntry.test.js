const contentTypeEntry= require('../../src/controllers/contentTypeEntry');
const contentTypeEntryServices=require('../../src/services/contentTypeEntry');

describe('content type entry controller',()=>{
  describe('add content type entry',()=>{
    it('should add content type entry',async()=>{
      jest.spyOn(contentTypeEntryServices,'addContentTypeEntryService').mockResolvedValue({name:'test',attributes:['first','second']});
      const mockReq={body:{name:'test',attributes:['first','second']}};
      const mockRes={send:jest.fn(),status:jest.fn().mockReturnThis()};
      await contentTypeEntry.addContentTypeEntry(mockReq,mockRes);
      expect(mockRes.send).toHaveBeenCalledWith({name:'test',attributes:['first','second']});
    });
    it('should throw an error if content type entry already exists',async()=>{
      jest.spyOn(contentTypeEntryServices,'addContentTypeEntryService').mockRejectedValue(new Error('content type entry already exists'));
      const mockReq={body:{name:'test',attributes:['first','second']}};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await contentTypeEntry.addContentTypeEntry(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('content type entry already exists');
    });
  });
  describe('get content type entry',()=>{
    it('should get content type entry',async()=>{
      jest.spyOn(contentTypeEntryServices,'getContentTypeEntryService').mockResolvedValue({name:'test',attributes:['first','second']});
      const mockReq={params:{id:1}};
      const mockRes={send:jest.fn(),status:jest.fn().mockReturnThis()};
      await contentTypeEntry.getContentTypeEntry(mockReq,mockRes);
      expect(mockRes.send).toHaveBeenCalledWith({name:'test',attributes:['first','second']});
    });
    it('should throw an error if content type entry does not exist',async()=>{
      jest.spyOn(contentTypeEntryServices,'getContentTypeEntryService').mockRejectedValue(new Error('content type entry does not exist'));
      const mockReq={params:{id:1}};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await contentTypeEntry.getContentTypeEntry(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('content type entry does not exist');
    });
  });
  describe('edit content type entry',()=>{
    it('should edit content type entry',async()=>{
      jest.spyOn(contentTypeEntryServices,'editContentTypeEntryService').mockResolvedValue({name:'test',attributes:['first','second']});
      const mockReq={body:{name:'test',attributes:['first','second']}};
      const mockRes={send:jest.fn(),status:jest.fn().mockReturnThis()};
      await contentTypeEntry.editContentTypeEntry(mockReq,mockRes);
      expect(mockRes.send).toHaveBeenCalledWith({name:'test',attributes:['first','second']});
    });
    it('should throw an error if content type entry does not exist',async()=>{
      jest.spyOn(contentTypeEntryServices,'editContentTypeEntryService').mockRejectedValue(new Error('content type entry does not exist'));
      const mockReq={body:{name:'test',attributes:['first','second']}};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await contentTypeEntry.editContentTypeEntry(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('content type entry does not exist');
    });
  });
  describe('delete content type entry',()=>{
    it('should delete content type entry',async()=>{
      jest.spyOn(contentTypeEntryServices,'deleteContentTypeEntryService').mockResolvedValue({name:'test',attributes:['first','second']});
      const mockReq={params:{id:1}};
      const mockRes={send:jest.fn(),status:jest.fn().mockReturnThis()};
      await contentTypeEntry.deleteContentTypeEntry(mockReq,mockRes);
      expect(mockRes.send).toHaveBeenCalledWith({name:'test',attributes:['first','second']});
    });
    it('should throw an error if content type entry does not exist',async()=>{
      jest.spyOn(contentTypeEntryServices,'deleteContentTypeEntryService').mockRejectedValue(new Error('content type entry does not exist'));
      const mockReq={params:{id:1}};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      await contentTypeEntry.deleteContentTypeEntry(mockReq,mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.send).toHaveBeenCalledWith('content type entry does not exist');
    });
  });
});