"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.AuditLogsScalarFieldEnum = exports.DesignationScalarFieldEnum = exports.LeaderScalarFieldEnum = exports.PositionScalarFieldEnum = exports.OperationScalarFieldEnum = exports.SectorScalarFieldEnum = exports.EmployeeScalarFieldEnum = exports.PartImagesScalarFieldEnum = exports.PartScalarFieldEnum = exports.UserApplicationScalarFieldEnum = exports.RoleScalarFieldEnum = exports.ApplicationScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Application: 'Application',
    Role: 'Role',
    UserApplication: 'UserApplication',
    Part: 'Part',
    PartImages: 'PartImages',
    Employee: 'Employee',
    Sector: 'Sector',
    Operation: 'Operation',
    Position: 'Position',
    Leader: 'Leader',
    Designation: 'Designation',
    AuditLogs: 'AuditLogs'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    cardNumber: 'cardNumber',
    unit: 'unit',
    password: 'password',
    employeeId: 'employeeId',
    firstLogin: 'firstLogin',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.ApplicationScalarFieldEnum = {
    id: 'id',
    appName: 'appName',
    key: 'key',
    revoked: 'revoked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RoleScalarFieldEnum = {
    id: 'id',
    applicationId: 'applicationId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserApplicationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    applicationId: 'applicationId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PartScalarFieldEnum = {
    id: 'id',
    partCode: 'partCode',
    partNumber: 'partNumber',
    description: 'description',
    group: 'group',
    client: 'client',
    serverPath: 'serverPath',
    localPath: 'localPath',
    review: 'review',
    reviewChanged: 'reviewChanged',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PartImagesScalarFieldEnum = {
    id: 'id',
    partId: 'partId',
    path: 'path',
    name: 'name',
    ripSelected: 'ripSelected',
    isDeletable: 'isDeletable'
};
exports.EmployeeScalarFieldEnum = {
    id: 'id',
    name: 'name',
    cardNumber: 'cardNumber',
    unit: 'unit',
    status: 'status',
    firstEntry: 'firstEntry',
    firstExit: 'firstExit',
    secondEntry: 'secondEntry',
    secondExit: 'secondExit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SectorScalarFieldEnum = {
    id: 'id',
    name: 'name',
    costCenter: 'costCenter',
    normalizedName: 'normalizedName',
    operationId: 'operationId',
    leaderDayId: 'leaderDayId',
    leaderNightId: 'leaderNightId',
    supervisorDayId: 'supervisorDayId',
    supervisorNightId: 'supervisorNightId',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OperationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.PositionScalarFieldEnum = {
    id: 'id',
    value: 'value',
    name: 'name',
    normalizedName: 'normalizedName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.LeaderScalarFieldEnum = {
    id: 'id',
    name: 'name',
    employeeId: 'employeeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.DesignationScalarFieldEnum = {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    employeeId: 'employeeId',
    sectorId: 'sectorId',
    positionId: 'positionId',
    leader: 'leader',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AuditLogsScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    applicationId: 'applicationId',
    date: 'date',
    url: 'url',
    action: 'action',
    description: 'description'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map