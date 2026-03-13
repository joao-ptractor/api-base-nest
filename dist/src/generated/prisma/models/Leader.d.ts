import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type LeaderModel = runtime.Types.Result.DefaultSelection<Prisma.$LeaderPayload>;
export type AggregateLeader = {
    _count: LeaderCountAggregateOutputType | null;
    _avg: LeaderAvgAggregateOutputType | null;
    _sum: LeaderSumAggregateOutputType | null;
    _min: LeaderMinAggregateOutputType | null;
    _max: LeaderMaxAggregateOutputType | null;
};
export type LeaderAvgAggregateOutputType = {
    id: number | null;
    employeeId: number | null;
};
export type LeaderSumAggregateOutputType = {
    id: number | null;
    employeeId: number | null;
};
export type LeaderMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    employeeId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LeaderMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    employeeId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LeaderCountAggregateOutputType = {
    id: number;
    name: number;
    employeeId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LeaderAvgAggregateInputType = {
    id?: true;
    employeeId?: true;
};
export type LeaderSumAggregateInputType = {
    id?: true;
    employeeId?: true;
};
export type LeaderMinAggregateInputType = {
    id?: true;
    name?: true;
    employeeId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LeaderMaxAggregateInputType = {
    id?: true;
    name?: true;
    employeeId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LeaderCountAggregateInputType = {
    id?: true;
    name?: true;
    employeeId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LeaderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaderWhereInput;
    orderBy?: Prisma.LeaderOrderByWithRelationInput | Prisma.LeaderOrderByWithRelationInput[];
    cursor?: Prisma.LeaderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LeaderCountAggregateInputType;
    _avg?: LeaderAvgAggregateInputType;
    _sum?: LeaderSumAggregateInputType;
    _min?: LeaderMinAggregateInputType;
    _max?: LeaderMaxAggregateInputType;
};
export type GetLeaderAggregateType<T extends LeaderAggregateArgs> = {
    [P in keyof T & keyof AggregateLeader]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLeader[P]> : Prisma.GetScalarType<T[P], AggregateLeader[P]>;
};
export type LeaderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaderWhereInput;
    orderBy?: Prisma.LeaderOrderByWithAggregationInput | Prisma.LeaderOrderByWithAggregationInput[];
    by: Prisma.LeaderScalarFieldEnum[] | Prisma.LeaderScalarFieldEnum;
    having?: Prisma.LeaderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeaderCountAggregateInputType | true;
    _avg?: LeaderAvgAggregateInputType;
    _sum?: LeaderSumAggregateInputType;
    _min?: LeaderMinAggregateInputType;
    _max?: LeaderMaxAggregateInputType;
};
export type LeaderGroupByOutputType = {
    id: number;
    name: string;
    employeeId: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LeaderCountAggregateOutputType | null;
    _avg: LeaderAvgAggregateOutputType | null;
    _sum: LeaderSumAggregateOutputType | null;
    _min: LeaderMinAggregateOutputType | null;
    _max: LeaderMaxAggregateOutputType | null;
};
type GetLeaderGroupByPayload<T extends LeaderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LeaderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LeaderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LeaderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LeaderGroupByOutputType[P]>;
}>>;
export type LeaderWhereInput = {
    AND?: Prisma.LeaderWhereInput | Prisma.LeaderWhereInput[];
    OR?: Prisma.LeaderWhereInput[];
    NOT?: Prisma.LeaderWhereInput | Prisma.LeaderWhereInput[];
    id?: Prisma.IntFilter<"Leader"> | number;
    name?: Prisma.StringFilter<"Leader"> | string;
    employeeId?: Prisma.IntNullableFilter<"Leader"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Leader"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Leader"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    LeaderDay?: Prisma.SectorListRelationFilter;
    LeaderNight?: Prisma.SectorListRelationFilter;
    SupervisorDay?: Prisma.SectorListRelationFilter;
    SupervisorNight?: Prisma.SectorListRelationFilter;
    Manager?: Prisma.SectorListRelationFilter;
};
export type LeaderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    LeaderDay?: Prisma.SectorOrderByRelationAggregateInput;
    LeaderNight?: Prisma.SectorOrderByRelationAggregateInput;
    SupervisorDay?: Prisma.SectorOrderByRelationAggregateInput;
    SupervisorNight?: Prisma.SectorOrderByRelationAggregateInput;
    Manager?: Prisma.SectorOrderByRelationAggregateInput;
};
export type LeaderWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    employeeId?: number;
    AND?: Prisma.LeaderWhereInput | Prisma.LeaderWhereInput[];
    OR?: Prisma.LeaderWhereInput[];
    NOT?: Prisma.LeaderWhereInput | Prisma.LeaderWhereInput[];
    name?: Prisma.StringFilter<"Leader"> | string;
    createdAt?: Prisma.DateTimeFilter<"Leader"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Leader"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeNullableScalarRelationFilter, Prisma.EmployeeWhereInput> | null;
    LeaderDay?: Prisma.SectorListRelationFilter;
    LeaderNight?: Prisma.SectorListRelationFilter;
    SupervisorDay?: Prisma.SectorListRelationFilter;
    SupervisorNight?: Prisma.SectorListRelationFilter;
    Manager?: Prisma.SectorListRelationFilter;
}, "id" | "employeeId">;
export type LeaderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LeaderCountOrderByAggregateInput;
    _avg?: Prisma.LeaderAvgOrderByAggregateInput;
    _max?: Prisma.LeaderMaxOrderByAggregateInput;
    _min?: Prisma.LeaderMinOrderByAggregateInput;
    _sum?: Prisma.LeaderSumOrderByAggregateInput;
};
export type LeaderScalarWhereWithAggregatesInput = {
    AND?: Prisma.LeaderScalarWhereWithAggregatesInput | Prisma.LeaderScalarWhereWithAggregatesInput[];
    OR?: Prisma.LeaderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LeaderScalarWhereWithAggregatesInput | Prisma.LeaderScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Leader"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Leader"> | string;
    employeeId?: Prisma.IntNullableWithAggregatesFilter<"Leader"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Leader"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Leader"> | Date | string;
};
export type LeaderCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee?: Prisma.EmployeeCreateNestedOneWithoutLeaderInput;
    LeaderDay?: Prisma.SectorCreateNestedManyWithoutLeaderDayInput;
    LeaderNight?: Prisma.SectorCreateNestedManyWithoutLeaderNightInput;
    SupervisorDay?: Prisma.SectorCreateNestedManyWithoutSupervisorDayInput;
    SupervisorNight?: Prisma.SectorCreateNestedManyWithoutSupervisorNightInput;
    Manager?: Prisma.SectorCreateNestedManyWithoutManagerInput;
};
export type LeaderUncheckedCreateInput = {
    id?: number;
    name: string;
    employeeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    LeaderDay?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderDayInput;
    LeaderNight?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderNightInput;
    SupervisorDay?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorDayInput;
    SupervisorNight?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorNightInput;
    Manager?: Prisma.SectorUncheckedCreateNestedManyWithoutManagerInput;
};
export type LeaderUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneWithoutLeaderNestedInput;
    LeaderDay?: Prisma.SectorUpdateManyWithoutLeaderDayNestedInput;
    LeaderNight?: Prisma.SectorUpdateManyWithoutLeaderNightNestedInput;
    SupervisorDay?: Prisma.SectorUpdateManyWithoutSupervisorDayNestedInput;
    SupervisorNight?: Prisma.SectorUpdateManyWithoutSupervisorNightNestedInput;
    Manager?: Prisma.SectorUpdateManyWithoutManagerNestedInput;
};
export type LeaderUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    LeaderDay?: Prisma.SectorUncheckedUpdateManyWithoutLeaderDayNestedInput;
    LeaderNight?: Prisma.SectorUncheckedUpdateManyWithoutLeaderNightNestedInput;
    SupervisorDay?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorDayNestedInput;
    SupervisorNight?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorNightNestedInput;
    Manager?: Prisma.SectorUncheckedUpdateManyWithoutManagerNestedInput;
};
export type LeaderCreateManyInput = {
    id?: number;
    name: string;
    employeeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LeaderUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaderUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LeaderNullableScalarRelationFilter = {
    is?: Prisma.LeaderWhereInput | null;
    isNot?: Prisma.LeaderWhereInput | null;
};
export type LeaderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LeaderAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
};
export type LeaderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LeaderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LeaderSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
};
export type LeaderCreateNestedOneWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutEmployeeInput, Prisma.LeaderUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutEmployeeInput;
    connect?: Prisma.LeaderWhereUniqueInput;
};
export type LeaderUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutEmployeeInput, Prisma.LeaderUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutEmployeeInput;
    connect?: Prisma.LeaderWhereUniqueInput;
};
export type LeaderUpdateOneWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutEmployeeInput, Prisma.LeaderUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutEmployeeInput;
    upsert?: Prisma.LeaderUpsertWithoutEmployeeInput;
    disconnect?: Prisma.LeaderWhereInput | boolean;
    delete?: Prisma.LeaderWhereInput | boolean;
    connect?: Prisma.LeaderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaderUpdateToOneWithWhereWithoutEmployeeInput, Prisma.LeaderUpdateWithoutEmployeeInput>, Prisma.LeaderUncheckedUpdateWithoutEmployeeInput>;
};
export type LeaderUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutEmployeeInput, Prisma.LeaderUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutEmployeeInput;
    upsert?: Prisma.LeaderUpsertWithoutEmployeeInput;
    disconnect?: Prisma.LeaderWhereInput | boolean;
    delete?: Prisma.LeaderWhereInput | boolean;
    connect?: Prisma.LeaderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaderUpdateToOneWithWhereWithoutEmployeeInput, Prisma.LeaderUpdateWithoutEmployeeInput>, Prisma.LeaderUncheckedUpdateWithoutEmployeeInput>;
};
export type LeaderCreateNestedOneWithoutLeaderDayInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutLeaderDayInput, Prisma.LeaderUncheckedCreateWithoutLeaderDayInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutLeaderDayInput;
    connect?: Prisma.LeaderWhereUniqueInput;
};
export type LeaderCreateNestedOneWithoutLeaderNightInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutLeaderNightInput, Prisma.LeaderUncheckedCreateWithoutLeaderNightInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutLeaderNightInput;
    connect?: Prisma.LeaderWhereUniqueInput;
};
export type LeaderCreateNestedOneWithoutSupervisorDayInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutSupervisorDayInput, Prisma.LeaderUncheckedCreateWithoutSupervisorDayInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutSupervisorDayInput;
    connect?: Prisma.LeaderWhereUniqueInput;
};
export type LeaderCreateNestedOneWithoutSupervisorNightInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutSupervisorNightInput, Prisma.LeaderUncheckedCreateWithoutSupervisorNightInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutSupervisorNightInput;
    connect?: Prisma.LeaderWhereUniqueInput;
};
export type LeaderCreateNestedOneWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutManagerInput, Prisma.LeaderUncheckedCreateWithoutManagerInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutManagerInput;
    connect?: Prisma.LeaderWhereUniqueInput;
};
export type LeaderUpdateOneWithoutLeaderDayNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutLeaderDayInput, Prisma.LeaderUncheckedCreateWithoutLeaderDayInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutLeaderDayInput;
    upsert?: Prisma.LeaderUpsertWithoutLeaderDayInput;
    disconnect?: Prisma.LeaderWhereInput | boolean;
    delete?: Prisma.LeaderWhereInput | boolean;
    connect?: Prisma.LeaderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaderUpdateToOneWithWhereWithoutLeaderDayInput, Prisma.LeaderUpdateWithoutLeaderDayInput>, Prisma.LeaderUncheckedUpdateWithoutLeaderDayInput>;
};
export type LeaderUpdateOneWithoutLeaderNightNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutLeaderNightInput, Prisma.LeaderUncheckedCreateWithoutLeaderNightInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutLeaderNightInput;
    upsert?: Prisma.LeaderUpsertWithoutLeaderNightInput;
    disconnect?: Prisma.LeaderWhereInput | boolean;
    delete?: Prisma.LeaderWhereInput | boolean;
    connect?: Prisma.LeaderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaderUpdateToOneWithWhereWithoutLeaderNightInput, Prisma.LeaderUpdateWithoutLeaderNightInput>, Prisma.LeaderUncheckedUpdateWithoutLeaderNightInput>;
};
export type LeaderUpdateOneWithoutSupervisorDayNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutSupervisorDayInput, Prisma.LeaderUncheckedCreateWithoutSupervisorDayInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutSupervisorDayInput;
    upsert?: Prisma.LeaderUpsertWithoutSupervisorDayInput;
    disconnect?: Prisma.LeaderWhereInput | boolean;
    delete?: Prisma.LeaderWhereInput | boolean;
    connect?: Prisma.LeaderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaderUpdateToOneWithWhereWithoutSupervisorDayInput, Prisma.LeaderUpdateWithoutSupervisorDayInput>, Prisma.LeaderUncheckedUpdateWithoutSupervisorDayInput>;
};
export type LeaderUpdateOneWithoutSupervisorNightNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutSupervisorNightInput, Prisma.LeaderUncheckedCreateWithoutSupervisorNightInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutSupervisorNightInput;
    upsert?: Prisma.LeaderUpsertWithoutSupervisorNightInput;
    disconnect?: Prisma.LeaderWhereInput | boolean;
    delete?: Prisma.LeaderWhereInput | boolean;
    connect?: Prisma.LeaderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaderUpdateToOneWithWhereWithoutSupervisorNightInput, Prisma.LeaderUpdateWithoutSupervisorNightInput>, Prisma.LeaderUncheckedUpdateWithoutSupervisorNightInput>;
};
export type LeaderUpdateOneWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.LeaderCreateWithoutManagerInput, Prisma.LeaderUncheckedCreateWithoutManagerInput>;
    connectOrCreate?: Prisma.LeaderCreateOrConnectWithoutManagerInput;
    upsert?: Prisma.LeaderUpsertWithoutManagerInput;
    disconnect?: Prisma.LeaderWhereInput | boolean;
    delete?: Prisma.LeaderWhereInput | boolean;
    connect?: Prisma.LeaderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LeaderUpdateToOneWithWhereWithoutManagerInput, Prisma.LeaderUpdateWithoutManagerInput>, Prisma.LeaderUncheckedUpdateWithoutManagerInput>;
};
export type LeaderCreateWithoutEmployeeInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    LeaderDay?: Prisma.SectorCreateNestedManyWithoutLeaderDayInput;
    LeaderNight?: Prisma.SectorCreateNestedManyWithoutLeaderNightInput;
    SupervisorDay?: Prisma.SectorCreateNestedManyWithoutSupervisorDayInput;
    SupervisorNight?: Prisma.SectorCreateNestedManyWithoutSupervisorNightInput;
    Manager?: Prisma.SectorCreateNestedManyWithoutManagerInput;
};
export type LeaderUncheckedCreateWithoutEmployeeInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    LeaderDay?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderDayInput;
    LeaderNight?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderNightInput;
    SupervisorDay?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorDayInput;
    SupervisorNight?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorNightInput;
    Manager?: Prisma.SectorUncheckedCreateNestedManyWithoutManagerInput;
};
export type LeaderCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.LeaderWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutEmployeeInput, Prisma.LeaderUncheckedCreateWithoutEmployeeInput>;
};
export type LeaderUpsertWithoutEmployeeInput = {
    update: Prisma.XOR<Prisma.LeaderUpdateWithoutEmployeeInput, Prisma.LeaderUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutEmployeeInput, Prisma.LeaderUncheckedCreateWithoutEmployeeInput>;
    where?: Prisma.LeaderWhereInput;
};
export type LeaderUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: Prisma.LeaderWhereInput;
    data: Prisma.XOR<Prisma.LeaderUpdateWithoutEmployeeInput, Prisma.LeaderUncheckedUpdateWithoutEmployeeInput>;
};
export type LeaderUpdateWithoutEmployeeInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    LeaderDay?: Prisma.SectorUpdateManyWithoutLeaderDayNestedInput;
    LeaderNight?: Prisma.SectorUpdateManyWithoutLeaderNightNestedInput;
    SupervisorDay?: Prisma.SectorUpdateManyWithoutSupervisorDayNestedInput;
    SupervisorNight?: Prisma.SectorUpdateManyWithoutSupervisorNightNestedInput;
    Manager?: Prisma.SectorUpdateManyWithoutManagerNestedInput;
};
export type LeaderUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    LeaderDay?: Prisma.SectorUncheckedUpdateManyWithoutLeaderDayNestedInput;
    LeaderNight?: Prisma.SectorUncheckedUpdateManyWithoutLeaderNightNestedInput;
    SupervisorDay?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorDayNestedInput;
    SupervisorNight?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorNightNestedInput;
    Manager?: Prisma.SectorUncheckedUpdateManyWithoutManagerNestedInput;
};
export type LeaderCreateWithoutLeaderDayInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee?: Prisma.EmployeeCreateNestedOneWithoutLeaderInput;
    LeaderNight?: Prisma.SectorCreateNestedManyWithoutLeaderNightInput;
    SupervisorDay?: Prisma.SectorCreateNestedManyWithoutSupervisorDayInput;
    SupervisorNight?: Prisma.SectorCreateNestedManyWithoutSupervisorNightInput;
    Manager?: Prisma.SectorCreateNestedManyWithoutManagerInput;
};
export type LeaderUncheckedCreateWithoutLeaderDayInput = {
    id?: number;
    name: string;
    employeeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    LeaderNight?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderNightInput;
    SupervisorDay?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorDayInput;
    SupervisorNight?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorNightInput;
    Manager?: Prisma.SectorUncheckedCreateNestedManyWithoutManagerInput;
};
export type LeaderCreateOrConnectWithoutLeaderDayInput = {
    where: Prisma.LeaderWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutLeaderDayInput, Prisma.LeaderUncheckedCreateWithoutLeaderDayInput>;
};
export type LeaderCreateWithoutLeaderNightInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee?: Prisma.EmployeeCreateNestedOneWithoutLeaderInput;
    LeaderDay?: Prisma.SectorCreateNestedManyWithoutLeaderDayInput;
    SupervisorDay?: Prisma.SectorCreateNestedManyWithoutSupervisorDayInput;
    SupervisorNight?: Prisma.SectorCreateNestedManyWithoutSupervisorNightInput;
    Manager?: Prisma.SectorCreateNestedManyWithoutManagerInput;
};
export type LeaderUncheckedCreateWithoutLeaderNightInput = {
    id?: number;
    name: string;
    employeeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    LeaderDay?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderDayInput;
    SupervisorDay?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorDayInput;
    SupervisorNight?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorNightInput;
    Manager?: Prisma.SectorUncheckedCreateNestedManyWithoutManagerInput;
};
export type LeaderCreateOrConnectWithoutLeaderNightInput = {
    where: Prisma.LeaderWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutLeaderNightInput, Prisma.LeaderUncheckedCreateWithoutLeaderNightInput>;
};
export type LeaderCreateWithoutSupervisorDayInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee?: Prisma.EmployeeCreateNestedOneWithoutLeaderInput;
    LeaderDay?: Prisma.SectorCreateNestedManyWithoutLeaderDayInput;
    LeaderNight?: Prisma.SectorCreateNestedManyWithoutLeaderNightInput;
    SupervisorNight?: Prisma.SectorCreateNestedManyWithoutSupervisorNightInput;
    Manager?: Prisma.SectorCreateNestedManyWithoutManagerInput;
};
export type LeaderUncheckedCreateWithoutSupervisorDayInput = {
    id?: number;
    name: string;
    employeeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    LeaderDay?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderDayInput;
    LeaderNight?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderNightInput;
    SupervisorNight?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorNightInput;
    Manager?: Prisma.SectorUncheckedCreateNestedManyWithoutManagerInput;
};
export type LeaderCreateOrConnectWithoutSupervisorDayInput = {
    where: Prisma.LeaderWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutSupervisorDayInput, Prisma.LeaderUncheckedCreateWithoutSupervisorDayInput>;
};
export type LeaderCreateWithoutSupervisorNightInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee?: Prisma.EmployeeCreateNestedOneWithoutLeaderInput;
    LeaderDay?: Prisma.SectorCreateNestedManyWithoutLeaderDayInput;
    LeaderNight?: Prisma.SectorCreateNestedManyWithoutLeaderNightInput;
    SupervisorDay?: Prisma.SectorCreateNestedManyWithoutSupervisorDayInput;
    Manager?: Prisma.SectorCreateNestedManyWithoutManagerInput;
};
export type LeaderUncheckedCreateWithoutSupervisorNightInput = {
    id?: number;
    name: string;
    employeeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    LeaderDay?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderDayInput;
    LeaderNight?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderNightInput;
    SupervisorDay?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorDayInput;
    Manager?: Prisma.SectorUncheckedCreateNestedManyWithoutManagerInput;
};
export type LeaderCreateOrConnectWithoutSupervisorNightInput = {
    where: Prisma.LeaderWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutSupervisorNightInput, Prisma.LeaderUncheckedCreateWithoutSupervisorNightInput>;
};
export type LeaderCreateWithoutManagerInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee?: Prisma.EmployeeCreateNestedOneWithoutLeaderInput;
    LeaderDay?: Prisma.SectorCreateNestedManyWithoutLeaderDayInput;
    LeaderNight?: Prisma.SectorCreateNestedManyWithoutLeaderNightInput;
    SupervisorDay?: Prisma.SectorCreateNestedManyWithoutSupervisorDayInput;
    SupervisorNight?: Prisma.SectorCreateNestedManyWithoutSupervisorNightInput;
};
export type LeaderUncheckedCreateWithoutManagerInput = {
    id?: number;
    name: string;
    employeeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    LeaderDay?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderDayInput;
    LeaderNight?: Prisma.SectorUncheckedCreateNestedManyWithoutLeaderNightInput;
    SupervisorDay?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorDayInput;
    SupervisorNight?: Prisma.SectorUncheckedCreateNestedManyWithoutSupervisorNightInput;
};
export type LeaderCreateOrConnectWithoutManagerInput = {
    where: Prisma.LeaderWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutManagerInput, Prisma.LeaderUncheckedCreateWithoutManagerInput>;
};
export type LeaderUpsertWithoutLeaderDayInput = {
    update: Prisma.XOR<Prisma.LeaderUpdateWithoutLeaderDayInput, Prisma.LeaderUncheckedUpdateWithoutLeaderDayInput>;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutLeaderDayInput, Prisma.LeaderUncheckedCreateWithoutLeaderDayInput>;
    where?: Prisma.LeaderWhereInput;
};
export type LeaderUpdateToOneWithWhereWithoutLeaderDayInput = {
    where?: Prisma.LeaderWhereInput;
    data: Prisma.XOR<Prisma.LeaderUpdateWithoutLeaderDayInput, Prisma.LeaderUncheckedUpdateWithoutLeaderDayInput>;
};
export type LeaderUpdateWithoutLeaderDayInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneWithoutLeaderNestedInput;
    LeaderNight?: Prisma.SectorUpdateManyWithoutLeaderNightNestedInput;
    SupervisorDay?: Prisma.SectorUpdateManyWithoutSupervisorDayNestedInput;
    SupervisorNight?: Prisma.SectorUpdateManyWithoutSupervisorNightNestedInput;
    Manager?: Prisma.SectorUpdateManyWithoutManagerNestedInput;
};
export type LeaderUncheckedUpdateWithoutLeaderDayInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    LeaderNight?: Prisma.SectorUncheckedUpdateManyWithoutLeaderNightNestedInput;
    SupervisorDay?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorDayNestedInput;
    SupervisorNight?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorNightNestedInput;
    Manager?: Prisma.SectorUncheckedUpdateManyWithoutManagerNestedInput;
};
export type LeaderUpsertWithoutLeaderNightInput = {
    update: Prisma.XOR<Prisma.LeaderUpdateWithoutLeaderNightInput, Prisma.LeaderUncheckedUpdateWithoutLeaderNightInput>;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutLeaderNightInput, Prisma.LeaderUncheckedCreateWithoutLeaderNightInput>;
    where?: Prisma.LeaderWhereInput;
};
export type LeaderUpdateToOneWithWhereWithoutLeaderNightInput = {
    where?: Prisma.LeaderWhereInput;
    data: Prisma.XOR<Prisma.LeaderUpdateWithoutLeaderNightInput, Prisma.LeaderUncheckedUpdateWithoutLeaderNightInput>;
};
export type LeaderUpdateWithoutLeaderNightInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneWithoutLeaderNestedInput;
    LeaderDay?: Prisma.SectorUpdateManyWithoutLeaderDayNestedInput;
    SupervisorDay?: Prisma.SectorUpdateManyWithoutSupervisorDayNestedInput;
    SupervisorNight?: Prisma.SectorUpdateManyWithoutSupervisorNightNestedInput;
    Manager?: Prisma.SectorUpdateManyWithoutManagerNestedInput;
};
export type LeaderUncheckedUpdateWithoutLeaderNightInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    LeaderDay?: Prisma.SectorUncheckedUpdateManyWithoutLeaderDayNestedInput;
    SupervisorDay?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorDayNestedInput;
    SupervisorNight?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorNightNestedInput;
    Manager?: Prisma.SectorUncheckedUpdateManyWithoutManagerNestedInput;
};
export type LeaderUpsertWithoutSupervisorDayInput = {
    update: Prisma.XOR<Prisma.LeaderUpdateWithoutSupervisorDayInput, Prisma.LeaderUncheckedUpdateWithoutSupervisorDayInput>;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutSupervisorDayInput, Prisma.LeaderUncheckedCreateWithoutSupervisorDayInput>;
    where?: Prisma.LeaderWhereInput;
};
export type LeaderUpdateToOneWithWhereWithoutSupervisorDayInput = {
    where?: Prisma.LeaderWhereInput;
    data: Prisma.XOR<Prisma.LeaderUpdateWithoutSupervisorDayInput, Prisma.LeaderUncheckedUpdateWithoutSupervisorDayInput>;
};
export type LeaderUpdateWithoutSupervisorDayInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneWithoutLeaderNestedInput;
    LeaderDay?: Prisma.SectorUpdateManyWithoutLeaderDayNestedInput;
    LeaderNight?: Prisma.SectorUpdateManyWithoutLeaderNightNestedInput;
    SupervisorNight?: Prisma.SectorUpdateManyWithoutSupervisorNightNestedInput;
    Manager?: Prisma.SectorUpdateManyWithoutManagerNestedInput;
};
export type LeaderUncheckedUpdateWithoutSupervisorDayInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    LeaderDay?: Prisma.SectorUncheckedUpdateManyWithoutLeaderDayNestedInput;
    LeaderNight?: Prisma.SectorUncheckedUpdateManyWithoutLeaderNightNestedInput;
    SupervisorNight?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorNightNestedInput;
    Manager?: Prisma.SectorUncheckedUpdateManyWithoutManagerNestedInput;
};
export type LeaderUpsertWithoutSupervisorNightInput = {
    update: Prisma.XOR<Prisma.LeaderUpdateWithoutSupervisorNightInput, Prisma.LeaderUncheckedUpdateWithoutSupervisorNightInput>;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutSupervisorNightInput, Prisma.LeaderUncheckedCreateWithoutSupervisorNightInput>;
    where?: Prisma.LeaderWhereInput;
};
export type LeaderUpdateToOneWithWhereWithoutSupervisorNightInput = {
    where?: Prisma.LeaderWhereInput;
    data: Prisma.XOR<Prisma.LeaderUpdateWithoutSupervisorNightInput, Prisma.LeaderUncheckedUpdateWithoutSupervisorNightInput>;
};
export type LeaderUpdateWithoutSupervisorNightInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneWithoutLeaderNestedInput;
    LeaderDay?: Prisma.SectorUpdateManyWithoutLeaderDayNestedInput;
    LeaderNight?: Prisma.SectorUpdateManyWithoutLeaderNightNestedInput;
    SupervisorDay?: Prisma.SectorUpdateManyWithoutSupervisorDayNestedInput;
    Manager?: Prisma.SectorUpdateManyWithoutManagerNestedInput;
};
export type LeaderUncheckedUpdateWithoutSupervisorNightInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    LeaderDay?: Prisma.SectorUncheckedUpdateManyWithoutLeaderDayNestedInput;
    LeaderNight?: Prisma.SectorUncheckedUpdateManyWithoutLeaderNightNestedInput;
    SupervisorDay?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorDayNestedInput;
    Manager?: Prisma.SectorUncheckedUpdateManyWithoutManagerNestedInput;
};
export type LeaderUpsertWithoutManagerInput = {
    update: Prisma.XOR<Prisma.LeaderUpdateWithoutManagerInput, Prisma.LeaderUncheckedUpdateWithoutManagerInput>;
    create: Prisma.XOR<Prisma.LeaderCreateWithoutManagerInput, Prisma.LeaderUncheckedCreateWithoutManagerInput>;
    where?: Prisma.LeaderWhereInput;
};
export type LeaderUpdateToOneWithWhereWithoutManagerInput = {
    where?: Prisma.LeaderWhereInput;
    data: Prisma.XOR<Prisma.LeaderUpdateWithoutManagerInput, Prisma.LeaderUncheckedUpdateWithoutManagerInput>;
};
export type LeaderUpdateWithoutManagerInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneWithoutLeaderNestedInput;
    LeaderDay?: Prisma.SectorUpdateManyWithoutLeaderDayNestedInput;
    LeaderNight?: Prisma.SectorUpdateManyWithoutLeaderNightNestedInput;
    SupervisorDay?: Prisma.SectorUpdateManyWithoutSupervisorDayNestedInput;
    SupervisorNight?: Prisma.SectorUpdateManyWithoutSupervisorNightNestedInput;
};
export type LeaderUncheckedUpdateWithoutManagerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    LeaderDay?: Prisma.SectorUncheckedUpdateManyWithoutLeaderDayNestedInput;
    LeaderNight?: Prisma.SectorUncheckedUpdateManyWithoutLeaderNightNestedInput;
    SupervisorDay?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorDayNestedInput;
    SupervisorNight?: Prisma.SectorUncheckedUpdateManyWithoutSupervisorNightNestedInput;
};
export type LeaderCountOutputType = {
    LeaderDay: number;
    LeaderNight: number;
    SupervisorDay: number;
    SupervisorNight: number;
    Manager: number;
};
export type LeaderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    LeaderDay?: boolean | LeaderCountOutputTypeCountLeaderDayArgs;
    LeaderNight?: boolean | LeaderCountOutputTypeCountLeaderNightArgs;
    SupervisorDay?: boolean | LeaderCountOutputTypeCountSupervisorDayArgs;
    SupervisorNight?: boolean | LeaderCountOutputTypeCountSupervisorNightArgs;
    Manager?: boolean | LeaderCountOutputTypeCountManagerArgs;
};
export type LeaderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderCountOutputTypeSelect<ExtArgs> | null;
};
export type LeaderCountOutputTypeCountLeaderDayArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectorWhereInput;
};
export type LeaderCountOutputTypeCountLeaderNightArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectorWhereInput;
};
export type LeaderCountOutputTypeCountSupervisorDayArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectorWhereInput;
};
export type LeaderCountOutputTypeCountSupervisorNightArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectorWhereInput;
};
export type LeaderCountOutputTypeCountManagerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectorWhereInput;
};
export type LeaderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    employeeId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.Leader$employeeArgs<ExtArgs>;
    LeaderDay?: boolean | Prisma.Leader$LeaderDayArgs<ExtArgs>;
    LeaderNight?: boolean | Prisma.Leader$LeaderNightArgs<ExtArgs>;
    SupervisorDay?: boolean | Prisma.Leader$SupervisorDayArgs<ExtArgs>;
    SupervisorNight?: boolean | Prisma.Leader$SupervisorNightArgs<ExtArgs>;
    Manager?: boolean | Prisma.Leader$ManagerArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["leader"]>;
