const express=require('express');
const route = express.Router();
const contentTypeController=require('../controllers/contentType');
const contentTypeEntryCoontroller=require('../controllers/contentTypeEntry');
const {tokenValidator,validateContentName,validateAddAttribute,validateDeleteAttribute,validateUpdateAttribute,validateEditContentTypeName,validateAddContentTypeEntry,validateEditContentTypeEntry,validateDeleteContentTypeEntry}=require('../../src/middlewares/validator.js');

route.post('/content-type',tokenValidator,validateContentName,contentTypeController.addContentType);
route.put('/add-attribute',tokenValidator,validateAddAttribute,contentTypeController.addAttribute);
route.delete('/delete-attribute/:id/:attribute',tokenValidator,validateDeleteAttribute,contentTypeController.deleteAttribute);
route.put('/update-attribute',tokenValidator,validateUpdateAttribute,contentTypeController.updateAttribute);
route.get('/content-type',tokenValidator,contentTypeController.getContentType);
route.get('/content-type/:name',tokenValidator,contentTypeController.getSpecificContentType);
route.put('/edit-content-type-name',tokenValidator,validateEditContentTypeName,contentTypeController.editContentTypeName);
route.post('/add-content-type-entry',tokenValidator,validateAddContentTypeEntry,contentTypeEntryCoontroller.addContentTypeEntry);
route.get('/content-type-entry/:id',tokenValidator,contentTypeEntryCoontroller.getContentTypeEntry);
route.put('/edit-content-type-entry',tokenValidator,validateEditContentTypeEntry,contentTypeEntryCoontroller.editContentTypeEntry);
route.delete('/delete-content-type-entry/:id',tokenValidator,validateDeleteContentTypeEntry,contentTypeEntryCoontroller.deleteContentTypeEntry);

module.exports=route;

