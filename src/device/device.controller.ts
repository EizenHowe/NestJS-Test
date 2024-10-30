import { Body, Controller, Delete, Get, HttpStatus, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { string } from 'joi';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create_device.dto';
import { UpdateDeviceDto } from './dto/update_device.dto';

@Controller('device')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService){}

    @Post()
    async create (@Body() create_DeviceDto: CreateDeviceDto) {
        const data = await this.deviceService.create(create_DeviceDto)

        return {
            data,
            statusCode: HttpStatus.CREATED,
            message: 'success'
        }
    }
    @Put(":id")
    async update (@Param("id", ParseUUIDPipe) id: string, @Body() update_DeviceDto: UpdateDeviceDto) {
        const data = await this.deviceService.update(id, update_DeviceDto)

        return {
            data,
            statusCode: HttpStatus.CREATED,
            message: 'success'
        }
    }
    @Get(":id")
    async getDetailById (@Param("id") id : string){
        const data = await this.deviceService.findOneById(id);

        return {
            data,
            statusCode: HttpStatus.OK,
            message: 'success'
        }
    }
    @Get()
    async getDetailAll(){
        const [data, count] = await this.deviceService.findAll();

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
            message: await this.deviceService.softDeleteById(id)
        }
    }
}
