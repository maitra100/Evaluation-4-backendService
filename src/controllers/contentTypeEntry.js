const contentTypeEntryServices= require('../services/contentTypeEntry');
const getContentTypeEntry = async (req, res) => {
  try {
    const response = await contentTypeEntryServices.getContentTypeEntryService(req.params.id);
    res.send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const addContentTypeEntry = async (req, res) => {
  try {
    const response = await contentTypeEntryServices.addContentTypeEntryService(req.body);
    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const editContentTypeEntry = async (req, res) => {
  try {
    const response = await contentTypeEntryServices.editContentTypeEntryService(req.body);
    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const deleteContentTypeEntry = async (req, res) => {
  try {
    const response = await contentTypeEntryServices.deleteContentTypeEntryService(req.params.id);
    if(response===0){
      throw new Error('entry does not exist');
    }
    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
};





module.exports={addContentTypeEntry,getContentTypeEntry,editContentTypeEntry,deleteContentTypeEntry};
    