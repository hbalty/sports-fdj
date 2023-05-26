import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DateTime } from 'luxon'

@Schema()
export class Player {
  @Prop()
  name: string

  @Prop()
  position: string

  @Prop()
  thumbnail: string

  @Prop()
  born: DateTime

  @Prop({
    type: Object
  })
  signin: {
    amount: number
    currency: string
  }  
}

export const PlayerSchema = SchemaFactory.createForClass(Player)