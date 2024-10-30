import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ProfileRepository } from "src/profile/entities/profile.entity";
import { Repository } from "typeorm";
import { Strategy, ExtractJwt } from "passport-jwt"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(ProfileRepository)
        private userRepo: Repository<ProfileRepository>
    ){
        super({
            secretOrKey: 'Pattern',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    async validate(payload: any){
        try {
            const user = this.userRepo.findOne({
                where: {id: payload.id},
            })

            if(!user) {
                throw new HttpException({
                    statusCode: HttpStatus.UNAUTHORIZED,
                    message: "token is invalid"
                },
                HttpStatus.UNAUTHORIZED
            )};
        } catch (error) {
            throw error
        }
    }
}