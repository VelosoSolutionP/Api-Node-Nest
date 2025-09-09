import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly repo: Repository<Cliente>,
  ) {}

  async create(dto: CreateClienteDto): Promise<Cliente> {
    const cliente = this.repo.create(dto);
    return this.repo.save(cliente);
  }

  findAll(): Promise<Cliente[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.repo.findOneBy({ id });
    if (!cliente) throw new NotFoundException(`Cliente ${id} não encontrado`);
    return cliente;
  }

  async update(id: number, dto: UpdateClienteDto): Promise<Cliente> {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ deleted: boolean }> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new NotFoundException(`Cliente ${id} não encontrado`);
    return { deleted: true };
  }
}