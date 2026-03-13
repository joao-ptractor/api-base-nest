import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Application: "Application";
    readonly Role: "Role";
    readonly UserApplication: "UserApplication";
    readonly Part: "Part";
    readonly PartImages: "PartImages";
    readonly Employee: "Employee";
    readonly Sector: "Sector";
    readonly Operation: "Operation";
    readonly Position: "Position";
    readonly Leader: "Leader";
    readonly Designation: "Designation";
    readonly AuditLogs: "AuditLogs";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly cardNumber: "cardNumber";
    readonly unit: "unit";
    readonly password: "password";
    readonly employeeId: "employeeId";
    readonly firstLogin: "firstLogin";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly appName: "appName";
    readonly key: "key";
    readonly revoked: "revoked";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly applicationId: "applicationId";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const UserApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly applicationId: "applicationId";
    readonly roleId: "roleId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserApplicationScalarFieldEnum = (typeof UserApplicationScalarFieldEnum)[keyof typeof UserApplicationScalarFieldEnum];
export declare const PartScalarFieldEnum: {
    readonly id: "id";
    readonly partCode: "partCode";
    readonly partNumber: "partNumber";
    readonly description: "description";
    readonly group: "group";
    readonly client: "client";
    readonly serverPath: "serverPath";
    readonly localPath: "localPath";
    readonly review: "review";
    readonly reviewChanged: "reviewChanged";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum];
export declare const PartImagesScalarFieldEnum: {
    readonly id: "id";
    readonly partId: "partId";
    readonly path: "path";
    readonly name: "name";
    readonly ripSelected: "ripSelected";
    readonly isDeletable: "isDeletable";
};
export type PartImagesScalarFieldEnum = (typeof PartImagesScalarFieldEnum)[keyof typeof PartImagesScalarFieldEnum];
export declare const EmployeeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly cardNumber: "cardNumber";
    readonly unit: "unit";
    readonly status: "status";
    readonly firstEntry: "firstEntry";
    readonly firstExit: "firstExit";
    readonly secondEntry: "secondEntry";
    readonly secondExit: "secondExit";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];
export declare const SectorScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly costCenter: "costCenter";
    readonly normalizedName: "normalizedName";
    readonly operationId: "operationId";
    readonly leaderDayId: "leaderDayId";
    readonly leaderNightId: "leaderNightId";
    readonly supervisorDayId: "supervisorDayId";
    readonly supervisorNightId: "supervisorNightId";
    readonly managerId: "managerId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SectorScalarFieldEnum = (typeof SectorScalarFieldEnum)[keyof typeof SectorScalarFieldEnum];
export declare const OperationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly value: "value";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type OperationScalarFieldEnum = (typeof OperationScalarFieldEnum)[keyof typeof OperationScalarFieldEnum];
export declare const PositionScalarFieldEnum: {
    readonly id: "id";
    readonly value: "value";
    readonly name: "name";
    readonly normalizedName: "normalizedName";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum];
export declare const LeaderScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly employeeId: "employeeId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LeaderScalarFieldEnum = (typeof LeaderScalarFieldEnum)[keyof typeof LeaderScalarFieldEnum];
export declare const DesignationScalarFieldEnum: {
    readonly id: "id";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly employeeId: "employeeId";
    readonly sectorId: "sectorId";
    readonly positionId: "positionId";
    readonly leader: "leader";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DesignationScalarFieldEnum = (typeof DesignationScalarFieldEnum)[keyof typeof DesignationScalarFieldEnum];
export declare const AuditLogsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly applicationId: "applicationId";
    readonly date: "date";
    readonly url: "url";
    readonly action: "action";
    readonly description: "description";
};
export type AuditLogsScalarFieldEnum = (typeof AuditLogsScalarFieldEnum)[keyof typeof AuditLogsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
