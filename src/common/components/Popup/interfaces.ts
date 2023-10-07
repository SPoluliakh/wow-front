export interface SubmitActionsInterface {
  resetForm: () => void;
}

export interface SubmitValuesInterface {
  name: string;
  phone: string;
}

export interface BookSubmitValuesInterface {
  location: string;
  time: string;
  data: string;
}

export type SubmitInterface = (
  values: SubmitValuesInterface,
  actions: SubmitActionsInterface
) => void;

export type BookSubmitInterface = (
  values: BookSubmitValuesInterface,
  actions: SubmitActionsInterface
) => void;
