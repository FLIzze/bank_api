import { Model } from "mongoose";
import { BeneficiaryService } from "./beneficiary.service";
import { Beneficiary } from "./interfaces/beneficiary.interfaces";
import { Test, TestingModule } from "@nestjs/testing";
import { CreateBeneficiaryDto } from "./dto/create-beneficiary.dto";

describe('BeneficiaryService', () => {
    let service: BeneficiaryService;
    let model:Model<Beneficiary>;

    beforeEach(async () => {
        const mockBeneficiary = {
            clientId: "6750caa88f05311c5b33c3f4",
            name: "John Doe",
            accountNumber: 1234567897,
            bankName: "Bank of America",
            addedDate: new Date('2004-02-09T00:00:00Z'),
            isVerified: true
        };

        const mockBeneficiaryModel = {
            create: jest.fn().mockResolvedValue(mockBeneficiary),
            find: jest.fn().mockReturnThis(),
            exec: jest.fn(),
            findOne: jest.fn().mockReturnThis(),
            findOneAndUpdate: jest.fn().mockReturnThis(),
            findOneAndDelete: jest.fn().mockReturnThis(),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                BeneficiaryService,
                {
                    provide: 'BENEFICIARY_MODEL',
                    useValue: mockBeneficiaryModel
                },
            ]
        }).compile();

        service = module.get<BeneficiaryService>(BeneficiaryService);
        model = module.get<Model<Beneficiary>>('BENEFICIARY_MODEL');
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    })

    it('should create a beneficiary', async () => {
        const beneficiaryDto:CreateBeneficiaryDto = {
            clientId: "6750caa88f05311c5b33c3f4",
            name: "John Doe",
            accountNumber: 1234567897,
            bankName: "Bank of America",
            addedDate: new Date('2004-02-09T00:00:00Z'),
            isVerified: true
        }

        const createdBeneficiary = {_id: '507f191e810c19729de860ea', ...beneficiaryDto};

        (model.create as jest.Mock).mockResolvedValue(createdBeneficiary);

        const result = await service.create(beneficiaryDto)

        expect(result).toEqual(createdBeneficiary)
        expect(model.create).toHaveBeenCalledWith(beneficiaryDto)
    })

    it('should return all beneficiary', async () => {
        const mockBeneficiarys = [
            {
                _id: '507f191e810c19729de860ea',
                clientId: "6750caa88f05311c5b33c3f4",
                name: "John Doe",
                accountNumber: 1234567897,
                bankName: "Bank of America",
                addedDate: new Date('2004-02-09T00:00:00Z'),
                isVerified: true
            }
        ];

        (model.find as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(mockBeneficiarys),
        });

        const result = await service.findAll();

        expect(result).toEqual(mockBeneficiarys);
        expect(model.find).toHaveBeenCalled();
    })

    it('should return one beneficiary by ID', async () => {
        const beneficiaryId = '507f191e810c19729de860ea';
        const mockBeneficiary = {
            _id: beneficiaryId,
            clientId: "6750caa88f05311c5b33c3f4",
            name: "John Doe",
            accountNumber: 1234567897,
            bankName: "Bank of America",
            addedDate: new Date('2004-02-09T00:00:00Z'),
            isVerified: true
        };

        (model.findOne as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(mockBeneficiary),
        });

        const result = await service.findOne(beneficiaryId);
        expect(result).toEqual(mockBeneficiary);
        expect(model.findOne).toHaveBeenCalledWith({ _id: beneficiaryId });
    })

    it('should update a client', async () => {
        const beneficiaryId = '507f191e810c19729de860ea';
        const updateDto = {
            clientId: "6750caa88f05311c5b33c3f4",
            name: "Erwan SINCK",
            accountNumber: 1234567897,
            bankName: "Bank of America",
            addedDate: new Date('2004-02-09T00:00:00Z'),
            isVerified: true
        }

        const updatedBeneficiary = {
            _id: beneficiaryId,
            ...updateDto
        };

        (model.findOneAndUpdate as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(updatedBeneficiary),
        });

        const result = await service.update(beneficiaryId, updateDto);

        expect(result).toEqual(updatedBeneficiary);
        expect(model.findOneAndUpdate).toHaveBeenCalledWith(
            { _id: beneficiaryId },
            updateDto,
            { new: true }
        )
    })

    it('should delete a beneficiary', async () => {
        const beneficiaryId = '507f191e810c19729de860ea';
        const mockBeneficiary = {
            _id: beneficiaryId,
            clientId: "6750caa88f05311c5b33c3f4",
            name: "John Doe",
            accountNumber: 1234567897,
            bankName: "Bank of America",
            addedDate: new Date('2004-02-09T00:00:00Z'),
            isVerified: true
        };

        (model.findOneAndDelete as jest.Mock).mockReturnValue({
            exec: jest.fn().mockResolvedValue(mockBeneficiary),
        });

        const result = await service.delete(beneficiaryId);
        expect(result).toEqual(mockBeneficiary);
        expect(model.findOneAndDelete).toHaveBeenCalledWith({ _id: beneficiaryId });
    })
});
