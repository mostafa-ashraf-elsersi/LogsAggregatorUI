export interface LogItemDto {
  timestamp: Date;
  connectionId: string;
  machineName: string;
  level: string;
  exception: string;
  requestPath: string;
  requestMethod: string;
  statusCode: number;
  elapsed: number;
}
