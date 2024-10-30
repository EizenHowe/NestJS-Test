import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityNotFoundError, Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { DeviceRepository } from './entities/device.entity';
import { CreateDeviceDto } from './dto/create_device.dto';
import { UpdateDeviceDto } from './dto/update_device.dto';

@Injectable()
export class DeviceService {
    constructor(
        @InjectRepository(DeviceRepository)
        private readonly device_Repository: Repository<DeviceRepository>,
    ) {}

    async findOneById(id: string){
        try {
            return await this.device_Repository.findOne({
                where: {id},
            })
        } catch (error) {
            if ( error instanceof EntityNotFoundError) {
                throw new HttpException({
                    statusCode: HttpStatus.NOT_FOUND,
                    error: "Data not found"
                },
                HttpStatus.NOT_FOUND)
            } else {
                throw error
            }
        }
    }

    async findAll(){
        return this.device_Repository.findAndCount();
    }

    async create(create_DeviceDto: CreateDeviceDto){
        try {

            const device = new DeviceRepository
            device.namaPerangkat = create_DeviceDto.namaPerangkat
            device.ram = create_DeviceDto.ram
            device.storage = create_DeviceDto.storage
            device.os = create_DeviceDto.os

            const insertDevice = await this.device_Repository.insert(device)
            return await this.device_Repository.findOneOrFail({
                where: {
                    id: insertDevice.identifiers[0].id
                }
            })

        } catch (error) {
            throw error
        }
    }

    async update(id: string, update_DeviceDto: UpdateDeviceDto){
        try {
            await this.findOneById(id)
            const device = new DeviceRepository
            device.namaPerangkat = update_DeviceDto.namaPerangkat
            device.ram = update_DeviceDto.ram
            device.storage = update_DeviceDto.storage
            device.os = update_DeviceDto.os

            await this.device_Repository.update(id, device)
            return await this.device_Repository.findOneOrFail({
                where: {
                    id
                }
            })

        } catch (error) {
            throw error
        }
    }

    async softDeleteById(id: string){
        try {
            await this.findOneById(id)
            await this.device_Repository.softDelete(id)

            return "Gone"
        } catch (error) {
            throw error
        }
    }
}
