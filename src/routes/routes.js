const express=require('express');
const route = express.Router();
const contentTypeController=require('../controllers/contentType');
const contentTypeEntryCoontroller=require('../controllers/contentTypeEntry');

route.post('/content-type',contentTypeController.addContentType);
route.put('/add-attribute',contentTypeController.addAttribute);
route.delete('/delete-attribute/:id/:attribute',contentTypeController.deleteAttribute);
route.put('/update-attribute',contentTypeController.updateAttribute);
route.get('/content-type',contentTypeController.getContentType);
route.get('/content-type/:name',contentTypeController.getSpecificContentType);
route.put('/edit-content-type-name',contentTypeController.editContentTypeName);
route.post('/add-content-type-entry',contentTypeEntryCoontroller.addContentTypeEntry);
route.get('/content-type-entry/:id',contentTypeEntryCoontroller.getContentTypeEntry);
route.put('/edit-content-type-entry',contentTypeEntryCoontroller.editContentTypeEntry);
route.delete('/delete-content-type-entry/:id',contentTypeEntryCoontroller.deleteContentTypeEntry);

module.exports=route;

