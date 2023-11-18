import { Injectable,Inject} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) { }

  async findAllPhotos(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
  async findaPhoto(_id: number): Promise<Photo[]> {
    return await this.photoRepository.find({
      select: ["id", "name", "description", "views"],
      where: [{"id": _id}]
    });
}

  async createaPhoto(photo: Photo) {
    this.photoRepository.save(photo)
  }

  async updateaPhoto(_id: number, photo: Photo) {
    this.photoRepository.save(photo)
  }

  async deleteaPhoto(_id:number){
    this.photoRepository.delete(_id);
  }
}