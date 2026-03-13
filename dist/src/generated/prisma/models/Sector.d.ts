import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SectorModel = runtime.Types.Result.DefaultSelection<Prisma.$SectorPayload>;
export type AggregateSector = {
    _count: SectorCountAggregateOutputType | null;
    _avg: SectorAvgAggregateOutputType | null;
    _sum: SectorSumAggregateOutputType | null;
    _min: SectorMinAggregateOutputType | null;
    _max: SectorMaxAggregateOutputType | null;
};
export type SectorAvgAggregateOutputType = {
    id: number | null;
    operationId: number | null;
    leaderDayId: number | null;
    leaderNightId: number | null;
    supervisorDayId: number | null;
    supervisorNightId: number | null;
    managerId: number | null;
};
export type SectorSumAggregateOutputType = {
    id: number | null;
    operationId: number | null;
    leaderDayId: number | null;
    leaderNightId: number | null;
    supervisorDayId: number | null;
    supervisorNightId: number | null;
    managerId: number | null;
};
export type SectorMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    costCenter: string | null;
    normalizedName: string | null;
    operationId: number | null;
    leaderDayId: number | null;
    leaderNightId: number | null;
    supervisorDayId: number | null;
    supervisorNightId: number | null;
    managerId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SectorMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    costCenter: string | null;
    normalizedName: string | null;
    operationId: number | null;
    leaderDayId: number | null;
    leaderNightId: number | null;
    supervisorDayId: number | null;
    supervisorNightId: number | null;
    managerId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SectorCountAggregateOutputType = {
    id: number;
    name: number;
    costCenter: number;
    normalizedName: number;
    operationId: number;
    leaderDayId: number;
    leaderNightId: number;
    supervisorDayId: number;
    supervisorNightId: number;
    managerId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SectorAvgAggregateInputType = {
    id?: true;
    operationId?: true;
    leaderDayId?: true;
    leaderNightId?: true;
    supervisorDayId?: true;
    supervisorNightId?: true;
    managerId?: true;
};
export type SectorSumAggregateInputType = {
    id?: true;
    operationId?: true;
    leaderDayId?: true;
    leaderNightId?: true;
    supervisorDayId?: true;
    supervisorNightId?: true;
    managerId?: true;
};
export type SectorMinAggregateInputType = {
    id?: true;
    name?: true;
    costCenter?: true;
    normalizedName?: true;
    operationId?: true;
    leaderDayId?: true;
    leaderNightId?: true;
    supervisorDayId?: true;
    supervisorNightId?: true;
    managerId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SectorMaxAggregateInputType = {
    id?: true;
    name?: true;
    costCenter?: true;
    normalizedName?: true;
    operationId?: true;
    leaderDayId?: true;
    leaderNightId?: true;
    supervisorDayId?: true;
    supervisorNightId?: true;
    managerId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SectorCountAggregateInputType = {
    id?: true;
    name?: true;
    costCenter?: true;
    normalizedName?: true;
    operationId?: true;
    leaderDayId?: true;
    leaderNightId?: true;
    supervisorDayId?: true;
    supervisorNightId?: true;
    managerId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SectorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectorWhereInput;
    orderBy?: Prisma.SectorOrderByWithRelationInput | Prisma.SectorOrderByWithRelationInput[];
    cursor?: Prisma.SectorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SectorCountAggregateInputType;
    _avg?: SectorAvgAggregateInputType;
    _sum?: SectorSumAggregateInputType;
    _min?: SectorMinAggregateInputType;
    _max?: SectorMaxAggregateInputType;
};
export type GetSectorAggregateType<T extends SectorAggregateArgs> = {
    [P in keyof T & keyof AggregateSector]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSector[P]> : Prisma.GetScalarType<T[P], AggregateSector[P]>;
};
export type SectorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectorWhereInput;
    orderBy?: Prisma.SectorOrderByWithAggregationInput | Prisma.SectorOrderByWithAggregationInput[];
    by: Prisma.SectorScalarFieldEnum[] | Prisma.SectorScalarFieldEnum;
    having?: Prisma.SectorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SectorCountAggregateInputType | true;
    _avg?: SectorAvgAggregateInputType;
    _sum?: SectorSumAggregateInputType;
    _min?: SectorMinAggregateInputType;
    _max?: SectorMaxAggregateInputType;
};
export type SectorGroupByOutputType = {
    id: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId: number | null;
    leaderDayId: number | null;
    leaderNightId: number | null;
    supervisorDayId: number | null;
    supervisorNightId: number | null;
    managerId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SectorCountAggregateOutputType | null;
    _avg: SectorAvgAggregateOutputType | null;
    _sum: SectorSumAggregateOutputType | null;
    _min: SectorMinAggregateOutputType | null;
    _max: SectorMaxAggregateOutputType | null;
};
type GetSectorGroupByPayload<T extends SectorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SectorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SectorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SectorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SectorGroupByOutputType[P]>;
}>>;
export type SectorWhereInput = {
    AND?: Prisma.SectorWhereInput | Prisma.SectorWhereInput[];
    OR?: Prisma.SectorWhereInput[];
    NOT?: Prisma.SectorWhereInput | Prisma.SectorWhereInput[];
    id?: Prisma.IntFilter<"Sector"> | number;
    name?: Prisma.StringFilter<"Sector"> | string;
    costCenter?: Prisma.StringFilter<"Sector"> | string;
    normalizedName?: Prisma.StringFilter<"Sector"> | string;
    operationId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    leaderDayId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    leaderNightId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    supervisorDayId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    supervisorNightId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    managerId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Sector"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sector"> | Date | string;
    Operation?: Prisma.XOR<Prisma.OperationNullableScalarRelationFilter, Prisma.OperationWhereInput> | null;
    leaderDay?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    leaderNight?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    supervisorDay?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    supervisorNight?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    manager?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    Designation?: Prisma.DesignationListRelationFilter;
};
export type SectorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    costCenter?: Prisma.SortOrder;
    normalizedName?: Prisma.SortOrder;
    operationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    leaderDayId?: Prisma.SortOrderInput | Prisma.SortOrder;
    leaderNightId?: Prisma.SortOrderInput | Prisma.SortOrder;
    supervisorDayId?: Prisma.SortOrderInput | Prisma.SortOrder;
    supervisorNightId?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Operation?: Prisma.OperationOrderByWithRelationInput;
    leaderDay?: Prisma.LeaderOrderByWithRelationInput;
    leaderNight?: Prisma.LeaderOrderByWithRelationInput;
    supervisorDay?: Prisma.LeaderOrderByWithRelationInput;
    supervisorNight?: Prisma.LeaderOrderByWithRelationInput;
    manager?: Prisma.LeaderOrderByWithRelationInput;
    Designation?: Prisma.DesignationOrderByRelationAggregateInput;
};
export type SectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    costCenter?: string;
    AND?: Prisma.SectorWhereInput | Prisma.SectorWhereInput[];
    OR?: Prisma.SectorWhereInput[];
    NOT?: Prisma.SectorWhereInput | Prisma.SectorWhereInput[];
    name?: Prisma.StringFilter<"Sector"> | string;
    normalizedName?: Prisma.StringFilter<"Sector"> | string;
    operationId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    leaderDayId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    leaderNightId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    supervisorDayId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    supervisorNightId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    managerId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Sector"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sector"> | Date | string;
    Operation?: Prisma.XOR<Prisma.OperationNullableScalarRelationFilter, Prisma.OperationWhereInput> | null;
    leaderDay?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    leaderNight?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    supervisorDay?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    supervisorNight?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    manager?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    Designation?: Prisma.DesignationListRelationFilter;
}, "id" | "costCenter">;
export type SectorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    costCenter?: Prisma.SortOrder;
    normalizedName?: Prisma.SortOrder;
    operationId?: Prisma.SortOrderInput | Prisma.SortOrder;
    leaderDayId?: Prisma.SortOrderInput | Prisma.SortOrder;
    leaderNightId?: Prisma.SortOrderInput | Prisma.SortOrder;
    supervisorDayId?: Prisma.SortOrderInput | Prisma.SortOrder;
    supervisorNightId?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SectorCountOrderByAggregateInput;
    _avg?: Prisma.SectorAvgOrderByAggregateInput;
    _max?: Prisma.SectorMaxOrderByAggregateInput;
    _min?: Prisma.SectorMinOrderByAggregateInput;
    _sum?: Prisma.SectorSumOrderByAggregateInput;
};
export type SectorScalarWhereWithAggregatesInput = {
    AND?: Prisma.SectorScalarWhereWithAggregatesInput | Prisma.SectorScalarWhereWithAggregatesInput[];
    OR?: Prisma.SectorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SectorScalarWhereWithAggregatesInput | Prisma.SectorScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Sector"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Sector"> | string;
    costCenter?: Prisma.StringWithAggregatesFilter<"Sector"> | string;
    normalizedName?: Prisma.StringWithAggregatesFilter<"Sector"> | string;
    operationId?: Prisma.IntNullableWithAggregatesFilter<"Sector"> | number | null;
    leaderDayId?: Prisma.IntNullableWithAggregatesFilter<"Sector"> | number | null;
    leaderNightId?: Prisma.IntNullableWithAggregatesFilter<"Sector"> | number | null;
    supervisorDayId?: Prisma.IntNullableWithAggregatesFilter<"Sector"> | number | null;
    supervisorNightId?: Prisma.IntNullableWithAggregatesFilter<"Sector"> | number | null;
    managerId?: Prisma.IntNullableWithAggregatesFilter<"Sector"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Sector"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Sector"> | Date | string;
};
export type SectorCreateInput = {
    name: string;
    costCenter: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Operation?: Prisma.OperationCreateNestedOneWithoutSectorInput;
    leaderDay?: Prisma.LeaderCreateNestedOneWithoutLeaderDayInput;
    leaderNight?: Prisma.LeaderCreateNestedOneWithoutLeaderNightInput;
    supervisorDay?: Prisma.LeaderCreateNestedOneWithoutSupervisorDayInput;
    supervisorNight?: Prisma.LeaderCreateNestedOneWithoutSupervisorNightInput;
    manager?: Prisma.LeaderCreateNestedOneWithoutManagerInput;
    Designation?: Prisma.DesignationCreateNestedManyWithoutSectorInput;
};
export type SectorUncheckedCreateInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutSectorInput;
};
export type SectorUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Operation?: Prisma.OperationUpdateOneWithoutSectorNestedInput;
    leaderDay?: Prisma.LeaderUpdateOneWithoutLeaderDayNestedInput;
    leaderNight?: Prisma.LeaderUpdateOneWithoutLeaderNightNestedInput;
    supervisorDay?: Prisma.LeaderUpdateOneWithoutSupervisorDayNestedInput;
    supervisorNight?: Prisma.LeaderUpdateOneWithoutSupervisorNightNestedInput;
    manager?: Prisma.LeaderUpdateOneWithoutManagerNestedInput;
    Designation?: Prisma.DesignationUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutSectorNestedInput;
};
export type SectorCreateManyInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectorUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectorUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    costCenter?: Prisma.SortOrder;
    normalizedName?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    leaderDayId?: Prisma.SortOrder;
    leaderNightId?: Prisma.SortOrder;
    supervisorDayId?: Prisma.SortOrder;
    supervisorNightId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SectorAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    leaderDayId?: Prisma.SortOrder;
    leaderNightId?: Prisma.SortOrder;
    supervisorDayId?: Prisma.SortOrder;
    supervisorNightId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
};
export type SectorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    costCenter?: Prisma.SortOrder;
    normalizedName?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    leaderDayId?: Prisma.SortOrder;
    leaderNightId?: Prisma.SortOrder;
    supervisorDayId?: Prisma.SortOrder;
    supervisorNightId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SectorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    costCenter?: Prisma.SortOrder;
    normalizedName?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    leaderDayId?: Prisma.SortOrder;
    leaderNightId?: Prisma.SortOrder;
    supervisorDayId?: Prisma.SortOrder;
    supervisorNightId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SectorSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    operationId?: Prisma.SortOrder;
    leaderDayId?: Prisma.SortOrder;
    leaderNightId?: Prisma.SortOrder;
    supervisorDayId?: Prisma.SortOrder;
    supervisorNightId?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
};
export type SectorListRelationFilter = {
    every?: Prisma.SectorWhereInput;
    some?: Prisma.SectorWhereInput;
    none?: Prisma.SectorWhereInput;
};
export type SectorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SectorScalarRelationFilter = {
    is?: Prisma.SectorWhereInput;
    isNot?: Prisma.SectorWhereInput;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SectorCreateNestedManyWithoutOperationInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutOperationInput, Prisma.SectorUncheckedCreateWithoutOperationInput> | Prisma.SectorCreateWithoutOperationInput[] | Prisma.SectorUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutOperationInput | Prisma.SectorCreateOrConnectWithoutOperationInput[];
    createMany?: Prisma.SectorCreateManyOperationInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorUncheckedCreateNestedManyWithoutOperationInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutOperationInput, Prisma.SectorUncheckedCreateWithoutOperationInput> | Prisma.SectorCreateWithoutOperationInput[] | Prisma.SectorUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutOperationInput | Prisma.SectorCreateOrConnectWithoutOperationInput[];
    createMany?: Prisma.SectorCreateManyOperationInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorUpdateManyWithoutOperationNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutOperationInput, Prisma.SectorUncheckedCreateWithoutOperationInput> | Prisma.SectorCreateWithoutOperationInput[] | Prisma.SectorUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutOperationInput | Prisma.SectorCreateOrConnectWithoutOperationInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutOperationInput | Prisma.SectorUpsertWithWhereUniqueWithoutOperationInput[];
    createMany?: Prisma.SectorCreateManyOperationInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutOperationInput | Prisma.SectorUpdateWithWhereUniqueWithoutOperationInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutOperationInput | Prisma.SectorUpdateManyWithWhereWithoutOperationInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorUncheckedUpdateManyWithoutOperationNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutOperationInput, Prisma.SectorUncheckedCreateWithoutOperationInput> | Prisma.SectorCreateWithoutOperationInput[] | Prisma.SectorUncheckedCreateWithoutOperationInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutOperationInput | Prisma.SectorCreateOrConnectWithoutOperationInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutOperationInput | Prisma.SectorUpsertWithWhereUniqueWithoutOperationInput[];
    createMany?: Prisma.SectorCreateManyOperationInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutOperationInput | Prisma.SectorUpdateWithWhereUniqueWithoutOperationInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutOperationInput | Prisma.SectorUpdateManyWithWhereWithoutOperationInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorCreateNestedManyWithoutLeaderDayInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutLeaderDayInput, Prisma.SectorUncheckedCreateWithoutLeaderDayInput> | Prisma.SectorCreateWithoutLeaderDayInput[] | Prisma.SectorUncheckedCreateWithoutLeaderDayInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutLeaderDayInput | Prisma.SectorCreateOrConnectWithoutLeaderDayInput[];
    createMany?: Prisma.SectorCreateManyLeaderDayInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorCreateNestedManyWithoutLeaderNightInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutLeaderNightInput, Prisma.SectorUncheckedCreateWithoutLeaderNightInput> | Prisma.SectorCreateWithoutLeaderNightInput[] | Prisma.SectorUncheckedCreateWithoutLeaderNightInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutLeaderNightInput | Prisma.SectorCreateOrConnectWithoutLeaderNightInput[];
    createMany?: Prisma.SectorCreateManyLeaderNightInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorCreateNestedManyWithoutSupervisorDayInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorDayInput, Prisma.SectorUncheckedCreateWithoutSupervisorDayInput> | Prisma.SectorCreateWithoutSupervisorDayInput[] | Prisma.SectorUncheckedCreateWithoutSupervisorDayInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutSupervisorDayInput | Prisma.SectorCreateOrConnectWithoutSupervisorDayInput[];
    createMany?: Prisma.SectorCreateManySupervisorDayInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorCreateNestedManyWithoutSupervisorNightInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorNightInput, Prisma.SectorUncheckedCreateWithoutSupervisorNightInput> | Prisma.SectorCreateWithoutSupervisorNightInput[] | Prisma.SectorUncheckedCreateWithoutSupervisorNightInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutSupervisorNightInput | Prisma.SectorCreateOrConnectWithoutSupervisorNightInput[];
    createMany?: Prisma.SectorCreateManySupervisorNightInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorCreateNestedManyWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutManagerInput, Prisma.SectorUncheckedCreateWithoutManagerInput> | Prisma.SectorCreateWithoutManagerInput[] | Prisma.SectorUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutManagerInput | Prisma.SectorCreateOrConnectWithoutManagerInput[];
    createMany?: Prisma.SectorCreateManyManagerInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorUncheckedCreateNestedManyWithoutLeaderDayInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutLeaderDayInput, Prisma.SectorUncheckedCreateWithoutLeaderDayInput> | Prisma.SectorCreateWithoutLeaderDayInput[] | Prisma.SectorUncheckedCreateWithoutLeaderDayInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutLeaderDayInput | Prisma.SectorCreateOrConnectWithoutLeaderDayInput[];
    createMany?: Prisma.SectorCreateManyLeaderDayInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorUncheckedCreateNestedManyWithoutLeaderNightInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutLeaderNightInput, Prisma.SectorUncheckedCreateWithoutLeaderNightInput> | Prisma.SectorCreateWithoutLeaderNightInput[] | Prisma.SectorUncheckedCreateWithoutLeaderNightInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutLeaderNightInput | Prisma.SectorCreateOrConnectWithoutLeaderNightInput[];
    createMany?: Prisma.SectorCreateManyLeaderNightInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorUncheckedCreateNestedManyWithoutSupervisorDayInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorDayInput, Prisma.SectorUncheckedCreateWithoutSupervisorDayInput> | Prisma.SectorCreateWithoutSupervisorDayInput[] | Prisma.SectorUncheckedCreateWithoutSupervisorDayInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutSupervisorDayInput | Prisma.SectorCreateOrConnectWithoutSupervisorDayInput[];
    createMany?: Prisma.SectorCreateManySupervisorDayInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorUncheckedCreateNestedManyWithoutSupervisorNightInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorNightInput, Prisma.SectorUncheckedCreateWithoutSupervisorNightInput> | Prisma.SectorCreateWithoutSupervisorNightInput[] | Prisma.SectorUncheckedCreateWithoutSupervisorNightInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutSupervisorNightInput | Prisma.SectorCreateOrConnectWithoutSupervisorNightInput[];
    createMany?: Prisma.SectorCreateManySupervisorNightInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorUncheckedCreateNestedManyWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutManagerInput, Prisma.SectorUncheckedCreateWithoutManagerInput> | Prisma.SectorCreateWithoutManagerInput[] | Prisma.SectorUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutManagerInput | Prisma.SectorCreateOrConnectWithoutManagerInput[];
    createMany?: Prisma.SectorCreateManyManagerInputEnvelope;
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
};
export type SectorUpdateManyWithoutLeaderDayNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutLeaderDayInput, Prisma.SectorUncheckedCreateWithoutLeaderDayInput> | Prisma.SectorCreateWithoutLeaderDayInput[] | Prisma.SectorUncheckedCreateWithoutLeaderDayInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutLeaderDayInput | Prisma.SectorCreateOrConnectWithoutLeaderDayInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutLeaderDayInput | Prisma.SectorUpsertWithWhereUniqueWithoutLeaderDayInput[];
    createMany?: Prisma.SectorCreateManyLeaderDayInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutLeaderDayInput | Prisma.SectorUpdateWithWhereUniqueWithoutLeaderDayInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutLeaderDayInput | Prisma.SectorUpdateManyWithWhereWithoutLeaderDayInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorUpdateManyWithoutLeaderNightNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutLeaderNightInput, Prisma.SectorUncheckedCreateWithoutLeaderNightInput> | Prisma.SectorCreateWithoutLeaderNightInput[] | Prisma.SectorUncheckedCreateWithoutLeaderNightInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutLeaderNightInput | Prisma.SectorCreateOrConnectWithoutLeaderNightInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutLeaderNightInput | Prisma.SectorUpsertWithWhereUniqueWithoutLeaderNightInput[];
    createMany?: Prisma.SectorCreateManyLeaderNightInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutLeaderNightInput | Prisma.SectorUpdateWithWhereUniqueWithoutLeaderNightInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutLeaderNightInput | Prisma.SectorUpdateManyWithWhereWithoutLeaderNightInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorUpdateManyWithoutSupervisorDayNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorDayInput, Prisma.SectorUncheckedCreateWithoutSupervisorDayInput> | Prisma.SectorCreateWithoutSupervisorDayInput[] | Prisma.SectorUncheckedCreateWithoutSupervisorDayInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutSupervisorDayInput | Prisma.SectorCreateOrConnectWithoutSupervisorDayInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutSupervisorDayInput | Prisma.SectorUpsertWithWhereUniqueWithoutSupervisorDayInput[];
    createMany?: Prisma.SectorCreateManySupervisorDayInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutSupervisorDayInput | Prisma.SectorUpdateWithWhereUniqueWithoutSupervisorDayInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutSupervisorDayInput | Prisma.SectorUpdateManyWithWhereWithoutSupervisorDayInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorUpdateManyWithoutSupervisorNightNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorNightInput, Prisma.SectorUncheckedCreateWithoutSupervisorNightInput> | Prisma.SectorCreateWithoutSupervisorNightInput[] | Prisma.SectorUncheckedCreateWithoutSupervisorNightInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutSupervisorNightInput | Prisma.SectorCreateOrConnectWithoutSupervisorNightInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutSupervisorNightInput | Prisma.SectorUpsertWithWhereUniqueWithoutSupervisorNightInput[];
    createMany?: Prisma.SectorCreateManySupervisorNightInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutSupervisorNightInput | Prisma.SectorUpdateWithWhereUniqueWithoutSupervisorNightInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutSupervisorNightInput | Prisma.SectorUpdateManyWithWhereWithoutSupervisorNightInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorUpdateManyWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutManagerInput, Prisma.SectorUncheckedCreateWithoutManagerInput> | Prisma.SectorCreateWithoutManagerInput[] | Prisma.SectorUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutManagerInput | Prisma.SectorCreateOrConnectWithoutManagerInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutManagerInput | Prisma.SectorUpsertWithWhereUniqueWithoutManagerInput[];
    createMany?: Prisma.SectorCreateManyManagerInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutManagerInput | Prisma.SectorUpdateWithWhereUniqueWithoutManagerInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutManagerInput | Prisma.SectorUpdateManyWithWhereWithoutManagerInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorUncheckedUpdateManyWithoutLeaderDayNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutLeaderDayInput, Prisma.SectorUncheckedCreateWithoutLeaderDayInput> | Prisma.SectorCreateWithoutLeaderDayInput[] | Prisma.SectorUncheckedCreateWithoutLeaderDayInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutLeaderDayInput | Prisma.SectorCreateOrConnectWithoutLeaderDayInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutLeaderDayInput | Prisma.SectorUpsertWithWhereUniqueWithoutLeaderDayInput[];
    createMany?: Prisma.SectorCreateManyLeaderDayInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutLeaderDayInput | Prisma.SectorUpdateWithWhereUniqueWithoutLeaderDayInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutLeaderDayInput | Prisma.SectorUpdateManyWithWhereWithoutLeaderDayInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorUncheckedUpdateManyWithoutLeaderNightNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutLeaderNightInput, Prisma.SectorUncheckedCreateWithoutLeaderNightInput> | Prisma.SectorCreateWithoutLeaderNightInput[] | Prisma.SectorUncheckedCreateWithoutLeaderNightInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutLeaderNightInput | Prisma.SectorCreateOrConnectWithoutLeaderNightInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutLeaderNightInput | Prisma.SectorUpsertWithWhereUniqueWithoutLeaderNightInput[];
    createMany?: Prisma.SectorCreateManyLeaderNightInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutLeaderNightInput | Prisma.SectorUpdateWithWhereUniqueWithoutLeaderNightInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutLeaderNightInput | Prisma.SectorUpdateManyWithWhereWithoutLeaderNightInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorUncheckedUpdateManyWithoutSupervisorDayNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorDayInput, Prisma.SectorUncheckedCreateWithoutSupervisorDayInput> | Prisma.SectorCreateWithoutSupervisorDayInput[] | Prisma.SectorUncheckedCreateWithoutSupervisorDayInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutSupervisorDayInput | Prisma.SectorCreateOrConnectWithoutSupervisorDayInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutSupervisorDayInput | Prisma.SectorUpsertWithWhereUniqueWithoutSupervisorDayInput[];
    createMany?: Prisma.SectorCreateManySupervisorDayInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutSupervisorDayInput | Prisma.SectorUpdateWithWhereUniqueWithoutSupervisorDayInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutSupervisorDayInput | Prisma.SectorUpdateManyWithWhereWithoutSupervisorDayInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorUncheckedUpdateManyWithoutSupervisorNightNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorNightInput, Prisma.SectorUncheckedCreateWithoutSupervisorNightInput> | Prisma.SectorCreateWithoutSupervisorNightInput[] | Prisma.SectorUncheckedCreateWithoutSupervisorNightInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutSupervisorNightInput | Prisma.SectorCreateOrConnectWithoutSupervisorNightInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutSupervisorNightInput | Prisma.SectorUpsertWithWhereUniqueWithoutSupervisorNightInput[];
    createMany?: Prisma.SectorCreateManySupervisorNightInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutSupervisorNightInput | Prisma.SectorUpdateWithWhereUniqueWithoutSupervisorNightInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutSupervisorNightInput | Prisma.SectorUpdateManyWithWhereWithoutSupervisorNightInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutManagerInput, Prisma.SectorUncheckedCreateWithoutManagerInput> | Prisma.SectorCreateWithoutManagerInput[] | Prisma.SectorUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutManagerInput | Prisma.SectorCreateOrConnectWithoutManagerInput[];
    upsert?: Prisma.SectorUpsertWithWhereUniqueWithoutManagerInput | Prisma.SectorUpsertWithWhereUniqueWithoutManagerInput[];
    createMany?: Prisma.SectorCreateManyManagerInputEnvelope;
    set?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    disconnect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    delete?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    connect?: Prisma.SectorWhereUniqueInput | Prisma.SectorWhereUniqueInput[];
    update?: Prisma.SectorUpdateWithWhereUniqueWithoutManagerInput | Prisma.SectorUpdateWithWhereUniqueWithoutManagerInput[];
    updateMany?: Prisma.SectorUpdateManyWithWhereWithoutManagerInput | Prisma.SectorUpdateManyWithWhereWithoutManagerInput[];
    deleteMany?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
};
export type SectorCreateNestedOneWithoutDesignationInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutDesignationInput, Prisma.SectorUncheckedCreateWithoutDesignationInput>;
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutDesignationInput;
    connect?: Prisma.SectorWhereUniqueInput;
};
export type SectorUpdateOneRequiredWithoutDesignationNestedInput = {
    create?: Prisma.XOR<Prisma.SectorCreateWithoutDesignationInput, Prisma.SectorUncheckedCreateWithoutDesignationInput>;
    connectOrCreate?: Prisma.SectorCreateOrConnectWithoutDesignationInput;
    upsert?: Prisma.SectorUpsertWithoutDesignationInput;
    connect?: Prisma.SectorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SectorUpdateToOneWithWhereWithoutDesignationInput, Prisma.SectorUpdateWithoutDesignationInput>, Prisma.SectorUncheckedUpdateWithoutDesignationInput>;
};
export type SectorCreateWithoutOperationInput = {
    name: string;
    costCenter: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leaderDay?: Prisma.LeaderCreateNestedOneWithoutLeaderDayInput;
    leaderNight?: Prisma.LeaderCreateNestedOneWithoutLeaderNightInput;
    supervisorDay?: Prisma.LeaderCreateNestedOneWithoutSupervisorDayInput;
    supervisorNight?: Prisma.LeaderCreateNestedOneWithoutSupervisorNightInput;
    manager?: Prisma.LeaderCreateNestedOneWithoutManagerInput;
    Designation?: Prisma.DesignationCreateNestedManyWithoutSectorInput;
};
export type SectorUncheckedCreateWithoutOperationInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutSectorInput;
};
export type SectorCreateOrConnectWithoutOperationInput = {
    where: Prisma.SectorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectorCreateWithoutOperationInput, Prisma.SectorUncheckedCreateWithoutOperationInput>;
};
export type SectorCreateManyOperationInputEnvelope = {
    data: Prisma.SectorCreateManyOperationInput | Prisma.SectorCreateManyOperationInput[];
    skipDuplicates?: boolean;
};
export type SectorUpsertWithWhereUniqueWithoutOperationInput = {
    where: Prisma.SectorWhereUniqueInput;
    update: Prisma.XOR<Prisma.SectorUpdateWithoutOperationInput, Prisma.SectorUncheckedUpdateWithoutOperationInput>;
    create: Prisma.XOR<Prisma.SectorCreateWithoutOperationInput, Prisma.SectorUncheckedCreateWithoutOperationInput>;
};
export type SectorUpdateWithWhereUniqueWithoutOperationInput = {
    where: Prisma.SectorWhereUniqueInput;
    data: Prisma.XOR<Prisma.SectorUpdateWithoutOperationInput, Prisma.SectorUncheckedUpdateWithoutOperationInput>;
};
export type SectorUpdateManyWithWhereWithoutOperationInput = {
    where: Prisma.SectorScalarWhereInput;
    data: Prisma.XOR<Prisma.SectorUpdateManyMutationInput, Prisma.SectorUncheckedUpdateManyWithoutOperationInput>;
};
export type SectorScalarWhereInput = {
    AND?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
    OR?: Prisma.SectorScalarWhereInput[];
    NOT?: Prisma.SectorScalarWhereInput | Prisma.SectorScalarWhereInput[];
    id?: Prisma.IntFilter<"Sector"> | number;
    name?: Prisma.StringFilter<"Sector"> | string;
    costCenter?: Prisma.StringFilter<"Sector"> | string;
    normalizedName?: Prisma.StringFilter<"Sector"> | string;
    operationId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    leaderDayId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    leaderNightId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    supervisorDayId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    supervisorNightId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    managerId?: Prisma.IntNullableFilter<"Sector"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Sector"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Sector"> | Date | string;
};
export type SectorCreateWithoutLeaderDayInput = {
    name: string;
    costCenter: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Operation?: Prisma.OperationCreateNestedOneWithoutSectorInput;
    leaderNight?: Prisma.LeaderCreateNestedOneWithoutLeaderNightInput;
    supervisorDay?: Prisma.LeaderCreateNestedOneWithoutSupervisorDayInput;
    supervisorNight?: Prisma.LeaderCreateNestedOneWithoutSupervisorNightInput;
    manager?: Prisma.LeaderCreateNestedOneWithoutManagerInput;
    Designation?: Prisma.DesignationCreateNestedManyWithoutSectorInput;
};
export type SectorUncheckedCreateWithoutLeaderDayInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutSectorInput;
};
export type SectorCreateOrConnectWithoutLeaderDayInput = {
    where: Prisma.SectorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectorCreateWithoutLeaderDayInput, Prisma.SectorUncheckedCreateWithoutLeaderDayInput>;
};
export type SectorCreateManyLeaderDayInputEnvelope = {
    data: Prisma.SectorCreateManyLeaderDayInput | Prisma.SectorCreateManyLeaderDayInput[];
    skipDuplicates?: boolean;
};
export type SectorCreateWithoutLeaderNightInput = {
    name: string;
    costCenter: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Operation?: Prisma.OperationCreateNestedOneWithoutSectorInput;
    leaderDay?: Prisma.LeaderCreateNestedOneWithoutLeaderDayInput;
    supervisorDay?: Prisma.LeaderCreateNestedOneWithoutSupervisorDayInput;
    supervisorNight?: Prisma.LeaderCreateNestedOneWithoutSupervisorNightInput;
    manager?: Prisma.LeaderCreateNestedOneWithoutManagerInput;
    Designation?: Prisma.DesignationCreateNestedManyWithoutSectorInput;
};
export type SectorUncheckedCreateWithoutLeaderNightInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutSectorInput;
};
export type SectorCreateOrConnectWithoutLeaderNightInput = {
    where: Prisma.SectorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectorCreateWithoutLeaderNightInput, Prisma.SectorUncheckedCreateWithoutLeaderNightInput>;
};
export type SectorCreateManyLeaderNightInputEnvelope = {
    data: Prisma.SectorCreateManyLeaderNightInput | Prisma.SectorCreateManyLeaderNightInput[];
    skipDuplicates?: boolean;
};
export type SectorCreateWithoutSupervisorDayInput = {
    name: string;
    costCenter: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Operation?: Prisma.OperationCreateNestedOneWithoutSectorInput;
    leaderDay?: Prisma.LeaderCreateNestedOneWithoutLeaderDayInput;
    leaderNight?: Prisma.LeaderCreateNestedOneWithoutLeaderNightInput;
    supervisorNight?: Prisma.LeaderCreateNestedOneWithoutSupervisorNightInput;
    manager?: Prisma.LeaderCreateNestedOneWithoutManagerInput;
    Designation?: Prisma.DesignationCreateNestedManyWithoutSectorInput;
};
export type SectorUncheckedCreateWithoutSupervisorDayInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutSectorInput;
};
export type SectorCreateOrConnectWithoutSupervisorDayInput = {
    where: Prisma.SectorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorDayInput, Prisma.SectorUncheckedCreateWithoutSupervisorDayInput>;
};
export type SectorCreateManySupervisorDayInputEnvelope = {
    data: Prisma.SectorCreateManySupervisorDayInput | Prisma.SectorCreateManySupervisorDayInput[];
    skipDuplicates?: boolean;
};
export type SectorCreateWithoutSupervisorNightInput = {
    name: string;
    costCenter: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Operation?: Prisma.OperationCreateNestedOneWithoutSectorInput;
    leaderDay?: Prisma.LeaderCreateNestedOneWithoutLeaderDayInput;
    leaderNight?: Prisma.LeaderCreateNestedOneWithoutLeaderNightInput;
    supervisorDay?: Prisma.LeaderCreateNestedOneWithoutSupervisorDayInput;
    manager?: Prisma.LeaderCreateNestedOneWithoutManagerInput;
    Designation?: Prisma.DesignationCreateNestedManyWithoutSectorInput;
};
export type SectorUncheckedCreateWithoutSupervisorNightInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutSectorInput;
};
export type SectorCreateOrConnectWithoutSupervisorNightInput = {
    where: Prisma.SectorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorNightInput, Prisma.SectorUncheckedCreateWithoutSupervisorNightInput>;
};
export type SectorCreateManySupervisorNightInputEnvelope = {
    data: Prisma.SectorCreateManySupervisorNightInput | Prisma.SectorCreateManySupervisorNightInput[];
    skipDuplicates?: boolean;
};
export type SectorCreateWithoutManagerInput = {
    name: string;
    costCenter: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Operation?: Prisma.OperationCreateNestedOneWithoutSectorInput;
    leaderDay?: Prisma.LeaderCreateNestedOneWithoutLeaderDayInput;
    leaderNight?: Prisma.LeaderCreateNestedOneWithoutLeaderNightInput;
    supervisorDay?: Prisma.LeaderCreateNestedOneWithoutSupervisorDayInput;
    supervisorNight?: Prisma.LeaderCreateNestedOneWithoutSupervisorNightInput;
    Designation?: Prisma.DesignationCreateNestedManyWithoutSectorInput;
};
export type SectorUncheckedCreateWithoutManagerInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutSectorInput;
};
export type SectorCreateOrConnectWithoutManagerInput = {
    where: Prisma.SectorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectorCreateWithoutManagerInput, Prisma.SectorUncheckedCreateWithoutManagerInput>;
};
export type SectorCreateManyManagerInputEnvelope = {
    data: Prisma.SectorCreateManyManagerInput | Prisma.SectorCreateManyManagerInput[];
    skipDuplicates?: boolean;
};
export type SectorUpsertWithWhereUniqueWithoutLeaderDayInput = {
    where: Prisma.SectorWhereUniqueInput;
    update: Prisma.XOR<Prisma.SectorUpdateWithoutLeaderDayInput, Prisma.SectorUncheckedUpdateWithoutLeaderDayInput>;
    create: Prisma.XOR<Prisma.SectorCreateWithoutLeaderDayInput, Prisma.SectorUncheckedCreateWithoutLeaderDayInput>;
};
export type SectorUpdateWithWhereUniqueWithoutLeaderDayInput = {
    where: Prisma.SectorWhereUniqueInput;
    data: Prisma.XOR<Prisma.SectorUpdateWithoutLeaderDayInput, Prisma.SectorUncheckedUpdateWithoutLeaderDayInput>;
};
export type SectorUpdateManyWithWhereWithoutLeaderDayInput = {
    where: Prisma.SectorScalarWhereInput;
    data: Prisma.XOR<Prisma.SectorUpdateManyMutationInput, Prisma.SectorUncheckedUpdateManyWithoutLeaderDayInput>;
};
export type SectorUpsertWithWhereUniqueWithoutLeaderNightInput = {
    where: Prisma.SectorWhereUniqueInput;
    update: Prisma.XOR<Prisma.SectorUpdateWithoutLeaderNightInput, Prisma.SectorUncheckedUpdateWithoutLeaderNightInput>;
    create: Prisma.XOR<Prisma.SectorCreateWithoutLeaderNightInput, Prisma.SectorUncheckedCreateWithoutLeaderNightInput>;
};
export type SectorUpdateWithWhereUniqueWithoutLeaderNightInput = {
    where: Prisma.SectorWhereUniqueInput;
    data: Prisma.XOR<Prisma.SectorUpdateWithoutLeaderNightInput, Prisma.SectorUncheckedUpdateWithoutLeaderNightInput>;
};
export type SectorUpdateManyWithWhereWithoutLeaderNightInput = {
    where: Prisma.SectorScalarWhereInput;
    data: Prisma.XOR<Prisma.SectorUpdateManyMutationInput, Prisma.SectorUncheckedUpdateManyWithoutLeaderNightInput>;
};
export type SectorUpsertWithWhereUniqueWithoutSupervisorDayInput = {
    where: Prisma.SectorWhereUniqueInput;
    update: Prisma.XOR<Prisma.SectorUpdateWithoutSupervisorDayInput, Prisma.SectorUncheckedUpdateWithoutSupervisorDayInput>;
    create: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorDayInput, Prisma.SectorUncheckedCreateWithoutSupervisorDayInput>;
};
export type SectorUpdateWithWhereUniqueWithoutSupervisorDayInput = {
    where: Prisma.SectorWhereUniqueInput;
    data: Prisma.XOR<Prisma.SectorUpdateWithoutSupervisorDayInput, Prisma.SectorUncheckedUpdateWithoutSupervisorDayInput>;
};
export type SectorUpdateManyWithWhereWithoutSupervisorDayInput = {
    where: Prisma.SectorScalarWhereInput;
    data: Prisma.XOR<Prisma.SectorUpdateManyMutationInput, Prisma.SectorUncheckedUpdateManyWithoutSupervisorDayInput>;
};
export type SectorUpsertWithWhereUniqueWithoutSupervisorNightInput = {
    where: Prisma.SectorWhereUniqueInput;
    update: Prisma.XOR<Prisma.SectorUpdateWithoutSupervisorNightInput, Prisma.SectorUncheckedUpdateWithoutSupervisorNightInput>;
    create: Prisma.XOR<Prisma.SectorCreateWithoutSupervisorNightInput, Prisma.SectorUncheckedCreateWithoutSupervisorNightInput>;
};
export type SectorUpdateWithWhereUniqueWithoutSupervisorNightInput = {
    where: Prisma.SectorWhereUniqueInput;
    data: Prisma.XOR<Prisma.SectorUpdateWithoutSupervisorNightInput, Prisma.SectorUncheckedUpdateWithoutSupervisorNightInput>;
};
export type SectorUpdateManyWithWhereWithoutSupervisorNightInput = {
    where: Prisma.SectorScalarWhereInput;
    data: Prisma.XOR<Prisma.SectorUpdateManyMutationInput, Prisma.SectorUncheckedUpdateManyWithoutSupervisorNightInput>;
};
export type SectorUpsertWithWhereUniqueWithoutManagerInput = {
    where: Prisma.SectorWhereUniqueInput;
    update: Prisma.XOR<Prisma.SectorUpdateWithoutManagerInput, Prisma.SectorUncheckedUpdateWithoutManagerInput>;
    create: Prisma.XOR<Prisma.SectorCreateWithoutManagerInput, Prisma.SectorUncheckedCreateWithoutManagerInput>;
};
export type SectorUpdateWithWhereUniqueWithoutManagerInput = {
    where: Prisma.SectorWhereUniqueInput;
    data: Prisma.XOR<Prisma.SectorUpdateWithoutManagerInput, Prisma.SectorUncheckedUpdateWithoutManagerInput>;
};
export type SectorUpdateManyWithWhereWithoutManagerInput = {
    where: Prisma.SectorScalarWhereInput;
    data: Prisma.XOR<Prisma.SectorUpdateManyMutationInput, Prisma.SectorUncheckedUpdateManyWithoutManagerInput>;
};
export type SectorCreateWithoutDesignationInput = {
    name: string;
    costCenter: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Operation?: Prisma.OperationCreateNestedOneWithoutSectorInput;
    leaderDay?: Prisma.LeaderCreateNestedOneWithoutLeaderDayInput;
    leaderNight?: Prisma.LeaderCreateNestedOneWithoutLeaderNightInput;
    supervisorDay?: Prisma.LeaderCreateNestedOneWithoutSupervisorDayInput;
    supervisorNight?: Prisma.LeaderCreateNestedOneWithoutSupervisorNightInput;
    manager?: Prisma.LeaderCreateNestedOneWithoutManagerInput;
};
export type SectorUncheckedCreateWithoutDesignationInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectorCreateOrConnectWithoutDesignationInput = {
    where: Prisma.SectorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectorCreateWithoutDesignationInput, Prisma.SectorUncheckedCreateWithoutDesignationInput>;
};
export type SectorUpsertWithoutDesignationInput = {
    update: Prisma.XOR<Prisma.SectorUpdateWithoutDesignationInput, Prisma.SectorUncheckedUpdateWithoutDesignationInput>;
    create: Prisma.XOR<Prisma.SectorCreateWithoutDesignationInput, Prisma.SectorUncheckedCreateWithoutDesignationInput>;
    where?: Prisma.SectorWhereInput;
};
export type SectorUpdateToOneWithWhereWithoutDesignationInput = {
    where?: Prisma.SectorWhereInput;
    data: Prisma.XOR<Prisma.SectorUpdateWithoutDesignationInput, Prisma.SectorUncheckedUpdateWithoutDesignationInput>;
};
export type SectorUpdateWithoutDesignationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Operation?: Prisma.OperationUpdateOneWithoutSectorNestedInput;
    leaderDay?: Prisma.LeaderUpdateOneWithoutLeaderDayNestedInput;
    leaderNight?: Prisma.LeaderUpdateOneWithoutLeaderNightNestedInput;
    supervisorDay?: Prisma.LeaderUpdateOneWithoutSupervisorDayNestedInput;
    supervisorNight?: Prisma.LeaderUpdateOneWithoutSupervisorNightNestedInput;
    manager?: Prisma.LeaderUpdateOneWithoutManagerNestedInput;
};
export type SectorUncheckedUpdateWithoutDesignationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectorCreateManyOperationInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectorUpdateWithoutOperationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leaderDay?: Prisma.LeaderUpdateOneWithoutLeaderDayNestedInput;
    leaderNight?: Prisma.LeaderUpdateOneWithoutLeaderNightNestedInput;
    supervisorDay?: Prisma.LeaderUpdateOneWithoutSupervisorDayNestedInput;
    supervisorNight?: Prisma.LeaderUpdateOneWithoutSupervisorNightNestedInput;
    manager?: Prisma.LeaderUpdateOneWithoutManagerNestedInput;
    Designation?: Prisma.DesignationUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateWithoutOperationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateManyWithoutOperationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectorCreateManyLeaderDayInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectorCreateManyLeaderNightInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectorCreateManySupervisorDayInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorNightId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectorCreateManySupervisorNightInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    managerId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectorCreateManyManagerInput = {
    id?: number;
    name: string;
    costCenter: string;
    normalizedName: string;
    operationId?: number | null;
    leaderDayId?: number | null;
    leaderNightId?: number | null;
    supervisorDayId?: number | null;
    supervisorNightId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectorUpdateWithoutLeaderDayInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Operation?: Prisma.OperationUpdateOneWithoutSectorNestedInput;
    leaderNight?: Prisma.LeaderUpdateOneWithoutLeaderNightNestedInput;
    supervisorDay?: Prisma.LeaderUpdateOneWithoutSupervisorDayNestedInput;
    supervisorNight?: Prisma.LeaderUpdateOneWithoutSupervisorNightNestedInput;
    manager?: Prisma.LeaderUpdateOneWithoutManagerNestedInput;
    Designation?: Prisma.DesignationUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateWithoutLeaderDayInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateManyWithoutLeaderDayInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectorUpdateWithoutLeaderNightInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Operation?: Prisma.OperationUpdateOneWithoutSectorNestedInput;
    leaderDay?: Prisma.LeaderUpdateOneWithoutLeaderDayNestedInput;
    supervisorDay?: Prisma.LeaderUpdateOneWithoutSupervisorDayNestedInput;
    supervisorNight?: Prisma.LeaderUpdateOneWithoutSupervisorNightNestedInput;
    manager?: Prisma.LeaderUpdateOneWithoutManagerNestedInput;
    Designation?: Prisma.DesignationUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateWithoutLeaderNightInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateManyWithoutLeaderNightInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectorUpdateWithoutSupervisorDayInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Operation?: Prisma.OperationUpdateOneWithoutSectorNestedInput;
    leaderDay?: Prisma.LeaderUpdateOneWithoutLeaderDayNestedInput;
    leaderNight?: Prisma.LeaderUpdateOneWithoutLeaderNightNestedInput;
    supervisorNight?: Prisma.LeaderUpdateOneWithoutSupervisorNightNestedInput;
    manager?: Prisma.LeaderUpdateOneWithoutManagerNestedInput;
    Designation?: Prisma.DesignationUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateWithoutSupervisorDayInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateManyWithoutSupervisorDayInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectorUpdateWithoutSupervisorNightInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Operation?: Prisma.OperationUpdateOneWithoutSectorNestedInput;
    leaderDay?: Prisma.LeaderUpdateOneWithoutLeaderDayNestedInput;
    leaderNight?: Prisma.LeaderUpdateOneWithoutLeaderNightNestedInput;
    supervisorDay?: Prisma.LeaderUpdateOneWithoutSupervisorDayNestedInput;
    manager?: Prisma.LeaderUpdateOneWithoutManagerNestedInput;
    Designation?: Prisma.DesignationUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateWithoutSupervisorNightInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateManyWithoutSupervisorNightInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectorUpdateWithoutManagerInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Operation?: Prisma.OperationUpdateOneWithoutSectorNestedInput;
    leaderDay?: Prisma.LeaderUpdateOneWithoutLeaderDayNestedInput;
    leaderNight?: Prisma.LeaderUpdateOneWithoutLeaderNightNestedInput;
    supervisorDay?: Prisma.LeaderUpdateOneWithoutSupervisorDayNestedInput;
    supervisorNight?: Prisma.LeaderUpdateOneWithoutSupervisorNightNestedInput;
    Designation?: Prisma.DesignationUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateWithoutManagerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutSectorNestedInput;
};
export type SectorUncheckedUpdateManyWithoutManagerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    costCenter?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    operationId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    leaderNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorDayId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    supervisorNightId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectorCountOutputType = {
    Designation: number;
};
export type SectorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Designation?: boolean | SectorCountOutputTypeCountDesignationArgs;
};
export type SectorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorCountOutputTypeSelect<ExtArgs> | null;
};
export type SectorCountOutputTypeCountDesignationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignationWhereInput;
};
export type SectorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    costCenter?: boolean;
    normalizedName?: boolean;
    operationId?: boolean;
    leaderDayId?: boolean;
    leaderNightId?: boolean;
    supervisorDayId?: boolean;
    supervisorNightId?: boolean;
    managerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Operation?: boolean | Prisma.Sector$OperationArgs<ExtArgs>;
    leaderDay?: boolean | Prisma.Sector$leaderDayArgs<ExtArgs>;
    leaderNight?: boolean | Prisma.Sector$leaderNightArgs<ExtArgs>;
    supervisorDay?: boolean | Prisma.Sector$supervisorDayArgs<ExtArgs>;
    supervisorNight?: boolean | Prisma.Sector$supervisorNightArgs<ExtArgs>;
    manager?: boolean | Prisma.Sector$managerArgs<ExtArgs>;
    Designation?: boolean | Prisma.Sector$DesignationArgs<ExtArgs>;
    _count?: boolean | Prisma.SectorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["sector"]>;
