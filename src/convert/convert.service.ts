import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConvertDto } from './dto/convert.dto';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ConvertService {
  private readonly apiUrl = 'http://localhost:8000/api/convert';
  private readonly logger = new Logger(ConvertService.name);

  constructor(private readonly httpService: HttpService) {}

  async convertCurrency(convertDto: ConvertDto): Promise<number> {
    try {
      this.logger.log(`Envoi de la requête de conversion: ${JSON.stringify(convertDto)}`);
      const response$ = this.httpService.post(this.apiUrl, convertDto);
      const response = await lastValueFrom(response$);

      this.logger.log(`Réponse de l'API Laravel: ${JSON.stringify(response.data)}`);

      if (
        response.status === HttpStatus.OK ||
        response.status === HttpStatus.CREATED
      ) {
        if (response.data && typeof response.data.converted_amount === 'number') {
          return response.data.converted_amount;
        } else {
          this.logger.error('Format de réponse inattendu de l\'API Laravel.');
          throw new HttpException(
            'Format de réponse inattendu de l\'API de conversion.',
            HttpStatus.BAD_REQUEST,
          );
        }
      } else {
        this.logger.error(`Erreur lors de la conversion: ${response.statusText}`);
        throw new HttpException(
          'Erreur lors de la conversion.',
          response.status,
        );
      }
    } catch (error) {
      this.logger.error(`Erreur lors de l'appel à l'API de conversion: ${error.message}`);
      throw new HttpException(
        error.response?.data?.message || 'Erreur lors de la conversion.',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}