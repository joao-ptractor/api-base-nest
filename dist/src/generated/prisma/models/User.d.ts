import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
    employeeId: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
    employeeId: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    cardNumber: string | null;
    unit: $Enums.UNIT | null;
    password: string | null;
    employeeId: number | null;
    firstLogin: boolean | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    cardNumber: string | null;
    unit: $Enums.UNIT | null;
    password: string | null;
    employeeId: number | null;
    firstLogin: boolean | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    cardNumber: number;
    unit: number;
    password: number;
    employeeId: number;
    firstLogin: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
    employeeId?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
    employeeId?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    cardNumber?: true;
    unit?: true;
    password?: true;
    employeeId?: true;
    firstLogin?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    cardNumber?: true;
    unit?: true;
    password?: true;
    employeeId?: true;
    firstLogin?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    cardNumber?: true;
    unit?: true;
    password?: true;
    employeeId?: true;
    firstLogin?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    email: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    employeeId: number;
    firstLogin: boolean;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    cardNumber?: Prisma.StringFilter<"User"> | string;
    unit?: Prisma.EnumUNITFilter<"User"> | $Enums.UNIT;
    password?: Prisma.StringFilter<"User"> | string;
    employeeId?: Prisma.IntFilter<"User"> | number;
    firstLogin?: Prisma.BoolFilter<"User"> | boolean;
    status?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    UserApplication?: Prisma.UserApplicationListRelationFilter;
    auditLogs?: Prisma.AuditLogsListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    firstLogin?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    UserApplication?: Prisma.UserApplicationOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogsOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    cardNumber_unit?: Prisma.UserCardNumberUnitCompoundUniqueInput;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    cardNumber?: Prisma.StringFilter<"User"> | string;
    unit?: Prisma.EnumUNITFilter<"User"> | $Enums.UNIT;
    password?: Prisma.StringFilter<"User"> | string;
    employeeId?: Prisma.IntFilter<"User"> | number;
    firstLogin?: Prisma.BoolFilter<"User"> | boolean;
    status?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    UserApplication?: Prisma.UserApplicationListRelationFilter;
    auditLogs?: Prisma.AuditLogsListRelationFilter;
}, "id" | "email" | "cardNumber_unit">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    firstLogin?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    email?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    cardNumber?: Prisma.StringWithAggregatesFilter<"User"> | string;
    unit?: Prisma.EnumUNITWithAggregatesFilter<"User"> | $Enums.UNIT;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    employeeId?: Prisma.IntWithAggregatesFilter<"User"> | number;
    firstLogin?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    status?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
};
export type UserCreateInput = {
    email?: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    employee: Prisma.EmployeeCreateNestedOneWithoutUserInput;
    UserApplication?: Prisma.UserApplicationCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    email?: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    employeeId: number;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    UserApplication?: Prisma.UserApplicationUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutUserNestedInput;
    UserApplication?: Prisma.UserApplicationUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UserApplication?: Prisma.UserApplicationUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    email?: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    employeeId: number;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateManyMutationInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCardNumberUnitCompoundUniqueInput = {
    cardNumber: string;
    unit: $Enums.UNIT;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    firstLogin?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    firstLogin?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    firstLogin?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumUNITFieldUpdateOperationsInput = {
    set?: $Enums.UNIT;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutUserApplicationInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserApplicationInput, Prisma.UserUncheckedCreateWithoutUserApplicationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserApplicationInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutUserApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutUserApplicationInput, Prisma.UserUncheckedCreateWithoutUserApplicationInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutUserApplicationInput;
    upsert?: Prisma.UserUpsertWithoutUserApplicationInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutUserApplicationInput, Prisma.UserUpdateWithoutUserApplicationInput>, Prisma.UserUncheckedUpdateWithoutUserApplicationInput>;
};
export type UserCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEmployeeInput, Prisma.UserUncheckedCreateWithoutEmployeeInput> | Prisma.UserCreateWithoutEmployeeInput[] | Prisma.UserUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEmployeeInput | Prisma.UserCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.UserCreateManyEmployeeInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEmployeeInput, Prisma.UserUncheckedCreateWithoutEmployeeInput> | Prisma.UserCreateWithoutEmployeeInput[] | Prisma.UserUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEmployeeInput | Prisma.UserCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.UserCreateManyEmployeeInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEmployeeInput, Prisma.UserUncheckedCreateWithoutEmployeeInput> | Prisma.UserCreateWithoutEmployeeInput[] | Prisma.UserUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEmployeeInput | Prisma.UserCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.UserUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.UserCreateManyEmployeeInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.UserUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutEmployeeInput | Prisma.UserUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEmployeeInput, Prisma.UserUncheckedCreateWithoutEmployeeInput> | Prisma.UserCreateWithoutEmployeeInput[] | Prisma.UserUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEmployeeInput | Prisma.UserCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.UserUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.UserCreateManyEmployeeInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.UserUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutEmployeeInput | Prisma.UserUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.UserUpsertWithoutAuditLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.UserUpdateWithoutAuditLogsInput>, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserCreateWithoutUserApplicationInput = {
    email?: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    employee: Prisma.EmployeeCreateNestedOneWithoutUserInput;
    auditLogs?: Prisma.AuditLogsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutUserApplicationInput = {
    id?: number;
    email?: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    employeeId: number;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    auditLogs?: Prisma.AuditLogsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutUserApplicationInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserApplicationInput, Prisma.UserUncheckedCreateWithoutUserApplicationInput>;
};
export type UserUpsertWithoutUserApplicationInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutUserApplicationInput, Prisma.UserUncheckedUpdateWithoutUserApplicationInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutUserApplicationInput, Prisma.UserUncheckedCreateWithoutUserApplicationInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutUserApplicationInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutUserApplicationInput, Prisma.UserUncheckedUpdateWithoutUserApplicationInput>;
};
export type UserUpdateWithoutUserApplicationInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutUserApplicationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    auditLogs?: Prisma.AuditLogsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutEmployeeInput = {
    email?: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    UserApplication?: Prisma.UserApplicationCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogsCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutEmployeeInput = {
    id?: number;
    email?: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    UserApplication?: Prisma.UserApplicationUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogsUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEmployeeInput, Prisma.UserUncheckedCreateWithoutEmployeeInput>;
};
export type UserCreateManyEmployeeInputEnvelope = {
    data: Prisma.UserCreateManyEmployeeInput | Prisma.UserCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutEmployeeInput, Prisma.UserUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEmployeeInput, Prisma.UserUncheckedCreateWithoutEmployeeInput>;
};
export type UserUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEmployeeInput, Prisma.UserUncheckedUpdateWithoutEmployeeInput>;
};
export type UserUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutEmployeeInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    email?: Prisma.StringNullableFilter<"User"> | string | null;
    cardNumber?: Prisma.StringFilter<"User"> | string;
    unit?: Prisma.EnumUNITFilter<"User"> | $Enums.UNIT;
    password?: Prisma.StringFilter<"User"> | string;
    employeeId?: Prisma.IntFilter<"User"> | number;
    firstLogin?: Prisma.BoolFilter<"User"> | boolean;
    status?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
};
export type UserCreateWithoutAuditLogsInput = {
    email?: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    employee: Prisma.EmployeeCreateNestedOneWithoutUserInput;
    UserApplication?: Prisma.UserApplicationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: number;
    email?: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    employeeId: number;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    UserApplication?: Prisma.UserApplicationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
};
export type UserUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserUpdateWithoutAuditLogsInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutUserNestedInput;
    UserApplication?: Prisma.UserApplicationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UserApplication?: Prisma.UserApplicationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyEmployeeInput = {
    id?: number;
    email?: string | null;
    cardNumber: string;
    unit: $Enums.UNIT;
    password: string;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type UserUpdateWithoutEmployeeInput = {
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UserApplication?: Prisma.UserApplicationUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogsUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    UserApplication?: Prisma.UserApplicationUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogsUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstLogin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCountOutputType = {
    UserApplication: number;
    auditLogs: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    UserApplication?: boolean | UserCountOutputTypeCountUserApplicationArgs;
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountUserApplicationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserApplicationWhereInput;
};
export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogsWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    cardNumber?: boolean;
    unit?: boolean;
    password?: boolean;
    employeeId?: boolean;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    UserApplication?: boolean | Prisma.User$UserApplicationArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    cardNumber?: boolean;
    unit?: boolean;
    password?: boolean;
    employeeId?: boolean;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    cardNumber?: boolean;
    unit?: boolean;
    password?: boolean;
    employeeId?: boolean;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    cardNumber?: boolean;
    unit?: boolean;
    password?: boolean;
    employeeId?: boolean;
    firstLogin?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "cardNumber" | "unit" | "password" | "employeeId" | "firstLogin" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    UserApplication?: boolean | Prisma.User$UserApplicationArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        UserApplication: Prisma.$UserApplicationPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string | null;
        cardNumber: string;
        unit: $Enums.UNIT;
        password: string;
        employeeId: number;
        firstLogin: boolean;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    UserApplication<T extends Prisma.User$UserApplicationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$UserApplicationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.User$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly cardNumber: Prisma.FieldRef<"User", 'String'>;
    readonly unit: Prisma.FieldRef<"User", 'UNIT'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly employeeId: Prisma.FieldRef<"User", 'Int'>;
    readonly firstLogin: Prisma.FieldRef<"User", 'Boolean'>;
    readonly status: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$UserApplicationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserApplicationSelect<ExtArgs> | null;
    omit?: Prisma.UserApplicationOmit<ExtArgs> | null;
    include?: Prisma.UserApplicationInclude<ExtArgs> | null;
    where?: Prisma.UserApplicationWhereInput;
    orderBy?: Prisma.UserApplicationOrderByWithRelationInput | Prisma.UserApplicationOrderByWithRelationInput[];
    cursor?: Prisma.UserApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserApplicationScalarFieldEnum | Prisma.UserApplicationScalarFieldEnum[];
};
export type User$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogsSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogsOmit<ExtArgs> | null;
    include?: Prisma.AuditLogsInclude<ExtArgs> | null;
    where?: Prisma.AuditLogsWhereInput;
    orderBy?: Prisma.AuditLogsOrderByWithRelationInput | Prisma.AuditLogsOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogsScalarFieldEnum | Prisma.AuditLogsScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
