const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route(`/:promotions`)
.all((req, res, next) => {
    res.statusCode =200;
    res.setHeader(`Content-Type`, `text/plain`);
    next();
})
.get((req, res) => {
    res.end(`Will send details of the promotion: ${req.params.promotion.id} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not support on /promotions/${req.params.promotionId}`);
})
.put((req, res) => {
    res.write(`Updating the promotion: ${req.params.promotionId}`);
    req.end(`Will update the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting promotion: ${req.params.promotionId}`);
});

module.exports = promotionRouter;