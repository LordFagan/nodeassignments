const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route(`/:partners`)
.all((req, res, next) => {
    res.statusCode =200;
    res.setHeader(`Content-Type`, `text/plain`);
    next();
})
.get((req, res) => {
    res.end(`Will send details of the partner: ${req.params.campsite.id} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not support on /partners/${req.params.partnerId}`);
})
.put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}`);
    req.end(`Will update the partner: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting partner: ${req.params.partnerId}`);
});

module.exports = partnerRouter;