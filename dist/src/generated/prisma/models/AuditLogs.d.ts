import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type AuditLogsModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditLogsPayload>;
export type AggregateAuditLogs = {
    _count: AuditLogsCountAggregateOutputType | null;
    _avg: AuditLogsAvgAggregateOutputType | null;
    _sum: AuditLogsSumAggregateOutputType | null;
    _min: AuditLogsMinAggregateOutputType | null;
    _max: AuditLogsMaxAggregateOutputType | null;
};
export type AuditLogsAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    applicationId: number | null;
};
export type AuditLogsSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    applicationId: number | null;
};
export type AuditLogsMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    applicationId: number | null;
    date: Date | null;
    url: string | null;
    action: $Enums.LOGACTIONS | null;
    description: string | null;
};
export type AuditLogsMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    applicationId: number | null;
    date: Date | null;
    url: string | null;
    action: $Enums.LOGACTIONS | null;
    description: string | null;
};
export type AuditLogsCountAggregateOutputType = {
    id: number;
    userId: number;
    applicationId: number;
    date: number;
    url: number;
    action: number;
    description: number;
    _all: number;
};
export type AuditLogsAvgAggregateInputType = {
    id?: true;
    userId?: true;
    applicationId?: true;
};
export type AuditLogsSumAggregateInputType = {
    id?: true;
    userId?: true;
    applicationId?: true;
};
export type AuditLogsMinAggregateInputType = {
    id?: true;
    userId?: true;
    applicationId?: true;
    date?: true;
    url?: true;
    action?: true;
    description?: true;
};
export type AuditLogsMaxAggregateInputType = {
    id?: true;
    userId?: true;
    applicationId?: true;
    date?: true;
    url?: true;
    action?: true;
    description?: true;
};
export type AuditLogsCountAggregateInputType = {
    id?: true;
    userId?: true;
    applicationId?: true;
    date?: true;
    url?: true;
    action?: true;
    description?: true;
    _all?: true;
};
export type AuditLogsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogsWhereInput;
    orderBy?: Prisma.AuditLogsOrderByWithRelationInput | Prisma.AuditLogsOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditLogsCountAggregateInputType;
    _avg?: AuditLogsAvgAggregateInputType;
    _sum?: AuditLogsSumAggregateInputType;
    _min?: AuditLogsMinAggregateInputType;
    _max?: AuditLogsMaxAggregateInputType;
};
export type GetAuditLogsAggregateType<T extends AuditLogsAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditLogs]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuditLogs[P]> : Prisma.GetScalarType<T[P], AggregateAuditLogs[P]>;
};
export type AuditLogsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogsWhereInput;
    orderBy?: Prisma.AuditLogsOrderByWithAggregationInput | Prisma.AuditLogsOrderByWithAggregationInput[];
    by: Prisma.AuditLogsScalarFieldEnum[] | Prisma.AuditLogsScalarFieldEnum;
    having?: Prisma.AuditLogsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditLogsCountAggregateInputType | true;
    _avg?: AuditLogsAvgAggregateInputType;
    _sum?: AuditLogsSumAggregateInputType;
    _min?: AuditLogsMinAggregateInputType;
    _max?: AuditLogsMaxAggregateInputType;
};
export type AuditLogsGroupByOutputType = {
    id: number;
    userId: number;
    applicationId: number;
    date: Date;
    url: string | null;
    action: $Enums.LOGACTIONS;
    description: string;
    _count: AuditLogsCountAggregateOutputType | null;
    _avg: AuditLogsAvgAggregateOutputType | null;
    _sum: AuditLogsSumAggregateOutputType | null;
    _min: AuditLogsMinAggregateOutputType | null;
    _max: AuditLogsMaxAggregateOutputType | null;
};
type GetAuditLogsGroupByPayload<T extends AuditLogsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditLogsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditLogsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditLogsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditLogsGroupByOutputType[P]>;
}>>;
export type AuditLogsWhereInput = {
    AND?: Prisma.AuditLogsWhereInput | Prisma.AuditLogsWhereInput[];
    OR?: Prisma.AuditLogsWhereInput[];
    NOT?: Prisma.AuditLogsWhereInput | Prisma.AuditLogsWhereInput[];
    id?: Prisma.IntFilter<"AuditLogs"> | number;
    userId?: Prisma.IntFilter<"AuditLogs"> | number;
    applicationId?: Prisma.IntFilter<"AuditLogs"> | number;
    date?: Prisma.DateTimeFilter<"AuditLogs"> | Date | string;
    url?: Prisma.StringNullableFilter<"AuditLogs"> | string | null;
    action?: Prisma.EnumLOGACTIONSFilter<"AuditLogs"> | $Enums.LOGACTIONS;
    description?: Prisma.StringFilter<"AuditLogs"> | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
};
export type AuditLogsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    url?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    User?: Prisma.UserOrderByWithRelationInput;
    Application?: Prisma.ApplicationOrderByWithRelationInput;
};
export type AuditLogsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AuditLogsWhereInput | Prisma.AuditLogsWhereInput[];
    OR?: Prisma.AuditLogsWhereInput[];
    NOT?: Prisma.AuditLogsWhereInput | Prisma.AuditLogsWhereInput[];
    userId?: Prisma.IntFilter<"AuditLogs"> | number;
    applicationId?: Prisma.IntFilter<"AuditLogs"> | number;
    date?: Prisma.DateTimeFilter<"AuditLogs"> | Date | string;
    url?: Prisma.StringNullableFilter<"AuditLogs"> | string | null;
    action?: Prisma.EnumLOGACTIONSFilter<"AuditLogs"> | $Enums.LOGACTIONS;
    description?: Prisma.StringFilter<"AuditLogs"> | string;
    User?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    Application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
}, "id">;
export type AuditLogsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    url?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    _count?: Prisma.AuditLogsCountOrderByAggregateInput;
    _avg?: Prisma.AuditLogsAvgOrderByAggregateInput;
    _max?: Prisma.AuditLogsMaxOrderByAggregateInput;
    _min?: Prisma.AuditLogsMinOrderByAggregateInput;
    _sum?: Prisma.AuditLogsSumOrderByAggregateInput;
};
export type AuditLogsScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditLogsScalarWhereWithAggregatesInput | Prisma.AuditLogsScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditLogsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditLogsScalarWhereWithAggregatesInput | Prisma.AuditLogsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AuditLogs"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"AuditLogs"> | number;
    applicationId?: Prisma.IntWithAggregatesFilter<"AuditLogs"> | number;
    date?: Prisma.DateTimeWithAggregatesFilter<"AuditLogs"> | Date | string;
    url?: Prisma.StringNullableWithAggregatesFilter<"AuditLogs"> | string | null;
    action?: Prisma.EnumLOGACTIONSWithAggregatesFilter<"AuditLogs"> | $Enums.LOGACTIONS;
    description?: Prisma.StringWithAggregatesFilter<"AuditLogs"> | string;
};
export type AuditLogsCreateInput = {
    date?: Date | string;
    url?: string | null;
    action: $Enums.LOGACTIONS;
    description: string;
    User: Prisma.UserCreateNestedOneWithoutAuditLogsInput;
    Application: Prisma.ApplicationCreateNestedOneWithoutAuditLogsInput;
};
export type AuditLogsUncheckedCreateInput = {
    id?: number;
    userId: number;
    applicationId: number;
    date?: Date | string;
    url?: string | null;
    action: $Enums.LOGACTIONS;
    description: string;
};
export type AuditLogsUpdateInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumLOGACTIONSFieldUpdateOperationsInput | $Enums.LOGACTIONS;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    User?: Prisma.UserUpdateOneRequiredWithoutAuditLogsNestedInput;
    Application?: Prisma.ApplicationUpdateOneRequiredWithoutAuditLogsNestedInput;
};
export type AuditLogsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumLOGACTIONSFieldUpdateOperationsInput | $Enums.LOGACTIONS;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditLogsCreateManyInput = {
    id?: number;
    userId: number;
    applicationId: number;
    date?: Date | string;
    url?: string | null;
    action: $Enums.LOGACTIONS;
    description: string;
};
export type AuditLogsUpdateManyMutationInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumLOGACTIONSFieldUpdateOperationsInput | $Enums.LOGACTIONS;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditLogsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumLOGACTIONSFieldUpdateOperationsInput | $Enums.LOGACTIONS;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditLogsListRelationFilter = {
    every?: Prisma.AuditLogsWhereInput;
    some?: Prisma.AuditLogsWhereInput;
    none?: Prisma.AuditLogsWhereInput;
};
export type AuditLogsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuditLogsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type AuditLogsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
};
export type AuditLogsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type AuditLogsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type AuditLogsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
};
export type AuditLogsCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AuditLogsCreateWithoutUserInput, Prisma.AuditLogsUncheckedCreateWithoutUserInput> | Prisma.AuditLogsCreateWithoutUserInput[] | Prisma.AuditLogsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AuditLogsCreateOrConnectWithoutUserInput | Prisma.AuditLogsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AuditLogsCreateManyUserInputEnvelope;
    connect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
};
export type AuditLogsUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AuditLogsCreateWithoutUserInput, Prisma.AuditLogsUncheckedCreateWithoutUserInput> | Prisma.AuditLogsCreateWithoutUserInput[] | Prisma.AuditLogsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AuditLogsCreateOrConnectWithoutUserInput | Prisma.AuditLogsCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AuditLogsCreateManyUserInputEnvelope;
    connect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
};
export type AuditLogsUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AuditLogsCreateWithoutUserInput, Prisma.AuditLogsUncheckedCreateWithoutUserInput> | Prisma.AuditLogsCreateWithoutUserInput[] | Prisma.AuditLogsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AuditLogsCreateOrConnectWithoutUserInput | Prisma.AuditLogsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AuditLogsUpsertWithWhereUniqueWithoutUserInput | Prisma.AuditLogsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AuditLogsCreateManyUserInputEnvelope;
    set?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    disconnect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    delete?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    connect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    update?: Prisma.AuditLogsUpdateWithWhereUniqueWithoutUserInput | Prisma.AuditLogsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AuditLogsUpdateManyWithWhereWithoutUserInput | Prisma.AuditLogsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AuditLogsScalarWhereInput | Prisma.AuditLogsScalarWhereInput[];
};
export type AuditLogsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AuditLogsCreateWithoutUserInput, Prisma.AuditLogsUncheckedCreateWithoutUserInput> | Prisma.AuditLogsCreateWithoutUserInput[] | Prisma.AuditLogsUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AuditLogsCreateOrConnectWithoutUserInput | Prisma.AuditLogsCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AuditLogsUpsertWithWhereUniqueWithoutUserInput | Prisma.AuditLogsUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AuditLogsCreateManyUserInputEnvelope;
    set?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    disconnect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    delete?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    connect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    update?: Prisma.AuditLogsUpdateWithWhereUniqueWithoutUserInput | Prisma.AuditLogsUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AuditLogsUpdateManyWithWhereWithoutUserInput | Prisma.AuditLogsUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AuditLogsScalarWhereInput | Prisma.AuditLogsScalarWhereInput[];
};
export type AuditLogsCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.AuditLogsCreateWithoutApplicationInput, Prisma.AuditLogsUncheckedCreateWithoutApplicationInput> | Prisma.AuditLogsCreateWithoutApplicationInput[] | Prisma.AuditLogsUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.AuditLogsCreateOrConnectWithoutApplicationInput | Prisma.AuditLogsCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.AuditLogsCreateManyApplicationInputEnvelope;
    connect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
};
export type AuditLogsUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.AuditLogsCreateWithoutApplicationInput, Prisma.AuditLogsUncheckedCreateWithoutApplicationInput> | Prisma.AuditLogsCreateWithoutApplicationInput[] | Prisma.AuditLogsUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.AuditLogsCreateOrConnectWithoutApplicationInput | Prisma.AuditLogsCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.AuditLogsCreateManyApplicationInputEnvelope;
    connect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
};
export type AuditLogsUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.AuditLogsCreateWithoutApplicationInput, Prisma.AuditLogsUncheckedCreateWithoutApplicationInput> | Prisma.AuditLogsCreateWithoutApplicationInput[] | Prisma.AuditLogsUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.AuditLogsCreateOrConnectWithoutApplicationInput | Prisma.AuditLogsCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.AuditLogsUpsertWithWhereUniqueWithoutApplicationInput | Prisma.AuditLogsUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.AuditLogsCreateManyApplicationInputEnvelope;
    set?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    disconnect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    delete?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    connect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    update?: Prisma.AuditLogsUpdateWithWhereUniqueWithoutApplicationInput | Prisma.AuditLogsUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.AuditLogsUpdateManyWithWhereWithoutApplicationInput | Prisma.AuditLogsUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.AuditLogsScalarWhereInput | Prisma.AuditLogsScalarWhereInput[];
};
export type AuditLogsUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.AuditLogsCreateWithoutApplicationInput, Prisma.AuditLogsUncheckedCreateWithoutApplicationInput> | Prisma.AuditLogsCreateWithoutApplicationInput[] | Prisma.AuditLogsUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.AuditLogsCreateOrConnectWithoutApplicationInput | Prisma.AuditLogsCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.AuditLogsUpsertWithWhereUniqueWithoutApplicationInput | Prisma.AuditLogsUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.AuditLogsCreateManyApplicationInputEnvelope;
    set?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    disconnect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    delete?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    connect?: Prisma.AuditLogsWhereUniqueInput | Prisma.AuditLogsWhereUniqueInput[];
    update?: Prisma.AuditLogsUpdateWithWhereUniqueWithoutApplicationInput | Prisma.AuditLogsUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.AuditLogsUpdateManyWithWhereWithoutApplicationInput | Prisma.AuditLogsUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.AuditLogsScalarWhereInput | Prisma.AuditLogsScalarWhereInput[];
};
export type EnumLOGACTIONSFieldUpdateOperationsInput = {
    set?: $Enums.LOGACTIONS;
};
export type AuditLogsCreateWithoutUserInput = {
    date?: Date | string;
    url?: string | null;
    action: $Enums.LOGACTIONS;
    description: string;
    Application: Prisma.ApplicationCreateNestedOneWithoutAuditLogsInput;
};
export type AuditLogsUncheckedCreateWithoutUserInput = {
    id?: number;
    applicationId: number;
    date?: Date | string;
    url?: string | null;
    action: $Enums.LOGACTIONS;
    description: string;
};
export type AuditLogsCreateOrConnectWithoutUserInput = {
    where: Prisma.AuditLogsWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditLogsCreateWithoutUserInput, Prisma.AuditLogsUncheckedCreateWithoutUserInput>;
};
export type AuditLogsCreateManyUserInputEnvelope = {
    data: Prisma.AuditLogsCreateManyUserInput | Prisma.AuditLogsCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AuditLogsUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AuditLogsWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditLogsUpdateWithoutUserInput, Prisma.AuditLogsUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AuditLogsCreateWithoutUserInput, Prisma.AuditLogsUncheckedCreateWithoutUserInput>;
};
export type AuditLogsUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AuditLogsWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditLogsUpdateWithoutUserInput, Prisma.AuditLogsUncheckedUpdateWithoutUserInput>;
};
export type AuditLogsUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AuditLogsScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditLogsUpdateManyMutationInput, Prisma.AuditLogsUncheckedUpdateManyWithoutUserInput>;
};
export type AuditLogsScalarWhereInput = {
    AND?: Prisma.AuditLogsScalarWhereInput | Prisma.AuditLogsScalarWhereInput[];
    OR?: Prisma.AuditLogsScalarWhereInput[];
    NOT?: Prisma.AuditLogsScalarWhereInput | Prisma.AuditLogsScalarWhereInput[];
    id?: Prisma.IntFilter<"AuditLogs"> | number;
    userId?: Prisma.IntFilter<"AuditLogs"> | number;
    applicationId?: Prisma.IntFilter<"AuditLogs"> | number;
    date?: Prisma.DateTimeFilter<"AuditLogs"> | Date | string;
    url?: Prisma.StringNullableFilter<"AuditLogs"> | string | null;
    action?: Prisma.EnumLOGACTIONSFilter<"AuditLogs"> | $Enums.LOGACTIONS;
    description?: Prisma.StringFilter<"AuditLogs"> | string;
};
export type AuditLogsCreateWithoutApplicationInput = {
    date?: Date | string;
    url?: string | null;
    action: $Enums.LOGACTIONS;
    description: string;
    User: Prisma.UserCreateNestedOneWithoutAuditLogsInput;
};
export type AuditLogsUncheckedCreateWithoutApplicationInput = {
    id?: number;
    userId: number;
    date?: Date | string;
    url?: string | null;
    action: $Enums.LOGACTIONS;
    description: string;
};
export type AuditLogsCreateOrConnectWithoutApplicationInput = {
    where: Prisma.AuditLogsWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditLogsCreateWithoutApplicationInput, Prisma.AuditLogsUncheckedCreateWithoutApplicationInput>;
};
export type AuditLogsCreateManyApplicationInputEnvelope = {
    data: Prisma.AuditLogsCreateManyApplicationInput | Prisma.AuditLogsCreateManyApplicationInput[];
    skipDuplicates?: boolean;
};
export type AuditLogsUpsertWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.AuditLogsWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditLogsUpdateWithoutApplicationInput, Prisma.AuditLogsUncheckedUpdateWithoutApplicationInput>;
    create: Prisma.XOR<Prisma.AuditLogsCreateWithoutApplicationInput, Prisma.AuditLogsUncheckedCreateWithoutApplicationInput>;
};
export type AuditLogsUpdateWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.AuditLogsWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditLogsUpdateWithoutApplicationInput, Prisma.AuditLogsUncheckedUpdateWithoutApplicationInput>;
};
export type AuditLogsUpdateManyWithWhereWithoutApplicationInput = {
    where: Prisma.AuditLogsScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditLogsUpdateManyMutationInput, Prisma.AuditLogsUncheckedUpdateManyWithoutApplicationInput>;
};
export type AuditLogsCreateManyUserInput = {
    id?: number;
    applicationId: number;
    date?: Date | string;
    url?: string | null;
    action: $Enums.LOGACTIONS;
    description: string;
};
export type AuditLogsUpdateWithoutUserInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumLOGACTIONSFieldUpdateOperationsInput | $Enums.LOGACTIONS;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    Application?: Prisma.ApplicationUpdateOneRequiredWithoutAuditLogsNestedInput;
};
export type AuditLogsUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumLOGACTIONSFieldUpdateOperationsInput | $Enums.LOGACTIONS;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditLogsUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumLOGACTIONSFieldUpdateOperationsInput | $Enums.LOGACTIONS;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditLogsCreateManyApplicationInput = {
    id?: number;
    userId: number;
    date?: Date | string;
    url?: string | null;
    action: $Enums.LOGACTIONS;
    description: string;
};
export type AuditLogsUpdateWithoutApplicationInput = {
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumLOGACTIONSFieldUpdateOperationsInput | $Enums.LOGACTIONS;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    User?: Prisma.UserUpdateOneRequiredWithoutAuditLogsNestedInput;
};
export type AuditLogsUncheckedUpdateWithoutApplicationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumLOGACTIONSFieldUpdateOperationsInput | $Enums.LOGACTIONS;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditLogsUncheckedUpdateManyWithoutApplicationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.EnumLOGACTIONSFieldUpdateOperationsInput | $Enums.LOGACTIONS;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AuditLogsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    applicationId?: boolean;
    date?: boolean;
    url?: boolean;
    action?: boolean;
    description?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditLogs"]>;
