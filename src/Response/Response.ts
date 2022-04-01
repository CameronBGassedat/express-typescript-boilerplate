export class ApiResponse {
    constructor(public response: string, public data?: Record<string, any>, public error?: Error) {
      this.response = response;
      this.data = data;
      this.error = error;
    }
}