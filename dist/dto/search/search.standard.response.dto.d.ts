import { CancellationPolicyTitle, ImageStandardResponseDTO } from '../../shared/shared.type';
export declare class PaginationSearchStandardRequestDTO {
    itemsPerPage: number;
    page: number;
    totalItems: number;
    itemsCount: number;
}
export declare class AmountFromSearchStandardResponseDTO {
    amount: number;
    nettAmount: number;
}
export declare class ActivitySearchStandardResponseDTO {
    activityId: string;
    activityName: string;
    activityType: string;
    country: string;
    destination: string;
    latitude: number;
    longitude: number;
    duration: number;
    categories: string[];
    currency: string;
    targetMarket: string[];
    amountFrom: AmountFromSearchStandardResponseDTO;
    images: ImageStandardResponseDTO[];
    cancellationPolicy: CancellationPolicyTitle;
    isOpenDated: boolean;
    isInstantConfirmation: boolean;
    isBestSeller: boolean;
}
export declare class SearchStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: ActivitySearchStandardResponseDTO[];
    pagination: PaginationSearchStandardRequestDTO;
}
