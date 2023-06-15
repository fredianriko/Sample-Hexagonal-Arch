import { Code } from "../Code/code";
import { ApiResponseInterface } from "./ApiResponse-interface";
export type Nullable<T> = T | null;

export class ApiResponse<TData> implements ApiResponseInterface {
  public readonly code: number;
  public readonly message: string;
  public readonly timestamps: number;
  public readonly data: Nullable<TData>;

  private constructor(code: number, message: string, data?: TData) {
    this.code = code;
    this.message = message;
    this.data = data || null;
    this.timestamps = Date.now();
  }

  public static success<TData>(code?: number, message?: string, data?: TData): ApiResponse<TData> {
    const resultCode: number = Code.SUCCESS.code;
    const resultMessage: string = message || Code.SUCCESS.message;

    return new ApiResponse(resultCode, resultMessage, data);
  }

  public static error<TData>(code?: number, message?: string, data?: TData): ApiResponse<TData> {
    const resultCode: number = code || Code.INTERNAL_ERROR.code;
    const resultMessage: string = message || Code.INTERNAL_ERROR.message;

    return new ApiResponse(resultCode, resultMessage, data);
  }
}
