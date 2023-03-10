const joi=require('joi');
const axios=require('axios');

const contentNameSchema=joi.object({
  name:joi.string().required(),
});

const contentAddAttributeSchema=joi.object({
  name:joi.string().required(),
  attribute:joi.string().required(),
});

const contentDeleteAttributeSchema=joi.object({
  id:joi.number().required(),
  attribute:joi.string().required(),
});

const contentUpdateAttributeSchema=joi.object({
  name:joi.string().required(),
  oldAttribute:joi.string().required(),
  newAttribute:joi.string().required(),
});

const editContentTypeNameSchema=joi.object({
  id:joi.number().required(),
  newName:joi.string().required(),
});

const addContentTypeEntrySchema=joi.object({
  name:joi.string().required(),
  values:joi.array().items(joi.string()),
});

const editContentTypeEntrySchema=joi.object({
  id:joi.number().required(),
  value:joi.string().required(),
  attribute:joi.string().required(),
});

const deleteContentTypeEntrySchema=joi.object({
  id:joi.number().required(),
});

const validateContentName=async (req,res,next)=>{

  const {error}=contentNameSchema.validate(req.body);
  if(error){
    res.send(error.details[0].message);
  }
  next();

};

const validateAddAttribute=async(req,res,next)=>{

  const {error}=contentAddAttributeSchema.validate(req.body);
  if(error){
    res.send(error.details[0].message);
  }
  next();

};

const validateDeleteAttribute=async(req,res,next)=>{

  const {error}=contentDeleteAttributeSchema.validate(req.params);
  if(error){
    res.send(error.details[0].message);
  }
  next();

};

const validateUpdateAttribute=async(req,res,next)=>{

  const {error}=contentUpdateAttributeSchema.validate(req.body);
  if(error){
    res.send(error.details[0].message);
  }
  next();

};

const validateEditContentTypeName=async(req,res,next)=>{

  const {error}=editContentTypeNameSchema.validate(req.body);
  if(error){
    res.send(error.details[0].message);
  }
  next();
};


const validateAddContentTypeEntry=async(req,res,next)=>{
  const {error}=addContentTypeEntrySchema.validate(req.body);
  if(error){
    res.send(error.details[0].message);
  }
  next();
};

const validateEditContentTypeEntry=async(req,res,next)=>{
  const {error}=editContentTypeEntrySchema.validate(req.body);
  if(error){
    res.send(error.details[0].message);
  }
  next();
};

const validateDeleteContentTypeEntry=async(req,res,next)=>{
  const {error}=deleteContentTypeEntrySchema.validate(req.params);
  if(error){
    res.send(error.details[0].message);
  }
  next(); 
};

const tokenValidator=async(req,res,next)=>{
  try{
    const token=req.headers.token;
    await axios.post('http://auth-service:8080/token/validate',{token});
    next();
  }
  catch(err){
    res.send('Invalid Token');
  }
};

module.exports={validateContentName,validateAddAttribute,validateDeleteAttribute,validateUpdateAttribute,validateEditContentTypeName,validateAddContentTypeEntry,validateEditContentTypeEntry,validateDeleteContentTypeEntry,tokenValidator};