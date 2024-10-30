import { Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Create_ProfileDto } from './dto/create_profile.dto';
import { Update_ProfileDto } from './dto/update_profile.dto';
import { string } from 'joi';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService){}

    @Post()
    async create (@Body() create_ProfileDto: Create_ProfileDto) {
        const data = await this.profileService.create(create_ProfileDto)

        return {
            data,
            statusCode: HttpStatus.CREATED,
            message: 'success'
        }
    }
    @Put(":id")
    async update (@Param("id", ParseUUIDPipe) id: string, @Body() update_ProfileDto: Update_ProfileDto) {
        const data = await this.profileService.update(id, update_ProfileDto)

        return {
            data,
            statusCode: HttpStatus.CREATED,
            message: 'success'
        }
    }
    @Get(":id")
    async getDetailById (@Param("id") id : string){
        const data = await this.profileService.findOneById(id);

        return {
            data,
            statusCode: HttpStatus.OK,
            message: 'success'
        }
    }
    @Get()
    async getDetailAll(){
        const [data, count] = await this.profileService.findAll();

        return {
            data,
            count,
            statusCode: HttpStatus.OK,
            message: 'success'
        }
    }
    @Delete(":id")
    async softDelete(@Param("id", ParseUUIDPipe) id: string){
        return {
            statusCode: HttpStatus.OK,
            message: await this.profileService.softDeleteById(id)
        }
    }
}
