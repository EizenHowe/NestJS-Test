import {IsNotEmpty, IsInt} from 'class-validator';

export class Update_ProfileDto {
    @IsNotEmpty()
    nama: string;

    @IsNotEmpty()
    @IsInt()
    usia: number;

    @IsNotEmpty()
    alamat: string;
}