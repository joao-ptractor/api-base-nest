import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type EmployeeModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeePayload>;
export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
};
export type EmployeeAvgAggregateOutputType = {
    id: number | null;
};
export type EmployeeSumAggregateOutputType = {
    id: number | null;
};
export type EmployeeMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    cardNumber: string | null;
    unit: $Enums.UNIT | null;
    status: boolean | null;
    firstEntry: Date | null;
    firstExit: Date | null;
    secondEntry: Date | null;
    secondExit: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EmployeeMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    cardNumber: string | null;
    unit: $Enums.UNIT | null;
    status: boolean | null;
    firstEntry: Date | null;
    firstExit: Date | null;
    secondEntry: Date | null;
    secondExit: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EmployeeCountAggregateOutputType = {
    id: number;
    name: number;
    cardNumber: number;
    unit: number;
    status: number;
    firstEntry: number;
    firstExit: number;
    secondEntry: number;
    secondExit: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EmployeeAvgAggregateInputType = {
    id?: true;
};
export type EmployeeSumAggregateInputType = {
    id?: true;
};
export type EmployeeMinAggregateInputType = {
    id?: true;
    name?: true;
    cardNumber?: true;
    unit?: true;
    status?: true;
    firstEntry?: true;
    firstExit?: true;
    secondEntry?: true;
    secondExit?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EmployeeMaxAggregateInputType = {
    id?: true;
    name?: true;
    cardNumber?: true;
    unit?: true;
    status?: true;
    firstEntry?: true;
    firstExit?: true;
    secondEntry?: true;
    secondExit?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EmployeeCountAggregateInputType = {
    id?: true;
    name?: true;
    cardNumber?: true;
    unit?: true;
    status?: true;
    firstEntry?: true;
    firstExit?: true;
    secondEntry?: true;
    secondExit?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EmployeeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeeCountAggregateInputType;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
};
export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployee[P]> : Prisma.GetScalarType<T[P], AggregateEmployee[P]>;
};
export type EmployeeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithAggregationInput | Prisma.EmployeeOrderByWithAggregationInput[];
    by: Prisma.EmployeeScalarFieldEnum[] | Prisma.EmployeeScalarFieldEnum;
    having?: Prisma.EmployeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
};
export type EmployeeGroupByOutputType = {
    id: number;
    name: string;
    cardNumber: string;
    unit: $Enums.UNIT;
    status: boolean;
    firstEntry: Date | null;
    firstExit: Date | null;
    secondEntry: Date | null;
    secondExit: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
};
type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
}>>;
export type EmployeeWhereInput = {
    AND?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    OR?: Prisma.EmployeeWhereInput[];
    NOT?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    id?: Prisma.IntFilter<"Employee"> | number;
    name?: Prisma.StringFilter<"Employee"> | string;
    cardNumber?: Prisma.StringFilter<"Employee"> | string;
    unit?: Prisma.EnumUNITFilter<"Employee"> | $Enums.UNIT;
    status?: Prisma.BoolFilter<"Employee"> | boolean;
    firstEntry?: Prisma.DateTimeNullableFilter<"Employee"> | Date | string | null;
    firstExit?: Prisma.DateTimeNullableFilter<"Employee"> | Date | string | null;
    secondEntry?: Prisma.DateTimeNullableFilter<"Employee"> | Date | string | null;
    secondExit?: Prisma.DateTimeNullableFilter<"Employee"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    Leader?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    Designation?: Prisma.DesignationListRelationFilter;
    User?: Prisma.UserListRelationFilter;
};
export type EmployeeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstEntry?: Prisma.SortOrderInput | Prisma.SortOrder;
    firstExit?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondEntry?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondExit?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Leader?: Prisma.LeaderOrderByWithRelationInput;
    Designation?: Prisma.DesignationOrderByRelationAggregateInput;
    User?: Prisma.UserOrderByRelationAggregateInput;
};
export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    OR?: Prisma.EmployeeWhereInput[];
    NOT?: Prisma.EmployeeWhereInput | Prisma.EmployeeWhereInput[];
    name?: Prisma.StringFilter<"Employee"> | string;
    cardNumber?: Prisma.StringFilter<"Employee"> | string;
    unit?: Prisma.EnumUNITFilter<"Employee"> | $Enums.UNIT;
    status?: Prisma.BoolFilter<"Employee"> | boolean;
    firstEntry?: Prisma.DateTimeNullableFilter<"Employee"> | Date | string | null;
    firstExit?: Prisma.DateTimeNullableFilter<"Employee"> | Date | string | null;
    secondEntry?: Prisma.DateTimeNullableFilter<"Employee"> | Date | string | null;
    secondExit?: Prisma.DateTimeNullableFilter<"Employee"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Employee"> | Date | string;
    Leader?: Prisma.XOR<Prisma.LeaderNullableScalarRelationFilter, Prisma.LeaderWhereInput> | null;
    Designation?: Prisma.DesignationListRelationFilter;
    User?: Prisma.UserListRelationFilter;
}, "id">;
export type EmployeeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstEntry?: Prisma.SortOrderInput | Prisma.SortOrder;
    firstExit?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondEntry?: Prisma.SortOrderInput | Prisma.SortOrder;
    secondExit?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeeCountOrderByAggregateInput;
    _avg?: Prisma.EmployeeAvgOrderByAggregateInput;
    _max?: Prisma.EmployeeMaxOrderByAggregateInput;
    _min?: Prisma.EmployeeMinOrderByAggregateInput;
    _sum?: Prisma.EmployeeSumOrderByAggregateInput;
};
export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeeScalarWhereWithAggregatesInput | Prisma.EmployeeScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeeScalarWhereWithAggregatesInput | Prisma.EmployeeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Employee"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    cardNumber?: Prisma.StringWithAggregatesFilter<"Employee"> | string;
    unit?: Prisma.EnumUNITWithAggregatesFilter<"Employee"> | $Enums.UNIT;
    status?: Prisma.BoolWithAggregatesFilter<"Employee"> | boolean;
    firstEntry?: Prisma.DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null;
    firstExit?: Prisma.DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null;
    secondEntry?: Prisma.DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null;
    secondExit?: Prisma.DateTimeNullableWithAggregatesFilter<"Employee"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Employee"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Employee"> | Date | string;
};
export type EmployeeCreateInput = {
    name: string;
    cardNumber: string;
    unit: $Enums.UNIT;
    status?: boolean;
    firstEntry?: Date | string | null;
    firstExit?: Date | string | null;
    secondEntry?: Date | string | null;
    secondExit?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Leader?: Prisma.LeaderCreateNestedOneWithoutEmployeeInput;
    Designation?: Prisma.DesignationCreateNestedManyWithoutEmployeeInput;
    User?: Prisma.UserCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateInput = {
    id?: number;
    name: string;
    cardNumber: string;
    unit: $Enums.UNIT;
    status?: boolean;
    firstEntry?: Date | string | null;
    firstExit?: Date | string | null;
    secondEntry?: Date | string | null;
    secondExit?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Leader?: Prisma.LeaderUncheckedCreateNestedOneWithoutEmployeeInput;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutEmployeeInput;
    User?: Prisma.UserUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    firstExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Leader?: Prisma.LeaderUpdateOneWithoutEmployeeNestedInput;
    Designation?: Prisma.DesignationUpdateManyWithoutEmployeeNestedInput;
    User?: Prisma.UserUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    firstExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Leader?: Prisma.LeaderUncheckedUpdateOneWithoutEmployeeNestedInput;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutEmployeeNestedInput;
    User?: Prisma.UserUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeCreateManyInput = {
    id?: number;
    name: string;
    cardNumber: string;
    unit: $Enums.UNIT;
    status?: boolean;
    firstEntry?: Date | string | null;
    firstExit?: Date | string | null;
    secondEntry?: Date | string | null;
    secondExit?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EmployeeUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    firstExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    firstExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeScalarRelationFilter = {
    is?: Prisma.EmployeeWhereInput;
    isNot?: Prisma.EmployeeWhereInput;
};
export type EmployeeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstEntry?: Prisma.SortOrder;
    firstExit?: Prisma.SortOrder;
    secondEntry?: Prisma.SortOrder;
    secondExit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EmployeeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstEntry?: Prisma.SortOrder;
    firstExit?: Prisma.SortOrder;
    secondEntry?: Prisma.SortOrder;
    secondExit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    cardNumber?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    firstEntry?: Prisma.SortOrder;
    firstExit?: Prisma.SortOrder;
    secondEntry?: Prisma.SortOrder;
    secondExit?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EmployeeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EmployeeNullableScalarRelationFilter = {
    is?: Prisma.EmployeeWhereInput | null;
    isNot?: Prisma.EmployeeWhereInput | null;
};
export type EmployeeCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutUserInput, Prisma.EmployeeUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutUserInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateOneRequiredWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutUserInput, Prisma.EmployeeUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutUserInput;
    upsert?: Prisma.EmployeeUpsertWithoutUserInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeUpdateToOneWithWhereWithoutUserInput, Prisma.EmployeeUpdateWithoutUserInput>, Prisma.EmployeeUncheckedUpdateWithoutUserInput>;
};
export type EmployeeCreateNestedOneWithoutLeaderInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutLeaderInput, Prisma.EmployeeUncheckedCreateWithoutLeaderInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutLeaderInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateOneWithoutLeaderNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutLeaderInput, Prisma.EmployeeUncheckedCreateWithoutLeaderInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutLeaderInput;
    upsert?: Prisma.EmployeeUpsertWithoutLeaderInput;
    disconnect?: Prisma.EmployeeWhereInput | boolean;
    delete?: Prisma.EmployeeWhereInput | boolean;
    connect?: Prisma.EmployeeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeUpdateToOneWithWhereWithoutLeaderInput, Prisma.EmployeeUpdateWithoutLeaderInput>, Prisma.EmployeeUncheckedUpdateWithoutLeaderInput>;
};
export type EmployeeCreateNestedOneWithoutDesignationInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutDesignationInput, Prisma.EmployeeUncheckedCreateWithoutDesignationInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutDesignationInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateOneRequiredWithoutDesignationNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeCreateWithoutDesignationInput, Prisma.EmployeeUncheckedCreateWithoutDesignationInput>;
    connectOrCreate?: Prisma.EmployeeCreateOrConnectWithoutDesignationInput;
    upsert?: Prisma.EmployeeUpsertWithoutDesignationInput;
    connect?: Prisma.EmployeeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeeUpdateToOneWithWhereWithoutDesignationInput, Prisma.EmployeeUpdateWithoutDesignationInput>, Prisma.EmployeeUncheckedUpdateWithoutDesignationInput>;
};
export type EmployeeCreateWithoutUserInput = {
    name: string;
    cardNumber: string;
    unit: $Enums.UNIT;
    status?: boolean;
    firstEntry?: Date | string | null;
    firstExit?: Date | string | null;
    secondEntry?: Date | string | null;
    secondExit?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Leader?: Prisma.LeaderCreateNestedOneWithoutEmployeeInput;
    Designation?: Prisma.DesignationCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutUserInput = {
    id?: number;
    name: string;
    cardNumber: string;
    unit: $Enums.UNIT;
    status?: boolean;
    firstEntry?: Date | string | null;
    firstExit?: Date | string | null;
    secondEntry?: Date | string | null;
    secondExit?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Leader?: Prisma.LeaderUncheckedCreateNestedOneWithoutEmployeeInput;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeCreateOrConnectWithoutUserInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutUserInput, Prisma.EmployeeUncheckedCreateWithoutUserInput>;
};
export type EmployeeUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutUserInput, Prisma.EmployeeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutUserInput, Prisma.EmployeeUncheckedCreateWithoutUserInput>;
    where?: Prisma.EmployeeWhereInput;
};
export type EmployeeUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.EmployeeWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutUserInput, Prisma.EmployeeUncheckedUpdateWithoutUserInput>;
};
export type EmployeeUpdateWithoutUserInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    firstExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Leader?: Prisma.LeaderUpdateOneWithoutEmployeeNestedInput;
    Designation?: Prisma.DesignationUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    firstExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Leader?: Prisma.LeaderUncheckedUpdateOneWithoutEmployeeNestedInput;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeCreateWithoutLeaderInput = {
    name: string;
    cardNumber: string;
    unit: $Enums.UNIT;
    status?: boolean;
    firstEntry?: Date | string | null;
    firstExit?: Date | string | null;
    secondEntry?: Date | string | null;
    secondExit?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationCreateNestedManyWithoutEmployeeInput;
    User?: Prisma.UserCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutLeaderInput = {
    id?: number;
    name: string;
    cardNumber: string;
    unit: $Enums.UNIT;
    status?: boolean;
    firstEntry?: Date | string | null;
    firstExit?: Date | string | null;
    secondEntry?: Date | string | null;
    secondExit?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutEmployeeInput;
    User?: Prisma.UserUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeCreateOrConnectWithoutLeaderInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutLeaderInput, Prisma.EmployeeUncheckedCreateWithoutLeaderInput>;
};
export type EmployeeUpsertWithoutLeaderInput = {
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutLeaderInput, Prisma.EmployeeUncheckedUpdateWithoutLeaderInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutLeaderInput, Prisma.EmployeeUncheckedCreateWithoutLeaderInput>;
    where?: Prisma.EmployeeWhereInput;
};
export type EmployeeUpdateToOneWithWhereWithoutLeaderInput = {
    where?: Prisma.EmployeeWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutLeaderInput, Prisma.EmployeeUncheckedUpdateWithoutLeaderInput>;
};
export type EmployeeUpdateWithoutLeaderInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    firstExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUpdateManyWithoutEmployeeNestedInput;
    User?: Prisma.UserUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutLeaderInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    firstExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutEmployeeNestedInput;
    User?: Prisma.UserUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeCreateWithoutDesignationInput = {
    name: string;
    cardNumber: string;
    unit: $Enums.UNIT;
    status?: boolean;
    firstEntry?: Date | string | null;
    firstExit?: Date | string | null;
    secondEntry?: Date | string | null;
    secondExit?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Leader?: Prisma.LeaderCreateNestedOneWithoutEmployeeInput;
    User?: Prisma.UserCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeUncheckedCreateWithoutDesignationInput = {
    id?: number;
    name: string;
    cardNumber: string;
    unit: $Enums.UNIT;
    status?: boolean;
    firstEntry?: Date | string | null;
    firstExit?: Date | string | null;
    secondEntry?: Date | string | null;
    secondExit?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Leader?: Prisma.LeaderUncheckedCreateNestedOneWithoutEmployeeInput;
    User?: Prisma.UserUncheckedCreateNestedManyWithoutEmployeeInput;
};
export type EmployeeCreateOrConnectWithoutDesignationInput = {
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutDesignationInput, Prisma.EmployeeUncheckedCreateWithoutDesignationInput>;
};
export type EmployeeUpsertWithoutDesignationInput = {
    update: Prisma.XOR<Prisma.EmployeeUpdateWithoutDesignationInput, Prisma.EmployeeUncheckedUpdateWithoutDesignationInput>;
    create: Prisma.XOR<Prisma.EmployeeCreateWithoutDesignationInput, Prisma.EmployeeUncheckedCreateWithoutDesignationInput>;
    where?: Prisma.EmployeeWhereInput;
};
export type EmployeeUpdateToOneWithWhereWithoutDesignationInput = {
    where?: Prisma.EmployeeWhereInput;
    data: Prisma.XOR<Prisma.EmployeeUpdateWithoutDesignationInput, Prisma.EmployeeUncheckedUpdateWithoutDesignationInput>;
};
export type EmployeeUpdateWithoutDesignationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    firstExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Leader?: Prisma.LeaderUpdateOneWithoutEmployeeNestedInput;
    User?: Prisma.UserUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeUncheckedUpdateWithoutDesignationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    cardNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.EnumUNITFieldUpdateOperationsInput | $Enums.UNIT;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    firstEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    firstExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondEntry?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    secondExit?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Leader?: Prisma.LeaderUncheckedUpdateOneWithoutEmployeeNestedInput;
    User?: Prisma.UserUncheckedUpdateManyWithoutEmployeeNestedInput;
};
export type EmployeeCountOutputType = {
    Designation: number;
    User: number;
};
export type EmployeeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Designation?: boolean | EmployeeCountOutputTypeCountDesignationArgs;
    User?: boolean | EmployeeCountOutputTypeCountUserArgs;
};
export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeCountOutputTypeSelect<ExtArgs> | null;
};
export type EmployeeCountOutputTypeCountDesignationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignationWhereInput;
};
export type EmployeeCountOutputTypeCountUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type EmployeeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    cardNumber?: boolean;
    unit?: boolean;
    status?: boolean;
    firstEntry?: boolean;
    firstExit?: boolean;
    secondEntry?: boolean;
    secondExit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Leader?: boolean | Prisma.Employee$LeaderArgs<ExtArgs>;
    Designation?: boolean | Prisma.Employee$DesignationArgs<ExtArgs>;
    User?: boolean | Prisma.Employee$UserArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    cardNumber?: boolean;
    unit?: boolean;
    status?: boolean;
    firstEntry?: boolean;
    firstExit?: boolean;
    secondEntry?: boolean;
    secondExit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    cardNumber?: boolean;
    unit?: boolean;
    status?: boolean;
    firstEntry?: boolean;
    firstExit?: boolean;
    secondEntry?: boolean;
    secondExit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["employee"]>;
