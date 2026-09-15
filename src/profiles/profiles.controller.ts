import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, ParseUUIDPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateProfileDto } from './dto/create_profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';
import { ProfilesService } from './profiles.service.js';
import type { UUID } from 'crypto';

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
    findOneById(@Param('id', ParseUUIDPipe) id: UUID){
      try{
        return this.profileService.findOneProfileById(id)
      } catch(error){
        throw new NotFoundException(error)
      }
    }

    //create-profile
    // POST /profiles
    @Post()
  createProfile(@Body(new ValidationPipe()) createProfileDto: CreateProfileDto){
    return this.profileService.createProfile(createProfileDto)
  }  

  //update-profile
  // PUT /profiles/:id
  @Put(':id')
  updateProfile(@Param('id', ParseUUIDPipe) id: UUID, @Body(new ValidationPipe()) updateProfileDto: UpdateProfileDto){
    return this.profileService.updateProfile(id, updateProfileDto)
  }

  //delete-profile
  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProfile(@Param('id', ParseUUIDPipe) id: UUID){
    return this.profileService.deleteProfile(id)
    
  }
}
