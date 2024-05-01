import { Max, Min } from 'class-validator'
import { BaseEntity } from '@/modules'
import { Column, Entity } from 'typeorm'

@Entity('golfcarts')
export class GolfCart extends BaseEntity {
  @Column('int')
  @Min(1980)
  @Max(new Date().getFullYear())
  year: number

  @Column({ length: 100 })
  manufacturer: string

  @Column({ length: 100 })
  model: string

  @Column({ length: 50 })
  color: string

  @Column('int')
  passengers: number

  @Column({ length: 100 })
  power: 'gas' | 'electric'

  @Column()
  canopy: boolean

  @Column()
  windshield: boolean

  @Column()
  headLights: boolean

  @Column()
  tailLights: boolean

  @Column()
  turnSignals: boolean

  @Column()
  hitch: boolean

  @Column()
  enclosures: boolean

  @Column()
  bumper: boolean
}
