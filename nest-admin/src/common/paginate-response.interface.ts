export interface IPaginateResponse {
  data: any[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
}
