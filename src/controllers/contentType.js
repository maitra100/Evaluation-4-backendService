const contentTypeServices=require('../services/contentType');

const addContentType=async (req,res)=>{
  try{
    const response=await contentTypeServices.addContentTypeService(req.body);
    res.json(response);
  }
  catch(e){
    res.status(400).send(e.message);
  }
};

const addAttribute=async (req,res)=>{
  try{
    const response=await contentTypeServices.addAttributeService(req.body);
    res.status(200).json(response);
  }
  catch(e){
    res.status(400).send(e.message);
  }
};

const deleteAttribute=async (req,res)=>{
  try{
    const response=await contentTypeServices.deleteAttributeService(req.params.id,req.params.attribute);
    res.status(200).json(response);
  }
  catch(e){
    res.status(400).send(e.message);
  }
};

const updateAttribute=async (req,res)=>{
  try{
    const response=await contentTypeServices.updateAttributeService(req.body);
    res.status(200).json(response);
  }
  catch(e){
    res.status(400).send(e.message);
  }
};

const getContentType=async (req,res)=>{
  try{
    const response=await contentTypeServices.getContentTypeService();
    res.status(200).json(response);
  }
  catch(e){
    res.status(400).send(e.message);
  }
};

const getSpecificContentType=async (req,res)=>{
  try{
    const response=await contentTypeServices.getSpecificContentTypeService(req.params.name);
    res.status(200).json(response);
  }
  catch(e){
    res.status(400).send(e.message);
  }
};

const editContentTypeName=async (req,res)=>{
  try{  
    const response=await contentTypeServices.editContentTypeNameService(req.body);
    res.send(response);
  }
  catch(e){
    res.send(e.message);
  }
};




module.exports={addContentType,addAttribute,deleteAttribute,updateAttribute,getContentType,getSpecificContentType,editContentTypeName};