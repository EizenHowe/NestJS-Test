import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { ProfileRepository } from './entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfileRepository]), // Daftarkan entity di sini
  ],
  providers: [ProfileService],
  controllers: [ProfileController],
  exports: [ProfileService]
})
export class ProfileModule {}
