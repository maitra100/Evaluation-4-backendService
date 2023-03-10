const db=require('../../database/models');
const contenttypeEntry=require('../../src/services/contentTypeEntry');

describe('content type entry service',()=>{
  describe('content type entries',()=>{
    it('should add content type entry',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue({name:'test',attributes:['first','second']});
      jest.spyOn( db.content_type_entries,'create').mockResolvedValue({ContentTypeId:1,values:['1','2']});
      const response=await contenttypeEntry.addContentTypeEntryService({name:'test',values:['1','2']});
      expect(response).toEqual({ContentTypeId:1,values:['1','2']});
    });
    it('should throw an error if content type does not exist',async()=>{
      jest.spyOn(db.content_types,'findOne').mockResolvedValue(null);
      jest.spyOn( db.content_type_entries,'create').mockResolvedValue({ContentTypeId:1,values:['1','2']});
      await expect(contenttypeEntry.addContentTypeEntryService({name:'test',values:['1','2']})).rejects.toThrow(new Error('content type does not exist'));
    });
  });
  describe('get content type entries',()=>{
    it('should get content type entries',async()=>{
      jest.spyOn(db.content_type_entries,'findAll').mockResolvedValue([{contentTypeId:1,values:['1','2']}]);
      const response=await contenttypeEntry.getContentTypeEntryService(1);
      expect(response).toEqual([{contentTypeId:1,values:['1','2']}]);
    });
  });
  describe('edit content type entries',()=>{
    it('should throw error when is not matched with any entry',async()=>{
      jest.spyOn(db.content_type_entries,'findOne').mockResolvedValue(null);
      jest.spyOn(db.content_type_entries,'update').mockResolvedValue([1]);
      await expect(contenttypeEntry.editContentTypeEntryService({id:1,attribute:'first',value:'test'})).rejects.toThrow(new Error('entry does not exist'));
    }
    );
  });
  describe('delete content type entries',()=>{
    it('should delete content type entries',async()=>{
      jest.spyOn(db.content_type_entries,'destroy').mockResolvedValue(1);
      const response=await contenttypeEntry.deleteContentTypeEntryService(1);
      expect(response).toEqual(1);
    });
  });
});