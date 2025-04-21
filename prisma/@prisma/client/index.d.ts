
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CredentialRequest
 * 
 */
export type CredentialRequest = $Result.DefaultSelection<Prisma.$CredentialRequestPayload>
/**
 * Model ShiftLog
 * 
 */
export type ShiftLog = $Result.DefaultSelection<Prisma.$ShiftLogPayload>
/**
 * Model Novedad
 * 
 */
export type Novedad = $Result.DefaultSelection<Prisma.$NovedadPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MAYORDOMO: 'MAYORDOMO',
  CONSERJE: 'CONSERJE',
  NOCHERO: 'NOCHERO',
  JARDINERO: 'JARDINERO',
  PISCINERO: 'PISCINERO'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  CANCELLED: 'CANCELLED',
  SUSPENDED: 'SUSPENDED',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const ShiftType: {
  IN: 'IN',
  OUT: 'OUT'
};

export type ShiftType = (typeof ShiftType)[keyof typeof ShiftType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ShiftType = $Enums.ShiftType

export const ShiftType: typeof $Enums.ShiftType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.credentialRequest`: Exposes CRUD operations for the **CredentialRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CredentialRequests
    * const credentialRequests = await prisma.credentialRequest.findMany()
    * ```
    */
  get credentialRequest(): Prisma.CredentialRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shiftLog`: Exposes CRUD operations for the **ShiftLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftLogs
    * const shiftLogs = await prisma.shiftLog.findMany()
    * ```
    */
  get shiftLog(): Prisma.ShiftLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.novedad`: Exposes CRUD operations for the **Novedad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Novedads
    * const novedads = await prisma.novedad.findMany()
    * ```
    */
  get novedad(): Prisma.NovedadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CredentialRequest: 'CredentialRequest',
    ShiftLog: 'ShiftLog',
    Novedad: 'Novedad'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "credentialRequest" | "shiftLog" | "novedad"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CredentialRequest: {
        payload: Prisma.$CredentialRequestPayload<ExtArgs>
        fields: Prisma.CredentialRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CredentialRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CredentialRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload>
          }
          findFirst: {
            args: Prisma.CredentialRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CredentialRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload>
          }
          findMany: {
            args: Prisma.CredentialRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload>[]
          }
          create: {
            args: Prisma.CredentialRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload>
          }
          createMany: {
            args: Prisma.CredentialRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CredentialRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload>[]
          }
          delete: {
            args: Prisma.CredentialRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload>
          }
          update: {
            args: Prisma.CredentialRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload>
          }
          deleteMany: {
            args: Prisma.CredentialRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CredentialRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CredentialRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload>[]
          }
          upsert: {
            args: Prisma.CredentialRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredentialRequestPayload>
          }
          aggregate: {
            args: Prisma.CredentialRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredentialRequest>
          }
          groupBy: {
            args: Prisma.CredentialRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.CredentialRequestCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialRequestCountAggregateOutputType> | number
          }
        }
      }
      ShiftLog: {
        payload: Prisma.$ShiftLogPayload<ExtArgs>
        fields: Prisma.ShiftLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload>
          }
          findFirst: {
            args: Prisma.ShiftLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload>
          }
          findMany: {
            args: Prisma.ShiftLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload>[]
          }
          create: {
            args: Prisma.ShiftLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload>
          }
          createMany: {
            args: Prisma.ShiftLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload>[]
          }
          delete: {
            args: Prisma.ShiftLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload>
          }
          update: {
            args: Prisma.ShiftLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload>
          }
          deleteMany: {
            args: Prisma.ShiftLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload>[]
          }
          upsert: {
            args: Prisma.ShiftLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftLogPayload>
          }
          aggregate: {
            args: Prisma.ShiftLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShiftLog>
          }
          groupBy: {
            args: Prisma.ShiftLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftLogCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftLogCountAggregateOutputType> | number
          }
        }
      }
      Novedad: {
        payload: Prisma.$NovedadPayload<ExtArgs>
        fields: Prisma.NovedadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NovedadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NovedadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload>
          }
          findFirst: {
            args: Prisma.NovedadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NovedadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload>
          }
          findMany: {
            args: Prisma.NovedadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload>[]
          }
          create: {
            args: Prisma.NovedadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload>
          }
          createMany: {
            args: Prisma.NovedadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NovedadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload>[]
          }
          delete: {
            args: Prisma.NovedadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload>
          }
          update: {
            args: Prisma.NovedadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload>
          }
          deleteMany: {
            args: Prisma.NovedadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NovedadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NovedadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload>[]
          }
          upsert: {
            args: Prisma.NovedadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NovedadPayload>
          }
          aggregate: {
            args: Prisma.NovedadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNovedad>
          }
          groupBy: {
            args: Prisma.NovedadGroupByArgs<ExtArgs>
            result: $Utils.Optional<NovedadGroupByOutputType>[]
          }
          count: {
            args: Prisma.NovedadCountArgs<ExtArgs>
            result: $Utils.Optional<NovedadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    credentialRequest?: CredentialRequestOmit
    shiftLog?: ShiftLogOmit
    novedad?: NovedadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    requests: number
    shiftLogs: number
    novedades: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    shiftLogs?: boolean | UserCountOutputTypeCountShiftLogsArgs
    novedades?: boolean | UserCountOutputTypeCountNovedadesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShiftLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNovedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NovedadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firebaseUid: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    assignedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firebaseUid: string | null
    email: string | null
    name: string | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    assignedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firebaseUid: number
    email: number
    name: number
    role: number
    status: number
    assignedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firebaseUid?: true
    email?: true
    name?: true
    role?: true
    status?: true
    assignedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firebaseUid?: true
    email?: true
    name?: true
    role?: true
    status?: true
    assignedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firebaseUid?: true
    email?: true
    name?: true
    role?: true
    status?: true
    assignedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firebaseUid: string
    email: string
    name: string
    role: $Enums.Role
    status: $Enums.Status
    assignedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    assignedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requests?: boolean | User$requestsArgs<ExtArgs>
    shiftLogs?: boolean | User$shiftLogsArgs<ExtArgs>
    novedades?: boolean | User$novedadesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    assignedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firebaseUid?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    assignedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firebaseUid?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    status?: boolean
    assignedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firebaseUid" | "email" | "name" | "role" | "status" | "assignedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | User$requestsArgs<ExtArgs>
    shiftLogs?: boolean | User$shiftLogsArgs<ExtArgs>
    novedades?: boolean | User$novedadesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      requests: Prisma.$CredentialRequestPayload<ExtArgs>[]
      shiftLogs: Prisma.$ShiftLogPayload<ExtArgs>[]
      novedades: Prisma.$NovedadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firebaseUid: string
      email: string
      name: string
      role: $Enums.Role
      status: $Enums.Status
      assignedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shiftLogs<T extends User$shiftLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$shiftLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    novedades<T extends User$novedadesArgs<ExtArgs> = {}>(args?: Subset<T, User$novedadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firebaseUid: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'Status'>
    readonly assignedBy: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
    where?: CredentialRequestWhereInput
    orderBy?: CredentialRequestOrderByWithRelationInput | CredentialRequestOrderByWithRelationInput[]
    cursor?: CredentialRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CredentialRequestScalarFieldEnum | CredentialRequestScalarFieldEnum[]
  }

  /**
   * User.shiftLogs
   */
  export type User$shiftLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
    where?: ShiftLogWhereInput
    orderBy?: ShiftLogOrderByWithRelationInput | ShiftLogOrderByWithRelationInput[]
    cursor?: ShiftLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftLogScalarFieldEnum | ShiftLogScalarFieldEnum[]
  }

  /**
   * User.novedades
   */
  export type User$novedadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
    where?: NovedadWhereInput
    orderBy?: NovedadOrderByWithRelationInput | NovedadOrderByWithRelationInput[]
    cursor?: NovedadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NovedadScalarFieldEnum | NovedadScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CredentialRequest
   */

  export type AggregateCredentialRequest = {
    _count: CredentialRequestCountAggregateOutputType | null
    _min: CredentialRequestMinAggregateOutputType | null
    _max: CredentialRequestMaxAggregateOutputType | null
  }

  export type CredentialRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    desiredRole: $Enums.Role | null
    reason: string | null
    status: $Enums.Status | null
    submittedAt: Date | null
  }

  export type CredentialRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    desiredRole: $Enums.Role | null
    reason: string | null
    status: $Enums.Status | null
    submittedAt: Date | null
  }

  export type CredentialRequestCountAggregateOutputType = {
    id: number
    userId: number
    desiredRole: number
    reason: number
    status: number
    submittedAt: number
    _all: number
  }


  export type CredentialRequestMinAggregateInputType = {
    id?: true
    userId?: true
    desiredRole?: true
    reason?: true
    status?: true
    submittedAt?: true
  }

  export type CredentialRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    desiredRole?: true
    reason?: true
    status?: true
    submittedAt?: true
  }

  export type CredentialRequestCountAggregateInputType = {
    id?: true
    userId?: true
    desiredRole?: true
    reason?: true
    status?: true
    submittedAt?: true
    _all?: true
  }

  export type CredentialRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CredentialRequest to aggregate.
     */
    where?: CredentialRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CredentialRequests to fetch.
     */
    orderBy?: CredentialRequestOrderByWithRelationInput | CredentialRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CredentialRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CredentialRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CredentialRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CredentialRequests
    **/
    _count?: true | CredentialRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialRequestMaxAggregateInputType
  }

  export type GetCredentialRequestAggregateType<T extends CredentialRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateCredentialRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredentialRequest[P]>
      : GetScalarType<T[P], AggregateCredentialRequest[P]>
  }




  export type CredentialRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredentialRequestWhereInput
    orderBy?: CredentialRequestOrderByWithAggregationInput | CredentialRequestOrderByWithAggregationInput[]
    by: CredentialRequestScalarFieldEnum[] | CredentialRequestScalarFieldEnum
    having?: CredentialRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialRequestCountAggregateInputType | true
    _min?: CredentialRequestMinAggregateInputType
    _max?: CredentialRequestMaxAggregateInputType
  }

  export type CredentialRequestGroupByOutputType = {
    id: string
    userId: string
    desiredRole: $Enums.Role
    reason: string | null
    status: $Enums.Status
    submittedAt: Date
    _count: CredentialRequestCountAggregateOutputType | null
    _min: CredentialRequestMinAggregateOutputType | null
    _max: CredentialRequestMaxAggregateOutputType | null
  }

  type GetCredentialRequestGroupByPayload<T extends CredentialRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialRequestGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialRequestGroupByOutputType[P]>
        }
      >
    >


  export type CredentialRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    desiredRole?: boolean
    reason?: boolean
    status?: boolean
    submittedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credentialRequest"]>

  export type CredentialRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    desiredRole?: boolean
    reason?: boolean
    status?: boolean
    submittedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credentialRequest"]>

  export type CredentialRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    desiredRole?: boolean
    reason?: boolean
    status?: boolean
    submittedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["credentialRequest"]>

  export type CredentialRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    desiredRole?: boolean
    reason?: boolean
    status?: boolean
    submittedAt?: boolean
  }

  export type CredentialRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "desiredRole" | "reason" | "status" | "submittedAt", ExtArgs["result"]["credentialRequest"]>
  export type CredentialRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CredentialRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CredentialRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CredentialRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CredentialRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      desiredRole: $Enums.Role
      reason: string | null
      status: $Enums.Status
      submittedAt: Date
    }, ExtArgs["result"]["credentialRequest"]>
    composites: {}
  }

  type CredentialRequestGetPayload<S extends boolean | null | undefined | CredentialRequestDefaultArgs> = $Result.GetResult<Prisma.$CredentialRequestPayload, S>

  type CredentialRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CredentialRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredentialRequestCountAggregateInputType | true
    }

  export interface CredentialRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CredentialRequest'], meta: { name: 'CredentialRequest' } }
    /**
     * Find zero or one CredentialRequest that matches the filter.
     * @param {CredentialRequestFindUniqueArgs} args - Arguments to find a CredentialRequest
     * @example
     * // Get one CredentialRequest
     * const credentialRequest = await prisma.credentialRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CredentialRequestFindUniqueArgs>(args: SelectSubset<T, CredentialRequestFindUniqueArgs<ExtArgs>>): Prisma__CredentialRequestClient<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CredentialRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CredentialRequestFindUniqueOrThrowArgs} args - Arguments to find a CredentialRequest
     * @example
     * // Get one CredentialRequest
     * const credentialRequest = await prisma.credentialRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CredentialRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, CredentialRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CredentialRequestClient<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CredentialRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialRequestFindFirstArgs} args - Arguments to find a CredentialRequest
     * @example
     * // Get one CredentialRequest
     * const credentialRequest = await prisma.credentialRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CredentialRequestFindFirstArgs>(args?: SelectSubset<T, CredentialRequestFindFirstArgs<ExtArgs>>): Prisma__CredentialRequestClient<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CredentialRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialRequestFindFirstOrThrowArgs} args - Arguments to find a CredentialRequest
     * @example
     * // Get one CredentialRequest
     * const credentialRequest = await prisma.credentialRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CredentialRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, CredentialRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__CredentialRequestClient<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CredentialRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CredentialRequests
     * const credentialRequests = await prisma.credentialRequest.findMany()
     * 
     * // Get first 10 CredentialRequests
     * const credentialRequests = await prisma.credentialRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credentialRequestWithIdOnly = await prisma.credentialRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CredentialRequestFindManyArgs>(args?: SelectSubset<T, CredentialRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CredentialRequest.
     * @param {CredentialRequestCreateArgs} args - Arguments to create a CredentialRequest.
     * @example
     * // Create one CredentialRequest
     * const CredentialRequest = await prisma.credentialRequest.create({
     *   data: {
     *     // ... data to create a CredentialRequest
     *   }
     * })
     * 
     */
    create<T extends CredentialRequestCreateArgs>(args: SelectSubset<T, CredentialRequestCreateArgs<ExtArgs>>): Prisma__CredentialRequestClient<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CredentialRequests.
     * @param {CredentialRequestCreateManyArgs} args - Arguments to create many CredentialRequests.
     * @example
     * // Create many CredentialRequests
     * const credentialRequest = await prisma.credentialRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CredentialRequestCreateManyArgs>(args?: SelectSubset<T, CredentialRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CredentialRequests and returns the data saved in the database.
     * @param {CredentialRequestCreateManyAndReturnArgs} args - Arguments to create many CredentialRequests.
     * @example
     * // Create many CredentialRequests
     * const credentialRequest = await prisma.credentialRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CredentialRequests and only return the `id`
     * const credentialRequestWithIdOnly = await prisma.credentialRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CredentialRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, CredentialRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CredentialRequest.
     * @param {CredentialRequestDeleteArgs} args - Arguments to delete one CredentialRequest.
     * @example
     * // Delete one CredentialRequest
     * const CredentialRequest = await prisma.credentialRequest.delete({
     *   where: {
     *     // ... filter to delete one CredentialRequest
     *   }
     * })
     * 
     */
    delete<T extends CredentialRequestDeleteArgs>(args: SelectSubset<T, CredentialRequestDeleteArgs<ExtArgs>>): Prisma__CredentialRequestClient<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CredentialRequest.
     * @param {CredentialRequestUpdateArgs} args - Arguments to update one CredentialRequest.
     * @example
     * // Update one CredentialRequest
     * const credentialRequest = await prisma.credentialRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CredentialRequestUpdateArgs>(args: SelectSubset<T, CredentialRequestUpdateArgs<ExtArgs>>): Prisma__CredentialRequestClient<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CredentialRequests.
     * @param {CredentialRequestDeleteManyArgs} args - Arguments to filter CredentialRequests to delete.
     * @example
     * // Delete a few CredentialRequests
     * const { count } = await prisma.credentialRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CredentialRequestDeleteManyArgs>(args?: SelectSubset<T, CredentialRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CredentialRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CredentialRequests
     * const credentialRequest = await prisma.credentialRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CredentialRequestUpdateManyArgs>(args: SelectSubset<T, CredentialRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CredentialRequests and returns the data updated in the database.
     * @param {CredentialRequestUpdateManyAndReturnArgs} args - Arguments to update many CredentialRequests.
     * @example
     * // Update many CredentialRequests
     * const credentialRequest = await prisma.credentialRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CredentialRequests and only return the `id`
     * const credentialRequestWithIdOnly = await prisma.credentialRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CredentialRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, CredentialRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CredentialRequest.
     * @param {CredentialRequestUpsertArgs} args - Arguments to update or create a CredentialRequest.
     * @example
     * // Update or create a CredentialRequest
     * const credentialRequest = await prisma.credentialRequest.upsert({
     *   create: {
     *     // ... data to create a CredentialRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CredentialRequest we want to update
     *   }
     * })
     */
    upsert<T extends CredentialRequestUpsertArgs>(args: SelectSubset<T, CredentialRequestUpsertArgs<ExtArgs>>): Prisma__CredentialRequestClient<$Result.GetResult<Prisma.$CredentialRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CredentialRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialRequestCountArgs} args - Arguments to filter CredentialRequests to count.
     * @example
     * // Count the number of CredentialRequests
     * const count = await prisma.credentialRequest.count({
     *   where: {
     *     // ... the filter for the CredentialRequests we want to count
     *   }
     * })
    **/
    count<T extends CredentialRequestCountArgs>(
      args?: Subset<T, CredentialRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CredentialRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CredentialRequestAggregateArgs>(args: Subset<T, CredentialRequestAggregateArgs>): Prisma.PrismaPromise<GetCredentialRequestAggregateType<T>>

    /**
     * Group by CredentialRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CredentialRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredentialRequestGroupByArgs['orderBy'] }
        : { orderBy?: CredentialRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CredentialRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CredentialRequest model
   */
  readonly fields: CredentialRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CredentialRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CredentialRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CredentialRequest model
   */
  interface CredentialRequestFieldRefs {
    readonly id: FieldRef<"CredentialRequest", 'String'>
    readonly userId: FieldRef<"CredentialRequest", 'String'>
    readonly desiredRole: FieldRef<"CredentialRequest", 'Role'>
    readonly reason: FieldRef<"CredentialRequest", 'String'>
    readonly status: FieldRef<"CredentialRequest", 'Status'>
    readonly submittedAt: FieldRef<"CredentialRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CredentialRequest findUnique
   */
  export type CredentialRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
    /**
     * Filter, which CredentialRequest to fetch.
     */
    where: CredentialRequestWhereUniqueInput
  }

  /**
   * CredentialRequest findUniqueOrThrow
   */
  export type CredentialRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
    /**
     * Filter, which CredentialRequest to fetch.
     */
    where: CredentialRequestWhereUniqueInput
  }

  /**
   * CredentialRequest findFirst
   */
  export type CredentialRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
    /**
     * Filter, which CredentialRequest to fetch.
     */
    where?: CredentialRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CredentialRequests to fetch.
     */
    orderBy?: CredentialRequestOrderByWithRelationInput | CredentialRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CredentialRequests.
     */
    cursor?: CredentialRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CredentialRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CredentialRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CredentialRequests.
     */
    distinct?: CredentialRequestScalarFieldEnum | CredentialRequestScalarFieldEnum[]
  }

  /**
   * CredentialRequest findFirstOrThrow
   */
  export type CredentialRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
    /**
     * Filter, which CredentialRequest to fetch.
     */
    where?: CredentialRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CredentialRequests to fetch.
     */
    orderBy?: CredentialRequestOrderByWithRelationInput | CredentialRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CredentialRequests.
     */
    cursor?: CredentialRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CredentialRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CredentialRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CredentialRequests.
     */
    distinct?: CredentialRequestScalarFieldEnum | CredentialRequestScalarFieldEnum[]
  }

  /**
   * CredentialRequest findMany
   */
  export type CredentialRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
    /**
     * Filter, which CredentialRequests to fetch.
     */
    where?: CredentialRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CredentialRequests to fetch.
     */
    orderBy?: CredentialRequestOrderByWithRelationInput | CredentialRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CredentialRequests.
     */
    cursor?: CredentialRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CredentialRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CredentialRequests.
     */
    skip?: number
    distinct?: CredentialRequestScalarFieldEnum | CredentialRequestScalarFieldEnum[]
  }

  /**
   * CredentialRequest create
   */
  export type CredentialRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a CredentialRequest.
     */
    data: XOR<CredentialRequestCreateInput, CredentialRequestUncheckedCreateInput>
  }

  /**
   * CredentialRequest createMany
   */
  export type CredentialRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CredentialRequests.
     */
    data: CredentialRequestCreateManyInput | CredentialRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CredentialRequest createManyAndReturn
   */
  export type CredentialRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * The data used to create many CredentialRequests.
     */
    data: CredentialRequestCreateManyInput | CredentialRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CredentialRequest update
   */
  export type CredentialRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a CredentialRequest.
     */
    data: XOR<CredentialRequestUpdateInput, CredentialRequestUncheckedUpdateInput>
    /**
     * Choose, which CredentialRequest to update.
     */
    where: CredentialRequestWhereUniqueInput
  }

  /**
   * CredentialRequest updateMany
   */
  export type CredentialRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CredentialRequests.
     */
    data: XOR<CredentialRequestUpdateManyMutationInput, CredentialRequestUncheckedUpdateManyInput>
    /**
     * Filter which CredentialRequests to update
     */
    where?: CredentialRequestWhereInput
    /**
     * Limit how many CredentialRequests to update.
     */
    limit?: number
  }

  /**
   * CredentialRequest updateManyAndReturn
   */
  export type CredentialRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * The data used to update CredentialRequests.
     */
    data: XOR<CredentialRequestUpdateManyMutationInput, CredentialRequestUncheckedUpdateManyInput>
    /**
     * Filter which CredentialRequests to update
     */
    where?: CredentialRequestWhereInput
    /**
     * Limit how many CredentialRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CredentialRequest upsert
   */
  export type CredentialRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the CredentialRequest to update in case it exists.
     */
    where: CredentialRequestWhereUniqueInput
    /**
     * In case the CredentialRequest found by the `where` argument doesn't exist, create a new CredentialRequest with this data.
     */
    create: XOR<CredentialRequestCreateInput, CredentialRequestUncheckedCreateInput>
    /**
     * In case the CredentialRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CredentialRequestUpdateInput, CredentialRequestUncheckedUpdateInput>
  }

  /**
   * CredentialRequest delete
   */
  export type CredentialRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
    /**
     * Filter which CredentialRequest to delete.
     */
    where: CredentialRequestWhereUniqueInput
  }

  /**
   * CredentialRequest deleteMany
   */
  export type CredentialRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CredentialRequests to delete
     */
    where?: CredentialRequestWhereInput
    /**
     * Limit how many CredentialRequests to delete.
     */
    limit?: number
  }

  /**
   * CredentialRequest without action
   */
  export type CredentialRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CredentialRequest
     */
    select?: CredentialRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CredentialRequest
     */
    omit?: CredentialRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredentialRequestInclude<ExtArgs> | null
  }


  /**
   * Model ShiftLog
   */

  export type AggregateShiftLog = {
    _count: ShiftLogCountAggregateOutputType | null
    _min: ShiftLogMinAggregateOutputType | null
    _max: ShiftLogMaxAggregateOutputType | null
  }

  export type ShiftLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.ShiftType | null
    timestamp: Date | null
  }

  export type ShiftLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.ShiftType | null
    timestamp: Date | null
  }

  export type ShiftLogCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    timestamp: number
    _all: number
  }


  export type ShiftLogMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    timestamp?: true
  }

  export type ShiftLogMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    timestamp?: true
  }

  export type ShiftLogCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    timestamp?: true
    _all?: true
  }

  export type ShiftLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftLog to aggregate.
     */
    where?: ShiftLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftLogs to fetch.
     */
    orderBy?: ShiftLogOrderByWithRelationInput | ShiftLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftLogs
    **/
    _count?: true | ShiftLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftLogMaxAggregateInputType
  }

  export type GetShiftLogAggregateType<T extends ShiftLogAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftLog[P]>
      : GetScalarType<T[P], AggregateShiftLog[P]>
  }




  export type ShiftLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftLogWhereInput
    orderBy?: ShiftLogOrderByWithAggregationInput | ShiftLogOrderByWithAggregationInput[]
    by: ShiftLogScalarFieldEnum[] | ShiftLogScalarFieldEnum
    having?: ShiftLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftLogCountAggregateInputType | true
    _min?: ShiftLogMinAggregateInputType
    _max?: ShiftLogMaxAggregateInputType
  }

  export type ShiftLogGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.ShiftType
    timestamp: Date
    _count: ShiftLogCountAggregateOutputType | null
    _min: ShiftLogMinAggregateOutputType | null
    _max: ShiftLogMaxAggregateOutputType | null
  }

  type GetShiftLogGroupByPayload<T extends ShiftLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftLogGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftLogGroupByOutputType[P]>
        }
      >
    >


  export type ShiftLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftLog"]>

  export type ShiftLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftLog"]>

  export type ShiftLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftLog"]>

  export type ShiftLogSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    timestamp?: boolean
  }

  export type ShiftLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "timestamp", ExtArgs["result"]["shiftLog"]>
  export type ShiftLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShiftLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ShiftLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ShiftLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.ShiftType
      timestamp: Date
    }, ExtArgs["result"]["shiftLog"]>
    composites: {}
  }

  type ShiftLogGetPayload<S extends boolean | null | undefined | ShiftLogDefaultArgs> = $Result.GetResult<Prisma.$ShiftLogPayload, S>

  type ShiftLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftLogCountAggregateInputType | true
    }

  export interface ShiftLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftLog'], meta: { name: 'ShiftLog' } }
    /**
     * Find zero or one ShiftLog that matches the filter.
     * @param {ShiftLogFindUniqueArgs} args - Arguments to find a ShiftLog
     * @example
     * // Get one ShiftLog
     * const shiftLog = await prisma.shiftLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftLogFindUniqueArgs>(args: SelectSubset<T, ShiftLogFindUniqueArgs<ExtArgs>>): Prisma__ShiftLogClient<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShiftLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftLogFindUniqueOrThrowArgs} args - Arguments to find a ShiftLog
     * @example
     * // Get one ShiftLog
     * const shiftLog = await prisma.shiftLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftLogClient<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftLogFindFirstArgs} args - Arguments to find a ShiftLog
     * @example
     * // Get one ShiftLog
     * const shiftLog = await prisma.shiftLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftLogFindFirstArgs>(args?: SelectSubset<T, ShiftLogFindFirstArgs<ExtArgs>>): Prisma__ShiftLogClient<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShiftLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftLogFindFirstOrThrowArgs} args - Arguments to find a ShiftLog
     * @example
     * // Get one ShiftLog
     * const shiftLog = await prisma.shiftLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftLogClient<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShiftLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftLogs
     * const shiftLogs = await prisma.shiftLog.findMany()
     * 
     * // Get first 10 ShiftLogs
     * const shiftLogs = await prisma.shiftLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftLogWithIdOnly = await prisma.shiftLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftLogFindManyArgs>(args?: SelectSubset<T, ShiftLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShiftLog.
     * @param {ShiftLogCreateArgs} args - Arguments to create a ShiftLog.
     * @example
     * // Create one ShiftLog
     * const ShiftLog = await prisma.shiftLog.create({
     *   data: {
     *     // ... data to create a ShiftLog
     *   }
     * })
     * 
     */
    create<T extends ShiftLogCreateArgs>(args: SelectSubset<T, ShiftLogCreateArgs<ExtArgs>>): Prisma__ShiftLogClient<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShiftLogs.
     * @param {ShiftLogCreateManyArgs} args - Arguments to create many ShiftLogs.
     * @example
     * // Create many ShiftLogs
     * const shiftLog = await prisma.shiftLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftLogCreateManyArgs>(args?: SelectSubset<T, ShiftLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShiftLogs and returns the data saved in the database.
     * @param {ShiftLogCreateManyAndReturnArgs} args - Arguments to create many ShiftLogs.
     * @example
     * // Create many ShiftLogs
     * const shiftLog = await prisma.shiftLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShiftLogs and only return the `id`
     * const shiftLogWithIdOnly = await prisma.shiftLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShiftLog.
     * @param {ShiftLogDeleteArgs} args - Arguments to delete one ShiftLog.
     * @example
     * // Delete one ShiftLog
     * const ShiftLog = await prisma.shiftLog.delete({
     *   where: {
     *     // ... filter to delete one ShiftLog
     *   }
     * })
     * 
     */
    delete<T extends ShiftLogDeleteArgs>(args: SelectSubset<T, ShiftLogDeleteArgs<ExtArgs>>): Prisma__ShiftLogClient<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShiftLog.
     * @param {ShiftLogUpdateArgs} args - Arguments to update one ShiftLog.
     * @example
     * // Update one ShiftLog
     * const shiftLog = await prisma.shiftLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftLogUpdateArgs>(args: SelectSubset<T, ShiftLogUpdateArgs<ExtArgs>>): Prisma__ShiftLogClient<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShiftLogs.
     * @param {ShiftLogDeleteManyArgs} args - Arguments to filter ShiftLogs to delete.
     * @example
     * // Delete a few ShiftLogs
     * const { count } = await prisma.shiftLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftLogDeleteManyArgs>(args?: SelectSubset<T, ShiftLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftLogs
     * const shiftLog = await prisma.shiftLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftLogUpdateManyArgs>(args: SelectSubset<T, ShiftLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftLogs and returns the data updated in the database.
     * @param {ShiftLogUpdateManyAndReturnArgs} args - Arguments to update many ShiftLogs.
     * @example
     * // Update many ShiftLogs
     * const shiftLog = await prisma.shiftLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShiftLogs and only return the `id`
     * const shiftLogWithIdOnly = await prisma.shiftLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShiftLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShiftLog.
     * @param {ShiftLogUpsertArgs} args - Arguments to update or create a ShiftLog.
     * @example
     * // Update or create a ShiftLog
     * const shiftLog = await prisma.shiftLog.upsert({
     *   create: {
     *     // ... data to create a ShiftLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftLog we want to update
     *   }
     * })
     */
    upsert<T extends ShiftLogUpsertArgs>(args: SelectSubset<T, ShiftLogUpsertArgs<ExtArgs>>): Prisma__ShiftLogClient<$Result.GetResult<Prisma.$ShiftLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShiftLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftLogCountArgs} args - Arguments to filter ShiftLogs to count.
     * @example
     * // Count the number of ShiftLogs
     * const count = await prisma.shiftLog.count({
     *   where: {
     *     // ... the filter for the ShiftLogs we want to count
     *   }
     * })
    **/
    count<T extends ShiftLogCountArgs>(
      args?: Subset<T, ShiftLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftLogAggregateArgs>(args: Subset<T, ShiftLogAggregateArgs>): Prisma.PrismaPromise<GetShiftLogAggregateType<T>>

    /**
     * Group by ShiftLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftLogGroupByArgs['orderBy'] }
        : { orderBy?: ShiftLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftLog model
   */
  readonly fields: ShiftLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShiftLog model
   */
  interface ShiftLogFieldRefs {
    readonly id: FieldRef<"ShiftLog", 'String'>
    readonly userId: FieldRef<"ShiftLog", 'String'>
    readonly type: FieldRef<"ShiftLog", 'ShiftType'>
    readonly timestamp: FieldRef<"ShiftLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShiftLog findUnique
   */
  export type ShiftLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
    /**
     * Filter, which ShiftLog to fetch.
     */
    where: ShiftLogWhereUniqueInput
  }

  /**
   * ShiftLog findUniqueOrThrow
   */
  export type ShiftLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
    /**
     * Filter, which ShiftLog to fetch.
     */
    where: ShiftLogWhereUniqueInput
  }

  /**
   * ShiftLog findFirst
   */
  export type ShiftLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
    /**
     * Filter, which ShiftLog to fetch.
     */
    where?: ShiftLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftLogs to fetch.
     */
    orderBy?: ShiftLogOrderByWithRelationInput | ShiftLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftLogs.
     */
    cursor?: ShiftLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftLogs.
     */
    distinct?: ShiftLogScalarFieldEnum | ShiftLogScalarFieldEnum[]
  }

  /**
   * ShiftLog findFirstOrThrow
   */
  export type ShiftLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
    /**
     * Filter, which ShiftLog to fetch.
     */
    where?: ShiftLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftLogs to fetch.
     */
    orderBy?: ShiftLogOrderByWithRelationInput | ShiftLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftLogs.
     */
    cursor?: ShiftLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftLogs.
     */
    distinct?: ShiftLogScalarFieldEnum | ShiftLogScalarFieldEnum[]
  }

  /**
   * ShiftLog findMany
   */
  export type ShiftLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
    /**
     * Filter, which ShiftLogs to fetch.
     */
    where?: ShiftLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftLogs to fetch.
     */
    orderBy?: ShiftLogOrderByWithRelationInput | ShiftLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftLogs.
     */
    cursor?: ShiftLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftLogs.
     */
    skip?: number
    distinct?: ShiftLogScalarFieldEnum | ShiftLogScalarFieldEnum[]
  }

  /**
   * ShiftLog create
   */
  export type ShiftLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftLog.
     */
    data: XOR<ShiftLogCreateInput, ShiftLogUncheckedCreateInput>
  }

  /**
   * ShiftLog createMany
   */
  export type ShiftLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShiftLogs.
     */
    data: ShiftLogCreateManyInput | ShiftLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShiftLog createManyAndReturn
   */
  export type ShiftLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * The data used to create many ShiftLogs.
     */
    data: ShiftLogCreateManyInput | ShiftLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftLog update
   */
  export type ShiftLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftLog.
     */
    data: XOR<ShiftLogUpdateInput, ShiftLogUncheckedUpdateInput>
    /**
     * Choose, which ShiftLog to update.
     */
    where: ShiftLogWhereUniqueInput
  }

  /**
   * ShiftLog updateMany
   */
  export type ShiftLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftLogs.
     */
    data: XOR<ShiftLogUpdateManyMutationInput, ShiftLogUncheckedUpdateManyInput>
    /**
     * Filter which ShiftLogs to update
     */
    where?: ShiftLogWhereInput
    /**
     * Limit how many ShiftLogs to update.
     */
    limit?: number
  }

  /**
   * ShiftLog updateManyAndReturn
   */
  export type ShiftLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * The data used to update ShiftLogs.
     */
    data: XOR<ShiftLogUpdateManyMutationInput, ShiftLogUncheckedUpdateManyInput>
    /**
     * Filter which ShiftLogs to update
     */
    where?: ShiftLogWhereInput
    /**
     * Limit how many ShiftLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShiftLog upsert
   */
  export type ShiftLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftLog to update in case it exists.
     */
    where: ShiftLogWhereUniqueInput
    /**
     * In case the ShiftLog found by the `where` argument doesn't exist, create a new ShiftLog with this data.
     */
    create: XOR<ShiftLogCreateInput, ShiftLogUncheckedCreateInput>
    /**
     * In case the ShiftLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftLogUpdateInput, ShiftLogUncheckedUpdateInput>
  }

  /**
   * ShiftLog delete
   */
  export type ShiftLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
    /**
     * Filter which ShiftLog to delete.
     */
    where: ShiftLogWhereUniqueInput
  }

  /**
   * ShiftLog deleteMany
   */
  export type ShiftLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftLogs to delete
     */
    where?: ShiftLogWhereInput
    /**
     * Limit how many ShiftLogs to delete.
     */
    limit?: number
  }

  /**
   * ShiftLog without action
   */
  export type ShiftLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftLog
     */
    select?: ShiftLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShiftLog
     */
    omit?: ShiftLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftLogInclude<ExtArgs> | null
  }


  /**
   * Model Novedad
   */

  export type AggregateNovedad = {
    _count: NovedadCountAggregateOutputType | null
    _min: NovedadMinAggregateOutputType | null
    _max: NovedadMaxAggregateOutputType | null
  }

  export type NovedadMinAggregateOutputType = {
    id: string | null
    userId: string | null
    timestamp: Date | null
    description: string | null
    entryMethod: string | null
    createdAt: Date | null
  }

  export type NovedadMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    timestamp: Date | null
    description: string | null
    entryMethod: string | null
    createdAt: Date | null
  }

  export type NovedadCountAggregateOutputType = {
    id: number
    userId: number
    timestamp: number
    description: number
    entryMethod: number
    createdAt: number
    _all: number
  }


  export type NovedadMinAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    description?: true
    entryMethod?: true
    createdAt?: true
  }

  export type NovedadMaxAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    description?: true
    entryMethod?: true
    createdAt?: true
  }

  export type NovedadCountAggregateInputType = {
    id?: true
    userId?: true
    timestamp?: true
    description?: true
    entryMethod?: true
    createdAt?: true
    _all?: true
  }

  export type NovedadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Novedad to aggregate.
     */
    where?: NovedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novedads to fetch.
     */
    orderBy?: NovedadOrderByWithRelationInput | NovedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NovedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Novedads
    **/
    _count?: true | NovedadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NovedadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NovedadMaxAggregateInputType
  }

  export type GetNovedadAggregateType<T extends NovedadAggregateArgs> = {
        [P in keyof T & keyof AggregateNovedad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNovedad[P]>
      : GetScalarType<T[P], AggregateNovedad[P]>
  }




  export type NovedadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NovedadWhereInput
    orderBy?: NovedadOrderByWithAggregationInput | NovedadOrderByWithAggregationInput[]
    by: NovedadScalarFieldEnum[] | NovedadScalarFieldEnum
    having?: NovedadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NovedadCountAggregateInputType | true
    _min?: NovedadMinAggregateInputType
    _max?: NovedadMaxAggregateInputType
  }

  export type NovedadGroupByOutputType = {
    id: string
    userId: string
    timestamp: Date
    description: string
    entryMethod: string
    createdAt: Date
    _count: NovedadCountAggregateOutputType | null
    _min: NovedadMinAggregateOutputType | null
    _max: NovedadMaxAggregateOutputType | null
  }

  type GetNovedadGroupByPayload<T extends NovedadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NovedadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NovedadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NovedadGroupByOutputType[P]>
            : GetScalarType<T[P], NovedadGroupByOutputType[P]>
        }
      >
    >


  export type NovedadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timestamp?: boolean
    description?: boolean
    entryMethod?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["novedad"]>

  export type NovedadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timestamp?: boolean
    description?: boolean
    entryMethod?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["novedad"]>

  export type NovedadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timestamp?: boolean
    description?: boolean
    entryMethod?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["novedad"]>

  export type NovedadSelectScalar = {
    id?: boolean
    userId?: boolean
    timestamp?: boolean
    description?: boolean
    entryMethod?: boolean
    createdAt?: boolean
  }

  export type NovedadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "timestamp" | "description" | "entryMethod" | "createdAt", ExtArgs["result"]["novedad"]>
  export type NovedadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NovedadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NovedadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NovedadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Novedad"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      timestamp: Date
      description: string
      entryMethod: string
      createdAt: Date
    }, ExtArgs["result"]["novedad"]>
    composites: {}
  }

  type NovedadGetPayload<S extends boolean | null | undefined | NovedadDefaultArgs> = $Result.GetResult<Prisma.$NovedadPayload, S>

  type NovedadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NovedadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NovedadCountAggregateInputType | true
    }

  export interface NovedadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Novedad'], meta: { name: 'Novedad' } }
    /**
     * Find zero or one Novedad that matches the filter.
     * @param {NovedadFindUniqueArgs} args - Arguments to find a Novedad
     * @example
     * // Get one Novedad
     * const novedad = await prisma.novedad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NovedadFindUniqueArgs>(args: SelectSubset<T, NovedadFindUniqueArgs<ExtArgs>>): Prisma__NovedadClient<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Novedad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NovedadFindUniqueOrThrowArgs} args - Arguments to find a Novedad
     * @example
     * // Get one Novedad
     * const novedad = await prisma.novedad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NovedadFindUniqueOrThrowArgs>(args: SelectSubset<T, NovedadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NovedadClient<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Novedad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovedadFindFirstArgs} args - Arguments to find a Novedad
     * @example
     * // Get one Novedad
     * const novedad = await prisma.novedad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NovedadFindFirstArgs>(args?: SelectSubset<T, NovedadFindFirstArgs<ExtArgs>>): Prisma__NovedadClient<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Novedad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovedadFindFirstOrThrowArgs} args - Arguments to find a Novedad
     * @example
     * // Get one Novedad
     * const novedad = await prisma.novedad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NovedadFindFirstOrThrowArgs>(args?: SelectSubset<T, NovedadFindFirstOrThrowArgs<ExtArgs>>): Prisma__NovedadClient<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Novedads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovedadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Novedads
     * const novedads = await prisma.novedad.findMany()
     * 
     * // Get first 10 Novedads
     * const novedads = await prisma.novedad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const novedadWithIdOnly = await prisma.novedad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NovedadFindManyArgs>(args?: SelectSubset<T, NovedadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Novedad.
     * @param {NovedadCreateArgs} args - Arguments to create a Novedad.
     * @example
     * // Create one Novedad
     * const Novedad = await prisma.novedad.create({
     *   data: {
     *     // ... data to create a Novedad
     *   }
     * })
     * 
     */
    create<T extends NovedadCreateArgs>(args: SelectSubset<T, NovedadCreateArgs<ExtArgs>>): Prisma__NovedadClient<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Novedads.
     * @param {NovedadCreateManyArgs} args - Arguments to create many Novedads.
     * @example
     * // Create many Novedads
     * const novedad = await prisma.novedad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NovedadCreateManyArgs>(args?: SelectSubset<T, NovedadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Novedads and returns the data saved in the database.
     * @param {NovedadCreateManyAndReturnArgs} args - Arguments to create many Novedads.
     * @example
     * // Create many Novedads
     * const novedad = await prisma.novedad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Novedads and only return the `id`
     * const novedadWithIdOnly = await prisma.novedad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NovedadCreateManyAndReturnArgs>(args?: SelectSubset<T, NovedadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Novedad.
     * @param {NovedadDeleteArgs} args - Arguments to delete one Novedad.
     * @example
     * // Delete one Novedad
     * const Novedad = await prisma.novedad.delete({
     *   where: {
     *     // ... filter to delete one Novedad
     *   }
     * })
     * 
     */
    delete<T extends NovedadDeleteArgs>(args: SelectSubset<T, NovedadDeleteArgs<ExtArgs>>): Prisma__NovedadClient<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Novedad.
     * @param {NovedadUpdateArgs} args - Arguments to update one Novedad.
     * @example
     * // Update one Novedad
     * const novedad = await prisma.novedad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NovedadUpdateArgs>(args: SelectSubset<T, NovedadUpdateArgs<ExtArgs>>): Prisma__NovedadClient<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Novedads.
     * @param {NovedadDeleteManyArgs} args - Arguments to filter Novedads to delete.
     * @example
     * // Delete a few Novedads
     * const { count } = await prisma.novedad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NovedadDeleteManyArgs>(args?: SelectSubset<T, NovedadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovedadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Novedads
     * const novedad = await prisma.novedad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NovedadUpdateManyArgs>(args: SelectSubset<T, NovedadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Novedads and returns the data updated in the database.
     * @param {NovedadUpdateManyAndReturnArgs} args - Arguments to update many Novedads.
     * @example
     * // Update many Novedads
     * const novedad = await prisma.novedad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Novedads and only return the `id`
     * const novedadWithIdOnly = await prisma.novedad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NovedadUpdateManyAndReturnArgs>(args: SelectSubset<T, NovedadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Novedad.
     * @param {NovedadUpsertArgs} args - Arguments to update or create a Novedad.
     * @example
     * // Update or create a Novedad
     * const novedad = await prisma.novedad.upsert({
     *   create: {
     *     // ... data to create a Novedad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Novedad we want to update
     *   }
     * })
     */
    upsert<T extends NovedadUpsertArgs>(args: SelectSubset<T, NovedadUpsertArgs<ExtArgs>>): Prisma__NovedadClient<$Result.GetResult<Prisma.$NovedadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Novedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovedadCountArgs} args - Arguments to filter Novedads to count.
     * @example
     * // Count the number of Novedads
     * const count = await prisma.novedad.count({
     *   where: {
     *     // ... the filter for the Novedads we want to count
     *   }
     * })
    **/
    count<T extends NovedadCountArgs>(
      args?: Subset<T, NovedadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NovedadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Novedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovedadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NovedadAggregateArgs>(args: Subset<T, NovedadAggregateArgs>): Prisma.PrismaPromise<GetNovedadAggregateType<T>>

    /**
     * Group by Novedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NovedadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NovedadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NovedadGroupByArgs['orderBy'] }
        : { orderBy?: NovedadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NovedadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNovedadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Novedad model
   */
  readonly fields: NovedadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Novedad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NovedadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Novedad model
   */
  interface NovedadFieldRefs {
    readonly id: FieldRef<"Novedad", 'String'>
    readonly userId: FieldRef<"Novedad", 'String'>
    readonly timestamp: FieldRef<"Novedad", 'DateTime'>
    readonly description: FieldRef<"Novedad", 'String'>
    readonly entryMethod: FieldRef<"Novedad", 'String'>
    readonly createdAt: FieldRef<"Novedad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Novedad findUnique
   */
  export type NovedadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
    /**
     * Filter, which Novedad to fetch.
     */
    where: NovedadWhereUniqueInput
  }

  /**
   * Novedad findUniqueOrThrow
   */
  export type NovedadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
    /**
     * Filter, which Novedad to fetch.
     */
    where: NovedadWhereUniqueInput
  }

  /**
   * Novedad findFirst
   */
  export type NovedadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
    /**
     * Filter, which Novedad to fetch.
     */
    where?: NovedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novedads to fetch.
     */
    orderBy?: NovedadOrderByWithRelationInput | NovedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Novedads.
     */
    cursor?: NovedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Novedads.
     */
    distinct?: NovedadScalarFieldEnum | NovedadScalarFieldEnum[]
  }

  /**
   * Novedad findFirstOrThrow
   */
  export type NovedadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
    /**
     * Filter, which Novedad to fetch.
     */
    where?: NovedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novedads to fetch.
     */
    orderBy?: NovedadOrderByWithRelationInput | NovedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Novedads.
     */
    cursor?: NovedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Novedads.
     */
    distinct?: NovedadScalarFieldEnum | NovedadScalarFieldEnum[]
  }

  /**
   * Novedad findMany
   */
  export type NovedadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
    /**
     * Filter, which Novedads to fetch.
     */
    where?: NovedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Novedads to fetch.
     */
    orderBy?: NovedadOrderByWithRelationInput | NovedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Novedads.
     */
    cursor?: NovedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Novedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Novedads.
     */
    skip?: number
    distinct?: NovedadScalarFieldEnum | NovedadScalarFieldEnum[]
  }

  /**
   * Novedad create
   */
  export type NovedadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
    /**
     * The data needed to create a Novedad.
     */
    data: XOR<NovedadCreateInput, NovedadUncheckedCreateInput>
  }

  /**
   * Novedad createMany
   */
  export type NovedadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Novedads.
     */
    data: NovedadCreateManyInput | NovedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Novedad createManyAndReturn
   */
  export type NovedadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * The data used to create many Novedads.
     */
    data: NovedadCreateManyInput | NovedadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Novedad update
   */
  export type NovedadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
    /**
     * The data needed to update a Novedad.
     */
    data: XOR<NovedadUpdateInput, NovedadUncheckedUpdateInput>
    /**
     * Choose, which Novedad to update.
     */
    where: NovedadWhereUniqueInput
  }

  /**
   * Novedad updateMany
   */
  export type NovedadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Novedads.
     */
    data: XOR<NovedadUpdateManyMutationInput, NovedadUncheckedUpdateManyInput>
    /**
     * Filter which Novedads to update
     */
    where?: NovedadWhereInput
    /**
     * Limit how many Novedads to update.
     */
    limit?: number
  }

  /**
   * Novedad updateManyAndReturn
   */
  export type NovedadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * The data used to update Novedads.
     */
    data: XOR<NovedadUpdateManyMutationInput, NovedadUncheckedUpdateManyInput>
    /**
     * Filter which Novedads to update
     */
    where?: NovedadWhereInput
    /**
     * Limit how many Novedads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Novedad upsert
   */
  export type NovedadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
    /**
     * The filter to search for the Novedad to update in case it exists.
     */
    where: NovedadWhereUniqueInput
    /**
     * In case the Novedad found by the `where` argument doesn't exist, create a new Novedad with this data.
     */
    create: XOR<NovedadCreateInput, NovedadUncheckedCreateInput>
    /**
     * In case the Novedad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NovedadUpdateInput, NovedadUncheckedUpdateInput>
  }

  /**
   * Novedad delete
   */
  export type NovedadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
    /**
     * Filter which Novedad to delete.
     */
    where: NovedadWhereUniqueInput
  }

  /**
   * Novedad deleteMany
   */
  export type NovedadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Novedads to delete
     */
    where?: NovedadWhereInput
    /**
     * Limit how many Novedads to delete.
     */
    limit?: number
  }

  /**
   * Novedad without action
   */
  export type NovedadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Novedad
     */
    select?: NovedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Novedad
     */
    omit?: NovedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NovedadInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firebaseUid: 'firebaseUid',
    email: 'email',
    name: 'name',
    role: 'role',
    status: 'status',
    assignedBy: 'assignedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CredentialRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    desiredRole: 'desiredRole',
    reason: 'reason',
    status: 'status',
    submittedAt: 'submittedAt'
  };

  export type CredentialRequestScalarFieldEnum = (typeof CredentialRequestScalarFieldEnum)[keyof typeof CredentialRequestScalarFieldEnum]


  export const ShiftLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    timestamp: 'timestamp'
  };

  export type ShiftLogScalarFieldEnum = (typeof ShiftLogScalarFieldEnum)[keyof typeof ShiftLogScalarFieldEnum]


  export const NovedadScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    timestamp: 'timestamp',
    description: 'description',
    entryMethod: 'entryMethod',
    createdAt: 'createdAt'
  };

  export type NovedadScalarFieldEnum = (typeof NovedadScalarFieldEnum)[keyof typeof NovedadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ShiftType'
   */
  export type EnumShiftTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftType'>
    


  /**
   * Reference to a field of type 'ShiftType[]'
   */
  export type ListEnumShiftTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShiftType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firebaseUid?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    assignedBy?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    requests?: CredentialRequestListRelationFilter
    shiftLogs?: ShiftLogListRelationFilter
    novedades?: NovedadListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    assignedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requests?: CredentialRequestOrderByRelationAggregateInput
    shiftLogs?: ShiftLogOrderByRelationAggregateInput
    novedades?: NovedadOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    firebaseUid?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    assignedBy?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    requests?: CredentialRequestListRelationFilter
    shiftLogs?: ShiftLogListRelationFilter
    novedades?: NovedadListRelationFilter
  }, "id" | "firebaseUid" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    assignedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firebaseUid?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    assignedBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CredentialRequestWhereInput = {
    AND?: CredentialRequestWhereInput | CredentialRequestWhereInput[]
    OR?: CredentialRequestWhereInput[]
    NOT?: CredentialRequestWhereInput | CredentialRequestWhereInput[]
    id?: StringFilter<"CredentialRequest"> | string
    userId?: StringFilter<"CredentialRequest"> | string
    desiredRole?: EnumRoleFilter<"CredentialRequest"> | $Enums.Role
    reason?: StringNullableFilter<"CredentialRequest"> | string | null
    status?: EnumStatusFilter<"CredentialRequest"> | $Enums.Status
    submittedAt?: DateTimeFilter<"CredentialRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CredentialRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    desiredRole?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CredentialRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CredentialRequestWhereInput | CredentialRequestWhereInput[]
    OR?: CredentialRequestWhereInput[]
    NOT?: CredentialRequestWhereInput | CredentialRequestWhereInput[]
    userId?: StringFilter<"CredentialRequest"> | string
    desiredRole?: EnumRoleFilter<"CredentialRequest"> | $Enums.Role
    reason?: StringNullableFilter<"CredentialRequest"> | string | null
    status?: EnumStatusFilter<"CredentialRequest"> | $Enums.Status
    submittedAt?: DateTimeFilter<"CredentialRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CredentialRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    desiredRole?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    _count?: CredentialRequestCountOrderByAggregateInput
    _max?: CredentialRequestMaxOrderByAggregateInput
    _min?: CredentialRequestMinOrderByAggregateInput
  }

  export type CredentialRequestScalarWhereWithAggregatesInput = {
    AND?: CredentialRequestScalarWhereWithAggregatesInput | CredentialRequestScalarWhereWithAggregatesInput[]
    OR?: CredentialRequestScalarWhereWithAggregatesInput[]
    NOT?: CredentialRequestScalarWhereWithAggregatesInput | CredentialRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CredentialRequest"> | string
    userId?: StringWithAggregatesFilter<"CredentialRequest"> | string
    desiredRole?: EnumRoleWithAggregatesFilter<"CredentialRequest"> | $Enums.Role
    reason?: StringNullableWithAggregatesFilter<"CredentialRequest"> | string | null
    status?: EnumStatusWithAggregatesFilter<"CredentialRequest"> | $Enums.Status
    submittedAt?: DateTimeWithAggregatesFilter<"CredentialRequest"> | Date | string
  }

  export type ShiftLogWhereInput = {
    AND?: ShiftLogWhereInput | ShiftLogWhereInput[]
    OR?: ShiftLogWhereInput[]
    NOT?: ShiftLogWhereInput | ShiftLogWhereInput[]
    id?: StringFilter<"ShiftLog"> | string
    userId?: StringFilter<"ShiftLog"> | string
    type?: EnumShiftTypeFilter<"ShiftLog"> | $Enums.ShiftType
    timestamp?: DateTimeFilter<"ShiftLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ShiftLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ShiftLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftLogWhereInput | ShiftLogWhereInput[]
    OR?: ShiftLogWhereInput[]
    NOT?: ShiftLogWhereInput | ShiftLogWhereInput[]
    userId?: StringFilter<"ShiftLog"> | string
    type?: EnumShiftTypeFilter<"ShiftLog"> | $Enums.ShiftType
    timestamp?: DateTimeFilter<"ShiftLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ShiftLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    _count?: ShiftLogCountOrderByAggregateInput
    _max?: ShiftLogMaxOrderByAggregateInput
    _min?: ShiftLogMinOrderByAggregateInput
  }

  export type ShiftLogScalarWhereWithAggregatesInput = {
    AND?: ShiftLogScalarWhereWithAggregatesInput | ShiftLogScalarWhereWithAggregatesInput[]
    OR?: ShiftLogScalarWhereWithAggregatesInput[]
    NOT?: ShiftLogScalarWhereWithAggregatesInput | ShiftLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftLog"> | string
    userId?: StringWithAggregatesFilter<"ShiftLog"> | string
    type?: EnumShiftTypeWithAggregatesFilter<"ShiftLog"> | $Enums.ShiftType
    timestamp?: DateTimeWithAggregatesFilter<"ShiftLog"> | Date | string
  }

  export type NovedadWhereInput = {
    AND?: NovedadWhereInput | NovedadWhereInput[]
    OR?: NovedadWhereInput[]
    NOT?: NovedadWhereInput | NovedadWhereInput[]
    id?: StringFilter<"Novedad"> | string
    userId?: StringFilter<"Novedad"> | string
    timestamp?: DateTimeFilter<"Novedad"> | Date | string
    description?: StringFilter<"Novedad"> | string
    entryMethod?: StringFilter<"Novedad"> | string
    createdAt?: DateTimeFilter<"Novedad"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NovedadOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    description?: SortOrder
    entryMethod?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NovedadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NovedadWhereInput | NovedadWhereInput[]
    OR?: NovedadWhereInput[]
    NOT?: NovedadWhereInput | NovedadWhereInput[]
    userId?: StringFilter<"Novedad"> | string
    timestamp?: DateTimeFilter<"Novedad"> | Date | string
    description?: StringFilter<"Novedad"> | string
    entryMethod?: StringFilter<"Novedad"> | string
    createdAt?: DateTimeFilter<"Novedad"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NovedadOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    description?: SortOrder
    entryMethod?: SortOrder
    createdAt?: SortOrder
    _count?: NovedadCountOrderByAggregateInput
    _max?: NovedadMaxOrderByAggregateInput
    _min?: NovedadMinOrderByAggregateInput
  }

  export type NovedadScalarWhereWithAggregatesInput = {
    AND?: NovedadScalarWhereWithAggregatesInput | NovedadScalarWhereWithAggregatesInput[]
    OR?: NovedadScalarWhereWithAggregatesInput[]
    NOT?: NovedadScalarWhereWithAggregatesInput | NovedadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Novedad"> | string
    userId?: StringWithAggregatesFilter<"Novedad"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Novedad"> | Date | string
    description?: StringWithAggregatesFilter<"Novedad"> | string
    entryMethod?: StringWithAggregatesFilter<"Novedad"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Novedad"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firebaseUid: string
    email: string
    name: string
    role?: $Enums.Role
    status?: $Enums.Status
    assignedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: CredentialRequestCreateNestedManyWithoutUserInput
    shiftLogs?: ShiftLogCreateNestedManyWithoutUserInput
    novedades?: NovedadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firebaseUid: string
    email: string
    name: string
    role?: $Enums.Role
    status?: $Enums.Status
    assignedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: CredentialRequestUncheckedCreateNestedManyWithoutUserInput
    shiftLogs?: ShiftLogUncheckedCreateNestedManyWithoutUserInput
    novedades?: NovedadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: CredentialRequestUpdateManyWithoutUserNestedInput
    shiftLogs?: ShiftLogUpdateManyWithoutUserNestedInput
    novedades?: NovedadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: CredentialRequestUncheckedUpdateManyWithoutUserNestedInput
    shiftLogs?: ShiftLogUncheckedUpdateManyWithoutUserNestedInput
    novedades?: NovedadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firebaseUid: string
    email: string
    name: string
    role?: $Enums.Role
    status?: $Enums.Status
    assignedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialRequestCreateInput = {
    id?: string
    desiredRole: $Enums.Role
    reason?: string | null
    status?: $Enums.Status
    submittedAt?: Date | string
    user: UserCreateNestedOneWithoutRequestsInput
  }

  export type CredentialRequestUncheckedCreateInput = {
    id?: string
    userId: string
    desiredRole: $Enums.Role
    reason?: string | null
    status?: $Enums.Status
    submittedAt?: Date | string
  }

  export type CredentialRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    desiredRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type CredentialRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    desiredRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialRequestCreateManyInput = {
    id?: string
    userId: string
    desiredRole: $Enums.Role
    reason?: string | null
    status?: $Enums.Status
    submittedAt?: Date | string
  }

  export type CredentialRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    desiredRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    desiredRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftLogCreateInput = {
    id?: string
    type: $Enums.ShiftType
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutShiftLogsInput
  }

  export type ShiftLogUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.ShiftType
    timestamp?: Date | string
  }

  export type ShiftLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutShiftLogsNestedInput
  }

  export type ShiftLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftLogCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.ShiftType
    timestamp?: Date | string
  }

  export type ShiftLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NovedadCreateInput = {
    id?: string
    timestamp?: Date | string
    description: string
    entryMethod: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNovedadesInput
  }

  export type NovedadUncheckedCreateInput = {
    id?: string
    userId: string
    timestamp?: Date | string
    description: string
    entryMethod: string
    createdAt?: Date | string
  }

  export type NovedadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    entryMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNovedadesNestedInput
  }

  export type NovedadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    entryMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NovedadCreateManyInput = {
    id?: string
    userId: string
    timestamp?: Date | string
    description: string
    entryMethod: string
    createdAt?: Date | string
  }

  export type NovedadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    entryMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NovedadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    entryMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CredentialRequestListRelationFilter = {
    every?: CredentialRequestWhereInput
    some?: CredentialRequestWhereInput
    none?: CredentialRequestWhereInput
  }

  export type ShiftLogListRelationFilter = {
    every?: ShiftLogWhereInput
    some?: ShiftLogWhereInput
    none?: ShiftLogWhereInput
  }

  export type NovedadListRelationFilter = {
    every?: NovedadWhereInput
    some?: NovedadWhereInput
    none?: NovedadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CredentialRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NovedadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    assignedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    assignedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firebaseUid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    status?: SortOrder
    assignedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CredentialRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    desiredRole?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type CredentialRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    desiredRole?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type CredentialRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    desiredRole?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
  }

  export type EnumShiftTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeFilter<$PrismaModel> | $Enums.ShiftType
  }

  export type ShiftLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type ShiftLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type ShiftLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumShiftTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShiftType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftTypeFilter<$PrismaModel>
    _max?: NestedEnumShiftTypeFilter<$PrismaModel>
  }

  export type NovedadCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    description?: SortOrder
    entryMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type NovedadMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    description?: SortOrder
    entryMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type NovedadMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    description?: SortOrder
    entryMethod?: SortOrder
    createdAt?: SortOrder
  }

  export type CredentialRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<CredentialRequestCreateWithoutUserInput, CredentialRequestUncheckedCreateWithoutUserInput> | CredentialRequestCreateWithoutUserInput[] | CredentialRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialRequestCreateOrConnectWithoutUserInput | CredentialRequestCreateOrConnectWithoutUserInput[]
    createMany?: CredentialRequestCreateManyUserInputEnvelope
    connect?: CredentialRequestWhereUniqueInput | CredentialRequestWhereUniqueInput[]
  }

  export type ShiftLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftLogCreateWithoutUserInput, ShiftLogUncheckedCreateWithoutUserInput> | ShiftLogCreateWithoutUserInput[] | ShiftLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftLogCreateOrConnectWithoutUserInput | ShiftLogCreateOrConnectWithoutUserInput[]
    createMany?: ShiftLogCreateManyUserInputEnvelope
    connect?: ShiftLogWhereUniqueInput | ShiftLogWhereUniqueInput[]
  }

  export type NovedadCreateNestedManyWithoutUserInput = {
    create?: XOR<NovedadCreateWithoutUserInput, NovedadUncheckedCreateWithoutUserInput> | NovedadCreateWithoutUserInput[] | NovedadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NovedadCreateOrConnectWithoutUserInput | NovedadCreateOrConnectWithoutUserInput[]
    createMany?: NovedadCreateManyUserInputEnvelope
    connect?: NovedadWhereUniqueInput | NovedadWhereUniqueInput[]
  }

  export type CredentialRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CredentialRequestCreateWithoutUserInput, CredentialRequestUncheckedCreateWithoutUserInput> | CredentialRequestCreateWithoutUserInput[] | CredentialRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialRequestCreateOrConnectWithoutUserInput | CredentialRequestCreateOrConnectWithoutUserInput[]
    createMany?: CredentialRequestCreateManyUserInputEnvelope
    connect?: CredentialRequestWhereUniqueInput | CredentialRequestWhereUniqueInput[]
  }

  export type ShiftLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftLogCreateWithoutUserInput, ShiftLogUncheckedCreateWithoutUserInput> | ShiftLogCreateWithoutUserInput[] | ShiftLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftLogCreateOrConnectWithoutUserInput | ShiftLogCreateOrConnectWithoutUserInput[]
    createMany?: ShiftLogCreateManyUserInputEnvelope
    connect?: ShiftLogWhereUniqueInput | ShiftLogWhereUniqueInput[]
  }

  export type NovedadUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NovedadCreateWithoutUserInput, NovedadUncheckedCreateWithoutUserInput> | NovedadCreateWithoutUserInput[] | NovedadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NovedadCreateOrConnectWithoutUserInput | NovedadCreateOrConnectWithoutUserInput[]
    createMany?: NovedadCreateManyUserInputEnvelope
    connect?: NovedadWhereUniqueInput | NovedadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CredentialRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<CredentialRequestCreateWithoutUserInput, CredentialRequestUncheckedCreateWithoutUserInput> | CredentialRequestCreateWithoutUserInput[] | CredentialRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialRequestCreateOrConnectWithoutUserInput | CredentialRequestCreateOrConnectWithoutUserInput[]
    upsert?: CredentialRequestUpsertWithWhereUniqueWithoutUserInput | CredentialRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CredentialRequestCreateManyUserInputEnvelope
    set?: CredentialRequestWhereUniqueInput | CredentialRequestWhereUniqueInput[]
    disconnect?: CredentialRequestWhereUniqueInput | CredentialRequestWhereUniqueInput[]
    delete?: CredentialRequestWhereUniqueInput | CredentialRequestWhereUniqueInput[]
    connect?: CredentialRequestWhereUniqueInput | CredentialRequestWhereUniqueInput[]
    update?: CredentialRequestUpdateWithWhereUniqueWithoutUserInput | CredentialRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CredentialRequestUpdateManyWithWhereWithoutUserInput | CredentialRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CredentialRequestScalarWhereInput | CredentialRequestScalarWhereInput[]
  }

  export type ShiftLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftLogCreateWithoutUserInput, ShiftLogUncheckedCreateWithoutUserInput> | ShiftLogCreateWithoutUserInput[] | ShiftLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftLogCreateOrConnectWithoutUserInput | ShiftLogCreateOrConnectWithoutUserInput[]
    upsert?: ShiftLogUpsertWithWhereUniqueWithoutUserInput | ShiftLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftLogCreateManyUserInputEnvelope
    set?: ShiftLogWhereUniqueInput | ShiftLogWhereUniqueInput[]
    disconnect?: ShiftLogWhereUniqueInput | ShiftLogWhereUniqueInput[]
    delete?: ShiftLogWhereUniqueInput | ShiftLogWhereUniqueInput[]
    connect?: ShiftLogWhereUniqueInput | ShiftLogWhereUniqueInput[]
    update?: ShiftLogUpdateWithWhereUniqueWithoutUserInput | ShiftLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftLogUpdateManyWithWhereWithoutUserInput | ShiftLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftLogScalarWhereInput | ShiftLogScalarWhereInput[]
  }

  export type NovedadUpdateManyWithoutUserNestedInput = {
    create?: XOR<NovedadCreateWithoutUserInput, NovedadUncheckedCreateWithoutUserInput> | NovedadCreateWithoutUserInput[] | NovedadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NovedadCreateOrConnectWithoutUserInput | NovedadCreateOrConnectWithoutUserInput[]
    upsert?: NovedadUpsertWithWhereUniqueWithoutUserInput | NovedadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NovedadCreateManyUserInputEnvelope
    set?: NovedadWhereUniqueInput | NovedadWhereUniqueInput[]
    disconnect?: NovedadWhereUniqueInput | NovedadWhereUniqueInput[]
    delete?: NovedadWhereUniqueInput | NovedadWhereUniqueInput[]
    connect?: NovedadWhereUniqueInput | NovedadWhereUniqueInput[]
    update?: NovedadUpdateWithWhereUniqueWithoutUserInput | NovedadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NovedadUpdateManyWithWhereWithoutUserInput | NovedadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NovedadScalarWhereInput | NovedadScalarWhereInput[]
  }

  export type CredentialRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CredentialRequestCreateWithoutUserInput, CredentialRequestUncheckedCreateWithoutUserInput> | CredentialRequestCreateWithoutUserInput[] | CredentialRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CredentialRequestCreateOrConnectWithoutUserInput | CredentialRequestCreateOrConnectWithoutUserInput[]
    upsert?: CredentialRequestUpsertWithWhereUniqueWithoutUserInput | CredentialRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CredentialRequestCreateManyUserInputEnvelope
    set?: CredentialRequestWhereUniqueInput | CredentialRequestWhereUniqueInput[]
    disconnect?: CredentialRequestWhereUniqueInput | CredentialRequestWhereUniqueInput[]
    delete?: CredentialRequestWhereUniqueInput | CredentialRequestWhereUniqueInput[]
    connect?: CredentialRequestWhereUniqueInput | CredentialRequestWhereUniqueInput[]
    update?: CredentialRequestUpdateWithWhereUniqueWithoutUserInput | CredentialRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CredentialRequestUpdateManyWithWhereWithoutUserInput | CredentialRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CredentialRequestScalarWhereInput | CredentialRequestScalarWhereInput[]
  }

  export type ShiftLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftLogCreateWithoutUserInput, ShiftLogUncheckedCreateWithoutUserInput> | ShiftLogCreateWithoutUserInput[] | ShiftLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftLogCreateOrConnectWithoutUserInput | ShiftLogCreateOrConnectWithoutUserInput[]
    upsert?: ShiftLogUpsertWithWhereUniqueWithoutUserInput | ShiftLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShiftLogCreateManyUserInputEnvelope
    set?: ShiftLogWhereUniqueInput | ShiftLogWhereUniqueInput[]
    disconnect?: ShiftLogWhereUniqueInput | ShiftLogWhereUniqueInput[]
    delete?: ShiftLogWhereUniqueInput | ShiftLogWhereUniqueInput[]
    connect?: ShiftLogWhereUniqueInput | ShiftLogWhereUniqueInput[]
    update?: ShiftLogUpdateWithWhereUniqueWithoutUserInput | ShiftLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftLogUpdateManyWithWhereWithoutUserInput | ShiftLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftLogScalarWhereInput | ShiftLogScalarWhereInput[]
  }

  export type NovedadUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NovedadCreateWithoutUserInput, NovedadUncheckedCreateWithoutUserInput> | NovedadCreateWithoutUserInput[] | NovedadUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NovedadCreateOrConnectWithoutUserInput | NovedadCreateOrConnectWithoutUserInput[]
    upsert?: NovedadUpsertWithWhereUniqueWithoutUserInput | NovedadUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NovedadCreateManyUserInputEnvelope
    set?: NovedadWhereUniqueInput | NovedadWhereUniqueInput[]
    disconnect?: NovedadWhereUniqueInput | NovedadWhereUniqueInput[]
    delete?: NovedadWhereUniqueInput | NovedadWhereUniqueInput[]
    connect?: NovedadWhereUniqueInput | NovedadWhereUniqueInput[]
    update?: NovedadUpdateWithWhereUniqueWithoutUserInput | NovedadUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NovedadUpdateManyWithWhereWithoutUserInput | NovedadUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NovedadScalarWhereInput | NovedadScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserCreateNestedOneWithoutShiftLogsInput = {
    create?: XOR<UserCreateWithoutShiftLogsInput, UserUncheckedCreateWithoutShiftLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumShiftTypeFieldUpdateOperationsInput = {
    set?: $Enums.ShiftType
  }

  export type UserUpdateOneRequiredWithoutShiftLogsNestedInput = {
    create?: XOR<UserCreateWithoutShiftLogsInput, UserUncheckedCreateWithoutShiftLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftLogsInput
    upsert?: UserUpsertWithoutShiftLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShiftLogsInput, UserUpdateWithoutShiftLogsInput>, UserUncheckedUpdateWithoutShiftLogsInput>
  }

  export type UserCreateNestedOneWithoutNovedadesInput = {
    create?: XOR<UserCreateWithoutNovedadesInput, UserUncheckedCreateWithoutNovedadesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNovedadesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNovedadesNestedInput = {
    create?: XOR<UserCreateWithoutNovedadesInput, UserUncheckedCreateWithoutNovedadesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNovedadesInput
    upsert?: UserUpsertWithoutNovedadesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNovedadesInput, UserUpdateWithoutNovedadesInput>, UserUncheckedUpdateWithoutNovedadesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumShiftTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeFilter<$PrismaModel> | $Enums.ShiftType
  }

  export type NestedEnumShiftTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShiftType | EnumShiftTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShiftType[] | ListEnumShiftTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShiftTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShiftType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShiftTypeFilter<$PrismaModel>
    _max?: NestedEnumShiftTypeFilter<$PrismaModel>
  }

  export type CredentialRequestCreateWithoutUserInput = {
    id?: string
    desiredRole: $Enums.Role
    reason?: string | null
    status?: $Enums.Status
    submittedAt?: Date | string
  }

  export type CredentialRequestUncheckedCreateWithoutUserInput = {
    id?: string
    desiredRole: $Enums.Role
    reason?: string | null
    status?: $Enums.Status
    submittedAt?: Date | string
  }

  export type CredentialRequestCreateOrConnectWithoutUserInput = {
    where: CredentialRequestWhereUniqueInput
    create: XOR<CredentialRequestCreateWithoutUserInput, CredentialRequestUncheckedCreateWithoutUserInput>
  }

  export type CredentialRequestCreateManyUserInputEnvelope = {
    data: CredentialRequestCreateManyUserInput | CredentialRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShiftLogCreateWithoutUserInput = {
    id?: string
    type: $Enums.ShiftType
    timestamp?: Date | string
  }

  export type ShiftLogUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.ShiftType
    timestamp?: Date | string
  }

  export type ShiftLogCreateOrConnectWithoutUserInput = {
    where: ShiftLogWhereUniqueInput
    create: XOR<ShiftLogCreateWithoutUserInput, ShiftLogUncheckedCreateWithoutUserInput>
  }

  export type ShiftLogCreateManyUserInputEnvelope = {
    data: ShiftLogCreateManyUserInput | ShiftLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NovedadCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    description: string
    entryMethod: string
    createdAt?: Date | string
  }

  export type NovedadUncheckedCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    description: string
    entryMethod: string
    createdAt?: Date | string
  }

  export type NovedadCreateOrConnectWithoutUserInput = {
    where: NovedadWhereUniqueInput
    create: XOR<NovedadCreateWithoutUserInput, NovedadUncheckedCreateWithoutUserInput>
  }

  export type NovedadCreateManyUserInputEnvelope = {
    data: NovedadCreateManyUserInput | NovedadCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CredentialRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: CredentialRequestWhereUniqueInput
    update: XOR<CredentialRequestUpdateWithoutUserInput, CredentialRequestUncheckedUpdateWithoutUserInput>
    create: XOR<CredentialRequestCreateWithoutUserInput, CredentialRequestUncheckedCreateWithoutUserInput>
  }

  export type CredentialRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: CredentialRequestWhereUniqueInput
    data: XOR<CredentialRequestUpdateWithoutUserInput, CredentialRequestUncheckedUpdateWithoutUserInput>
  }

  export type CredentialRequestUpdateManyWithWhereWithoutUserInput = {
    where: CredentialRequestScalarWhereInput
    data: XOR<CredentialRequestUpdateManyMutationInput, CredentialRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type CredentialRequestScalarWhereInput = {
    AND?: CredentialRequestScalarWhereInput | CredentialRequestScalarWhereInput[]
    OR?: CredentialRequestScalarWhereInput[]
    NOT?: CredentialRequestScalarWhereInput | CredentialRequestScalarWhereInput[]
    id?: StringFilter<"CredentialRequest"> | string
    userId?: StringFilter<"CredentialRequest"> | string
    desiredRole?: EnumRoleFilter<"CredentialRequest"> | $Enums.Role
    reason?: StringNullableFilter<"CredentialRequest"> | string | null
    status?: EnumStatusFilter<"CredentialRequest"> | $Enums.Status
    submittedAt?: DateTimeFilter<"CredentialRequest"> | Date | string
  }

  export type ShiftLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ShiftLogWhereUniqueInput
    update: XOR<ShiftLogUpdateWithoutUserInput, ShiftLogUncheckedUpdateWithoutUserInput>
    create: XOR<ShiftLogCreateWithoutUserInput, ShiftLogUncheckedCreateWithoutUserInput>
  }

  export type ShiftLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ShiftLogWhereUniqueInput
    data: XOR<ShiftLogUpdateWithoutUserInput, ShiftLogUncheckedUpdateWithoutUserInput>
  }

  export type ShiftLogUpdateManyWithWhereWithoutUserInput = {
    where: ShiftLogScalarWhereInput
    data: XOR<ShiftLogUpdateManyMutationInput, ShiftLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ShiftLogScalarWhereInput = {
    AND?: ShiftLogScalarWhereInput | ShiftLogScalarWhereInput[]
    OR?: ShiftLogScalarWhereInput[]
    NOT?: ShiftLogScalarWhereInput | ShiftLogScalarWhereInput[]
    id?: StringFilter<"ShiftLog"> | string
    userId?: StringFilter<"ShiftLog"> | string
    type?: EnumShiftTypeFilter<"ShiftLog"> | $Enums.ShiftType
    timestamp?: DateTimeFilter<"ShiftLog"> | Date | string
  }

  export type NovedadUpsertWithWhereUniqueWithoutUserInput = {
    where: NovedadWhereUniqueInput
    update: XOR<NovedadUpdateWithoutUserInput, NovedadUncheckedUpdateWithoutUserInput>
    create: XOR<NovedadCreateWithoutUserInput, NovedadUncheckedCreateWithoutUserInput>
  }

  export type NovedadUpdateWithWhereUniqueWithoutUserInput = {
    where: NovedadWhereUniqueInput
    data: XOR<NovedadUpdateWithoutUserInput, NovedadUncheckedUpdateWithoutUserInput>
  }

  export type NovedadUpdateManyWithWhereWithoutUserInput = {
    where: NovedadScalarWhereInput
    data: XOR<NovedadUpdateManyMutationInput, NovedadUncheckedUpdateManyWithoutUserInput>
  }

  export type NovedadScalarWhereInput = {
    AND?: NovedadScalarWhereInput | NovedadScalarWhereInput[]
    OR?: NovedadScalarWhereInput[]
    NOT?: NovedadScalarWhereInput | NovedadScalarWhereInput[]
    id?: StringFilter<"Novedad"> | string
    userId?: StringFilter<"Novedad"> | string
    timestamp?: DateTimeFilter<"Novedad"> | Date | string
    description?: StringFilter<"Novedad"> | string
    entryMethod?: StringFilter<"Novedad"> | string
    createdAt?: DateTimeFilter<"Novedad"> | Date | string
  }

  export type UserCreateWithoutRequestsInput = {
    id?: string
    firebaseUid: string
    email: string
    name: string
    role?: $Enums.Role
    status?: $Enums.Status
    assignedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shiftLogs?: ShiftLogCreateNestedManyWithoutUserInput
    novedades?: NovedadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: string
    firebaseUid: string
    email: string
    name: string
    role?: $Enums.Role
    status?: $Enums.Status
    assignedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shiftLogs?: ShiftLogUncheckedCreateNestedManyWithoutUserInput
    novedades?: NovedadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftLogs?: ShiftLogUpdateManyWithoutUserNestedInput
    novedades?: NovedadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftLogs?: ShiftLogUncheckedUpdateManyWithoutUserNestedInput
    novedades?: NovedadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutShiftLogsInput = {
    id?: string
    firebaseUid: string
    email: string
    name: string
    role?: $Enums.Role
    status?: $Enums.Status
    assignedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: CredentialRequestCreateNestedManyWithoutUserInput
    novedades?: NovedadCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShiftLogsInput = {
    id?: string
    firebaseUid: string
    email: string
    name: string
    role?: $Enums.Role
    status?: $Enums.Status
    assignedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: CredentialRequestUncheckedCreateNestedManyWithoutUserInput
    novedades?: NovedadUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShiftLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShiftLogsInput, UserUncheckedCreateWithoutShiftLogsInput>
  }

  export type UserUpsertWithoutShiftLogsInput = {
    update: XOR<UserUpdateWithoutShiftLogsInput, UserUncheckedUpdateWithoutShiftLogsInput>
    create: XOR<UserCreateWithoutShiftLogsInput, UserUncheckedCreateWithoutShiftLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShiftLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShiftLogsInput, UserUncheckedUpdateWithoutShiftLogsInput>
  }

  export type UserUpdateWithoutShiftLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: CredentialRequestUpdateManyWithoutUserNestedInput
    novedades?: NovedadUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShiftLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: CredentialRequestUncheckedUpdateManyWithoutUserNestedInput
    novedades?: NovedadUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNovedadesInput = {
    id?: string
    firebaseUid: string
    email: string
    name: string
    role?: $Enums.Role
    status?: $Enums.Status
    assignedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: CredentialRequestCreateNestedManyWithoutUserInput
    shiftLogs?: ShiftLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNovedadesInput = {
    id?: string
    firebaseUid: string
    email: string
    name: string
    role?: $Enums.Role
    status?: $Enums.Status
    assignedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: CredentialRequestUncheckedCreateNestedManyWithoutUserInput
    shiftLogs?: ShiftLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNovedadesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNovedadesInput, UserUncheckedCreateWithoutNovedadesInput>
  }

  export type UserUpsertWithoutNovedadesInput = {
    update: XOR<UserUpdateWithoutNovedadesInput, UserUncheckedUpdateWithoutNovedadesInput>
    create: XOR<UserCreateWithoutNovedadesInput, UserUncheckedCreateWithoutNovedadesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNovedadesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNovedadesInput, UserUncheckedUpdateWithoutNovedadesInput>
  }

  export type UserUpdateWithoutNovedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: CredentialRequestUpdateManyWithoutUserNestedInput
    shiftLogs?: ShiftLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNovedadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firebaseUid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: CredentialRequestUncheckedUpdateManyWithoutUserNestedInput
    shiftLogs?: ShiftLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CredentialRequestCreateManyUserInput = {
    id?: string
    desiredRole: $Enums.Role
    reason?: string | null
    status?: $Enums.Status
    submittedAt?: Date | string
  }

  export type ShiftLogCreateManyUserInput = {
    id?: string
    type: $Enums.ShiftType
    timestamp?: Date | string
  }

  export type NovedadCreateManyUserInput = {
    id?: string
    timestamp?: Date | string
    description: string
    entryMethod: string
    createdAt?: Date | string
  }

  export type CredentialRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    desiredRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    desiredRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredentialRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    desiredRole?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumShiftTypeFieldUpdateOperationsInput | $Enums.ShiftType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NovedadUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    entryMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NovedadUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    entryMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NovedadUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    entryMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}