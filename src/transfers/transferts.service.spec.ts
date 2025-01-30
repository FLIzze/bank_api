import { Test, TestingModule } from '@nestjs/testing';
import { TransfersService } from './transfers.service';
import { Model } from 'mongoose';
import { Transfers } from './interfaces/transfers.interfaces';

describe('TransfersService', () => {
    let service: TransfersService;
    let model: Model<Transfers>;

    const mockTransfersModel = {
        create: jest.fn(),
        find: jest.fn(),
        findById: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                TransfersService,
                {
                    provide: 'TRANSFERS_MODEL',
                    useValue: mockTransfersModel,
                },
            ],
        }).compile();

        service = module.get<TransfersService>(TransfersService);
        model = module.get<Model<Transfers>>('TRANSFERS_MODEL');
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});