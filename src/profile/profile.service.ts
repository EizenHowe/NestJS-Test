import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityNotFoundError, Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileRepository } from './entities/profile.entity';
import { Create_ProfileDto } from './dto/create_profile.dto';
import { Update_ProfileDto } from './dto/update_profile.dto';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(ProfileRepository)
        private readonly profile_Repository: Repository<ProfileRepository>,
    ) {}

    async findOneById(id: string){
        try {
            return await this.profile_Repository.findOne({
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
        return this.profile_Repository.findAndCount();
    }

    async create(create_ProfileDto: Create_ProfileDto){
        try {

            const profile = new ProfileRepository
            profile.nama = create_ProfileDto.nama
            profile.usia = create_ProfileDto.usia
            profile.alamat = create_ProfileDto.alamat

            const insertProfile = await this.profile_Repository.insert(profile)
            return await this.profile_Repository.findOneOrFail({
                where: {
                    id: insertProfile.identifiers[0].id
                }
            })

        } catch (error) {
            throw error
        }
    }

    async update(id: string, update_ProfileDto: Update_ProfileDto){
        try {
            await this.findOneById(id)
            const profile = new ProfileRepository
            profile.nama = update_ProfileDto.nama
            profile.usia = update_ProfileDto.usia
            // profile.alamat = update_ProfileDto.alamat

            await this.profile_Repository.update(id, profile)
            return await this.profile_Repository.findOneOrFail({
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
            await this.profile_Repository.softDelete(id)

            return "Gone"
        } catch (error) {
            throw error
        }
    }
}
