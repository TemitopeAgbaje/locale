import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from 'src/typeorm';
import { Repository } from 'typeorm';
import { StateDto } from './state.dto';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
  ) {}

  async addState(state: StateDto) {
   await this.stateRepository.create(new StateDto());
   const newState = this.stateRepository.save(state);
    console.log(state)
    return newState
    // return "I am here"
  }


  async deleteState(id: number): Promise<any> {
    const delResponse = await this.stateRepository.delete(id);
    console.log(delResponse)
    return 'Deleted'
    // return {
    //   statusCode: 200,
    //   body: `Deleted id:${id} successfully`,
    // };
  }

  async findAll(): Promise<State[]> {
    console.log(await this.stateRepository.count())
    return await this.stateRepository.find();

  }


  updateState(state:StateDto){}
}