export type LeaderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    employeeId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.Leader$employeeArgs<ExtArgs>;
}, ExtArgs["result"]["leader"]>;
export type LeaderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    employeeId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employee?: boolean | Prisma.Leader$employeeArgs<ExtArgs>;
}, ExtArgs["result"]["leader"]>;
export type LeaderSelectScalar = {
    id?: boolean;
    name?: boolean;
    employeeId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LeaderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "employeeId" | "createdAt" | "updatedAt", ExtArgs["result"]["leader"]>;
export type LeaderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.Leader$employeeArgs<ExtArgs>;
    LeaderDay?: boolean | Prisma.Leader$LeaderDayArgs<ExtArgs>;
    LeaderNight?: boolean | Prisma.Leader$LeaderNightArgs<ExtArgs>;
    SupervisorDay?: boolean | Prisma.Leader$SupervisorDayArgs<ExtArgs>;
    SupervisorNight?: boolean | Prisma.Leader$SupervisorNightArgs<ExtArgs>;
    Manager?: boolean | Prisma.Leader$ManagerArgs<ExtArgs>;
    _count?: boolean | Prisma.LeaderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LeaderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.Leader$employeeArgs<ExtArgs>;
};
export type LeaderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.Leader$employeeArgs<ExtArgs>;
};
export type $LeaderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Leader";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs> | null;
        LeaderDay: Prisma.$SectorPayload<ExtArgs>[];
        LeaderNight: Prisma.$SectorPayload<ExtArgs>[];
        SupervisorDay: Prisma.$SectorPayload<ExtArgs>[];
        SupervisorNight: Prisma.$SectorPayload<ExtArgs>[];
        Manager: Prisma.$SectorPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        employeeId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["leader"]>;
    composites: {};
};
export type LeaderGetPayload<S extends boolean | null | undefined | LeaderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LeaderPayload, S>;
export type LeaderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LeaderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeaderCountAggregateInputType | true;
};
export interface LeaderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Leader'];
        meta: {
            name: 'Leader';
        };
    };
    findUnique<T extends LeaderFindUniqueArgs>(args: Prisma.SelectSubset<T, LeaderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LeaderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LeaderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LeaderFindFirstArgs>(args?: Prisma.SelectSubset<T, LeaderFindFirstArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LeaderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LeaderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LeaderFindManyArgs>(args?: Prisma.SelectSubset<T, LeaderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LeaderCreateArgs>(args: Prisma.SelectSubset<T, LeaderCreateArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LeaderCreateManyArgs>(args?: Prisma.SelectSubset<T, LeaderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LeaderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LeaderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LeaderDeleteArgs>(args: Prisma.SelectSubset<T, LeaderDeleteArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LeaderUpdateArgs>(args: Prisma.SelectSubset<T, LeaderUpdateArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LeaderDeleteManyArgs>(args?: Prisma.SelectSubset<T, LeaderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LeaderUpdateManyArgs>(args: Prisma.SelectSubset<T, LeaderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LeaderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LeaderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LeaderUpsertArgs>(args: Prisma.SelectSubset<T, LeaderUpsertArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LeaderCountArgs>(args?: Prisma.Subset<T, LeaderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LeaderCountAggregateOutputType> : number>;
    aggregate<T extends LeaderAggregateArgs>(args: Prisma.Subset<T, LeaderAggregateArgs>): Prisma.PrismaPromise<GetLeaderAggregateType<T>>;
    groupBy<T extends LeaderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LeaderGroupByArgs['orderBy'];
    } : {
        orderBy?: LeaderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LeaderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LeaderFieldRefs;
}
export interface Prisma__LeaderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.Leader$employeeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Leader$employeeArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    LeaderDay<T extends Prisma.Leader$LeaderDayArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Leader$LeaderDayArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    LeaderNight<T extends Prisma.Leader$LeaderNightArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Leader$LeaderNightArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    SupervisorDay<T extends Prisma.Leader$SupervisorDayArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Leader$SupervisorDayArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    SupervisorNight<T extends Prisma.Leader$SupervisorNightArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Leader$SupervisorNightArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    Manager<T extends Prisma.Leader$ManagerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Leader$ManagerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LeaderFieldRefs {
    readonly id: Prisma.FieldRef<"Leader", 'Int'>;
    readonly name: Prisma.FieldRef<"Leader", 'String'>;
    readonly employeeId: Prisma.FieldRef<"Leader", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Leader", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Leader", 'DateTime'>;
}
export type LeaderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where: Prisma.LeaderWhereUniqueInput;
};
export type LeaderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where: Prisma.LeaderWhereUniqueInput;
};
export type LeaderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where?: Prisma.LeaderWhereInput;
    orderBy?: Prisma.LeaderOrderByWithRelationInput | Prisma.LeaderOrderByWithRelationInput[];
    cursor?: Prisma.LeaderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaderScalarFieldEnum | Prisma.LeaderScalarFieldEnum[];
};
export type LeaderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where?: Prisma.LeaderWhereInput;
    orderBy?: Prisma.LeaderOrderByWithRelationInput | Prisma.LeaderOrderByWithRelationInput[];
    cursor?: Prisma.LeaderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaderScalarFieldEnum | Prisma.LeaderScalarFieldEnum[];
};
export type LeaderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where?: Prisma.LeaderWhereInput;
    orderBy?: Prisma.LeaderOrderByWithRelationInput | Prisma.LeaderOrderByWithRelationInput[];
    cursor?: Prisma.LeaderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LeaderScalarFieldEnum | Prisma.LeaderScalarFieldEnum[];
};
export type LeaderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaderCreateInput, Prisma.LeaderUncheckedCreateInput>;
};
export type LeaderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LeaderCreateManyInput | Prisma.LeaderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LeaderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    data: Prisma.LeaderCreateManyInput | Prisma.LeaderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LeaderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LeaderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaderUpdateInput, Prisma.LeaderUncheckedUpdateInput>;
    where: Prisma.LeaderWhereUniqueInput;
};
export type LeaderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LeaderUpdateManyMutationInput, Prisma.LeaderUncheckedUpdateManyInput>;
    where?: Prisma.LeaderWhereInput;
    limit?: number;
};
export type LeaderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LeaderUpdateManyMutationInput, Prisma.LeaderUncheckedUpdateManyInput>;
    where?: Prisma.LeaderWhereInput;
    limit?: number;
    include?: Prisma.LeaderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LeaderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where: Prisma.LeaderWhereUniqueInput;
    create: Prisma.XOR<Prisma.LeaderCreateInput, Prisma.LeaderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LeaderUpdateInput, Prisma.LeaderUncheckedUpdateInput>;
};
export type LeaderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where: Prisma.LeaderWhereUniqueInput;
};
export type LeaderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LeaderWhereInput;
    limit?: number;
};
export type Leader$employeeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
};
export type Leader$LeaderDayArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Leader$LeaderNightArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Leader$SupervisorDayArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Leader$SupervisorNightArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Leader$ManagerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LeaderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
};
export {};
