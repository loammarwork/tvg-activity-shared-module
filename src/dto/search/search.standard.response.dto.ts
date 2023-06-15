import { ApiProperty } from '@nestjs/swagger';
import { CancellationPolicyTitle, ImageStandardResponseDTO } from '../../shared/shared.type';

export class PaginationSearchStandardRequestDTO {
    @ApiProperty()
    itemsPerPage: number;
    @ApiProperty()
    page: number;
    @ApiProperty()
    totalItems: number;
    @ApiProperty()
    itemsCount: number;
}

export class AmountFromSearchStandardResponseDTO {
    @ApiProperty()
    amount: number;
    @ApiProperty()
    nettAmount: number;
}

export class ActivitySearchStandardResponseDTO {
    @ApiProperty()
    activityId: string;
    @ApiProperty()
    activityName: string;
    @ApiProperty()
    activityType: string;
    @ApiProperty()
    country: string;
    @ApiProperty()
    destination: string;
    @ApiProperty()
    latitude: number;
    @ApiProperty()
    longitude: number;
    @ApiProperty()
    duration: number;
    @ApiProperty({ type: [String] })
    categories: string[];
    @ApiProperty()
    currency: string;
    @ApiProperty({ type: [String] })
    targetMarket: string[];
    @ApiProperty({ type: AmountFromSearchStandardResponseDTO })
    amountFrom: AmountFromSearchStandardResponseDTO;
    @ApiProperty({ type: [ImageStandardResponseDTO] })
    images: ImageStandardResponseDTO[];
    @ApiProperty({ type: CancellationPolicyTitle })
    cancellationPolicy: CancellationPolicyTitle;
    @ApiProperty()
    isOpenDated: boolean;
    @ApiProperty()
    isInstantConfirmation: boolean;
    @ApiProperty()
    isBestSeller: boolean;
}

export class SearchStandardResponseDTO {
    @ApiProperty()
    success: boolean;
    @ApiProperty()
    identifier: string;
    @ApiProperty({ type: [ActivitySearchStandardResponseDTO] })
    data: ActivitySearchStandardResponseDTO[];
    @ApiProperty({ type: PaginationSearchStandardRequestDTO })
    pagination: PaginationSearchStandardRequestDTO;
}