export type EmployeeSelectScalar = {
    id?: boolean;
    name?: boolean;
    cardNumber?: boolean;
    unit?: boolean;
    status?: boolean;
    firstEntry?: boolean;
    firstExit?: boolean;
    secondEntry?: boolean;
    secondExit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EmployeeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "cardNumber" | "unit" | "status" | "firstEntry" | "firstExit" | "secondEntry" | "secondExit" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>;
export type EmployeeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Leader?: boolean | Prisma.Employee$LeaderArgs<ExtArgs>;
    Designation?: boolean | Prisma.Employee$DesignationArgs<ExtArgs>;
    User?: boolean | Prisma.Employee$UserArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EmployeePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Employee";
    objects: {
        Leader: Prisma.$LeaderPayload<ExtArgs> | null;
        Designation: Prisma.$DesignationPayload<ExtArgs>[];
        User: Prisma.$UserPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        cardNumber: string;
        unit: $Enums.UNIT;
        status: boolean;
        firstEntry: Date | null;
        firstExit: Date | null;
        secondEntry: Date | null;
        secondExit: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["employee"]>;
    composites: {};
};
export type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeePayload, S>;
export type EmployeeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeeCountAggregateInputType | true;
};
export interface EmployeeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Employee'];
        meta: {
            name: 'Employee';
        };
    };
    findUnique<T extends EmployeeFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeeFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeeFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeeCreateArgs>(args: Prisma.SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeeCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeeDeleteArgs>(args: Prisma.SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeeUpdateArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeeUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeeUpsertArgs>(args: Prisma.SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeeCountArgs>(args?: Prisma.Subset<T, EmployeeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeeCountAggregateOutputType> : number>;
    aggregate<T extends EmployeeAggregateArgs>(args: Prisma.Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;
    groupBy<T extends EmployeeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeeGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeeFieldRefs;
}
export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Leader<T extends Prisma.Employee$LeaderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$LeaderArgs<ExtArgs>>): Prisma.Prisma__LeaderClient<runtime.Types.Result.GetResult<Prisma.$LeaderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    Designation<T extends Prisma.Employee$DesignationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$DesignationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    User<T extends Prisma.Employee$UserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employee$UserArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeeFieldRefs {
    readonly id: Prisma.FieldRef<"Employee", 'Int'>;
    readonly name: Prisma.FieldRef<"Employee", 'String'>;
    readonly cardNumber: Prisma.FieldRef<"Employee", 'String'>;
    readonly unit: Prisma.FieldRef<"Employee", 'UNIT'>;
    readonly status: Prisma.FieldRef<"Employee", 'Boolean'>;
    readonly firstEntry: Prisma.FieldRef<"Employee", 'DateTime'>;
    readonly firstExit: Prisma.FieldRef<"Employee", 'DateTime'>;
    readonly secondEntry: Prisma.FieldRef<"Employee", 'DateTime'>;
    readonly secondExit: Prisma.FieldRef<"Employee", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Employee", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Employee", 'DateTime'>;
}
export type EmployeeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where?: Prisma.EmployeeWhereInput;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput | Prisma.EmployeeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScalarFieldEnum | Prisma.EmployeeScalarFieldEnum[];
};
export type EmployeeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeCreateInput, Prisma.EmployeeUncheckedCreateInput>;
};
export type EmployeeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeeCreateManyInput | Prisma.EmployeeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    data: Prisma.EmployeeCreateManyInput | Prisma.EmployeeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeUpdateInput, Prisma.EmployeeUncheckedUpdateInput>;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
};
export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeUpdateManyMutationInput, Prisma.EmployeeUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
};
export type EmployeeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeCreateInput, Prisma.EmployeeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeeUpdateInput, Prisma.EmployeeUncheckedUpdateInput>;
};
export type EmployeeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
    where: Prisma.EmployeeWhereUniqueInput;
};
export type EmployeeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeWhereInput;
    limit?: number;
};
export type Employee$LeaderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LeaderSelect<ExtArgs> | null;
    omit?: Prisma.LeaderOmit<ExtArgs> | null;
    include?: Prisma.LeaderInclude<ExtArgs> | null;
    where?: Prisma.LeaderWhereInput;
};
export type Employee$DesignationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Employee$UserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EmployeeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeOmit<ExtArgs> | null;
    include?: Prisma.EmployeeInclude<ExtArgs> | null;
};
export {};
