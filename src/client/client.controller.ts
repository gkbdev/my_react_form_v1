import { Body, Controller, Post} from '@nestjs/common';
import { CreateClientDto } from './dtos/createClient.dto';



@Controller('client')
export class ClientController {
    @Post()
    async createClient ( 
        @Body() createClient: CreateClientDto
    ) {
      return createClient
    }
}
