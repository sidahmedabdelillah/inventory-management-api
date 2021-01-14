import exporess from 'express';
const router = exporess.Router();

import {
  getAllBons,
  getBonById,
  createBon,
  updateBon,
} from './controller.bon.js';

router.get('/', async (req, res, next) => {
  try {
    const bons = await getAllBons();
    res.send(bons);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const bon = await getBonById(id);
  res.send(bon);
});

router.post('/', async (req, res, next) => {
  const { bon } = req.body;
  try {
    const created = await createBon(bon);
    res.send(created);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  const { bon } = req.body;
  const { id } = req.params;
  try {
    const updated = await updateBon(id, bon);
    res.send(bon);
  } catch (error) {
    next(error);
  }
});

export default router;
