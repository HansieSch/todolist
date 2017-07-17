var mongoose = require('mongoose');
var ListItem = require('../models/listItem');

module.exports = function (express, app) {

    var apiRouter = express.Router();

    apiRouter.route('/item')

        .get(function (req, res) {
            
            ListItem.find({}, function (err, items) {
                if (err) res.send(err);

                res.json({ success: true, list_items: items });
            });

        })
        .post(function (req, res) {

            var listItem = new ListItem({
                item: req.body.item,
                date_completed: null
            });

            listItem.save(function (err) {
                if (err) res.send(err);

                res.json({ message: 'List item created.', success: true });
            });

        })
        .put(function (req, res) {
            ListItem.findById(req.body.id, function (err, item) {
                if (err) res.send(err);

                if (req.body.item) item.item = req.body.item;
                if (req.body.hasOwnProperty('done')) { // Use .hasOwnProperty() because when done is false doesn't update the item in db.
                    item.done = req.body.done;
                    item.date_completed = Date.now();
                }

                item.save(function (err) {
                    if (err) res.send(err);

                    res.json({ message: 'Item updated.', success: true});
                });
            });
        });

    apiRouter.route('/item/:id')
        .get(function (req, res) {
            ListItem.findById(req.params.id, function (err, item) {
                if (err) res.send(err);

                res.json({ success: true, list_item: item});
            });
        })
        .delete(function (req, res) {
            ListItem.findByIdAndRemove(req.params.id, function (err) {
                if (err) res.send(err);

                res.json({ message: 'Item successfully deleted.', success: true});
            });
        });

    return apiRouter;

};