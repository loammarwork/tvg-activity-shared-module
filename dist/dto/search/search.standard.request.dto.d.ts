import { Language } from '../../shared/shared.type';
export declare class PaginationSearchStandardRequestBodyDTO {
    itemsPerPage: number;
    page: number;
}
export declare class SearchStandardRequestBodyDTO {
    keyword: string;
    from: string;
    to: string;
    language: Language;
    pagination: PaginationSearchStandardRequestBodyDTO;
}
