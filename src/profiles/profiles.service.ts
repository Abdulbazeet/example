import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class ProfilesService {
    private profiles = [
        {id: randomUUID(), name: 'John Doe', description: 'Software Engineer'},
        {id: randomUUID(), name: 'Jane Smith', description: 'Product Manager'},
        {id: randomUUID(), name: 'Alice Johnson', description: 'UX Designer'},
    ];


    findAllProfile(){
        return this.profiles
    }
}
