const db=require('../../database/models');

const addContentTypeService=async(details)=>{
  const contentType=await db.content_types.findOne({where:{name:details.name}});
  if(contentType){
    throw new Error('content type already exists');
  }
  const response=await db.content_types.create({name:details.name,attributes:[]});
  return response;
};

const addAttributeService=async(details)=>{
  const contentType=await db.content_types.findOne({where:{name:details.name}});
  if(!contentType){
    throw new Error('content type does not exist');
  }
  let newAttributes=contentType.attributes;
  newAttributes=[...newAttributes,details.attribute];
  const response=await db.content_types.update({attributes:newAttributes},{where:{name:details.name}});
  db.content_type_entries.findAll({where:{contentTypeId:contentType.id}}).then((entry)=>{
    if(entry.length>0){
      for(let index=0;index<entry.length;index++){
        const jsonObj=JSON.parse(entry[index].values);
        jsonObj[details.attribute]=null;
        const newValues=JSON.stringify(jsonObj);
        entry[index].update({values:newValues},{where:{contentTypeId:contentType.id}}).then(user=>console.log(user));
      }
    }
  }).catch((err)=>console.log(err));
  return response;
};

const deleteAttributeService=async(id,attribute)=>{
  const contentType=await db.content_types.findOne({where:{id:id}});
  let newAttributes=contentType.attributes;
  newAttributes=newAttributes.filter((attributes)=>attributes!==attribute);
  const response=await db.content_types.update({attributes:newAttributes},{where:{id:id}});
  db.content_type_entries.findAll({where:{contentTypeId:contentType.id}}).then((entry)=>{
    if(entry.length>0){
      for(let index=0;index<entry.length;index++){
        let jsonObj=JSON.parse(entry[index].values);
        delete jsonObj[attribute];
        const newValues=JSON.stringify(jsonObj);
        entry[index].update({values:newValues},{where:{contentTypeId:contentType.id}}).then(user=>console.log(user));
      }
    }
  }).catch((err)=>console.log(err));
  return response;
};

const updateAttributeService=async(details)=>{
  const contentType=await db.content_types.findOne({where:{name:details.name}});
  if(!contentType){
    throw new Error('content type does not exist');
  }
  const entries=await db.content_type_entries.findAll({where:{contentTypeId:contentType.id}});
  if(entries.length!==0){
    throw new Error('Cannot update attribute as entries already exist');
  }
  console.log(contentType.dataValues);
  let newAttributes=contentType.dataValues.attributes;
  newAttributes=newAttributes.map((attribute)=>{
    if(attribute===details.oldAttribute){
      return details.newAttribute;
    }
    return attribute;
  });
  await db.content_types.update({attributes:newAttributes},{where:{name:details.name}});
  return newAttributes;
};

const getContentTypeService=async()=>{
  const response=await db.content_types.findAll();
  return response;
};

const getSpecificContentTypeService=async(name)=>{
  const response=await db.content_types.findOne({where:{name:name}});
  if(!response)
    throw new Error('content type does not exist');
  return response;

};

const editContentTypeNameService=async(details)=>{
  const response=await db.content_types.update({name:details.newName},{where:{id:details.id}});
  return response;
};


module.exports={addContentTypeService,addAttributeService,deleteAttributeService,updateAttributeService,getContentTypeService,getSpecificContentTypeService,editContentTypeNameService};