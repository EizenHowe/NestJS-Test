import {IsNotEmpty, IsInt} from 'class-validator';

export class Create_ProfileDto {
    @IsNotEmpty()
    nama: string;

    @IsNotEmpty()
    usia: number;

    @IsNotEmpty()
    alamat: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}