import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type UserApplicationModel = runtime.Types.Result.DefaultSelection<Prisma.$UserApplicationPayload>;
export type AggregateUserApplication = {
    _count: UserApplicationCountAggregateOutputType | null;
    _avg: UserApplicationAvgAggregateOutputType | null;
    _sum: UserApplicationSumAggregateOutputType | null;
    _min: UserApplicationMinAggregateOutputType | null;
    _max: UserApplicationMaxAggregateOutputType | null;
};
export type UserApplicationAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    applicationId: number | null;
    roleId: number | null;
};
export type UserApplicationSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    applicationId: number | null;
    roleId: number | null;
};
export type UserApplicationMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    applicationId: number | null;
    roleId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserApplicationMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    applicationId: number | null;
    roleId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserApplicationCountAggregateOutputType = {
    id: number;
    userId: number;
    applicationId: number;
    roleId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserApplicationAvgAggregateInputType = {
    id?: true;
    userId?: true;
    applicationId?: true;
    roleId?: true;
};
export type UserApplicationSumAggregateInputType = {
    id?: true;
    userId?: true;
    applicationId?: true;
    roleId?: true;
};
export type UserApplicationMinAggregateInputType = {
    id?: true;
    userId?: true;
    applicationId?: true;
    roleId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserApplicationMaxAggregateInputType = {
    id?: true;
    userId?: true;
    applicationId?: true;
    roleId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserApplicationCountAggregateInputType = {
    id?: true;
    userId?: true;
    applicationId?: true;
    roleId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserApplicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserApplicationWhereInput;
    orderBy?: Prisma.UserApplicationOrderByWithRelationInput | Prisma.UserApplicationOrderByWithRelationInput[];
    cursor?: Prisma.UserApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserApplicationCountAggregateInputType;
    _avg?: UserApplicationAvgAggregateInputType;
    _sum?: UserApplicationSumAggregateInputType;
    _min?: UserApplicationMinAggregateInputType;
    _max?: UserApplicationMaxAggregateInputType;
};
export type GetUserApplicationAggregateType<T extends UserApplicationAggregateArgs> = {
    [P in keyof T & keyof AggregateUserApplication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserApplication[P]> : Prisma.GetScalarType<T[P], AggregateUserApplication[P]>;
};
export type UserApplicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserApplicationWhereInput;
    orderBy?: Prisma.UserApplicationOrderByWithAggregationInput | Prisma.UserApplicationOrderByWithAggregationInput[];
    by: Prisma.UserApplicationScalarFieldEnum[] | Prisma.UserApplicationScalarFieldEnum;
    having?: Prisma.UserApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserApplicationCountAggregateInputType | true;
    _avg?: UserApplicationAvgAggregateInputType;
    _sum?: UserApplicationSumAggregateInputType;
    _min?: UserApplicationMinAggregateInputType;
    _max?: UserApplicationMaxAggregateInputType;
};
export type UserApplicationGroupByOutputType = {
    id: number;
    userId: number;
    applicationId: number;
    roleId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: UserApplicationCountAggregateOutputType | null;
    _avg: UserApplicationAvgAggregateOutputType | null;
    _sum: UserApplicationSumAggregateOutputType | null;
    _min: UserApplicationMinAggregateOutputType | null;
    _max: UserApplicationMaxAggregateOutputType | null;
};
type GetUserApplicationGroupByPayload<T extends UserApplicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserApplicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserApplicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserApplicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserApplicationGroupByOutputType[P]>;
}>>;
export type UserApplicationWhereInput = {
    AND?: Prisma.UserApplicationWhereInput | Prisma.UserApplicationWhereInput[];
    OR?: Prisma.UserApplicationWhereInput[];
    NOT?: Prisma.UserApplicationWhereInput | Prisma.UserApplicationWhereInput[];
    id?: Prisma.IntFilter<"UserApplication"> | number;
    userId?: Prisma.IntFilter<"UserApplication"> | number;
    applicationId?: Prisma.IntFilter<"UserApplication"> | number;
    roleId?: Prisma.IntFilter<"UserApplication"> | number;
    createdAt?: Prisma.DateTimeFilter<"UserApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserApplication"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
    Role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
};
export type UserApplicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    Application?: Prisma.ApplicationOrderByWithRelationInput;
    Role?: Prisma.RoleOrderByWithRelationInput;
};
export type UserApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId_applicationId?: Prisma.UserApplicationUserIdApplicationIdCompoundUniqueInput;
    AND?: Prisma.UserApplicationWhereInput | Prisma.UserApplicationWhereInput[];
    OR?: Prisma.UserApplicationWhereInput[];
    NOT?: Prisma.UserApplicationWhereInput | Prisma.UserApplicationWhereInput[];
    userId?: Prisma.IntFilter<"UserApplication"> | number;
    applicationId?: Prisma.IntFilter<"UserApplication"> | number;
    roleId?: Prisma.IntFilter<"UserApplication"> | number;
    createdAt?: Prisma.DateTimeFilter<"UserApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserApplication"> | Date | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
    Role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
}, "id" | "userId_applicationId">;
export type UserApplicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserApplicationCountOrderByAggregateInput;
    _avg?: Prisma.UserApplicationAvgOrderByAggregateInput;
    _max?: Prisma.UserApplicationMaxOrderByAggregateInput;
    _min?: Prisma.UserApplicationMinOrderByAggregateInput;
    _sum?: Prisma.UserApplicationSumOrderByAggregateInput;
};
export type UserApplicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserApplicationScalarWhereWithAggregatesInput | Prisma.UserApplicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserApplicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserApplicationScalarWhereWithAggregatesInput | Prisma.UserApplicationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"UserApplication"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"UserApplication"> | number;
    applicationId?: Prisma.IntWithAggregatesFilter<"UserApplication"> | number;
    roleId?: Prisma.IntWithAggregatesFilter<"UserApplication"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UserApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"UserApplication"> | Date | string;
};
export type UserApplicationCreateInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutUserApplicationInput;
    Application: Prisma.ApplicationCreateNestedOneWithoutUserApplicationInput;
    Role: Prisma.RoleCreateNestedOneWithoutUserApplicationInput;
};
export type UserApplicationUncheckedCreateInput = {
    id?: number;
    userId: number;
    applicationId: number;
    roleId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserApplicationUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutUserApplicationNestedInput;
    Application?: Prisma.ApplicationUpdateOneRequiredWithoutUserApplicationNestedInput;
    Role?: Prisma.RoleUpdateOneRequiredWithoutUserApplicationNestedInput;
};
export type UserApplicationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    roleId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserApplicationCreateManyInput = {
    id?: number;
    userId: number;
    applicationId: number;
    roleId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserApplicationUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserApplicationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    roleId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserApplicationListRelationFilter = {
    every?: Prisma.UserApplicationWhereInput;
    some?: Prisma.UserApplicationWhereInput;
    none?: Prisma.UserApplicationWhereInput;
};
export type UserApplicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserApplicationUserIdApplicationIdCompoundUniqueInput = {
    userId: number;
    applicationId: number;
};
export type UserApplicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserApplicationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
};
export type UserApplicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserApplicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserApplicationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
};
export type UserApplicationCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutUserInput, Prisma.UserApplicationUncheckedCreateWithoutUserInput> | Prisma.UserApplicationCreateWithoutUserInput[] | Prisma.UserApplicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutUserInput | Prisma.UserApplicationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserApplicationCreateManyUserInputEnvelope;
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
};
export type UserApplicationUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutUserInput, Prisma.UserApplicationUncheckedCreateWithoutUserInput> | Prisma.UserApplicationCreateWithoutUserInput[] | Prisma.UserApplicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutUserInput | Prisma.UserApplicationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserApplicationCreateManyUserInputEnvelope;
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
};
export type UserApplicationUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutUserInput, Prisma.UserApplicationUncheckedCreateWithoutUserInput> | Prisma.UserApplicationCreateWithoutUserInput[] | Prisma.UserApplicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutUserInput | Prisma.UserApplicationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserApplicationUpsertWithWhereUniqueWithoutUserInput | Prisma.UserApplicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserApplicationCreateManyUserInputEnvelope;
    set?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    disconnect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    delete?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    update?: Prisma.UserApplicationUpdateWithWhereUniqueWithoutUserInput | Prisma.UserApplicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserApplicationUpdateManyWithWhereWithoutUserInput | Prisma.UserApplicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserApplicationScalarWhereInput | Prisma.UserApplicationScalarWhereInput[];
};
export type UserApplicationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutUserInput, Prisma.UserApplicationUncheckedCreateWithoutUserInput> | Prisma.UserApplicationCreateWithoutUserInput[] | Prisma.UserApplicationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutUserInput | Prisma.UserApplicationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserApplicationUpsertWithWhereUniqueWithoutUserInput | Prisma.UserApplicationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserApplicationCreateManyUserInputEnvelope;
    set?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    disconnect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    delete?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    update?: Prisma.UserApplicationUpdateWithWhereUniqueWithoutUserInput | Prisma.UserApplicationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserApplicationUpdateManyWithWhereWithoutUserInput | Prisma.UserApplicationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserApplicationScalarWhereInput | Prisma.UserApplicationScalarWhereInput[];
};
export type UserApplicationCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutApplicationInput, Prisma.UserApplicationUncheckedCreateWithoutApplicationInput> | Prisma.UserApplicationCreateWithoutApplicationInput[] | Prisma.UserApplicationUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutApplicationInput | Prisma.UserApplicationCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.UserApplicationCreateManyApplicationInputEnvelope;
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
};
export type UserApplicationUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutApplicationInput, Prisma.UserApplicationUncheckedCreateWithoutApplicationInput> | Prisma.UserApplicationCreateWithoutApplicationInput[] | Prisma.UserApplicationUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutApplicationInput | Prisma.UserApplicationCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.UserApplicationCreateManyApplicationInputEnvelope;
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
};
export type UserApplicationUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutApplicationInput, Prisma.UserApplicationUncheckedCreateWithoutApplicationInput> | Prisma.UserApplicationCreateWithoutApplicationInput[] | Prisma.UserApplicationUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutApplicationInput | Prisma.UserApplicationCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.UserApplicationUpsertWithWhereUniqueWithoutApplicationInput | Prisma.UserApplicationUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.UserApplicationCreateManyApplicationInputEnvelope;
    set?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    disconnect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    delete?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    update?: Prisma.UserApplicationUpdateWithWhereUniqueWithoutApplicationInput | Prisma.UserApplicationUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.UserApplicationUpdateManyWithWhereWithoutApplicationInput | Prisma.UserApplicationUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.UserApplicationScalarWhereInput | Prisma.UserApplicationScalarWhereInput[];
};
export type UserApplicationUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutApplicationInput, Prisma.UserApplicationUncheckedCreateWithoutApplicationInput> | Prisma.UserApplicationCreateWithoutApplicationInput[] | Prisma.UserApplicationUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutApplicationInput | Prisma.UserApplicationCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.UserApplicationUpsertWithWhereUniqueWithoutApplicationInput | Prisma.UserApplicationUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.UserApplicationCreateManyApplicationInputEnvelope;
    set?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    disconnect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    delete?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    update?: Prisma.UserApplicationUpdateWithWhereUniqueWithoutApplicationInput | Prisma.UserApplicationUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.UserApplicationUpdateManyWithWhereWithoutApplicationInput | Prisma.UserApplicationUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.UserApplicationScalarWhereInput | Prisma.UserApplicationScalarWhereInput[];
};
export type UserApplicationCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutRoleInput, Prisma.UserApplicationUncheckedCreateWithoutRoleInput> | Prisma.UserApplicationCreateWithoutRoleInput[] | Prisma.UserApplicationUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutRoleInput | Prisma.UserApplicationCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.UserApplicationCreateManyRoleInputEnvelope;
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
};
export type UserApplicationUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutRoleInput, Prisma.UserApplicationUncheckedCreateWithoutRoleInput> | Prisma.UserApplicationCreateWithoutRoleInput[] | Prisma.UserApplicationUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutRoleInput | Prisma.UserApplicationCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.UserApplicationCreateManyRoleInputEnvelope;
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
};
export type UserApplicationUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutRoleInput, Prisma.UserApplicationUncheckedCreateWithoutRoleInput> | Prisma.UserApplicationCreateWithoutRoleInput[] | Prisma.UserApplicationUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutRoleInput | Prisma.UserApplicationCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.UserApplicationUpsertWithWhereUniqueWithoutRoleInput | Prisma.UserApplicationUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.UserApplicationCreateManyRoleInputEnvelope;
    set?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    disconnect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    delete?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    update?: Prisma.UserApplicationUpdateWithWhereUniqueWithoutRoleInput | Prisma.UserApplicationUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.UserApplicationUpdateManyWithWhereWithoutRoleInput | Prisma.UserApplicationUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.UserApplicationScalarWhereInput | Prisma.UserApplicationScalarWhereInput[];
};
export type UserApplicationUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.UserApplicationCreateWithoutRoleInput, Prisma.UserApplicationUncheckedCreateWithoutRoleInput> | Prisma.UserApplicationCreateWithoutRoleInput[] | Prisma.UserApplicationUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.UserApplicationCreateOrConnectWithoutRoleInput | Prisma.UserApplicationCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.UserApplicationUpsertWithWhereUniqueWithoutRoleInput | Prisma.UserApplicationUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.UserApplicationCreateManyRoleInputEnvelope;
    set?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    disconnect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    delete?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    connect?: Prisma.UserApplicationWhereUniqueInput | Prisma.UserApplicationWhereUniqueInput[];
    update?: Prisma.UserApplicationUpdateWithWhereUniqueWithoutRoleInput | Prisma.UserApplicationUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.UserApplicationUpdateManyWithWhereWithoutRoleInput | Prisma.UserApplicationUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.UserApplicationScalarWhereInput | Prisma.UserApplicationScalarWhereInput[];
};
export type UserApplicationCreateWithoutUserInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Application: Prisma.ApplicationCreateNestedOneWithoutUserApplicationInput;
    Role: Prisma.RoleCreateNestedOneWithoutUserApplicationInput;
};
export type UserApplicationUncheckedCreateWithoutUserInput = {
    id?: number;
    applicationId: number;
    roleId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserApplicationCreateOrConnectWithoutUserInput = {
    where: Prisma.UserApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserApplicationCreateWithoutUserInput, Prisma.UserApplicationUncheckedCreateWithoutUserInput>;
};
export type UserApplicationCreateManyUserInputEnvelope = {
    data: Prisma.UserApplicationCreateManyUserInput | Prisma.UserApplicationCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserApplicationUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserApplicationUpdateWithoutUserInput, Prisma.UserApplicationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserApplicationCreateWithoutUserInput, Prisma.UserApplicationUncheckedCreateWithoutUserInput>;
};
export type UserApplicationUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserApplicationUpdateWithoutUserInput, Prisma.UserApplicationUncheckedUpdateWithoutUserInput>;
};
export type UserApplicationUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.UserApplicationUpdateManyMutationInput, Prisma.UserApplicationUncheckedUpdateManyWithoutUserInput>;
};
export type UserApplicationScalarWhereInput = {
    AND?: Prisma.UserApplicationScalarWhereInput | Prisma.UserApplicationScalarWhereInput[];
    OR?: Prisma.UserApplicationScalarWhereInput[];
    NOT?: Prisma.UserApplicationScalarWhereInput | Prisma.UserApplicationScalarWhereInput[];
    id?: Prisma.IntFilter<"UserApplication"> | number;
    userId?: Prisma.IntFilter<"UserApplication"> | number;
    applicationId?: Prisma.IntFilter<"UserApplication"> | number;
    roleId?: Prisma.IntFilter<"UserApplication"> | number;
    createdAt?: Prisma.DateTimeFilter<"UserApplication"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"UserApplication"> | Date | string;
};
export type UserApplicationCreateWithoutApplicationInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutUserApplicationInput;
    Role: Prisma.RoleCreateNestedOneWithoutUserApplicationInput;
};
export type UserApplicationUncheckedCreateWithoutApplicationInput = {
    id?: number;
    userId: number;
    roleId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserApplicationCreateOrConnectWithoutApplicationInput = {
    where: Prisma.UserApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserApplicationCreateWithoutApplicationInput, Prisma.UserApplicationUncheckedCreateWithoutApplicationInput>;
};
export type UserApplicationCreateManyApplicationInputEnvelope = {
    data: Prisma.UserApplicationCreateManyApplicationInput | Prisma.UserApplicationCreateManyApplicationInput[];
    skipDuplicates?: boolean;
};
export type UserApplicationUpsertWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.UserApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserApplicationUpdateWithoutApplicationInput, Prisma.UserApplicationUncheckedUpdateWithoutApplicationInput>;
    create: Prisma.XOR<Prisma.UserApplicationCreateWithoutApplicationInput, Prisma.UserApplicationUncheckedCreateWithoutApplicationInput>;
};
export type UserApplicationUpdateWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.UserApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserApplicationUpdateWithoutApplicationInput, Prisma.UserApplicationUncheckedUpdateWithoutApplicationInput>;
};
export type UserApplicationUpdateManyWithWhereWithoutApplicationInput = {
    where: Prisma.UserApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.UserApplicationUpdateManyMutationInput, Prisma.UserApplicationUncheckedUpdateManyWithoutApplicationInput>;
};
export type UserApplicationCreateWithoutRoleInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    User: Prisma.UserCreateNestedOneWithoutUserApplicationInput;
    Application: Prisma.ApplicationCreateNestedOneWithoutUserApplicationInput;
};
export type UserApplicationUncheckedCreateWithoutRoleInput = {
    id?: number;
    userId: number;
    applicationId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserApplicationCreateOrConnectWithoutRoleInput = {
    where: Prisma.UserApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserApplicationCreateWithoutRoleInput, Prisma.UserApplicationUncheckedCreateWithoutRoleInput>;
};
export type UserApplicationCreateManyRoleInputEnvelope = {
    data: Prisma.UserApplicationCreateManyRoleInput | Prisma.UserApplicationCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type UserApplicationUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.UserApplicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserApplicationUpdateWithoutRoleInput, Prisma.UserApplicationUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.UserApplicationCreateWithoutRoleInput, Prisma.UserApplicationUncheckedCreateWithoutRoleInput>;
};
export type UserApplicationUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.UserApplicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserApplicationUpdateWithoutRoleInput, Prisma.UserApplicationUncheckedUpdateWithoutRoleInput>;
};
export type UserApplicationUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.UserApplicationScalarWhereInput;
    data: Prisma.XOR<Prisma.UserApplicationUpdateManyMutationInput, Prisma.UserApplicationUncheckedUpdateManyWithoutRoleInput>;
};
export type UserApplicationCreateManyUserInput = {
    id?: number;
    applicationId: number;
    roleId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserApplicationUpdateWithoutUserInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Application?: Prisma.ApplicationUpdateOneRequiredWithoutUserApplicationNestedInput;
    Role?: Prisma.RoleUpdateOneRequiredWithoutUserApplicationNestedInput;
};
export type UserApplicationUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    roleId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserApplicationUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    roleId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserApplicationCreateManyApplicationInput = {
    id?: number;
    userId: number;
    roleId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserApplicationUpdateWithoutApplicationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutUserApplicationNestedInput;
    Role?: Prisma.RoleUpdateOneRequiredWithoutUserApplicationNestedInput;
};
export type UserApplicationUncheckedUpdateWithoutApplicationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    roleId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserApplicationUncheckedUpdateManyWithoutApplicationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    roleId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserApplicationCreateManyRoleInput = {
    id?: number;
    userId: number;
    applicationId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserApplicationUpdateWithoutRoleInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    User?: Prisma.UserUpdateOneRequiredWithoutUserApplicationNestedInput;
    Application?: Prisma.ApplicationUpdateOneRequiredWithoutUserApplicationNestedInput;
};
export type UserApplicationUncheckedUpdateWithoutRoleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserApplicationUncheckedUpdateManyWithoutRoleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserApplicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    applicationId?: boolean;
    roleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
    Role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userApplication"]>;
