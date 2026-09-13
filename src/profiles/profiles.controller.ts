import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create_profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dto.js';

@Controller('profiles')
export class ProfilesController {

  costructor() {}

    //find all profiles
    @Get()
    findAllProfiles(@Query('age') age: number){
        return [{age}]

    }

    //find one profile by id
    @Get(':id')
    findOneById(@Param('id') id:String){
        return {id}
    }

    //create-profile
    @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto){
    return {name : createProfileDto.name, description: createProfileDto.description}
  }  

  //update-profile
  @Put(':id')
  updateProfile(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto){
    return {id, ...updateProfileDto}
  }

  //delete-profile
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProfile(@Param('id') id: string){
    
  }
}
