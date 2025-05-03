import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

export interface Book {
  id: number
  title: string
  author: string
  year: number
  isPublished: boolean
}

@Injectable()
export class BooksService {

  private books: Book[] = []
  private firstId = 1

  create(createBookDto: CreateBookDto) {

    const newBook: Book = {
      id:this.firstId++,
      ...createBookDto,
      isPublished: createBookDto.isPublished ?? false
    }
    this.books.push(newBook)

    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {

    const book = this.books.find((e) => e.id === id)
    if(!book) throw new NotFoundException("Book not found")

    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto): Book {
    const book = this.findOne(id)

    Object.assign(book, updateBookDto)

    if(updateBookDto.isPublished !== undefined){
      book.isPublished = updateBookDto.isPublished
    }

    return book;
  }

  remove(id: number) {

    const i = this.books.findIndex((e) => e.id === id);

    if(i === -1) throw new NotFoundException("Book not found")
    this.books.splice(i, 1)

    return `This action removes a #${id} book`;
  }
}