export type UserApplicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    applicationId?: boolean;
    roleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
    Role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userApplication"]>;
export type UserApplicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    applicationId?: boolean;
    roleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
    Role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userApplication"]>;
export type UserApplicationSelectScalar = {
    id?: boolean;
    userId?: boolean;
    applicationId?: boolean;
    roleId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserApplicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "applicationId" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["userApplication"]>;
export type UserApplicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
    Role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type UserApplicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
    Role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type UserApplicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
    Role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type $UserApplicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserApplication";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
        Application: Prisma.$ApplicationPayload<ExtArgs>;
        Role: Prisma.$RolePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        applicationId: number;
        roleId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["userApplication"]>;
    composites: {};
};
export type UserApplicationGetPayload<S extends boolean | null | undefined | UserApplicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload, S>;
export type UserApplicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserApplicationCountAggregateInputType | true;
};
export interface UserApplicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserApplication'];
        meta: {
            name: 'UserApplication';
        };
    };
    findUnique<T extends UserApplicationFindUniqueArgs>(args: Prisma.SelectSubset<T, UserApplicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserApplicationClient<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserApplicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserApplicationClient<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserApplicationFindFirstArgs>(args?: Prisma.SelectSubset<T, UserApplicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserApplicationClient<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserApplicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserApplicationClient<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserApplicationFindManyArgs>(args?: Prisma.SelectSubset<T, UserApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserApplicationCreateArgs>(args: Prisma.SelectSubset<T, UserApplicationCreateArgs<ExtArgs>>): Prisma.Prisma__UserApplicationClient<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserApplicationCreateManyArgs>(args?: Prisma.SelectSubset<T, UserApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserApplicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserApplicationDeleteArgs>(args: Prisma.SelectSubset<T, UserApplicationDeleteArgs<ExtArgs>>): Prisma.Prisma__UserApplicationClient<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserApplicationUpdateArgs>(args: Prisma.SelectSubset<T, UserApplicationUpdateArgs<ExtArgs>>): Prisma.Prisma__UserApplicationClient<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserApplicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserApplicationUpdateManyArgs>(args: Prisma.SelectSubset<T, UserApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserApplicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserApplicationUpsertArgs>(args: Prisma.SelectSubset<T, UserApplicationUpsertArgs<ExtArgs>>): Prisma.Prisma__UserApplicationClient<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserApplicationCountArgs>(args?: Prisma.Subset<T, UserApplicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserApplicationCountAggregateOutputType> : number>;
    aggregate<T extends UserApplicationAggregateArgs>(args: Prisma.Subset<T, UserApplicationAggregateArgs>): Prisma.PrismaPromise<GetUserApplicationAggregateType<T>>;
    groupBy<T extends UserApplicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserApplicationGroupByArgs['orderBy'];
    } : {
        orderBy?: UserApplicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserApplicationFieldRefs;
}
export interface Prisma__UserApplicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Application<T extends Prisma.ApplicationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApplicationDefaultArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Role<T extends Prisma.RoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoleDefaultArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserApplicationFieldRefs {
    readonly id: Prisma.FieldRef<"UserApplication", 'Int'>;
    readonly userId: Prisma.FieldRef<"UserApplication", 'Int'>;
    readonly applicationId: Prisma.FieldRef<"UserApplication", 'Int'>;
    readonly roleId: Prisma.FieldRef<"UserApplication", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"UserApplication", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"UserApplication", 'DateTime'>;
}
export type UserApplicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserApplicationSelect<ExtArgs> | null;
    omit?: Prisma.UserApplicationOmit<ExtArgs> | null;
    include?: Prisma.UserApplicationInclude<ExtArgs> | null;
    where: Prisma.UserApplicationWhereUniqueInput;
};
export type UserApplicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserApplicationSelect<ExtArgs> | null;
    omit?: Prisma.UserApplicationOmit<ExtArgs> | null;
    include?: Prisma.UserApplicationInclude<ExtArgs> | null;
    where: Prisma.UserApplicationWhereUniqueInput;
};
export type UserApplicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserApplicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserApplicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserApplicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserApplicationSelect<ExtArgs> | null;
    omit?: Prisma.UserApplicationOmit<ExtArgs> | null;
    include?: Prisma.UserApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserApplicationCreateInput, Prisma.UserApplicationUncheckedCreateInput>;
};
export type UserApplicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserApplicationCreateManyInput | Prisma.UserApplicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserApplicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserApplicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserApplicationOmit<ExtArgs> | null;
    data: Prisma.UserApplicationCreateManyInput | Prisma.UserApplicationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserApplicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserApplicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserApplicationSelect<ExtArgs> | null;
    omit?: Prisma.UserApplicationOmit<ExtArgs> | null;
    include?: Prisma.UserApplicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserApplicationUpdateInput, Prisma.UserApplicationUncheckedUpdateInput>;
    where: Prisma.UserApplicationWhereUniqueInput;
};
export type UserApplicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserApplicationUpdateManyMutationInput, Prisma.UserApplicationUncheckedUpdateManyInput>;
    where?: Prisma.UserApplicationWhereInput;
    limit?: number;
};
export type UserApplicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserApplicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserApplicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserApplicationUpdateManyMutationInput, Prisma.UserApplicationUncheckedUpdateManyInput>;
    where?: Prisma.UserApplicationWhereInput;
    limit?: number;
    include?: Prisma.UserApplicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserApplicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserApplicationSelect<ExtArgs> | null;
    omit?: Prisma.UserApplicationOmit<ExtArgs> | null;
    include?: Prisma.UserApplicationInclude<ExtArgs> | null;
    where: Prisma.UserApplicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserApplicationCreateInput, Prisma.UserApplicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserApplicationUpdateInput, Prisma.UserApplicationUncheckedUpdateInput>;
};
export type UserApplicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserApplicationSelect<ExtArgs> | null;
    omit?: Prisma.UserApplicationOmit<ExtArgs> | null;
    include?: Prisma.UserApplicationInclude<ExtArgs> | null;
    where: Prisma.UserApplicationWhereUniqueInput;
};
export type UserApplicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserApplicationWhereInput;
    limit?: number;
};
export type UserApplicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserApplicationSelect<ExtArgs> | null;
    omit?: Prisma.UserApplicationOmit<ExtArgs> | null;
    include?: Prisma.UserApplicationInclude<ExtArgs> | null;
};
export {};