export type SectorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    costCenter?: boolean;
    normalizedName?: boolean;
    operationId?: boolean;
    leaderDayId?: boolean;
    leaderNightId?: boolean;
    supervisorDayId?: boolean;
    supervisorNightId?: boolean;
    managerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Operation?: boolean | Prisma.Sector$OperationArgs<ExtArgs>;
    leaderDay?: boolean | Prisma.Sector$leaderDayArgs<ExtArgs>;
    leaderNight?: boolean | Prisma.Sector$leaderNightArgs<ExtArgs>;
    supervisorDay?: boolean | Prisma.Sector$supervisorDayArgs<ExtArgs>;
    supervisorNight?: boolean | Prisma.Sector$supervisorNightArgs<ExtArgs>;
    manager?: boolean | Prisma.Sector$managerArgs<ExtArgs>;
}, ExtArgs["result"]["sector"]>;
export type SectorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    costCenter?: boolean;
    normalizedName?: boolean;
    operationId?: boolean;
    leaderDayId?: boolean;
    leaderNightId?: boolean;
    supervisorDayId?: boolean;
    supervisorNightId?: boolean;
    managerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Operation?: boolean | Prisma.Sector$OperationArgs<ExtArgs>;
    leaderDay?: boolean | Prisma.Sector$leaderDayArgs<ExtArgs>;
    leaderNight?: boolean | Prisma.Sector$leaderNightArgs<ExtArgs>;
    supervisorDay?: boolean | Prisma.Sector$supervisorDayArgs<ExtArgs>;
    supervisorNight?: boolean | Prisma.Sector$supervisorNightArgs<ExtArgs>;
    manager?: boolean | Prisma.Sector$managerArgs<ExtArgs>;
}, ExtArgs["result"]["sector"]>;
export type SectorSelectScalar = {
    id?: boolean;
    name?: boolean;
    costCenter?: boolean;
    normalizedName?: boolean;
    operationId?: boolean;
    leaderDayId?: boolean;
    leaderNightId?: boolean;
    supervisorDayId?: boolean;
    supervisorNightId?: boolean;
    managerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SectorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "costCenter" | "normalizedName" | "operationId" | "leaderDayId" | "leaderNightId" | "supervisorDayId" | "supervisorNightId" | "managerId" | "createdAt" | "updatedAt", ExtArgs["result"]["sector"]>;
export type SectorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Operation?: boolean | Prisma.Sector$OperationArgs<ExtArgs>;
    leaderDay?: boolean | Prisma.Sector$leaderDayArgs<ExtArgs>;
    leaderNight?: boolean | Prisma.Sector$leaderNightArgs<ExtArgs>;
    supervisorDay?: boolean | Prisma.Sector$supervisorDayArgs<ExtArgs>;
    supervisorNight?: boolean | Prisma.Sector$supervisorNightArgs<ExtArgs>;
    manager?: boolean | Prisma.Sector$managerArgs<ExtArgs>;
    Designation?: boolean | Prisma.Sector$DesignationArgs<ExtArgs>;
    _count?: boolean | Prisma.SectorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SectorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Operation?: boolean | Prisma.Sector$OperationArgs<ExtArgs>;
    leaderDay?: boolean | Prisma.Sector$leaderDayArgs<ExtArgs>;
    leaderNight?: boolean | Prisma.Sector$leaderNightArgs<ExtArgs>;
    supervisorDay?: boolean | Prisma.Sector$supervisorDayArgs<ExtArgs>;
    supervisorNight?: boolean | Prisma.Sector$supervisorNightArgs<ExtArgs>;
    manager?: boolean | Prisma.Sector$managerArgs<ExtArgs>;
};
export type SectorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Operation?: boolean | Prisma.Sector$OperationArgs<ExtArgs>;
    leaderDay?: boolean | Prisma.Sector$leaderDayArgs<ExtArgs>;
    leaderNight?: boolean | Prisma.Sector$leaderNightArgs<ExtArgs>;
    supervisorDay?: boolean | Prisma.Sector$supervisorDayArgs<ExtArgs>;
    supervisorNight?: boolean | Prisma.Sector$supervisorNightArgs<ExtArgs>;
    manager?: boolean | Prisma.Sector$managerArgs<ExtArgs>;
};
export type $SectorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Sector";
    objects: {
        Operation: Prisma.$OperationPayload<ExtArgs> | null;
        leaderDay: Prisma.$LeaderPayload<ExtArgs> | null;
        leaderNight: Prisma.$LeaderPayload<ExtArgs> | null;
        supervisorDay: Prisma.$LeaderPayload<ExtArgs> | null;
        supervisorNight: Prisma.$LeaderPayload<ExtArgs> | null;
        manager: Prisma.$LeaderPayload<ExtArgs> | null;
        Designation: Prisma.$DesignationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        costCenter: string;
        normalizedName: string;
        operationId: number | null;
        leaderDayId: number | null;
        leaderNightId: number | null;
        supervisorDayId: number | null;
        supervisorNightId: number | null;
        managerId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["sector"]>;
    composites: {};
};
export type SectorGetPayload<S extends boolean | null | undefined | SectorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SectorPayload, S>;
export type SectorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SectorCountAggregateInputType | true;
};
export interface SectorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Sector'];
        meta: {
            name: 'Sector';
        };
    };
    findUnique<T extends SectorFindUniqueArgs>(args: Prisma.SelectSubset<T, SectorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SectorClient<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SectorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SectorClient<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SectorFindFirstArgs>(args?: Prisma.SelectSubset<T, SectorFindFirstArgs<ExtArgs>>): Prisma.Prisma__SectorClient<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SectorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SectorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SectorClient<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SectorFindManyArgs>(args?: Prisma.SelectSubset<T, SectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SectorCreateArgs>(args: Prisma.SelectSubset<T, SectorCreateArgs<ExtArgs>>): Prisma.Prisma__SectorClient<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SectorCreateManyArgs>(args?: Prisma.SelectSubset<T, SectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SectorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SectorDeleteArgs>(args: Prisma.SelectSubset<T, SectorDeleteArgs<ExtArgs>>): Prisma.Prisma__SectorClient<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SectorUpdateArgs>(args: Prisma.SelectSubset<T, SectorUpdateArgs<ExtArgs>>): Prisma.Prisma__SectorClient<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SectorDeleteManyArgs>(args?: Prisma.SelectSubset<T, SectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SectorUpdateManyArgs>(args: Prisma.SelectSubset<T, SectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SectorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SectorUpsertArgs>(args: Prisma.SelectSubset<T, SectorUpsertArgs<ExtArgs>>): Prisma.Prisma__SectorClient<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SectorCountArgs>(args?: Prisma.Subset<T, SectorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SectorCountAggregateOutputType> : number>;
    aggregate<T extends SectorAggregateArgs>(args: Prisma.Subset<T, SectorAggregateArgs>): Prisma.PrismaPromise<GetSectorAggregateType<T>>;
    groupBy<T extends SectorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SectorGroupByArgs['orderBy'];
    } : {
        orderBy?: SectorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SectorFieldRefs;
}
export interface Prisma__SectorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Operation<T extends Prisma.Sector$OperationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sector$OperationArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    leaderDay<T extends Prisma.Sector$leaderDayArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sector$leaderDayArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    leaderNight<T extends Prisma.Sector$leaderNightArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sector$leaderNightArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    supervisorDay<T extends Prisma.Sector$supervisorDayArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sector$supervisorDayArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    supervisorNight<T extends Prisma.Sector$supervisorNightArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sector$supervisorNightArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    manager<T extends Prisma.Sector$managerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sector$managerArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    Designation<T extends Prisma.Sector$DesignationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Sector$DesignationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SectorFieldRefs {
    readonly id: Prisma.FieldRef<"Sector", 'Int'>;
    readonly name: Prisma.FieldRef<"Sector", 'String'>;
    readonly costCenter: Prisma.FieldRef<"Sector", 'String'>;
    readonly normalizedName: Prisma.FieldRef<"Sector", 'String'>;
    readonly operationId: Prisma.FieldRef<"Sector", 'Int'>;
    readonly leaderDayId: Prisma.FieldRef<"Sector", 'Int'>;
    readonly leaderNightId: Prisma.FieldRef<"Sector", 'Int'>;
    readonly supervisorDayId: Prisma.FieldRef<"Sector", 'Int'>;
    readonly supervisorNightId: Prisma.FieldRef<"Sector", 'Int'>;
    readonly managerId: Prisma.FieldRef<"Sector", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Sector", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Sector", 'DateTime'>;
}
export type SectorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
    where: Prisma.SectorWhereUniqueInput;
};
export type SectorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
    where: Prisma.SectorWhereUniqueInput;
};
export type SectorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
    where?: Prisma.SectorWhereInput;
    orderBy?: Prisma.SectorOrderByWithRelationInput | Prisma.SectorOrderByWithRelationInput[];
    cursor?: Prisma.SectorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SectorScalarFieldEnum | Prisma.SectorScalarFieldEnum[];
};
export type SectorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
    where?: Prisma.SectorWhereInput;
    orderBy?: Prisma.SectorOrderByWithRelationInput | Prisma.SectorOrderByWithRelationInput[];
    cursor?: Prisma.SectorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SectorScalarFieldEnum | Prisma.SectorScalarFieldEnum[];
};
export type SectorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
    where?: Prisma.SectorWhereInput;
    orderBy?: Prisma.SectorOrderByWithRelationInput | Prisma.SectorOrderByWithRelationInput[];
    cursor?: Prisma.SectorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SectorScalarFieldEnum | Prisma.SectorScalarFieldEnum[];
};
export type SectorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SectorCreateInput, Prisma.SectorUncheckedCreateInput>;
};
export type SectorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SectorCreateManyInput | Prisma.SectorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SectorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    data: Prisma.SectorCreateManyInput | Prisma.SectorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SectorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SectorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SectorUpdateInput, Prisma.SectorUncheckedUpdateInput>;
    where: Prisma.SectorWhereUniqueInput;
};
export type SectorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SectorUpdateManyMutationInput, Prisma.SectorUncheckedUpdateManyInput>;
    where?: Prisma.SectorWhereInput;
    limit?: number;
};
export type SectorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SectorUpdateManyMutationInput, Prisma.SectorUncheckedUpdateManyInput>;
    where?: Prisma.SectorWhereInput;
    limit?: number;
    include?: Prisma.SectorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SectorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
    where: Prisma.SectorWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectorCreateInput, Prisma.SectorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SectorUpdateInput, Prisma.SectorUncheckedUpdateInput>;
};
export type SectorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
    where: Prisma.SectorWhereUniqueInput;
};
export type SectorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectorWhereInput;
    limit?: number;
};
export type Sector$OperationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where?: Prisma.OperationWhereInput;
};
export type Sector$leaderDayArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where?: Prisma.LeaderWhereInput;
};
export type Sector$leaderNightArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where?: Prisma.LeaderWhereInput;
};
export type Sector$supervisorDayArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where?: Prisma.LeaderWhereInput;
};
export type Sector$supervisorNightArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where?: Prisma.LeaderWhereInput;
};
export type Sector$managerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where?: Prisma.LeaderWhereInput;
};
export type Sector$DesignationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelect<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    include?: Prisma.DesignationInclude<ExtArgs> | null;
    where?: Prisma.DesignationWhereInput;
    orderBy?: Prisma.DesignationOrderByWithRelationInput | Prisma.DesignationOrderByWithRelationInput[];
    cursor?: Prisma.DesignationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignationScalarFieldEnum | Prisma.DesignationScalarFieldEnum[];
};
export type SectorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
};
export {};
