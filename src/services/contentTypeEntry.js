const db=require('../../database/models');

const addContentTypeEntryService = async (details) => {
  const contentType=await db.content_types.findOne({where:{name:details.name}});
  if(!contentType){
    throw new Error('content type does not exist');
  }
  const attributes=contentType.attributes;
  const value=details.values;
  let entryData = {};
  for(let index=0;index<attributes.length;index++){
    entryData[attributes[index]]=value[index];
  }
  console.log(entryData);
  entryData=JSON.stringify(entryData);
  const newEntry = await db.content_type_entries.create({contentTypeId:contentType.id,values:entryData});
  return newEntry;
};

const getContentTypeEntryService = async (entryId) => {
  const entries=await db.content_type_entries.findAll({where:{contentTypeId:entryId}});
  return entries;
};

const editContentTypeEntryService = async (details) => {
  const entryDetails=await db.content_type_entries.findOne({where:{id:details.id}});
  let jsonObj=JSON.parse( entryDetails.values);
  jsonObj[details.attribute]=details.value;
  const newObj=JSON.stringify(jsonObj);
  return await db.content_type_entries.update({values:newObj},{where:{id:details.id}});
};

const deleteContentTypeEntryService = async (entryId) => {
  const entryDetails=await db.content_type_entries.destroy({where:{id:entryId}});
  return entryDetails;
};

module.exports={addContentTypeEntryService,getContentTypeEntryService,editContentTypeEntryService,deleteContentTypeEntryService};