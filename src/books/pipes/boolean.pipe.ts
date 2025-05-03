import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class BooleanTransformPipe implements PipeTransform {
  transform(value: any): boolean {
    if (value === 'true') return true;
    if (value === 'false') return false;
    throw new BadRequestException('isPublished must be "true" or "false"');
  }
}