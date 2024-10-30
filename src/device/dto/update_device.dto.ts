import {IsNotEmpty, IsInt} from 'class-validator';

export class UpdateDeviceDto {
    @IsNotEmpty()
    namaPerangkat: string;

    @IsNotEmpty()
    @IsInt()
    ram: number;

    @IsNotEmpty()
    @IsInt()
    storage: number;
    
    @IsNotEmpty()
    os: string;
}