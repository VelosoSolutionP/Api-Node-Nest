import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
export class CreateClienteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(0, 20)
  telefone?: string;

  @IsOptional()
  @IsString()
  endereco?: string;

  @IsOptional()
  @IsString()
  bairro?: string;

  @IsOptional()
  @IsString()
  cidade?: string;

  @IsOptional()
  @IsString()
  @Length(2, 2)
  uf?: string;
}