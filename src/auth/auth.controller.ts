// import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { RegisterUsersDto } from './dto/register-users.dto';

// @Controller('auth')
// export class AuthController {
//     constructor(
//         private authService: AuthService
//     ){}

//     @Post('/register')
//     async registerUsers(@Body()RegisterUsersDto: RegisterUsersDto){
//         const data = await this.authService.register(RegisterUsersDto)
//         return {
//             data,
//             statusCode: HttpStatus.CREATED,
//             message: "Success"
//         }
//     }
// }