export type AuditLogsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    applicationId?: boolean;
    date?: boolean;
    url?: boolean;
    action?: boolean;
    description?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditLogs"]>;
export type AuditLogsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    applicationId?: boolean;
    date?: boolean;
    url?: boolean;
    action?: boolean;
    description?: boolean;
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditLogs"]>;
export type AuditLogsSelectScalar = {
    id?: boolean;
    userId?: boolean;
    applicationId?: boolean;
    date?: boolean;
    url?: boolean;
    action?: boolean;
    description?: boolean;
};
export type AuditLogsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "applicationId" | "date" | "url" | "action" | "description", ExtArgs["result"]["auditLogs"]>;
export type AuditLogsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type AuditLogsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type AuditLogsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    User?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type $AuditLogsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuditLogs";
    objects: {
        User: Prisma.$UserPayload<ExtArgs>;
        Application: Prisma.$ApplicationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number;
        applicationId: number;
        date: Date;
        url: string | null;
        action: $Enums.LOGACTIONS;
        description: string;
    }, ExtArgs["result"]["auditLogs"]>;
    composites: {};
};
export type AuditLogsGetPayload<S extends boolean | null | undefined | AuditLogsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload, S>;
export type AuditLogsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditLogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditLogsCountAggregateInputType | true;
};
export interface AuditLogsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuditLogs'];
        meta: {
            name: 'AuditLogs';
        };
    };
    findUnique<T extends AuditLogsFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditLogsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditLogsClient<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditLogsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditLogsClient<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditLogsFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditLogsFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditLogsClient<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditLogsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditLogsClient<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditLogsFindManyArgs>(args?: Prisma.SelectSubset<T, AuditLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditLogsCreateArgs>(args: Prisma.SelectSubset<T, AuditLogsCreateArgs<ExtArgs>>): Prisma.Prisma__AuditLogsClient<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditLogsCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditLogsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditLogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditLogsDeleteArgs>(args: Prisma.SelectSubset<T, AuditLogsDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditLogsClient<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditLogsUpdateArgs>(args: Prisma.SelectSubset<T, AuditLogsUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditLogsClient<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditLogsDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditLogsUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditLogsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditLogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditLogsUpsertArgs>(args: Prisma.SelectSubset<T, AuditLogsUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditLogsClient<runtime.Types.Result.GetResult<Prisma.$AuditLogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditLogsCountArgs>(args?: Prisma.Subset<T, AuditLogsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditLogsCountAggregateOutputType> : number>;
    aggregate<T extends AuditLogsAggregateArgs>(args: Prisma.Subset<T, AuditLogsAggregateArgs>): Prisma.PrismaPromise<GetAuditLogsAggregateType<T>>;
    groupBy<T extends AuditLogsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditLogsGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditLogsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditLogsFieldRefs;
}
export interface Prisma__AuditLogsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    User<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    Application<T extends Prisma.ApplicationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApplicationDefaultArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditLogsFieldRefs {
    readonly id: Prisma.FieldRef<"AuditLogs", 'Int'>;
    readonly userId: Prisma.FieldRef<"AuditLogs", 'Int'>;
    readonly applicationId: Prisma.FieldRef<"AuditLogs", 'Int'>;
    readonly date: Prisma.FieldRef<"AuditLogs", 'DateTime'>;
    readonly url: Prisma.FieldRef<"AuditLogs", 'String'>;
    readonly action: Prisma.FieldRef<"AuditLogs", 'LOGACTIONS'>;
    readonly description: Prisma.FieldRef<"AuditLogs", 'String'>;
}
export type AuditLogsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogsSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogsOmit<ExtArgs> | null;
    include?: Prisma.AuditLogsInclude<ExtArgs> | null;
    where: Prisma.AuditLogsWhereUniqueInput;
};
export type AuditLogsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogsSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogsOmit<ExtArgs> | null;
    include?: Prisma.AuditLogsInclude<ExtArgs> | null;
    where: Prisma.AuditLogsWhereUniqueInput;
};
export type AuditLogsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogsSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogsOmit<ExtArgs> | null;
    include?: Prisma.AuditLogsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogsCreateInput, Prisma.AuditLogsUncheckedCreateInput>;
};
export type AuditLogsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditLogsCreateManyInput | Prisma.AuditLogsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditLogsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditLogsOmit<ExtArgs> | null;
    data: Prisma.AuditLogsCreateManyInput | Prisma.AuditLogsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AuditLogsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AuditLogsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogsSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogsOmit<ExtArgs> | null;
    include?: Prisma.AuditLogsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogsUpdateInput, Prisma.AuditLogsUncheckedUpdateInput>;
    where: Prisma.AuditLogsWhereUniqueInput;
};
export type AuditLogsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditLogsUpdateManyMutationInput, Prisma.AuditLogsUncheckedUpdateManyInput>;
    where?: Prisma.AuditLogsWhereInput;
    limit?: number;
};
export type AuditLogsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditLogsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogsUpdateManyMutationInput, Prisma.AuditLogsUncheckedUpdateManyInput>;
    where?: Prisma.AuditLogsWhereInput;
    limit?: number;
    include?: Prisma.AuditLogsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AuditLogsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogsSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogsOmit<ExtArgs> | null;
    include?: Prisma.AuditLogsInclude<ExtArgs> | null;
    where: Prisma.AuditLogsWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditLogsCreateInput, Prisma.AuditLogsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditLogsUpdateInput, Prisma.AuditLogsUncheckedUpdateInput>;
};
export type AuditLogsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogsSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogsOmit<ExtArgs> | null;
    include?: Prisma.AuditLogsInclude<ExtArgs> | null;
    where: Prisma.AuditLogsWhereUniqueInput;
};
export type AuditLogsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogsWhereInput;
    limit?: number;
};
export type AuditLogsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogsSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogsOmit<ExtArgs> | null;
    include?: Prisma.AuditLogsInclude<ExtArgs> | null;
};
export {};
