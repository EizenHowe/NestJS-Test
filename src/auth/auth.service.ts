// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { InjectRepository } from '@nestjs/typeorm';
// import { ProfileRepository } from 'src/profile/entities/profile.entity';
// import { Repository } from 'typeorm';
// import { RegisterUsersDto } from './dto/register-users.dto';
// import * as bcrypt from 'bcrypt';

// @Injectable()
// export class AuthService {
//     constructor(
//         @InjectRepository(ProfileRepository)
//         private readonly usersRepo: Repository<ProfileRepository>,
//         private readonly jwtService: JwtService
//     ){}

//     async register(registerDto: RegisterUsersDto){
//         try {
//             const saltGenerate = await bcrypt.genSalt()

//             const password = registerDto.password
//             const hash = await bcrypt.hash(password, saltGenerate)

            
//             const users = new ProfileRepository()
//             users.nama = registerDto.nama
//             users.usia = registerDto.usia
//             users.alamat = registerDto.alamat
//             users.email = registerDto.email
//             users.password = hash
//             users.salt = saltGenerate
            
//             const insertUsers = await this.usersRepo.insert(users)

//             return (
//                 this.usersRepo.findOneOrFail({
//                     where: {id: insertUsers.identifiers[0].id}
//                 })
//             )
//         } catch (error) {
//             throw error
//         }
//     }
// }