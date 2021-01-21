import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract.service';
import { IPaginateResponse } from 'src/common/paginate-response.interface';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService extends AbstractService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  async paginate(page = 1, relations: any[] = []): Promise<IPaginateResponse> {
    const { data, meta } = await super.paginate(page, relations);

    return {
      data: data.map((user) => {
        const { password, ...data } = user;
        return data;
      }),
      meta,
    };
  }
}
