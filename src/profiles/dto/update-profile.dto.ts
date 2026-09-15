import { IsString, isString, Min, MinLength } from "class-validator"

export class UpdateProfileDto {
    @IsString()
    @MinLength(3)
    name: string

    @IsString()
    description: string
}