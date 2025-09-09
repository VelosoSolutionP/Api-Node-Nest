import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  nome: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ length: 20, nullable: true })
  telefone?: string;

  @Column({ length: 255, nullable: true })
  endereco?: string;

  @Column({ length: 100, nullable: true })
  bairro?: string;

  @Column({ length: 100, nullable: true })
  cidade?: string;

  @Column({ length: 2, nullable: true })
  uf?: string;
}