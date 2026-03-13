import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type RoleModel = runtime.Types.Result.DefaultSelection<Prisma.$RolePayload>;
export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null;
    _avg: RoleAvgAggregateOutputType | null;
    _sum: RoleSumAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
};
export type RoleAvgAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
};
export type RoleSumAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
};
export type RoleMinAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RoleMaxAggregateOutputType = {
    id: number | null;
    applicationId: number | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RoleCountAggregateOutputType = {
    id: number;
    applicationId: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RoleAvgAggregateInputType = {
    id?: true;
    applicationId?: true;
};
export type RoleSumAggregateInputType = {
    id?: true;
    applicationId?: true;
};
export type RoleMinAggregateInputType = {
    id?: true;
    applicationId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RoleMaxAggregateInputType = {
    id?: true;
    applicationId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RoleCountAggregateInputType = {
    id?: true;
    applicationId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoleCountAggregateInputType;
    _avg?: RoleAvgAggregateInputType;
    _sum?: RoleSumAggregateInputType;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
};
export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRole[P]> : Prisma.GetScalarType<T[P], AggregateRole[P]>;
};
export type RoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithAggregationInput | Prisma.RoleOrderByWithAggregationInput[];
    by: Prisma.RoleScalarFieldEnum[] | Prisma.RoleScalarFieldEnum;
    having?: Prisma.RoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleCountAggregateInputType | true;
    _avg?: RoleAvgAggregateInputType;
    _sum?: RoleSumAggregateInputType;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
};
export type RoleGroupByOutputType = {
    id: number;
    applicationId: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: RoleCountAggregateOutputType | null;
    _avg: RoleAvgAggregateOutputType | null;
    _sum: RoleSumAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
};
type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoleGroupByOutputType[P]>;
}>>;
export type RoleWhereInput = {
    AND?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    OR?: Prisma.RoleWhereInput[];
    NOT?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    id?: Prisma.IntFilter<"Role"> | number;
    applicationId?: Prisma.IntFilter<"Role"> | number;
    name?: Prisma.StringFilter<"Role"> | string;
    createdAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    Application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
    UserApplication?: Prisma.UserApplicationListRelationFilter;
};
export type RoleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Application?: Prisma.ApplicationOrderByWithRelationInput;
    UserApplication?: Prisma.UserApplicationOrderByRelationAggregateInput;
};
export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    applicationId_name?: Prisma.RoleApplicationIdNameCompoundUniqueInput;
    AND?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    OR?: Prisma.RoleWhereInput[];
    NOT?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    applicationId?: Prisma.IntFilter<"Role"> | number;
    name?: Prisma.StringFilter<"Role"> | string;
    createdAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    Application?: Prisma.XOR<Prisma.ApplicationScalarRelationFilter, Prisma.ApplicationWhereInput>;
    UserApplication?: Prisma.UserApplicationListRelationFilter;
}, "id" | "applicationId_name">;
export type RoleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RoleCountOrderByAggregateInput;
    _avg?: Prisma.RoleAvgOrderByAggregateInput;
    _max?: Prisma.RoleMaxOrderByAggregateInput;
    _min?: Prisma.RoleMinOrderByAggregateInput;
    _sum?: Prisma.RoleSumOrderByAggregateInput;
};
export type RoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoleScalarWhereWithAggregatesInput | Prisma.RoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoleScalarWhereWithAggregatesInput | Prisma.RoleScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Role"> | number;
    applicationId?: Prisma.IntWithAggregatesFilter<"Role"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Role"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Role"> | Date | string;
};
export type RoleCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Application: Prisma.ApplicationCreateNestedOneWithoutRoleInput;
    UserApplication?: Prisma.UserApplicationCreateNestedManyWithoutRoleInput;
};
export type RoleUncheckedCreateInput = {
    id?: number;
    applicationId: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    UserApplication?: Prisma.UserApplicationUncheckedCreateNestedManyWithoutRoleInput;
};
export type RoleUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Application?: Prisma.ApplicationUpdateOneRequiredWithoutRoleNestedInput;
    UserApplication?: Prisma.UserApplicationUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UserApplication?: Prisma.UserApplicationUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleCreateManyInput = {
    id?: number;
    applicationId: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoleUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleListRelationFilter = {
    every?: Prisma.RoleWhereInput;
    some?: Prisma.RoleWhereInput;
    none?: Prisma.RoleWhereInput;
};
export type RoleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RoleApplicationIdNameCompoundUniqueInput = {
    applicationId: number;
    name: string;
};
export type RoleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
};
export type RoleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    applicationId?: Prisma.SortOrder;
};
export type RoleScalarRelationFilter = {
    is?: Prisma.RoleWhereInput;
    isNot?: Prisma.RoleWhereInput;
};
export type RoleCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutApplicationInput, Prisma.RoleUncheckedCreateWithoutApplicationInput> | Prisma.RoleCreateWithoutApplicationInput[] | Prisma.RoleUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutApplicationInput | Prisma.RoleCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.RoleCreateManyApplicationInputEnvelope;
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
};
export type RoleUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutApplicationInput, Prisma.RoleUncheckedCreateWithoutApplicationInput> | Prisma.RoleCreateWithoutApplicationInput[] | Prisma.RoleUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutApplicationInput | Prisma.RoleCreateOrConnectWithoutApplicationInput[];
    createMany?: Prisma.RoleCreateManyApplicationInputEnvelope;
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
};
export type RoleUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutApplicationInput, Prisma.RoleUncheckedCreateWithoutApplicationInput> | Prisma.RoleCreateWithoutApplicationInput[] | Prisma.RoleUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutApplicationInput | Prisma.RoleCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.RoleUpsertWithWhereUniqueWithoutApplicationInput | Prisma.RoleUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.RoleCreateManyApplicationInputEnvelope;
    set?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    disconnect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    delete?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    update?: Prisma.RoleUpdateWithWhereUniqueWithoutApplicationInput | Prisma.RoleUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.RoleUpdateManyWithWhereWithoutApplicationInput | Prisma.RoleUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
};
export type RoleUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutApplicationInput, Prisma.RoleUncheckedCreateWithoutApplicationInput> | Prisma.RoleCreateWithoutApplicationInput[] | Prisma.RoleUncheckedCreateWithoutApplicationInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutApplicationInput | Prisma.RoleCreateOrConnectWithoutApplicationInput[];
    upsert?: Prisma.RoleUpsertWithWhereUniqueWithoutApplicationInput | Prisma.RoleUpsertWithWhereUniqueWithoutApplicationInput[];
    createMany?: Prisma.RoleCreateManyApplicationInputEnvelope;
    set?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    disconnect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    delete?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    update?: Prisma.RoleUpdateWithWhereUniqueWithoutApplicationInput | Prisma.RoleUpdateWithWhereUniqueWithoutApplicationInput[];
    updateMany?: Prisma.RoleUpdateManyWithWhereWithoutApplicationInput | Prisma.RoleUpdateManyWithWhereWithoutApplicationInput[];
    deleteMany?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
};
export type RoleCreateNestedOneWithoutUserApplicationInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutUserApplicationInput, Prisma.RoleUncheckedCreateWithoutUserApplicationInput>;
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutUserApplicationInput;
    connect?: Prisma.RoleWhereUniqueInput;
};
export type RoleUpdateOneRequiredWithoutUserApplicationNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutUserApplicationInput, Prisma.RoleUncheckedCreateWithoutUserApplicationInput>;
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutUserApplicationInput;
    upsert?: Prisma.RoleUpsertWithoutUserApplicationInput;
    connect?: Prisma.RoleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoleUpdateToOneWithWhereWithoutUserApplicationInput, Prisma.RoleUpdateWithoutUserApplicationInput>, Prisma.RoleUncheckedUpdateWithoutUserApplicationInput>;
};
export type RoleCreateWithoutApplicationInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    UserApplication?: Prisma.UserApplicationCreateNestedManyWithoutRoleInput;
};
export type RoleUncheckedCreateWithoutApplicationInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    UserApplication?: Prisma.UserApplicationUncheckedCreateNestedManyWithoutRoleInput;
};
export type RoleCreateOrConnectWithoutApplicationInput = {
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateWithoutApplicationInput, Prisma.RoleUncheckedCreateWithoutApplicationInput>;
};
export type RoleCreateManyApplicationInputEnvelope = {
    data: Prisma.RoleCreateManyApplicationInput | Prisma.RoleCreateManyApplicationInput[];
    skipDuplicates?: boolean;
};
export type RoleUpsertWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.RoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoleUpdateWithoutApplicationInput, Prisma.RoleUncheckedUpdateWithoutApplicationInput>;
    create: Prisma.XOR<Prisma.RoleCreateWithoutApplicationInput, Prisma.RoleUncheckedCreateWithoutApplicationInput>;
};
export type RoleUpdateWithWhereUniqueWithoutApplicationInput = {
    where: Prisma.RoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoleUpdateWithoutApplicationInput, Prisma.RoleUncheckedUpdateWithoutApplicationInput>;
};
export type RoleUpdateManyWithWhereWithoutApplicationInput = {
    where: Prisma.RoleScalarWhereInput;
    data: Prisma.XOR<Prisma.RoleUpdateManyMutationInput, Prisma.RoleUncheckedUpdateManyWithoutApplicationInput>;
};
export type RoleScalarWhereInput = {
    AND?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
    OR?: Prisma.RoleScalarWhereInput[];
    NOT?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
    id?: Prisma.IntFilter<"Role"> | number;
    applicationId?: Prisma.IntFilter<"Role"> | number;
    name?: Prisma.StringFilter<"Role"> | string;
    createdAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
};
export type RoleCreateWithoutUserApplicationInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Application: Prisma.ApplicationCreateNestedOneWithoutRoleInput;
};
export type RoleUncheckedCreateWithoutUserApplicationInput = {
    id?: number;
    applicationId: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoleCreateOrConnectWithoutUserApplicationInput = {
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateWithoutUserApplicationInput, Prisma.RoleUncheckedCreateWithoutUserApplicationInput>;
};
export type RoleUpsertWithoutUserApplicationInput = {
    update: Prisma.XOR<Prisma.RoleUpdateWithoutUserApplicationInput, Prisma.RoleUncheckedUpdateWithoutUserApplicationInput>;
    create: Prisma.XOR<Prisma.RoleCreateWithoutUserApplicationInput, Prisma.RoleUncheckedCreateWithoutUserApplicationInput>;
    where?: Prisma.RoleWhereInput;
};
export type RoleUpdateToOneWithWhereWithoutUserApplicationInput = {
    where?: Prisma.RoleWhereInput;
    data: Prisma.XOR<Prisma.RoleUpdateWithoutUserApplicationInput, Prisma.RoleUncheckedUpdateWithoutUserApplicationInput>;
};
export type RoleUpdateWithoutUserApplicationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Application?: Prisma.ApplicationUpdateOneRequiredWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateWithoutUserApplicationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    applicationId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleCreateManyApplicationInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoleUpdateWithoutApplicationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UserApplication?: Prisma.UserApplicationUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateWithoutApplicationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    UserApplication?: Prisma.UserApplicationUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateManyWithoutApplicationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleCountOutputType = {
    UserApplication: number;
};
export type RoleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    UserApplication?: boolean | RoleCountOutputTypeCountUserApplicationArgs;
};
export type RoleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleCountOutputTypeSelect<ExtArgs> | null;
};
export type RoleCountOutputTypeCountUserApplicationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserApplicationWhereInput;
};
export type RoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
    UserApplication?: boolean | Prisma.Role$UserApplicationArgs<ExtArgs>;
    _count?: boolean | Prisma.RoleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role"]>;
