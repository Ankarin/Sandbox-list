const router = require('express').Router();
let item = require('./schema');

router.route('/').get((req, res) => {
  item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id= req.body.id;
  const message = req.body.message;
  ;
  const nested = Object(req.body.nested);

  const newitem = new item({
    id,
    message,
    nested,
    
  });

  newitem.save()
  .then(() => res.json('item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  item.findByIdAndDelete(req.params.id)
    .then(() => res.json('item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  item.findById(req.params.id)
    .then(item => {
      item.id = req.body.id;
      item.message = req.body.message;
      item.nested = Object(req.body.nested);
      

      item.save()
        .then(() => res.json('item updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;