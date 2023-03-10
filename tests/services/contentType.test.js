const db=require('../../database/models');
const contentType=require('../../src/services/contentType');

describe('content type service',()=>{
  describe('add content type',()=>{
    it('should add a content type',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue(null);
      jest.spyOn(db.content_types,'create').mockResolvedValue({name:'test',attributes:[]});
      const response=await contentType.addContentTypeService({name:'test'});
      expect(response).toEqual({name:'test',attributes:[]});
    });
    it('should throw an error if content type already exists',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue({name:'test',attributes:[]});
      jest.spyOn(db.content_types,'create').mockResolvedValue({name:'test',attributes:[]});
      await expect(contentType.addContentTypeService({name:'test'})).rejects.toThrow(new Error('content type already exists'));
    });
  });
  describe('add attribute',()=>{
    it('should add an attribute to a content type',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue({name:'test',attributes:[]});
      jest.spyOn(db.content_types,'update').mockResolvedValue([1]);
      jest.spyOn(db.content_type_entries,'findAll').mockResolvedValue([]);
      const response=await contentType.addAttributeService({name:'test',attribute:'test'});
      expect(response).toEqual([1]);
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue(null);
      jest.spyOn(db.content_types,'update').mockResolvedValue([1]);
      jest.spyOn(db.content_type_entries,'findAll').mockResolvedValue([]);
      await expect(contentType.addAttributeService({name:'test',attribute:'test'})).rejects.toThrow(new Error('content type does not exist'));
    });
  });
  describe('delete attribute',()=>{
    it('should delete an attribute from a content type',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue({name:'test',attributes:['test']});
      jest.spyOn(db.content_types,'update').mockResolvedValue([1]);
      jest.spyOn(db.content_type_entries,'findAll').mockResolvedValue([]);
      const response=await contentType.deleteAttributeService(1,'test');
      expect(response).toEqual([1]);
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue(null);
      jest.spyOn(db.content_types,'update').mockResolvedValue([1]);
      jest.spyOn(db.content_type_entries,'findAll').mockResolvedValue([]);
      await expect(contentType.deleteAttributeService(1,'test')).rejects.toThrow(new Error('content type does not exist'));
    });
  });
  describe('update attribute',()=>{
    it('should update an attribute in a content type',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue({dataValues:{name:'test',attributes:['test']}});
      jest.spyOn(db.content_types,'update').mockResolvedValue([1]);
      jest.spyOn(db.content_type_entries,'findAll').mockResolvedValue([]);
      const response=await contentType.updateAttributeService({name:'test',oldAttribute:'oldtest',newAttribute:'newtest'});
      expect(response).toEqual(['test']);
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue(null);
      jest.spyOn(db.content_types,'update').mockResolvedValue([1]);
      jest.spyOn(db.content_type_entries,'findAll').mockResolvedValue([]);
      await expect(contentType.updateAttributeService({name:'test',oldAttribute:'test',newAttribute:'test'})).rejects.toThrow(new Error('content type does not exist'));
    });
  });
  describe('get all content-types',()=>{
    it('should get all content types',async()=>{
      jest.spyOn(db.content_types,'findAll').mockResolvedValue([{name:'test',attributes:[]}]);
      const response=await contentType.getContentTypeService();
      expect(response).toEqual([{name:'test',attributes:[]}]);
    });
  });
  describe('get specific content-type',()=>{
    it('should get a specific content type',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue({name:'test',attributes:[]});
      const response=await contentType.getSpecificContentTypeService('test');
      expect(response).toEqual({name:'test',attributes:[]});
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue(null);
      await expect(contentType.getSpecificContentTypeService('test')).rejects.toThrow(new Error('content type does not exist'));
    });
  });
  describe('edit content-type',()=>{
    it('should edit a content type',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue({name:'test',attributes:[]});
      jest.spyOn(db.content_types,'update').mockResolvedValue([1]);
      const response=await contentType.editContentTypeNameService({name:'test',newName:'newtest'});
      expect(response).toEqual([1]);
    }
    );
  });
});