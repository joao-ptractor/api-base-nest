export interface RequestApplication {
  id: number;
  appName: string;
  key: string;
  revoked: boolean;
  createdAt: Date;
  updatedAt: Date;
}
