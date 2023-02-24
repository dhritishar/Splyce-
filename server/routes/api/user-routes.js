const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getUser,
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUser);
router.route('/:id').delete(deleteUser);

module.exports = router;
