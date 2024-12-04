import { Module } from "@nestjs/common";
import { CreditCardsController } from "./CreditCards.controller";
import { CreditCardsService } from "./CreditCards.service";
import { CreditCardsProviders } from "./CreditCards.providers";
import { DatabaseModule } from "src/database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [CreditCardsController],
    providers: [
        CreditCardsService,
        ...CreditCardsProviders,
    ],
    exports: [CreditCardsService]
})

export class CreditCardsModule {}