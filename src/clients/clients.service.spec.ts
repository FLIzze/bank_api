import { Model } from 'mongoose';
import { ClientsService } from './clients.service';
import { Clients } from './interfaces/clients.interfaces';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateClientsDto } from './dto/create-clients.dto';

describe('ClientsService', () => {
  let service: ClientsService;
  let model: Model<Clients>;

  beforeEach(async () => {
    const mockClient = {
      phone: '0620853890',
      mail: 'test@mail.com',
      passcode: 'Password123',
      birthdate: new Date('2004-02-09T00:00:00Z'),
      address: '23 Rue Toulouse Lautrec',
      zipcode: 33530,
      country: 'France',
      amount: 0
    };

    const mockClientModel = {
      create: jest.fn().mockResolvedValue(mockClient),
      find: jest.fn().mockReturnThis(),
      exec: jest.fn(),
      findOne: jest.fn().mockReturnThis(),
      findOneAndUpdate: jest.fn().mockReturnThis(),
      findOneAndDelete: jest.fn().mockReturnThis(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        {
          provide: 'CLIENTS_MODEL', 
          useValue: mockClientModel,
        },
      ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
    model = module.get<Model<Clients>>('CLIENTS_MODEL');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a client', async () => {
    const clientDto:CreateClientsDto = {
      phone: '0620853890',
      mail: 'test@mail.com',
      passcode: 'Password123',
      birthdate: new Date('2004-02-09T00:00:00Z'),
      address: '23 Rue Toulouse Lautrec',
      zipcode: 33530,
      country: 'France',
      amount: 0
    };
  
    const createdClient = { _id: '507f191e810c19729de860ea', ...clientDto };
  
    (model.create as jest.Mock).mockResolvedValue(createdClient);
  
    const result = await service.create(clientDto);
  
    expect(result).toEqual(createdClient);
    expect(model.create).toHaveBeenCalledWith(clientDto);
  });
  
  it('should return all clients', async () => {
    const mockClients = [
      {
        _id: '507f191e810c19729de860ea',
        phone: '0620853890',
        mail: 'test@mail.com',
        passcode: 'Password123',
        birthdate: new Date('2004-02-09T00:00:00Z'),
        address: '23 Rue Toulouse Lautrec',
        zipcode: 33530,
        country: 'France',
        amount: 0
      },{
        _id: '507f191e810c19729de860ea',
        phone: '0620853890',
        mail: 'test@mail.com',
        passcode: 'Password123',
        birthdate: new Date('2004-02-09T00:00:00Z'),
        address: '23 Rue Toulouse Lautrec',
        zipcode: 33530,
        country: 'France',
        amount: 0
      },
    ];
  
    (model.find as jest.Mock).mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockClients),
    });
  
    const result = await service.findall();
    expect(result).toEqual(mockClients);
    expect(model.find).toHaveBeenCalled();
  }); 
  
  it('should return one client by ID', async () => {
    const clientId = '507f191e810c19729de860ea';
    const mockClient = {
      _id: clientId,
      phone: '0620853890',
      mail: 'test@mail.com',
      passcode: 'Password123',
      birthdate: new Date('2004-02-09T00:00:00Z'),
      address: '23 Rue Toulouse Lautrec',
      zipcode: 33530,
      country: 'France',
      amount: 0
    };
  
    (model.findOne as jest.Mock).mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockClient),
    });
  
    const result = await service.findOne(clientId);
    expect(result).toEqual(mockClient);
    expect(model.findOne).toHaveBeenCalledWith({ _id: clientId });
  });

  it('should update a client', async () => {
    const clientId = '507f191e810c19729de860ea';
    const updateDto:CreateClientsDto = {
      phone: '0712345678',
      mail: 'test@mail.com',
      passcode: 'Password123',
      birthdate: new Date('2004-02-09T00:00:00Z'),
      address: '23 Rue Toulouse Lautrec',
      zipcode: 33530,
      country: 'France',
      amount: 0
    };
  
    const updatedClient = {
      _id: clientId,
      ...updateDto
    };
  
    (model.findOneAndUpdate as jest.Mock).mockReturnValue({
      exec: jest.fn().mockResolvedValue(updatedClient),
    });
  
    const result = await service.update(clientId, updateDto);
    expect(result).toEqual(updatedClient);
    expect(model.findOneAndUpdate).toHaveBeenCalledWith(
      { _id: clientId },
      updateDto,
      { new: true }
    );
  });
  
  it('should delete a client', async () => {
    const clientId = '507f191e810c19729de860ea';
  
    const mockClient = {
      _id: clientId,
      phone: '0620853890',
      mail: 'test@mail.com',
      passcode: 'Password123',
      birthdate: new Date('2004-02-09T00:00:00Z'),
      address: '23 Rue Toulouse Lautrec',
      zipcode: 33530,
      country: 'France',
      amount: 0
    };
  
    (model.findOneAndDelete as jest.Mock).mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockClient),
    });
  
    const result = await service.delete(clientId);
    expect(result).toEqual(mockClient);
    expect(model.findOneAndDelete).toHaveBeenCalledWith({ _id: clientId });
  });

  it('should find a client by email', async () => {
    const email = 'test@mail.com';
    const mockClient = {
      _id: '507f191e810c19729de860ea',
      phone: '0620853890',
      mail: email,
      passcode: 'Password123',
      birthdate: new Date('2004-02-09T00:00:00Z'),
      address: '23 Rue Toulouse Lautrec',
      zipcode: 33530,
      country: 'France',
      amount: 0
    };
  
    (model.findOne as jest.Mock).mockReturnValue({
      exec: jest.fn().mockResolvedValue(mockClient),
    });
  
    const result = await service.findOneBy(email);
    expect(result).toEqual(mockClient);
    expect(model.findOne).toHaveBeenCalledWith({ mail: email });
  });
  
});
