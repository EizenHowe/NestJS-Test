// import { Module } from '@nestjs/common';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { JwtStrategy } from './jwt.strategy.service';
// import { JwtModule, JwtService } from '@nestjs/jwt';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ProfileModule } from 'src/profile/profile.module';
// import { ProfileRepository } from 'src/profile/entities/profile.entity';

// @Module({
//     controllers: [AuthController],
//     providers: [AuthService, JwtService],
//     imports: [
//         // JwtModule.register({
//         //     global: true,
//         //     secret: 'pattern',
//         // }),
//         TypeOrmModule.forFeature([ProfileRepository]), ProfileModule
//     ]
// })
// export class AuthModule {}
