import { Test, TestingModule } from '@nestjs/testing';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { CreateClientsDto } from './dto/create-clients.dto';

describe('ClientsController', () => {
  let controller: ClientsController;
  let service: ClientsService;

  const mockClient = {
    _id: '507f191e810c19729de860ea',
    phone: '0620853890',
    mail: 'test@mail.com',
    passcode: '123456',
    birthdate: new Date('2004-02-09T00:00:00Z'),
    address: '23 Rue Toulouse Lautrec',
    zipcode: 33530,
    country: 'France',
    amount: 0,
    save: jest.fn().mockResolvedValue(this),
    toObject: jest.fn().mockReturnValue(this), 
    populate: jest.fn().mockResolvedValue(this), 
    exec: jest.fn().mockResolvedValue(this), 
  };

  const mockClientsService = {
    create: jest.fn().mockResolvedValue(mockClient),
    findall: jest.fn().mockResolvedValue([mockClient]),
    findOne: jest.fn().mockResolvedValue(mockClient),
    update: jest.fn().mockResolvedValue({ ...mockClient, phone: '0712345678' }),
    delete: jest.fn().mockResolvedValue(mockClient),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [
        {
          provide: ClientsService,
          useValue: mockClientsService,
        },
      ],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new client and return it', async () => {
        const createDto: CreateClientsDto = {
            phone: '0620853890',
            mail: 'test@mail.com',
            passcode: '123456',
            birthdate: new Date('2004-02-09T00:00:00Z'),
            address: '23 Rue Toulouse Lautrec',
            zipcode: 33530,
            country: 'France',
            amount: 0,
        };

        const result = await controller['ClientsService'].create(createDto);
        expect(result).toEqual(mockClient);
        expect(service.create).toHaveBeenCalledWith(createDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of clients', async () => {
        const result = await controller.findAll();
        expect(result).toEqual([mockClient]);
        expect(service.findall).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single client by ID', async () => {
        const clientId = '507f191e810c19729de860ea';
        const result = await controller.findOne(clientId);
        expect(result).toEqual(mockClient);
        expect(service.findOne).toHaveBeenCalledWith(clientId);
    });
  });

  describe('update', () => {
    it('should update a client and return the updated client', async () => {
        const clientId = '507f191e810c19729de860ea';
        const updateDto: CreateClientsDto = {
            phone: '0712345678',
            mail: 'test@mail.com',
            passcode: '123456',
            birthdate: new Date('2004-02-09T00:00:00Z'),
            address: '23 Rue Toulouse Lautrec',
            zipcode: 33530,
            country: 'France',
            amount: 0,
        };

        const result = await controller.update(clientId, updateDto);
        expect(result).toEqual({ ...mockClient, phone: '0712345678' });
        expect(service.update).toHaveBeenCalledWith(clientId, updateDto);
    });
  });

  describe('delete', () => {
    it('should delete a client and return the deleted client', async () => {
        const clientId = '507f191e810c19729de860ea';
        const result = await controller.delete(clientId);
        expect(result).toEqual(mockClient);
        expect(service.delete).toHaveBeenCalledWith(clientId);
    });
  });

})
