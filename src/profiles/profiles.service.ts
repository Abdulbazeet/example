import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create_profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { profile } from 'console';

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

    findOneProfileById(id: string){
        return this.profiles.find((profile) => profile.id === id)
    }


    
    createProfile(createProfileDto: CreateProfileDto){

        const newProfile = {id: randomUUID(), ...createProfileDto}
        this.profiles.push(newProfile)
        return newProfile
       
    }

    updateProfile(id: string, updateProfileDto: UpdateProfileDto){
        const profileIndex = this.profiles.findIndex((profile) => profile.id === id)
        if(profileIndex === -1){
            return null
        }
        const updatedProfile = {...this.profiles[profileIndex], ...updateProfileDto}
        this.profiles[profileIndex] = updatedProfile
        return updatedProfile
    }
    deleteProfile(id: string):void{
       const matchingIndex = this.profiles.findIndex((profile) => profile.id ===id)
      if(matchingIndex > -1){
        this.profiles.splice(matchingIndex,1)
      }
    }

}
