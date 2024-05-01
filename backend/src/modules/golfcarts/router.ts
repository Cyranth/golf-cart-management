import express from 'express'
import type { EntitySchema } from 'typeorm'
import { dataSource } from '@/database'
import { createController, createRepository, createService } from '@/modules'
import { GolfCart } from './entity'

const dataRepository = createRepository<GolfCart>(
  GolfCart as unknown as EntitySchema<GolfCart>,
  dataSource,
)

const dataService = createService<GolfCart>(dataRepository)

const dataController = createController<GolfCart>(dataService)

const router = express.Router()

router.get('/', dataController.getAllItems)

router.post('/', dataController.createItem)

router.patch('/:id', dataController.updateItem)

router.delete('/:id', dataController.deleteItem)

export default router
