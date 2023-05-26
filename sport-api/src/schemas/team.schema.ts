import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Player } from './player.schema'
import * as mongoose from 'mongoose'
@Schema()
export class Team {
  @Prop()
  name: string

  @Prop()
  thumbnail: string

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Player.name }]})
  players: Player[]
}

export const TeamSchema = SchemaFactory.createForClass(Team)