export type RoleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role"]>;
export type RoleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    applicationId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role"]>;
export type RoleSelectScalar = {
    id?: boolean;
    applicationId?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "applicationId" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>;
export type RoleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
    UserApplication?: boolean | Prisma.Role$UserApplicationArgs<ExtArgs>;
    _count?: boolean | Prisma.RoleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RoleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type RoleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Application?: boolean | Prisma.ApplicationDefaultArgs<ExtArgs>;
};
export type $RolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Role";
    objects: {
        Application: Prisma.$ApplicationPayload<ExtArgs>;
        UserApplication: Prisma.$UserApplicationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        applicationId: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["role"]>;
    composites: {};
};
export type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RolePayload, S>;
export type RoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoleCountAggregateInputType | true;
};
export interface RoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Role'];
        meta: {
            name: 'Role';
        };
    };
    findUnique<T extends RoleFindUniqueArgs>(args: Prisma.SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RoleFindFirstArgs>(args?: Prisma.SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RoleFindManyArgs>(args?: Prisma.SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RoleCreateArgs>(args: Prisma.SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RoleCreateManyArgs>(args?: Prisma.SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RoleDeleteArgs>(args: Prisma.SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RoleUpdateArgs>(args: Prisma.SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RoleUpdateManyArgs>(args: Prisma.SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RoleUpsertArgs>(args: Prisma.SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RoleCountArgs>(args?: Prisma.Subset<T, RoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoleCountAggregateOutputType> : number>;
    aggregate<T extends RoleAggregateArgs>(args: Prisma.Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>;
    groupBy<T extends RoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoleGroupByArgs['orderBy'];
    } : {
        orderBy?: RoleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RoleFieldRefs;
}
export interface Prisma__RoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Application<T extends Prisma.ApplicationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApplicationDefaultArgs<ExtArgs>>): Prisma.Prisma__ApplicationClient<runtime.Types.Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    UserApplication<T extends Prisma.Role$UserApplicationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Role$UserApplicationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RoleFieldRefs {
    readonly id: Prisma.FieldRef<"Role", 'Int'>;
    readonly applicationId: Prisma.FieldRef<"Role", 'Int'>;
    readonly name: Prisma.FieldRef<"Role", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Role", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Role", 'DateTime'>;
}
export type RoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type RoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type RoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type RoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleCreateInput, Prisma.RoleUncheckedCreateInput>;
};
export type RoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RoleCreateManyInput | Prisma.RoleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    data: Prisma.RoleCreateManyInput | Prisma.RoleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RoleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleUpdateInput, Prisma.RoleUncheckedUpdateInput>;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RoleUpdateManyMutationInput, Prisma.RoleUncheckedUpdateManyInput>;
    where?: Prisma.RoleWhereInput;
    limit?: number;
};
export type RoleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleUpdateManyMutationInput, Prisma.RoleUncheckedUpdateManyInput>;
    where?: Prisma.RoleWhereInput;
    limit?: number;
    include?: Prisma.RoleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateInput, Prisma.RoleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RoleUpdateInput, Prisma.RoleUncheckedUpdateInput>;
};
export type RoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
    limit?: number;
};
export type Role$UserApplicationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
};
export {};
