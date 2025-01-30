import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiaryController } from './beneficiary.controller';
import { BeneficiaryService } from './beneficiary.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { Beneficiary } from './interfaces/beneficiary.interfaces';

describe('BeneficiaryController', () => {
    let controller: BeneficiaryController;
    let service: BeneficiaryService;

    const mockBeneficiary: Beneficiary = {
        clientId: "6750caa88f05311c5b33c3f4",
        name: "John Doe",
        accountNumber: 1234567890,
        bankName: "Bank of America",
        addedDate: new Date('2022-01-01T00:00:00Z'),
        isVerified: true,
    };

    const mockBeneficiaryService = {
        create: jest.fn().mockResolvedValue(mockBeneficiary),
        findAll: jest.fn().mockResolvedValue([mockBeneficiary]),
        findOne: jest.fn().mockResolvedValue(mockBeneficiary),
        update: jest.fn().mockResolvedValue({ ...mockBeneficiary, name: "Updated Beneficiary" }),
        delete: jest.fn().mockResolvedValue(mockBeneficiary),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BeneficiaryController],
            providers: [
                {
                    provide: BeneficiaryService,
                    useValue: mockBeneficiaryService,
                },
            ],
        }).compile();

        controller = module.get<BeneficiaryController>(BeneficiaryController);
        service = module.get<BeneficiaryService>(BeneficiaryService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a new beneficiary and return it', async () => {
            const createDto: CreateBeneficiaryDto = {
                clientId: "6750caa88f05311c5b33c3f4",
                name: "John Doe",
                accountNumber: 1234567890,
                bankName: "Bank of America",
                addedDate: new Date('2022-01-01T00:00:00Z'),
                isVerified: true,
            };

            const result = await controller.create(createDto);
            expect(result).toEqual(mockBeneficiary);
            expect(service.create).toHaveBeenCalledWith(createDto);
        });
    });

    describe('findAll', () => {
        it('should return an array of beneficiaries', async () => {
            const result = await controller.findAll();
            expect(result).toEqual([mockBeneficiary]);
            expect(service.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a single beneficiary by ID', async () => {
            const beneficiaryId = '507f191e810c19729de860ea';
            const result = await controller.findOne(beneficiaryId);
            expect(result).toEqual(mockBeneficiary);
            expect(service.findOne).toHaveBeenCalledWith(beneficiaryId);
        });
    });

    describe('update', () => {
        it('should update a beneficiary and return the updated beneficiary', async () => {
            const beneficiaryId = '507f191e810c19729de860ea';
            const updateDto: CreateBeneficiaryDto = {
                clientId: "6750caa88f05311c5b33c3f4",
                name: "Updated Beneficiary",
                accountNumber: 9876543210,
                bankName: "Updated Bank",
                addedDate: new Date('2022-01-01T00:00:00Z'),
                isVerified: true,
            };

            const result = await controller.update(beneficiaryId, updateDto);
            expect(result).toEqual({ ...mockBeneficiary, name: "Updated Beneficiary" });
            expect(service.update).toHaveBeenCalledWith(beneficiaryId, updateDto);
        });
    });

    describe('delete', () => {
        it('should delete a beneficiary and return the deleted beneficiary', async () => {
            const beneficiaryId = '507f191e810c19729de860ea';
            const result = await controller.delete(beneficiaryId);
            expect(result).toEqual(mockBeneficiary);
            expect(service.delete).toHaveBeenCalledWith(beneficiaryId);
        });
    });
});
