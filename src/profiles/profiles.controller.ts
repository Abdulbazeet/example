import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create_profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';

@Controller('profiles')
export class ProfilesController {

  constructor(private profileService: ProfilesService) {}

    //find all profiles
    @Get()
    findAllProfiles(){
        return this.profileService.findAllProfile()

    }

    //find one profile by id
    // GET /profiles/:id
    @Get(':id')
    findOneById(@Param('id') id: string){
        return this.profileService.findOneProfileById(id)
    }

    //create-profile
    // POST /profiles
    @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto){
    return this.profileService.createProfile(createProfileDto)
  }  

  //update-profile
  // PUT /profiles/:id
  @Put(':id')
  updateProfile(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto){
    return this.profileService.updateProfile(id, updateProfileDto)
  }

  //delete-profile
  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProfile(@Param('id') id: string){
    return this.profileService.deleteProfile(id)
    
  }
}
