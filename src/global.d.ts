interface Action {
  type: string;
  payload: Record<string, any>;
}

interface ReducerStateType {
  processing: boolean;
  processed: boolean;
  success: boolean;
  errors: Record<string, any>;
  message?: string;
}

interface ManyObjectState<T = Record<string, any>> extends ReducerStateType {
  data: T[];
}

interface SingleObjectState<T = Record<string, any>> extends ReducerStateType {
  data: T;
}

interface Payload {
  data?: Record<string, any> | Record<string, any>[];
  errors?: Record<string, any>[];
  pagination?: PaginationType;
}

interface Action {
  type: string;
  payload?: Extract<Payload, Record<string, any>>;
}

type PageType = {
  path: string;
  component: React.FC<any>;
  exact: boolean;
  [key: string]: any;
};
