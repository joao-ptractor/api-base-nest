import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "application" | "role" | "userApplication" | "part" | "partImages" | "employee" | "sector" | "operation" | "position" | "leader" | "designation" | "auditLogs";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Application: {
            payload: Prisma.$ApplicationPayload<ExtArgs>;
            fields: Prisma.ApplicationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ApplicationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                findFirst: {
                    args: Prisma.ApplicationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                findMany: {
                    args: Prisma.ApplicationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
                };
                create: {
                    args: Prisma.ApplicationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                createMany: {
                    args: Prisma.ApplicationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
                };
                delete: {
                    args: Prisma.ApplicationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                update: {
                    args: Prisma.ApplicationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                deleteMany: {
                    args: Prisma.ApplicationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ApplicationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
                };
                upsert: {
                    args: Prisma.ApplicationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApplicationPayload>;
                };
                aggregate: {
                    args: Prisma.ApplicationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApplication>;
                };
                groupBy: {
                    args: Prisma.ApplicationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApplicationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ApplicationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApplicationCountAggregateOutputType> | number;
                };
            };
        };
        Role: {
            payload: Prisma.$RolePayload<ExtArgs>;
            fields: Prisma.RoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findFirst: {
                    args: Prisma.RoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findMany: {
                    args: Prisma.RoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                create: {
                    args: Prisma.RoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                createMany: {
                    args: Prisma.RoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                delete: {
                    args: Prisma.RoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                update: {
                    args: Prisma.RoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                deleteMany: {
                    args: Prisma.RoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                upsert: {
                    args: Prisma.RoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                aggregate: {
                    args: Prisma.RoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole>;
                };
                groupBy: {
                    args: Prisma.RoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleCountAggregateOutputType> | number;
                };
            };
        };
        UserApplication: {
            payload: Prisma.$UserApplicationPayload<ExtArgs>;
            fields: Prisma.UserApplicationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserApplicationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserApplicationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload>;
                };
                findFirst: {
                    args: Prisma.UserApplicationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserApplicationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload>;
                };
                findMany: {
                    args: Prisma.UserApplicationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload>[];
                };
                create: {
                    args: Prisma.UserApplicationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload>;
                };
                createMany: {
                    args: Prisma.UserApplicationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserApplicationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload>[];
                };
                delete: {
                    args: Prisma.UserApplicationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload>;
                };
                update: {
                    args: Prisma.UserApplicationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload>;
                };
                deleteMany: {
                    args: Prisma.UserApplicationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserApplicationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserApplicationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload>[];
                };
                upsert: {
                    args: Prisma.UserApplicationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserApplicationPayload>;
                };
                aggregate: {
                    args: Prisma.UserApplicationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserApplication>;
                };
                groupBy: {
                    args: Prisma.UserApplicationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserApplicationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserApplicationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserApplicationCountAggregateOutputType> | number;
                };
            };
        };
        Part: {
            payload: Prisma.$PartPayload<ExtArgs>;
            fields: Prisma.PartFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                findFirst: {
                    args: Prisma.PartFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                findMany: {
                    args: Prisma.PartFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>[];
                };
                create: {
                    args: Prisma.PartCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                createMany: {
                    args: Prisma.PartCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>[];
                };
                delete: {
                    args: Prisma.PartDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                update: {
                    args: Prisma.PartUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                deleteMany: {
                    args: Prisma.PartDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>[];
                };
                upsert: {
                    args: Prisma.PartUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartPayload>;
                };
                aggregate: {
                    args: Prisma.PartAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePart>;
                };
                groupBy: {
                    args: Prisma.PartGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartCountAggregateOutputType> | number;
                };
            };
        };
        PartImages: {
            payload: Prisma.$PartImagesPayload<ExtArgs>;
            fields: Prisma.PartImagesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PartImagesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PartImagesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload>;
                };
                findFirst: {
                    args: Prisma.PartImagesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PartImagesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload>;
                };
                findMany: {
                    args: Prisma.PartImagesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload>[];
                };
                create: {
                    args: Prisma.PartImagesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload>;
                };
                createMany: {
                    args: Prisma.PartImagesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PartImagesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload>[];
                };
                delete: {
                    args: Prisma.PartImagesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload>;
                };
                update: {
                    args: Prisma.PartImagesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload>;
                };
                deleteMany: {
                    args: Prisma.PartImagesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PartImagesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PartImagesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload>[];
                };
                upsert: {
                    args: Prisma.PartImagesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PartImagesPayload>;
                };
                aggregate: {
                    args: Prisma.PartImagesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePartImages>;
                };
                groupBy: {
                    args: Prisma.PartImagesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartImagesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PartImagesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PartImagesCountAggregateOutputType> | number;
                };
            };
        };
        Employee: {
            payload: Prisma.$EmployeePayload<ExtArgs>;
            fields: Prisma.EmployeeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmployeeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                findFirst: {
                    args: Prisma.EmployeeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                findMany: {
                    args: Prisma.EmployeeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>[];
                };
                create: {
                    args: Prisma.EmployeeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                createMany: {
                    args: Prisma.EmployeeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>[];
                };
                delete: {
                    args: Prisma.EmployeeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                update: {
                    args: Prisma.EmployeeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                deleteMany: {
                    args: Prisma.EmployeeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmployeeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>[];
                };
                upsert: {
                    args: Prisma.EmployeeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployeePayload>;
                };
                aggregate: {
                    args: Prisma.EmployeeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmployee>;
                };
                groupBy: {
                    args: Prisma.EmployeeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployeeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmployeeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployeeCountAggregateOutputType> | number;
                };
            };
        };
        Sector: {
            payload: Prisma.$SectorPayload<ExtArgs>;
            fields: Prisma.SectorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SectorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SectorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload>;
                };
                findFirst: {
                    args: Prisma.SectorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SectorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload>;
                };
                findMany: {
                    args: Prisma.SectorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload>[];
                };
                create: {
                    args: Prisma.SectorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload>;
                };
                createMany: {
                    args: Prisma.SectorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SectorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload>[];
                };
                delete: {
                    args: Prisma.SectorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload>;
                };
                update: {
                    args: Prisma.SectorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload>;
                };
                deleteMany: {
                    args: Prisma.SectorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SectorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SectorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload>[];
                };
                upsert: {
                    args: Prisma.SectorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SectorPayload>;
                };
                aggregate: {
                    args: Prisma.SectorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSector>;
                };
                groupBy: {
                    args: Prisma.SectorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SectorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SectorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SectorCountAggregateOutputType> | number;
                };
            };
        };
        Operation: {
            payload: Prisma.$OperationPayload<ExtArgs>;
            fields: Prisma.OperationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OperationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OperationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                findFirst: {
                    args: Prisma.OperationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OperationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                findMany: {
                    args: Prisma.OperationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[];
                };
                create: {
                    args: Prisma.OperationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                createMany: {
                    args: Prisma.OperationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OperationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[];
                };
                delete: {
                    args: Prisma.OperationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                update: {
                    args: Prisma.OperationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                deleteMany: {
                    args: Prisma.OperationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OperationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OperationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>[];
                };
                upsert: {
                    args: Prisma.OperationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OperationPayload>;
                };
                aggregate: {
                    args: Prisma.OperationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOperation>;
                };
                groupBy: {
                    args: Prisma.OperationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OperationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OperationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OperationCountAggregateOutputType> | number;
                };
            };
        };
        Position: {
            payload: Prisma.$PositionPayload<ExtArgs>;
            fields: Prisma.PositionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PositionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload>;
                };
                findFirst: {
                    args: Prisma.PositionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload>;
                };
                findMany: {
                    args: Prisma.PositionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload>[];
                };
                create: {
                    args: Prisma.PositionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload>;
                };
                createMany: {
                    args: Prisma.PositionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload>[];
                };
                delete: {
                    args: Prisma.PositionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload>;
                };
                update: {
                    args: Prisma.PositionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload>;
                };
                deleteMany: {
                    args: Prisma.PositionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PositionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PositionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload>[];
                };
                upsert: {
                    args: Prisma.PositionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PositionPayload>;
                };
                aggregate: {
                    args: Prisma.PositionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePosition>;
                };
                groupBy: {
                    args: Prisma.PositionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PositionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PositionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PositionCountAggregateOutputType> | number;
                };
            };
        };
        Leader: {
            payload: Prisma.$LeaderPayload<ExtArgs>;
            fields: Prisma.LeaderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeaderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeaderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload>;
                };
                findFirst: {
                    args: Prisma.LeaderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeaderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload>;
                };
                findMany: {
                    args: Prisma.LeaderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload>[];
                };
                create: {
                    args: Prisma.LeaderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload>;
                };
                createMany: {
                    args: Prisma.LeaderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeaderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload>[];
                };
                delete: {
                    args: Prisma.LeaderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload>;
                };
                update: {
                    args: Prisma.LeaderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload>;
                };
                deleteMany: {
                    args: Prisma.LeaderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeaderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeaderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload>[];
                };
                upsert: {
                    args: Prisma.LeaderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeaderPayload>;
                };
                aggregate: {
                    args: Prisma.LeaderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLeader>;
                };
                groupBy: {
                    args: Prisma.LeaderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeaderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaderCountAggregateOutputType> | number;
                };
            };
        };
        Designation: {
            payload: Prisma.$DesignationPayload<ExtArgs>;
            fields: Prisma.DesignationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DesignationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DesignationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload>;
                };
                findFirst: {
                    args: Prisma.DesignationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DesignationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload>;
                };
                findMany: {
                    args: Prisma.DesignationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload>[];
                };
                create: {
                    args: Prisma.DesignationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload>;
                };
                createMany: {
                    args: Prisma.DesignationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DesignationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload>[];
                };
                delete: {
                    args: Prisma.DesignationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload>;
                };
                update: {
                    args: Prisma.DesignationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload>;
                };
                deleteMany: {
                    args: Prisma.DesignationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DesignationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DesignationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload>[];
                };
                upsert: {
                    args: Prisma.DesignationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DesignationPayload>;
                };
                aggregate: {
                    args: Prisma.DesignationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDesignation>;
                };
                groupBy: {
                    args: Prisma.DesignationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DesignationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DesignationCountAggregateOutputType> | number;
                };
            };
        };
        AuditLogs: {
            payload: Prisma.$AuditLogsPayload<ExtArgs>;
            fields: Prisma.AuditLogsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload>[];
                };
                create: {
                    args: Prisma.AuditLogsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload>;
                };
                update: {
                    args: Prisma.AuditLogsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogsPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLogs>;
                };
                groupBy: {
                    args: Prisma.AuditLogsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumUNITFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UNIT'>;
export type ListEnumUNITFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UNIT[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumLOGACTIONSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LOGACTIONS'>;
export type ListEnumLOGACTIONSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LOGACTIONS[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    application?: Prisma.ApplicationOmit;
    role?: Prisma.RoleOmit;
    userApplication?: Prisma.UserApplicationOmit;
    part?: Prisma.PartOmit;
    partImages?: Prisma.PartImagesOmit;
    employee?: Prisma.EmployeeOmit;
    sector?: Prisma.SectorOmit;
    operation?: Prisma.OperationOmit;
    position?: Prisma.PositionOmit;
    leader?: Prisma.LeaderOmit;
    designation?: Prisma.DesignationOmit;
    auditLogs?: Prisma.AuditLogsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
