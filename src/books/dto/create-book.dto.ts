import { IsBoolean, IsInt, IsOptional, IsString, Max, Min, MinLength } from "class-validator"

export class CreateBookDto {

    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
    author: string;

    @IsInt()
    @Min(1900)
    @Max(2025)
    year: number;

    @IsOptional()
    @IsBoolean()
    isPublished?: boolean = false
}
