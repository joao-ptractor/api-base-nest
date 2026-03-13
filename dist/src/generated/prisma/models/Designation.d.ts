import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DesignationModel = runtime.Types.Result.DefaultSelection<Prisma.$DesignationPayload>;
export type AggregateDesignation = {
    _count: DesignationCountAggregateOutputType | null;
    _avg: DesignationAvgAggregateOutputType | null;
    _sum: DesignationSumAggregateOutputType | null;
    _min: DesignationMinAggregateOutputType | null;
    _max: DesignationMaxAggregateOutputType | null;
};
export type DesignationAvgAggregateOutputType = {
    id: number | null;
    employeeId: number | null;
    sectorId: number | null;
    positionId: number | null;
};
export type DesignationSumAggregateOutputType = {
    id: number | null;
    employeeId: number | null;
    sectorId: number | null;
    positionId: number | null;
};
export type DesignationMinAggregateOutputType = {
    id: number | null;
    startDate: Date | null;
    endDate: Date | null;
    employeeId: number | null;
    sectorId: number | null;
    positionId: number | null;
    leader: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DesignationMaxAggregateOutputType = {
    id: number | null;
    startDate: Date | null;
    endDate: Date | null;
    employeeId: number | null;
    sectorId: number | null;
    positionId: number | null;
    leader: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DesignationCountAggregateOutputType = {
    id: number;
    startDate: number;
    endDate: number;
    employeeId: number;
    sectorId: number;
    positionId: number;
    leader: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DesignationAvgAggregateInputType = {
    id?: true;
    employeeId?: true;
    sectorId?: true;
    positionId?: true;
};
export type DesignationSumAggregateInputType = {
    id?: true;
    employeeId?: true;
    sectorId?: true;
    positionId?: true;
};
export type DesignationMinAggregateInputType = {
    id?: true;
    startDate?: true;
    endDate?: true;
    employeeId?: true;
    sectorId?: true;
    positionId?: true;
    leader?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DesignationMaxAggregateInputType = {
    id?: true;
    startDate?: true;
    endDate?: true;
    employeeId?: true;
    sectorId?: true;
    positionId?: true;
    leader?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DesignationCountAggregateInputType = {
    id?: true;
    startDate?: true;
    endDate?: true;
    employeeId?: true;
    sectorId?: true;
    positionId?: true;
    leader?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DesignationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignationWhereInput;
    orderBy?: Prisma.DesignationOrderByWithRelationInput | Prisma.DesignationOrderByWithRelationInput[];
    cursor?: Prisma.DesignationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DesignationCountAggregateInputType;
    _avg?: DesignationAvgAggregateInputType;
    _sum?: DesignationSumAggregateInputType;
    _min?: DesignationMinAggregateInputType;
    _max?: DesignationMaxAggregateInputType;
};
export type GetDesignationAggregateType<T extends DesignationAggregateArgs> = {
    [P in keyof T & keyof AggregateDesignation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDesignation[P]> : Prisma.GetScalarType<T[P], AggregateDesignation[P]>;
};
export type DesignationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignationWhereInput;
    orderBy?: Prisma.DesignationOrderByWithAggregationInput | Prisma.DesignationOrderByWithAggregationInput[];
    by: Prisma.DesignationScalarFieldEnum[] | Prisma.DesignationScalarFieldEnum;
    having?: Prisma.DesignationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DesignationCountAggregateInputType | true;
    _avg?: DesignationAvgAggregateInputType;
    _sum?: DesignationSumAggregateInputType;
    _min?: DesignationMinAggregateInputType;
    _max?: DesignationMaxAggregateInputType;
};
export type DesignationGroupByOutputType = {
    id: number;
    startDate: Date;
    endDate: Date | null;
    employeeId: number;
    sectorId: number;
    positionId: number;
    leader: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DesignationCountAggregateOutputType | null;
    _avg: DesignationAvgAggregateOutputType | null;
    _sum: DesignationSumAggregateOutputType | null;
    _min: DesignationMinAggregateOutputType | null;
    _max: DesignationMaxAggregateOutputType | null;
};
type GetDesignationGroupByPayload<T extends DesignationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DesignationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DesignationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DesignationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DesignationGroupByOutputType[P]>;
}>>;
export type DesignationWhereInput = {
    AND?: Prisma.DesignationWhereInput | Prisma.DesignationWhereInput[];
    OR?: Prisma.DesignationWhereInput[];
    NOT?: Prisma.DesignationWhereInput | Prisma.DesignationWhereInput[];
    id?: Prisma.IntFilter<"Designation"> | number;
    startDate?: Prisma.DateTimeFilter<"Designation"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Designation"> | Date | string | null;
    employeeId?: Prisma.IntFilter<"Designation"> | number;
    sectorId?: Prisma.IntFilter<"Designation"> | number;
    positionId?: Prisma.IntFilter<"Designation"> | number;
    leader?: Prisma.StringNullableFilter<"Designation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Designation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Designation"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    sector?: Prisma.XOR<Prisma.SectorScalarRelationFilter, Prisma.SectorWhereInput>;
    position?: Prisma.XOR<Prisma.PositionScalarRelationFilter, Prisma.PositionWhereInput>;
};
export type DesignationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    sectorId?: Prisma.SortOrder;
    positionId?: Prisma.SortOrder;
    leader?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    sector?: Prisma.SectorOrderByWithRelationInput;
    position?: Prisma.PositionOrderByWithRelationInput;
};
export type DesignationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DesignationWhereInput | Prisma.DesignationWhereInput[];
    OR?: Prisma.DesignationWhereInput[];
    NOT?: Prisma.DesignationWhereInput | Prisma.DesignationWhereInput[];
    startDate?: Prisma.DateTimeFilter<"Designation"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Designation"> | Date | string | null;
    employeeId?: Prisma.IntFilter<"Designation"> | number;
    sectorId?: Prisma.IntFilter<"Designation"> | number;
    positionId?: Prisma.IntFilter<"Designation"> | number;
    leader?: Prisma.StringNullableFilter<"Designation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Designation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Designation"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    sector?: Prisma.XOR<Prisma.SectorScalarRelationFilter, Prisma.SectorWhereInput>;
    position?: Prisma.XOR<Prisma.PositionScalarRelationFilter, Prisma.PositionWhereInput>;
}, "id">;
export type DesignationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    sectorId?: Prisma.SortOrder;
    positionId?: Prisma.SortOrder;
    leader?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DesignationCountOrderByAggregateInput;
    _avg?: Prisma.DesignationAvgOrderByAggregateInput;
    _max?: Prisma.DesignationMaxOrderByAggregateInput;
    _min?: Prisma.DesignationMinOrderByAggregateInput;
    _sum?: Prisma.DesignationSumOrderByAggregateInput;
};
export type DesignationScalarWhereWithAggregatesInput = {
    AND?: Prisma.DesignationScalarWhereWithAggregatesInput | Prisma.DesignationScalarWhereWithAggregatesInput[];
    OR?: Prisma.DesignationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DesignationScalarWhereWithAggregatesInput | Prisma.DesignationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Designation"> | number;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Designation"> | Date | string;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Designation"> | Date | string | null;
    employeeId?: Prisma.IntWithAggregatesFilter<"Designation"> | number;
    sectorId?: Prisma.IntWithAggregatesFilter<"Designation"> | number;
    positionId?: Prisma.IntWithAggregatesFilter<"Designation"> | number;
    leader?: Prisma.StringNullableWithAggregatesFilter<"Designation"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Designation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Designation"> | Date | string;
};
export type DesignationCreateInput = {
    startDate: Date | string;
    endDate?: Date | string | null;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutDesignationInput;
    sector: Prisma.SectorCreateNestedOneWithoutDesignationInput;
    position: Prisma.PositionCreateNestedOneWithoutDesignationInput;
};
export type DesignationUncheckedCreateInput = {
    id?: number;
    startDate: Date | string;
    endDate?: Date | string | null;
    employeeId: number;
    sectorId: number;
    positionId: number;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignationUpdateInput = {
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutDesignationNestedInput;
    sector?: Prisma.SectorUpdateOneRequiredWithoutDesignationNestedInput;
    position?: Prisma.PositionUpdateOneRequiredWithoutDesignationNestedInput;
};
export type DesignationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    sectorId?: Prisma.IntFieldUpdateOperationsInput | number;
    positionId?: Prisma.IntFieldUpdateOperationsInput | number;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignationCreateManyInput = {
    id?: number;
    startDate: Date | string;
    endDate?: Date | string | null;
    employeeId: number;
    sectorId: number;
    positionId: number;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignationUpdateManyMutationInput = {
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    sectorId?: Prisma.IntFieldUpdateOperationsInput | number;
    positionId?: Prisma.IntFieldUpdateOperationsInput | number;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignationListRelationFilter = {
    every?: Prisma.DesignationWhereInput;
    some?: Prisma.DesignationWhereInput;
    none?: Prisma.DesignationWhereInput;
};
export type DesignationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DesignationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    sectorId?: Prisma.SortOrder;
    positionId?: Prisma.SortOrder;
    leader?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    sectorId?: Prisma.SortOrder;
    positionId?: Prisma.SortOrder;
};
export type DesignationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    sectorId?: Prisma.SortOrder;
    positionId?: Prisma.SortOrder;
    leader?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    sectorId?: Prisma.SortOrder;
    positionId?: Prisma.SortOrder;
    leader?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DesignationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    sectorId?: Prisma.SortOrder;
    positionId?: Prisma.SortOrder;
};
export type DesignationCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutEmployeeInput, Prisma.DesignationUncheckedCreateWithoutEmployeeInput> | Prisma.DesignationCreateWithoutEmployeeInput[] | Prisma.DesignationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutEmployeeInput | Prisma.DesignationCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.DesignationCreateManyEmployeeInputEnvelope;
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
};
export type DesignationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutEmployeeInput, Prisma.DesignationUncheckedCreateWithoutEmployeeInput> | Prisma.DesignationCreateWithoutEmployeeInput[] | Prisma.DesignationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutEmployeeInput | Prisma.DesignationCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.DesignationCreateManyEmployeeInputEnvelope;
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
};
export type DesignationUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutEmployeeInput, Prisma.DesignationUncheckedCreateWithoutEmployeeInput> | Prisma.DesignationCreateWithoutEmployeeInput[] | Prisma.DesignationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutEmployeeInput | Prisma.DesignationCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.DesignationUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.DesignationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.DesignationCreateManyEmployeeInputEnvelope;
    set?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    disconnect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    delete?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    update?: Prisma.DesignationUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.DesignationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.DesignationUpdateManyWithWhereWithoutEmployeeInput | Prisma.DesignationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.DesignationScalarWhereInput | Prisma.DesignationScalarWhereInput[];
};
export type DesignationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutEmployeeInput, Prisma.DesignationUncheckedCreateWithoutEmployeeInput> | Prisma.DesignationCreateWithoutEmployeeInput[] | Prisma.DesignationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutEmployeeInput | Prisma.DesignationCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.DesignationUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.DesignationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.DesignationCreateManyEmployeeInputEnvelope;
    set?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    disconnect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    delete?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    update?: Prisma.DesignationUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.DesignationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.DesignationUpdateManyWithWhereWithoutEmployeeInput | Prisma.DesignationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.DesignationScalarWhereInput | Prisma.DesignationScalarWhereInput[];
};
export type DesignationCreateNestedManyWithoutSectorInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutSectorInput, Prisma.DesignationUncheckedCreateWithoutSectorInput> | Prisma.DesignationCreateWithoutSectorInput[] | Prisma.DesignationUncheckedCreateWithoutSectorInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutSectorInput | Prisma.DesignationCreateOrConnectWithoutSectorInput[];
    createMany?: Prisma.DesignationCreateManySectorInputEnvelope;
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
};
export type DesignationUncheckedCreateNestedManyWithoutSectorInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutSectorInput, Prisma.DesignationUncheckedCreateWithoutSectorInput> | Prisma.DesignationCreateWithoutSectorInput[] | Prisma.DesignationUncheckedCreateWithoutSectorInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutSectorInput | Prisma.DesignationCreateOrConnectWithoutSectorInput[];
    createMany?: Prisma.DesignationCreateManySectorInputEnvelope;
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
};
export type DesignationUpdateManyWithoutSectorNestedInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutSectorInput, Prisma.DesignationUncheckedCreateWithoutSectorInput> | Prisma.DesignationCreateWithoutSectorInput[] | Prisma.DesignationUncheckedCreateWithoutSectorInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutSectorInput | Prisma.DesignationCreateOrConnectWithoutSectorInput[];
    upsert?: Prisma.DesignationUpsertWithWhereUniqueWithoutSectorInput | Prisma.DesignationUpsertWithWhereUniqueWithoutSectorInput[];
    createMany?: Prisma.DesignationCreateManySectorInputEnvelope;
    set?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    disconnect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    delete?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    update?: Prisma.DesignationUpdateWithWhereUniqueWithoutSectorInput | Prisma.DesignationUpdateWithWhereUniqueWithoutSectorInput[];
    updateMany?: Prisma.DesignationUpdateManyWithWhereWithoutSectorInput | Prisma.DesignationUpdateManyWithWhereWithoutSectorInput[];
    deleteMany?: Prisma.DesignationScalarWhereInput | Prisma.DesignationScalarWhereInput[];
};
export type DesignationUncheckedUpdateManyWithoutSectorNestedInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutSectorInput, Prisma.DesignationUncheckedCreateWithoutSectorInput> | Prisma.DesignationCreateWithoutSectorInput[] | Prisma.DesignationUncheckedCreateWithoutSectorInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutSectorInput | Prisma.DesignationCreateOrConnectWithoutSectorInput[];
    upsert?: Prisma.DesignationUpsertWithWhereUniqueWithoutSectorInput | Prisma.DesignationUpsertWithWhereUniqueWithoutSectorInput[];
    createMany?: Prisma.DesignationCreateManySectorInputEnvelope;
    set?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    disconnect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    delete?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    update?: Prisma.DesignationUpdateWithWhereUniqueWithoutSectorInput | Prisma.DesignationUpdateWithWhereUniqueWithoutSectorInput[];
    updateMany?: Prisma.DesignationUpdateManyWithWhereWithoutSectorInput | Prisma.DesignationUpdateManyWithWhereWithoutSectorInput[];
    deleteMany?: Prisma.DesignationScalarWhereInput | Prisma.DesignationScalarWhereInput[];
};
export type DesignationCreateNestedManyWithoutPositionInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutPositionInput, Prisma.DesignationUncheckedCreateWithoutPositionInput> | Prisma.DesignationCreateWithoutPositionInput[] | Prisma.DesignationUncheckedCreateWithoutPositionInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutPositionInput | Prisma.DesignationCreateOrConnectWithoutPositionInput[];
    createMany?: Prisma.DesignationCreateManyPositionInputEnvelope;
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
};
export type DesignationUncheckedCreateNestedManyWithoutPositionInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutPositionInput, Prisma.DesignationUncheckedCreateWithoutPositionInput> | Prisma.DesignationCreateWithoutPositionInput[] | Prisma.DesignationUncheckedCreateWithoutPositionInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutPositionInput | Prisma.DesignationCreateOrConnectWithoutPositionInput[];
    createMany?: Prisma.DesignationCreateManyPositionInputEnvelope;
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
};
export type DesignationUpdateManyWithoutPositionNestedInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutPositionInput, Prisma.DesignationUncheckedCreateWithoutPositionInput> | Prisma.DesignationCreateWithoutPositionInput[] | Prisma.DesignationUncheckedCreateWithoutPositionInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutPositionInput | Prisma.DesignationCreateOrConnectWithoutPositionInput[];
    upsert?: Prisma.DesignationUpsertWithWhereUniqueWithoutPositionInput | Prisma.DesignationUpsertWithWhereUniqueWithoutPositionInput[];
    createMany?: Prisma.DesignationCreateManyPositionInputEnvelope;
    set?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    disconnect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    delete?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    update?: Prisma.DesignationUpdateWithWhereUniqueWithoutPositionInput | Prisma.DesignationUpdateWithWhereUniqueWithoutPositionInput[];
    updateMany?: Prisma.DesignationUpdateManyWithWhereWithoutPositionInput | Prisma.DesignationUpdateManyWithWhereWithoutPositionInput[];
    deleteMany?: Prisma.DesignationScalarWhereInput | Prisma.DesignationScalarWhereInput[];
};
export type DesignationUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: Prisma.XOR<Prisma.DesignationCreateWithoutPositionInput, Prisma.DesignationUncheckedCreateWithoutPositionInput> | Prisma.DesignationCreateWithoutPositionInput[] | Prisma.DesignationUncheckedCreateWithoutPositionInput[];
    connectOrCreate?: Prisma.DesignationCreateOrConnectWithoutPositionInput | Prisma.DesignationCreateOrConnectWithoutPositionInput[];
    upsert?: Prisma.DesignationUpsertWithWhereUniqueWithoutPositionInput | Prisma.DesignationUpsertWithWhereUniqueWithoutPositionInput[];
    createMany?: Prisma.DesignationCreateManyPositionInputEnvelope;
    set?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    disconnect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    delete?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    connect?: Prisma.DesignationWhereUniqueInput | Prisma.DesignationWhereUniqueInput[];
    update?: Prisma.DesignationUpdateWithWhereUniqueWithoutPositionInput | Prisma.DesignationUpdateWithWhereUniqueWithoutPositionInput[];
    updateMany?: Prisma.DesignationUpdateManyWithWhereWithoutPositionInput | Prisma.DesignationUpdateManyWithWhereWithoutPositionInput[];
    deleteMany?: Prisma.DesignationScalarWhereInput | Prisma.DesignationScalarWhereInput[];
};
export type DesignationCreateWithoutEmployeeInput = {
    startDate: Date | string;
    endDate?: Date | string | null;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sector: Prisma.SectorCreateNestedOneWithoutDesignationInput;
    position: Prisma.PositionCreateNestedOneWithoutDesignationInput;
};
export type DesignationUncheckedCreateWithoutEmployeeInput = {
    id?: number;
    startDate: Date | string;
    endDate?: Date | string | null;
    sectorId: number;
    positionId: number;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignationCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.DesignationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignationCreateWithoutEmployeeInput, Prisma.DesignationUncheckedCreateWithoutEmployeeInput>;
};
export type DesignationCreateManyEmployeeInputEnvelope = {
    data: Prisma.DesignationCreateManyEmployeeInput | Prisma.DesignationCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type DesignationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.DesignationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DesignationUpdateWithoutEmployeeInput, Prisma.DesignationUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.DesignationCreateWithoutEmployeeInput, Prisma.DesignationUncheckedCreateWithoutEmployeeInput>;
};
export type DesignationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.DesignationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DesignationUpdateWithoutEmployeeInput, Prisma.DesignationUncheckedUpdateWithoutEmployeeInput>;
};
export type DesignationUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.DesignationScalarWhereInput;
    data: Prisma.XOR<Prisma.DesignationUpdateManyMutationInput, Prisma.DesignationUncheckedUpdateManyWithoutEmployeeInput>;
};
export type DesignationScalarWhereInput = {
    AND?: Prisma.DesignationScalarWhereInput | Prisma.DesignationScalarWhereInput[];
    OR?: Prisma.DesignationScalarWhereInput[];
    NOT?: Prisma.DesignationScalarWhereInput | Prisma.DesignationScalarWhereInput[];
    id?: Prisma.IntFilter<"Designation"> | number;
    startDate?: Prisma.DateTimeFilter<"Designation"> | Date | string;
    endDate?: Prisma.DateTimeNullableFilter<"Designation"> | Date | string | null;
    employeeId?: Prisma.IntFilter<"Designation"> | number;
    sectorId?: Prisma.IntFilter<"Designation"> | number;
    positionId?: Prisma.IntFilter<"Designation"> | number;
    leader?: Prisma.StringNullableFilter<"Designation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Designation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Designation"> | Date | string;
};
export type DesignationCreateWithoutSectorInput = {
    startDate: Date | string;
    endDate?: Date | string | null;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutDesignationInput;
    position: Prisma.PositionCreateNestedOneWithoutDesignationInput;
};
export type DesignationUncheckedCreateWithoutSectorInput = {
    id?: number;
    startDate: Date | string;
    endDate?: Date | string | null;
    employeeId: number;
    positionId: number;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignationCreateOrConnectWithoutSectorInput = {
    where: Prisma.DesignationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignationCreateWithoutSectorInput, Prisma.DesignationUncheckedCreateWithoutSectorInput>;
};
export type DesignationCreateManySectorInputEnvelope = {
    data: Prisma.DesignationCreateManySectorInput | Prisma.DesignationCreateManySectorInput[];
    skipDuplicates?: boolean;
};
export type DesignationUpsertWithWhereUniqueWithoutSectorInput = {
    where: Prisma.DesignationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DesignationUpdateWithoutSectorInput, Prisma.DesignationUncheckedUpdateWithoutSectorInput>;
    create: Prisma.XOR<Prisma.DesignationCreateWithoutSectorInput, Prisma.DesignationUncheckedCreateWithoutSectorInput>;
};
export type DesignationUpdateWithWhereUniqueWithoutSectorInput = {
    where: Prisma.DesignationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DesignationUpdateWithoutSectorInput, Prisma.DesignationUncheckedUpdateWithoutSectorInput>;
};
export type DesignationUpdateManyWithWhereWithoutSectorInput = {
    where: Prisma.DesignationScalarWhereInput;
    data: Prisma.XOR<Prisma.DesignationUpdateManyMutationInput, Prisma.DesignationUncheckedUpdateManyWithoutSectorInput>;
};
export type DesignationCreateWithoutPositionInput = {
    startDate: Date | string;
    endDate?: Date | string | null;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutDesignationInput;
    sector: Prisma.SectorCreateNestedOneWithoutDesignationInput;
};
export type DesignationUncheckedCreateWithoutPositionInput = {
    id?: number;
    startDate: Date | string;
    endDate?: Date | string | null;
    employeeId: number;
    sectorId: number;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignationCreateOrConnectWithoutPositionInput = {
    where: Prisma.DesignationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignationCreateWithoutPositionInput, Prisma.DesignationUncheckedCreateWithoutPositionInput>;
};
export type DesignationCreateManyPositionInputEnvelope = {
    data: Prisma.DesignationCreateManyPositionInput | Prisma.DesignationCreateManyPositionInput[];
    skipDuplicates?: boolean;
};
export type DesignationUpsertWithWhereUniqueWithoutPositionInput = {
    where: Prisma.DesignationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DesignationUpdateWithoutPositionInput, Prisma.DesignationUncheckedUpdateWithoutPositionInput>;
    create: Prisma.XOR<Prisma.DesignationCreateWithoutPositionInput, Prisma.DesignationUncheckedCreateWithoutPositionInput>;
};
export type DesignationUpdateWithWhereUniqueWithoutPositionInput = {
    where: Prisma.DesignationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DesignationUpdateWithoutPositionInput, Prisma.DesignationUncheckedUpdateWithoutPositionInput>;
};
export type DesignationUpdateManyWithWhereWithoutPositionInput = {
    where: Prisma.DesignationScalarWhereInput;
    data: Prisma.XOR<Prisma.DesignationUpdateManyMutationInput, Prisma.DesignationUncheckedUpdateManyWithoutPositionInput>;
};
export type DesignationCreateManyEmployeeInput = {
    id?: number;
    startDate: Date | string;
    endDate?: Date | string | null;
    sectorId: number;
    positionId: number;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignationUpdateWithoutEmployeeInput = {
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sector?: Prisma.SectorUpdateOneRequiredWithoutDesignationNestedInput;
    position?: Prisma.PositionUpdateOneRequiredWithoutDesignationNestedInput;
};
export type DesignationUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sectorId?: Prisma.IntFieldUpdateOperationsInput | number;
    positionId?: Prisma.IntFieldUpdateOperationsInput | number;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sectorId?: Prisma.IntFieldUpdateOperationsInput | number;
    positionId?: Prisma.IntFieldUpdateOperationsInput | number;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignationCreateManySectorInput = {
    id?: number;
    startDate: Date | string;
    endDate?: Date | string | null;
    employeeId: number;
    positionId: number;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignationUpdateWithoutSectorInput = {
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutDesignationNestedInput;
    position?: Prisma.PositionUpdateOneRequiredWithoutDesignationNestedInput;
};
export type DesignationUncheckedUpdateWithoutSectorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    positionId?: Prisma.IntFieldUpdateOperationsInput | number;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignationUncheckedUpdateManyWithoutSectorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    positionId?: Prisma.IntFieldUpdateOperationsInput | number;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignationCreateManyPositionInput = {
    id?: number;
    startDate: Date | string;
    endDate?: Date | string | null;
    employeeId: number;
    sectorId: number;
    leader?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DesignationUpdateWithoutPositionInput = {
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutDesignationNestedInput;
    sector?: Prisma.SectorUpdateOneRequiredWithoutDesignationNestedInput;
};
export type DesignationUncheckedUpdateWithoutPositionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    sectorId?: Prisma.IntFieldUpdateOperationsInput | number;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignationUncheckedUpdateManyWithoutPositionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    employeeId?: Prisma.IntFieldUpdateOperationsInput | number;
    sectorId?: Prisma.IntFieldUpdateOperationsInput | number;
    leader?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DesignationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    employeeId?: boolean;
    sectorId?: boolean;
    positionId?: boolean;
    leader?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    sector?: boolean | Prisma.SectorDefaultArgs<ExtArgs>;
    position?: boolean | Prisma.PositionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designation"]>;
export type DesignationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    employeeId?: boolean;
    sectorId?: boolean;
    positionId?: boolean;
    leader?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    sector?: boolean | Prisma.SectorDefaultArgs<ExtArgs>;
    position?: boolean | Prisma.PositionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designation"]>;
export type DesignationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    employeeId?: boolean;
    sectorId?: boolean;
    positionId?: boolean;
    leader?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    sector?: boolean | Prisma.SectorDefaultArgs<ExtArgs>;
    position?: boolean | Prisma.PositionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["designation"]>;
export type DesignationSelectScalar = {
    id?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    employeeId?: boolean;
    sectorId?: boolean;
    positionId?: boolean;
    leader?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DesignationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "startDate" | "endDate" | "employeeId" | "sectorId" | "positionId" | "leader" | "createdAt" | "updatedAt", ExtArgs["result"]["designation"]>;
export type DesignationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    sector?: boolean | Prisma.SectorDefaultArgs<ExtArgs>;
    position?: boolean | Prisma.PositionDefaultArgs<ExtArgs>;
};
export type DesignationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    sector?: boolean | Prisma.SectorDefaultArgs<ExtArgs>;
    position?: boolean | Prisma.PositionDefaultArgs<ExtArgs>;
};
export type DesignationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    sector?: boolean | Prisma.SectorDefaultArgs<ExtArgs>;
    position?: boolean | Prisma.PositionDefaultArgs<ExtArgs>;
};
export type $DesignationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Designation";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        sector: Prisma.$SectorPayload<ExtArgs>;
        position: Prisma.$PositionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        startDate: Date;
        endDate: Date | null;
        employeeId: number;
        sectorId: number;
        positionId: number;
        leader: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["designation"]>;
    composites: {};
};
export type DesignationGetPayload<S extends boolean | null | undefined | DesignationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DesignationPayload, S>;
export type DesignationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DesignationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DesignationCountAggregateInputType | true;
};
export interface DesignationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Designation'];
        meta: {
            name: 'Designation';
        };
    };
    findUnique<T extends DesignationFindUniqueArgs>(args: Prisma.SelectSubset<T, DesignationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DesignationClient<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DesignationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DesignationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignationClient<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DesignationFindFirstArgs>(args?: Prisma.SelectSubset<T, DesignationFindFirstArgs<ExtArgs>>): Prisma.Prisma__DesignationClient<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DesignationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DesignationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DesignationClient<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DesignationFindManyArgs>(args?: Prisma.SelectSubset<T, DesignationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DesignationCreateArgs>(args: Prisma.SelectSubset<T, DesignationCreateArgs<ExtArgs>>): Prisma.Prisma__DesignationClient<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DesignationCreateManyArgs>(args?: Prisma.SelectSubset<T, DesignationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DesignationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DesignationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DesignationDeleteArgs>(args: Prisma.SelectSubset<T, DesignationDeleteArgs<ExtArgs>>): Prisma.Prisma__DesignationClient<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DesignationUpdateArgs>(args: Prisma.SelectSubset<T, DesignationUpdateArgs<ExtArgs>>): Prisma.Prisma__DesignationClient<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DesignationDeleteManyArgs>(args?: Prisma.SelectSubset<T, DesignationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DesignationUpdateManyArgs>(args: Prisma.SelectSubset<T, DesignationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DesignationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DesignationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DesignationUpsertArgs>(args: Prisma.SelectSubset<T, DesignationUpsertArgs<ExtArgs>>): Prisma.Prisma__DesignationClient<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DesignationCountArgs>(args?: Prisma.Subset<T, DesignationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DesignationCountAggregateOutputType> : number>;
    aggregate<T extends DesignationAggregateArgs>(args: Prisma.Subset<T, DesignationAggregateArgs>): Prisma.PrismaPromise<GetDesignationAggregateType<T>>;
    groupBy<T extends DesignationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DesignationGroupByArgs['orderBy'];
    } : {
        orderBy?: DesignationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DesignationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DesignationFieldRefs;
}
export interface Prisma__DesignationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sector<T extends Prisma.SectorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SectorDefaultArgs<ExtArgs>>): Prisma.Prisma__SectorClient<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    position<T extends Prisma.PositionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PositionDefaultArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DesignationFieldRefs {
    readonly id: Prisma.FieldRef<"Designation", 'Int'>;
    readonly startDate: Prisma.FieldRef<"Designation", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Designation", 'DateTime'>;
    readonly employeeId: Prisma.FieldRef<"Designation", 'Int'>;
    readonly sectorId: Prisma.FieldRef<"Designation", 'Int'>;
    readonly positionId: Prisma.FieldRef<"Designation", 'Int'>;
    readonly leader: Prisma.FieldRef<"Designation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Designation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Designation", 'DateTime'>;
}
export type DesignationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelect<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    include?: Prisma.DesignationInclude<ExtArgs> | null;
    where: Prisma.DesignationWhereUniqueInput;
};
export type DesignationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelect<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    include?: Prisma.DesignationInclude<ExtArgs> | null;
    where: Prisma.DesignationWhereUniqueInput;
};
export type DesignationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DesignationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelect<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    include?: Prisma.DesignationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignationCreateInput, Prisma.DesignationUncheckedCreateInput>;
};
export type DesignationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DesignationCreateManyInput | Prisma.DesignationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DesignationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    data: Prisma.DesignationCreateManyInput | Prisma.DesignationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DesignationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DesignationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelect<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    include?: Prisma.DesignationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignationUpdateInput, Prisma.DesignationUncheckedUpdateInput>;
    where: Prisma.DesignationWhereUniqueInput;
};
export type DesignationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DesignationUpdateManyMutationInput, Prisma.DesignationUncheckedUpdateManyInput>;
    where?: Prisma.DesignationWhereInput;
    limit?: number;
};
export type DesignationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DesignationUpdateManyMutationInput, Prisma.DesignationUncheckedUpdateManyInput>;
    where?: Prisma.DesignationWhereInput;
    limit?: number;
    include?: Prisma.DesignationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DesignationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelect<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    include?: Prisma.DesignationInclude<ExtArgs> | null;
    where: Prisma.DesignationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DesignationCreateInput, Prisma.DesignationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DesignationUpdateInput, Prisma.DesignationUncheckedUpdateInput>;
};
export type DesignationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelect<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    include?: Prisma.DesignationInclude<ExtArgs> | null;
    where: Prisma.DesignationWhereUniqueInput;
};
export type DesignationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignationWhereInput;
    limit?: number;
};
export type DesignationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelect<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    include?: Prisma.DesignationInclude<ExtArgs> | null;
};
export {};
