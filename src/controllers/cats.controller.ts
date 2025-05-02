import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from '../dtos/create-cat.dto';
import { CatsService } from '../services/cats.service';
import { Cat } from '../interfaces/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }
}
