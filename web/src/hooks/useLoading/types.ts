export interface ILoadingContext {
  isLoading: boolean;
  openLoading(): void;
  closeLoading(): void;
  setLoading(state: boolean): void;
}
