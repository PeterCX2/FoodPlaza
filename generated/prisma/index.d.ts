
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model sales
 * 
 */
export type sales = $Result.DefaultSelection<Prisma.$salesPayload>
/**
 * Model detailedSales
 * 
 */
export type detailedSales = $Result.DefaultSelection<Prisma.$detailedSalesPayload>
/**
 * Model promos
 * 
 */
export type promos = $Result.DefaultSelection<Prisma.$promosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.products.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.salesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailedSales`: Exposes CRUD operations for the **detailedSales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailedSales
    * const detailedSales = await prisma.detailedSales.findMany()
    * ```
    */
  get detailedSales(): Prisma.detailedSalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promos`: Exposes CRUD operations for the **promos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promos
    * const promos = await prisma.promos.findMany()
    * ```
    */
  get promos(): Prisma.promosDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    products: 'products',
    categories: 'categories',
    sales: 'sales',
    detailedSales: 'detailedSales',
    promos: 'promos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "products" | "categories" | "sales" | "detailedSales" | "promos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      sales: {
        payload: Prisma.$salesPayload<ExtArgs>
        fields: Prisma.salesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.salesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.salesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findFirst: {
            args: Prisma.salesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.salesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findMany: {
            args: Prisma.salesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          create: {
            args: Prisma.salesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          createMany: {
            args: Prisma.salesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.salesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          delete: {
            args: Prisma.salesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          update: {
            args: Prisma.salesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          deleteMany: {
            args: Prisma.salesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.salesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.salesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          upsert: {
            args: Prisma.salesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.salesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.salesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      detailedSales: {
        payload: Prisma.$detailedSalesPayload<ExtArgs>
        fields: Prisma.detailedSalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detailedSalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detailedSalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload>
          }
          findFirst: {
            args: Prisma.detailedSalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detailedSalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload>
          }
          findMany: {
            args: Prisma.detailedSalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload>[]
          }
          create: {
            args: Prisma.detailedSalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload>
          }
          createMany: {
            args: Prisma.detailedSalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detailedSalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload>[]
          }
          delete: {
            args: Prisma.detailedSalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload>
          }
          update: {
            args: Prisma.detailedSalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload>
          }
          deleteMany: {
            args: Prisma.detailedSalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detailedSalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detailedSalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload>[]
          }
          upsert: {
            args: Prisma.detailedSalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detailedSalesPayload>
          }
          aggregate: {
            args: Prisma.DetailedSalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailedSales>
          }
          groupBy: {
            args: Prisma.detailedSalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailedSalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.detailedSalesCountArgs<ExtArgs>
            result: $Utils.Optional<DetailedSalesCountAggregateOutputType> | number
          }
        }
      }
      promos: {
        payload: Prisma.$promosPayload<ExtArgs>
        fields: Prisma.promosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.promosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.promosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload>
          }
          findFirst: {
            args: Prisma.promosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.promosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload>
          }
          findMany: {
            args: Prisma.promosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload>[]
          }
          create: {
            args: Prisma.promosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload>
          }
          createMany: {
            args: Prisma.promosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.promosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload>[]
          }
          delete: {
            args: Prisma.promosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload>
          }
          update: {
            args: Prisma.promosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload>
          }
          deleteMany: {
            args: Prisma.promosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.promosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.promosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload>[]
          }
          upsert: {
            args: Prisma.promosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$promosPayload>
          }
          aggregate: {
            args: Prisma.PromosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromos>
          }
          groupBy: {
            args: Prisma.promosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromosGroupByOutputType>[]
          }
          count: {
            args: Prisma.promosCountArgs<ExtArgs>
            result: $Utils.Optional<PromosCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    products?: productsOmit
    categories?: categoriesOmit
    sales?: salesOmit
    detailedSales?: detailedSalesOmit
    promos?: promosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type SalesCountOutputType
   */

  export type SalesCountOutputType = {
    detailedSales: number
  }

  export type SalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailedSales?: boolean | SalesCountOutputTypeCountDetailedSalesArgs
  }

  // Custom InputTypes
  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCountOutputType
     */
    select?: SalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeCountDetailedSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detailedSalesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    category_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: number | null
    category_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    description: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    category_id: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    image: string | null
    name: string | null
    description: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    category_id: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    image: number
    name: number
    description: number
    price: number
    createdAt: number
    updatedAt: number
    category_id: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    category_id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    category_id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    image?: true
    name?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    category_id?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    image?: true
    name?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    category_id?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    image?: true
    name?: true
    description?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    category_id?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    image: string
    name: string
    description: string
    price: number
    createdAt: Date
    updatedAt: Date
    category_id: number | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category_id?: boolean
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category_id?: boolean
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category_id?: boolean
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    image?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category_id?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "name" | "description" | "price" | "createdAt" | "updatedAt" | "category_id", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      name: string
      description: string
      price: number
      createdAt: Date
      updatedAt: Date
      category_id: number | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends products$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, products$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly image: FieldRef<"products", 'String'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Int'>
    readonly createdAt: FieldRef<"products", 'DateTime'>
    readonly updatedAt: FieldRef<"products", 'DateTime'>
    readonly category_id: FieldRef<"products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.categories
   */
  export type products$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly createdAt: FieldRef<"categories", 'DateTime'>
    readonly updatedAt: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    id: number | null
    tax: number | null
    discount: number | null
    total_amount: number | null
  }

  export type SalesSumAggregateOutputType = {
    id: number | null
    tax: number | null
    discount: number | null
    total_amount: number | null
  }

  export type SalesMinAggregateOutputType = {
    id: number | null
    tax: number | null
    discount: number | null
    total_amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type SalesMaxAggregateOutputType = {
    id: number | null
    tax: number | null
    discount: number | null
    total_amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    tax: number
    discount: number
    total_amount: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    id?: true
    tax?: true
    discount?: true
    total_amount?: true
  }

  export type SalesSumAggregateInputType = {
    id?: true
    tax?: true
    discount?: true
    total_amount?: true
  }

  export type SalesMinAggregateInputType = {
    id?: true
    tax?: true
    discount?: true
    total_amount?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    tax?: true
    discount?: true
    total_amount?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    tax?: true
    discount?: true
    total_amount?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to aggregate.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
    orderBy?: salesOrderByWithAggregationInput | salesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: salesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: number
    tax: number
    discount: number | null
    total_amount: number
    createdAt: Date
    updatedAt: Date
    status: string
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tax?: boolean
    discount?: boolean
    total_amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    detailedSales?: boolean | sales$detailedSalesArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type salesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tax?: boolean
    discount?: boolean
    total_amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["sales"]>

  export type salesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tax?: boolean
    discount?: boolean
    total_amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["sales"]>

  export type salesSelectScalar = {
    id?: boolean
    tax?: boolean
    discount?: boolean
    total_amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type salesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tax" | "discount" | "total_amount" | "createdAt" | "updatedAt" | "status", ExtArgs["result"]["sales"]>
  export type salesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailedSales?: boolean | sales$detailedSalesArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type salesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type salesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sales"
    objects: {
      detailedSales: Prisma.$detailedSalesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tax: number
      discount: number | null
      total_amount: number
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type salesGetPayload<S extends boolean | null | undefined | salesDefaultArgs> = $Result.GetResult<Prisma.$salesPayload, S>

  type salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<salesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales'], meta: { name: 'sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {salesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends salesFindUniqueArgs>(args: SelectSubset<T, salesFindUniqueArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {salesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends salesFindUniqueOrThrowArgs>(args: SelectSubset<T, salesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends salesFindFirstArgs>(args?: SelectSubset<T, salesFindFirstArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends salesFindFirstOrThrowArgs>(args?: SelectSubset<T, salesFindFirstOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends salesFindManyArgs>(args?: SelectSubset<T, salesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {salesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends salesCreateArgs>(args: SelectSubset<T, salesCreateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {salesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends salesCreateManyArgs>(args?: SelectSubset<T, salesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {salesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends salesCreateManyAndReturnArgs>(args?: SelectSubset<T, salesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {salesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends salesDeleteArgs>(args: SelectSubset<T, salesDeleteArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {salesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends salesUpdateArgs>(args: SelectSubset<T, salesUpdateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {salesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends salesDeleteManyArgs>(args?: SelectSubset<T, salesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends salesUpdateManyArgs>(args: SelectSubset<T, salesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {salesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.updateManyAndReturn({
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
    updateManyAndReturn<T extends salesUpdateManyAndReturnArgs>(args: SelectSubset<T, salesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {salesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends salesUpsertArgs>(args: SelectSubset<T, salesUpsertArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends salesCountArgs>(
      args?: Subset<T, salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesGroupByArgs} args - Group by arguments.
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
      T extends salesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salesGroupByArgs['orderBy'] }
        : { orderBy?: salesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, salesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sales model
   */
  readonly fields: salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detailedSales<T extends sales$detailedSalesArgs<ExtArgs> = {}>(args?: Subset<T, sales$detailedSalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the sales model
   */
  interface salesFieldRefs {
    readonly id: FieldRef<"sales", 'Int'>
    readonly tax: FieldRef<"sales", 'Int'>
    readonly discount: FieldRef<"sales", 'Int'>
    readonly total_amount: FieldRef<"sales", 'Int'>
    readonly createdAt: FieldRef<"sales", 'DateTime'>
    readonly updatedAt: FieldRef<"sales", 'DateTime'>
    readonly status: FieldRef<"sales", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sales findUnique
   */
  export type salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findUniqueOrThrow
   */
  export type salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findFirst
   */
  export type salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findFirstOrThrow
   */
  export type salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findMany
   */
  export type salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales create
   */
  export type salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The data needed to create a sales.
     */
    data: XOR<salesCreateInput, salesUncheckedCreateInput>
  }

  /**
   * sales createMany
   */
  export type salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sales createManyAndReturn
   */
  export type salesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sales update
   */
  export type salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The data needed to update a sales.
     */
    data: XOR<salesUpdateInput, salesUncheckedUpdateInput>
    /**
     * Choose, which sales to update.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales updateMany
   */
  export type salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
  }

  /**
   * sales updateManyAndReturn
   */
  export type salesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
  }

  /**
   * sales upsert
   */
  export type salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The filter to search for the sales to update in case it exists.
     */
    where: salesWhereUniqueInput
    /**
     * In case the sales found by the `where` argument doesn't exist, create a new sales with this data.
     */
    create: XOR<salesCreateInput, salesUncheckedCreateInput>
    /**
     * In case the sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salesUpdateInput, salesUncheckedUpdateInput>
  }

  /**
   * sales delete
   */
  export type salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter which sales to delete.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales deleteMany
   */
  export type salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to delete
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to delete.
     */
    limit?: number
  }

  /**
   * sales.detailedSales
   */
  export type sales$detailedSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
    where?: detailedSalesWhereInput
    orderBy?: detailedSalesOrderByWithRelationInput | detailedSalesOrderByWithRelationInput[]
    cursor?: detailedSalesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailedSalesScalarFieldEnum | DetailedSalesScalarFieldEnum[]
  }

  /**
   * sales without action
   */
  export type salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
  }


  /**
   * Model detailedSales
   */

  export type AggregateDetailedSales = {
    _count: DetailedSalesCountAggregateOutputType | null
    _avg: DetailedSalesAvgAggregateOutputType | null
    _sum: DetailedSalesSumAggregateOutputType | null
    _min: DetailedSalesMinAggregateOutputType | null
    _max: DetailedSalesMaxAggregateOutputType | null
  }

  export type DetailedSalesAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    product_price: number | null
    sales_id: number | null
    quantity: number | null
    total_price: number | null
  }

  export type DetailedSalesSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    product_price: number | null
    sales_id: number | null
    quantity: number | null
    total_price: number | null
  }

  export type DetailedSalesMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    product_name: string | null
    product_price: number | null
    sales_id: number | null
    quantity: number | null
    total_price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetailedSalesMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    product_name: string | null
    product_price: number | null
    sales_id: number | null
    quantity: number | null
    total_price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetailedSalesCountAggregateOutputType = {
    id: number
    product_id: number
    product_name: number
    product_price: number
    sales_id: number
    quantity: number
    total_price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DetailedSalesAvgAggregateInputType = {
    id?: true
    product_id?: true
    product_price?: true
    sales_id?: true
    quantity?: true
    total_price?: true
  }

  export type DetailedSalesSumAggregateInputType = {
    id?: true
    product_id?: true
    product_price?: true
    sales_id?: true
    quantity?: true
    total_price?: true
  }

  export type DetailedSalesMinAggregateInputType = {
    id?: true
    product_id?: true
    product_name?: true
    product_price?: true
    sales_id?: true
    quantity?: true
    total_price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetailedSalesMaxAggregateInputType = {
    id?: true
    product_id?: true
    product_name?: true
    product_price?: true
    sales_id?: true
    quantity?: true
    total_price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetailedSalesCountAggregateInputType = {
    id?: true
    product_id?: true
    product_name?: true
    product_price?: true
    sales_id?: true
    quantity?: true
    total_price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DetailedSalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detailedSales to aggregate.
     */
    where?: detailedSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailedSales to fetch.
     */
    orderBy?: detailedSalesOrderByWithRelationInput | detailedSalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detailedSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailedSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailedSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detailedSales
    **/
    _count?: true | DetailedSalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailedSalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailedSalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailedSalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailedSalesMaxAggregateInputType
  }

  export type GetDetailedSalesAggregateType<T extends DetailedSalesAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailedSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailedSales[P]>
      : GetScalarType<T[P], AggregateDetailedSales[P]>
  }




  export type detailedSalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detailedSalesWhereInput
    orderBy?: detailedSalesOrderByWithAggregationInput | detailedSalesOrderByWithAggregationInput[]
    by: DetailedSalesScalarFieldEnum[] | DetailedSalesScalarFieldEnum
    having?: detailedSalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailedSalesCountAggregateInputType | true
    _avg?: DetailedSalesAvgAggregateInputType
    _sum?: DetailedSalesSumAggregateInputType
    _min?: DetailedSalesMinAggregateInputType
    _max?: DetailedSalesMaxAggregateInputType
  }

  export type DetailedSalesGroupByOutputType = {
    id: number
    product_id: number
    product_name: string
    product_price: number
    sales_id: number
    quantity: number
    total_price: number
    createdAt: Date
    updatedAt: Date
    _count: DetailedSalesCountAggregateOutputType | null
    _avg: DetailedSalesAvgAggregateOutputType | null
    _sum: DetailedSalesSumAggregateOutputType | null
    _min: DetailedSalesMinAggregateOutputType | null
    _max: DetailedSalesMaxAggregateOutputType | null
  }

  type GetDetailedSalesGroupByPayload<T extends detailedSalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailedSalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailedSalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailedSalesGroupByOutputType[P]>
            : GetScalarType<T[P], DetailedSalesGroupByOutputType[P]>
        }
      >
    >


  export type detailedSalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    product_name?: boolean
    product_price?: boolean
    sales_id?: boolean
    quantity?: boolean
    total_price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sales?: boolean | salesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailedSales"]>

  export type detailedSalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    product_name?: boolean
    product_price?: boolean
    sales_id?: boolean
    quantity?: boolean
    total_price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sales?: boolean | salesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailedSales"]>

  export type detailedSalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    product_name?: boolean
    product_price?: boolean
    sales_id?: boolean
    quantity?: boolean
    total_price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sales?: boolean | salesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailedSales"]>

  export type detailedSalesSelectScalar = {
    id?: boolean
    product_id?: boolean
    product_name?: boolean
    product_price?: boolean
    sales_id?: boolean
    quantity?: boolean
    total_price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type detailedSalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "product_name" | "product_price" | "sales_id" | "quantity" | "total_price" | "createdAt" | "updatedAt", ExtArgs["result"]["detailedSales"]>
  export type detailedSalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | salesDefaultArgs<ExtArgs>
  }
  export type detailedSalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | salesDefaultArgs<ExtArgs>
  }
  export type detailedSalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | salesDefaultArgs<ExtArgs>
  }

  export type $detailedSalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detailedSales"
    objects: {
      sales: Prisma.$salesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      product_name: string
      product_price: number
      sales_id: number
      quantity: number
      total_price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["detailedSales"]>
    composites: {}
  }

  type detailedSalesGetPayload<S extends boolean | null | undefined | detailedSalesDefaultArgs> = $Result.GetResult<Prisma.$detailedSalesPayload, S>

  type detailedSalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detailedSalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailedSalesCountAggregateInputType | true
    }

  export interface detailedSalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detailedSales'], meta: { name: 'detailedSales' } }
    /**
     * Find zero or one DetailedSales that matches the filter.
     * @param {detailedSalesFindUniqueArgs} args - Arguments to find a DetailedSales
     * @example
     * // Get one DetailedSales
     * const detailedSales = await prisma.detailedSales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detailedSalesFindUniqueArgs>(args: SelectSubset<T, detailedSalesFindUniqueArgs<ExtArgs>>): Prisma__detailedSalesClient<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailedSales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detailedSalesFindUniqueOrThrowArgs} args - Arguments to find a DetailedSales
     * @example
     * // Get one DetailedSales
     * const detailedSales = await prisma.detailedSales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detailedSalesFindUniqueOrThrowArgs>(args: SelectSubset<T, detailedSalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detailedSalesClient<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailedSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailedSalesFindFirstArgs} args - Arguments to find a DetailedSales
     * @example
     * // Get one DetailedSales
     * const detailedSales = await prisma.detailedSales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detailedSalesFindFirstArgs>(args?: SelectSubset<T, detailedSalesFindFirstArgs<ExtArgs>>): Prisma__detailedSalesClient<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailedSales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailedSalesFindFirstOrThrowArgs} args - Arguments to find a DetailedSales
     * @example
     * // Get one DetailedSales
     * const detailedSales = await prisma.detailedSales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detailedSalesFindFirstOrThrowArgs>(args?: SelectSubset<T, detailedSalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__detailedSalesClient<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailedSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailedSalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailedSales
     * const detailedSales = await prisma.detailedSales.findMany()
     * 
     * // Get first 10 DetailedSales
     * const detailedSales = await prisma.detailedSales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailedSalesWithIdOnly = await prisma.detailedSales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detailedSalesFindManyArgs>(args?: SelectSubset<T, detailedSalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailedSales.
     * @param {detailedSalesCreateArgs} args - Arguments to create a DetailedSales.
     * @example
     * // Create one DetailedSales
     * const DetailedSales = await prisma.detailedSales.create({
     *   data: {
     *     // ... data to create a DetailedSales
     *   }
     * })
     * 
     */
    create<T extends detailedSalesCreateArgs>(args: SelectSubset<T, detailedSalesCreateArgs<ExtArgs>>): Prisma__detailedSalesClient<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailedSales.
     * @param {detailedSalesCreateManyArgs} args - Arguments to create many DetailedSales.
     * @example
     * // Create many DetailedSales
     * const detailedSales = await prisma.detailedSales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detailedSalesCreateManyArgs>(args?: SelectSubset<T, detailedSalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailedSales and returns the data saved in the database.
     * @param {detailedSalesCreateManyAndReturnArgs} args - Arguments to create many DetailedSales.
     * @example
     * // Create many DetailedSales
     * const detailedSales = await prisma.detailedSales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailedSales and only return the `id`
     * const detailedSalesWithIdOnly = await prisma.detailedSales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detailedSalesCreateManyAndReturnArgs>(args?: SelectSubset<T, detailedSalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetailedSales.
     * @param {detailedSalesDeleteArgs} args - Arguments to delete one DetailedSales.
     * @example
     * // Delete one DetailedSales
     * const DetailedSales = await prisma.detailedSales.delete({
     *   where: {
     *     // ... filter to delete one DetailedSales
     *   }
     * })
     * 
     */
    delete<T extends detailedSalesDeleteArgs>(args: SelectSubset<T, detailedSalesDeleteArgs<ExtArgs>>): Prisma__detailedSalesClient<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailedSales.
     * @param {detailedSalesUpdateArgs} args - Arguments to update one DetailedSales.
     * @example
     * // Update one DetailedSales
     * const detailedSales = await prisma.detailedSales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detailedSalesUpdateArgs>(args: SelectSubset<T, detailedSalesUpdateArgs<ExtArgs>>): Prisma__detailedSalesClient<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailedSales.
     * @param {detailedSalesDeleteManyArgs} args - Arguments to filter DetailedSales to delete.
     * @example
     * // Delete a few DetailedSales
     * const { count } = await prisma.detailedSales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detailedSalesDeleteManyArgs>(args?: SelectSubset<T, detailedSalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailedSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailedSalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailedSales
     * const detailedSales = await prisma.detailedSales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detailedSalesUpdateManyArgs>(args: SelectSubset<T, detailedSalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailedSales and returns the data updated in the database.
     * @param {detailedSalesUpdateManyAndReturnArgs} args - Arguments to update many DetailedSales.
     * @example
     * // Update many DetailedSales
     * const detailedSales = await prisma.detailedSales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetailedSales and only return the `id`
     * const detailedSalesWithIdOnly = await prisma.detailedSales.updateManyAndReturn({
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
    updateManyAndReturn<T extends detailedSalesUpdateManyAndReturnArgs>(args: SelectSubset<T, detailedSalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetailedSales.
     * @param {detailedSalesUpsertArgs} args - Arguments to update or create a DetailedSales.
     * @example
     * // Update or create a DetailedSales
     * const detailedSales = await prisma.detailedSales.upsert({
     *   create: {
     *     // ... data to create a DetailedSales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailedSales we want to update
     *   }
     * })
     */
    upsert<T extends detailedSalesUpsertArgs>(args: SelectSubset<T, detailedSalesUpsertArgs<ExtArgs>>): Prisma__detailedSalesClient<$Result.GetResult<Prisma.$detailedSalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailedSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailedSalesCountArgs} args - Arguments to filter DetailedSales to count.
     * @example
     * // Count the number of DetailedSales
     * const count = await prisma.detailedSales.count({
     *   where: {
     *     // ... the filter for the DetailedSales we want to count
     *   }
     * })
    **/
    count<T extends detailedSalesCountArgs>(
      args?: Subset<T, detailedSalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailedSalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailedSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailedSalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailedSalesAggregateArgs>(args: Subset<T, DetailedSalesAggregateArgs>): Prisma.PrismaPromise<GetDetailedSalesAggregateType<T>>

    /**
     * Group by DetailedSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detailedSalesGroupByArgs} args - Group by arguments.
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
      T extends detailedSalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detailedSalesGroupByArgs['orderBy'] }
        : { orderBy?: detailedSalesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, detailedSalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailedSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detailedSales model
   */
  readonly fields: detailedSalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detailedSales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detailedSalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends salesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, salesDefaultArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the detailedSales model
   */
  interface detailedSalesFieldRefs {
    readonly id: FieldRef<"detailedSales", 'Int'>
    readonly product_id: FieldRef<"detailedSales", 'Int'>
    readonly product_name: FieldRef<"detailedSales", 'String'>
    readonly product_price: FieldRef<"detailedSales", 'Int'>
    readonly sales_id: FieldRef<"detailedSales", 'Int'>
    readonly quantity: FieldRef<"detailedSales", 'Int'>
    readonly total_price: FieldRef<"detailedSales", 'Int'>
    readonly createdAt: FieldRef<"detailedSales", 'DateTime'>
    readonly updatedAt: FieldRef<"detailedSales", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * detailedSales findUnique
   */
  export type detailedSalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
    /**
     * Filter, which detailedSales to fetch.
     */
    where: detailedSalesWhereUniqueInput
  }

  /**
   * detailedSales findUniqueOrThrow
   */
  export type detailedSalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
    /**
     * Filter, which detailedSales to fetch.
     */
    where: detailedSalesWhereUniqueInput
  }

  /**
   * detailedSales findFirst
   */
  export type detailedSalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
    /**
     * Filter, which detailedSales to fetch.
     */
    where?: detailedSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailedSales to fetch.
     */
    orderBy?: detailedSalesOrderByWithRelationInput | detailedSalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detailedSales.
     */
    cursor?: detailedSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailedSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailedSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detailedSales.
     */
    distinct?: DetailedSalesScalarFieldEnum | DetailedSalesScalarFieldEnum[]
  }

  /**
   * detailedSales findFirstOrThrow
   */
  export type detailedSalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
    /**
     * Filter, which detailedSales to fetch.
     */
    where?: detailedSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailedSales to fetch.
     */
    orderBy?: detailedSalesOrderByWithRelationInput | detailedSalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detailedSales.
     */
    cursor?: detailedSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailedSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailedSales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detailedSales.
     */
    distinct?: DetailedSalesScalarFieldEnum | DetailedSalesScalarFieldEnum[]
  }

  /**
   * detailedSales findMany
   */
  export type detailedSalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
    /**
     * Filter, which detailedSales to fetch.
     */
    where?: detailedSalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detailedSales to fetch.
     */
    orderBy?: detailedSalesOrderByWithRelationInput | detailedSalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detailedSales.
     */
    cursor?: detailedSalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detailedSales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detailedSales.
     */
    skip?: number
    distinct?: DetailedSalesScalarFieldEnum | DetailedSalesScalarFieldEnum[]
  }

  /**
   * detailedSales create
   */
  export type detailedSalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
    /**
     * The data needed to create a detailedSales.
     */
    data: XOR<detailedSalesCreateInput, detailedSalesUncheckedCreateInput>
  }

  /**
   * detailedSales createMany
   */
  export type detailedSalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detailedSales.
     */
    data: detailedSalesCreateManyInput | detailedSalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detailedSales createManyAndReturn
   */
  export type detailedSalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * The data used to create many detailedSales.
     */
    data: detailedSalesCreateManyInput | detailedSalesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detailedSales update
   */
  export type detailedSalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
    /**
     * The data needed to update a detailedSales.
     */
    data: XOR<detailedSalesUpdateInput, detailedSalesUncheckedUpdateInput>
    /**
     * Choose, which detailedSales to update.
     */
    where: detailedSalesWhereUniqueInput
  }

  /**
   * detailedSales updateMany
   */
  export type detailedSalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detailedSales.
     */
    data: XOR<detailedSalesUpdateManyMutationInput, detailedSalesUncheckedUpdateManyInput>
    /**
     * Filter which detailedSales to update
     */
    where?: detailedSalesWhereInput
    /**
     * Limit how many detailedSales to update.
     */
    limit?: number
  }

  /**
   * detailedSales updateManyAndReturn
   */
  export type detailedSalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * The data used to update detailedSales.
     */
    data: XOR<detailedSalesUpdateManyMutationInput, detailedSalesUncheckedUpdateManyInput>
    /**
     * Filter which detailedSales to update
     */
    where?: detailedSalesWhereInput
    /**
     * Limit how many detailedSales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * detailedSales upsert
   */
  export type detailedSalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
    /**
     * The filter to search for the detailedSales to update in case it exists.
     */
    where: detailedSalesWhereUniqueInput
    /**
     * In case the detailedSales found by the `where` argument doesn't exist, create a new detailedSales with this data.
     */
    create: XOR<detailedSalesCreateInput, detailedSalesUncheckedCreateInput>
    /**
     * In case the detailedSales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detailedSalesUpdateInput, detailedSalesUncheckedUpdateInput>
  }

  /**
   * detailedSales delete
   */
  export type detailedSalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
    /**
     * Filter which detailedSales to delete.
     */
    where: detailedSalesWhereUniqueInput
  }

  /**
   * detailedSales deleteMany
   */
  export type detailedSalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detailedSales to delete
     */
    where?: detailedSalesWhereInput
    /**
     * Limit how many detailedSales to delete.
     */
    limit?: number
  }

  /**
   * detailedSales without action
   */
  export type detailedSalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detailedSales
     */
    select?: detailedSalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detailedSales
     */
    omit?: detailedSalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detailedSalesInclude<ExtArgs> | null
  }


  /**
   * Model promos
   */

  export type AggregatePromos = {
    _count: PromosCountAggregateOutputType | null
    _avg: PromosAvgAggregateOutputType | null
    _sum: PromosSumAggregateOutputType | null
    _min: PromosMinAggregateOutputType | null
    _max: PromosMaxAggregateOutputType | null
  }

  export type PromosAvgAggregateOutputType = {
    id: number | null
    discount: number | null
  }

  export type PromosSumAggregateOutputType = {
    id: number | null
    discount: number | null
  }

  export type PromosMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromosMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    discount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromosCountAggregateOutputType = {
    id: number
    name: number
    description: number
    discount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromosAvgAggregateInputType = {
    id?: true
    discount?: true
  }

  export type PromosSumAggregateInputType = {
    id?: true
    discount?: true
  }

  export type PromosMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromosMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromosCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    discount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which promos to aggregate.
     */
    where?: promosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promos to fetch.
     */
    orderBy?: promosOrderByWithRelationInput | promosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: promosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned promos
    **/
    _count?: true | PromosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromosMaxAggregateInputType
  }

  export type GetPromosAggregateType<T extends PromosAggregateArgs> = {
        [P in keyof T & keyof AggregatePromos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromos[P]>
      : GetScalarType<T[P], AggregatePromos[P]>
  }




  export type promosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: promosWhereInput
    orderBy?: promosOrderByWithAggregationInput | promosOrderByWithAggregationInput[]
    by: PromosScalarFieldEnum[] | PromosScalarFieldEnum
    having?: promosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromosCountAggregateInputType | true
    _avg?: PromosAvgAggregateInputType
    _sum?: PromosSumAggregateInputType
    _min?: PromosMinAggregateInputType
    _max?: PromosMaxAggregateInputType
  }

  export type PromosGroupByOutputType = {
    id: number
    name: string
    description: string
    discount: number
    createdAt: Date
    updatedAt: Date
    _count: PromosCountAggregateOutputType | null
    _avg: PromosAvgAggregateOutputType | null
    _sum: PromosSumAggregateOutputType | null
    _min: PromosMinAggregateOutputType | null
    _max: PromosMaxAggregateOutputType | null
  }

  type GetPromosGroupByPayload<T extends promosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromosGroupByOutputType[P]>
            : GetScalarType<T[P], PromosGroupByOutputType[P]>
        }
      >
    >


  export type promosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promos"]>

  export type promosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promos"]>

  export type promosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promos"]>

  export type promosSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    discount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type promosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "discount" | "createdAt" | "updatedAt", ExtArgs["result"]["promos"]>

  export type $promosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "promos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      discount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promos"]>
    composites: {}
  }

  type promosGetPayload<S extends boolean | null | undefined | promosDefaultArgs> = $Result.GetResult<Prisma.$promosPayload, S>

  type promosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<promosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromosCountAggregateInputType | true
    }

  export interface promosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['promos'], meta: { name: 'promos' } }
    /**
     * Find zero or one Promos that matches the filter.
     * @param {promosFindUniqueArgs} args - Arguments to find a Promos
     * @example
     * // Get one Promos
     * const promos = await prisma.promos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends promosFindUniqueArgs>(args: SelectSubset<T, promosFindUniqueArgs<ExtArgs>>): Prisma__promosClient<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {promosFindUniqueOrThrowArgs} args - Arguments to find a Promos
     * @example
     * // Get one Promos
     * const promos = await prisma.promos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends promosFindUniqueOrThrowArgs>(args: SelectSubset<T, promosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__promosClient<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promosFindFirstArgs} args - Arguments to find a Promos
     * @example
     * // Get one Promos
     * const promos = await prisma.promos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends promosFindFirstArgs>(args?: SelectSubset<T, promosFindFirstArgs<ExtArgs>>): Prisma__promosClient<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promosFindFirstOrThrowArgs} args - Arguments to find a Promos
     * @example
     * // Get one Promos
     * const promos = await prisma.promos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends promosFindFirstOrThrowArgs>(args?: SelectSubset<T, promosFindFirstOrThrowArgs<ExtArgs>>): Prisma__promosClient<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promos
     * const promos = await prisma.promos.findMany()
     * 
     * // Get first 10 Promos
     * const promos = await prisma.promos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promosWithIdOnly = await prisma.promos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends promosFindManyArgs>(args?: SelectSubset<T, promosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promos.
     * @param {promosCreateArgs} args - Arguments to create a Promos.
     * @example
     * // Create one Promos
     * const Promos = await prisma.promos.create({
     *   data: {
     *     // ... data to create a Promos
     *   }
     * })
     * 
     */
    create<T extends promosCreateArgs>(args: SelectSubset<T, promosCreateArgs<ExtArgs>>): Prisma__promosClient<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promos.
     * @param {promosCreateManyArgs} args - Arguments to create many Promos.
     * @example
     * // Create many Promos
     * const promos = await prisma.promos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends promosCreateManyArgs>(args?: SelectSubset<T, promosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promos and returns the data saved in the database.
     * @param {promosCreateManyAndReturnArgs} args - Arguments to create many Promos.
     * @example
     * // Create many Promos
     * const promos = await prisma.promos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promos and only return the `id`
     * const promosWithIdOnly = await prisma.promos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends promosCreateManyAndReturnArgs>(args?: SelectSubset<T, promosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promos.
     * @param {promosDeleteArgs} args - Arguments to delete one Promos.
     * @example
     * // Delete one Promos
     * const Promos = await prisma.promos.delete({
     *   where: {
     *     // ... filter to delete one Promos
     *   }
     * })
     * 
     */
    delete<T extends promosDeleteArgs>(args: SelectSubset<T, promosDeleteArgs<ExtArgs>>): Prisma__promosClient<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promos.
     * @param {promosUpdateArgs} args - Arguments to update one Promos.
     * @example
     * // Update one Promos
     * const promos = await prisma.promos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends promosUpdateArgs>(args: SelectSubset<T, promosUpdateArgs<ExtArgs>>): Prisma__promosClient<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promos.
     * @param {promosDeleteManyArgs} args - Arguments to filter Promos to delete.
     * @example
     * // Delete a few Promos
     * const { count } = await prisma.promos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends promosDeleteManyArgs>(args?: SelectSubset<T, promosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promos
     * const promos = await prisma.promos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends promosUpdateManyArgs>(args: SelectSubset<T, promosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promos and returns the data updated in the database.
     * @param {promosUpdateManyAndReturnArgs} args - Arguments to update many Promos.
     * @example
     * // Update many Promos
     * const promos = await prisma.promos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promos and only return the `id`
     * const promosWithIdOnly = await prisma.promos.updateManyAndReturn({
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
    updateManyAndReturn<T extends promosUpdateManyAndReturnArgs>(args: SelectSubset<T, promosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promos.
     * @param {promosUpsertArgs} args - Arguments to update or create a Promos.
     * @example
     * // Update or create a Promos
     * const promos = await prisma.promos.upsert({
     *   create: {
     *     // ... data to create a Promos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promos we want to update
     *   }
     * })
     */
    upsert<T extends promosUpsertArgs>(args: SelectSubset<T, promosUpsertArgs<ExtArgs>>): Prisma__promosClient<$Result.GetResult<Prisma.$promosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promosCountArgs} args - Arguments to filter Promos to count.
     * @example
     * // Count the number of Promos
     * const count = await prisma.promos.count({
     *   where: {
     *     // ... the filter for the Promos we want to count
     *   }
     * })
    **/
    count<T extends promosCountArgs>(
      args?: Subset<T, promosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromosAggregateArgs>(args: Subset<T, PromosAggregateArgs>): Prisma.PrismaPromise<GetPromosAggregateType<T>>

    /**
     * Group by Promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {promosGroupByArgs} args - Group by arguments.
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
      T extends promosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: promosGroupByArgs['orderBy'] }
        : { orderBy?: promosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, promosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the promos model
   */
  readonly fields: promosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for promos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__promosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the promos model
   */
  interface promosFieldRefs {
    readonly id: FieldRef<"promos", 'Int'>
    readonly name: FieldRef<"promos", 'String'>
    readonly description: FieldRef<"promos", 'String'>
    readonly discount: FieldRef<"promos", 'Int'>
    readonly createdAt: FieldRef<"promos", 'DateTime'>
    readonly updatedAt: FieldRef<"promos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * promos findUnique
   */
  export type promosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * Filter, which promos to fetch.
     */
    where: promosWhereUniqueInput
  }

  /**
   * promos findUniqueOrThrow
   */
  export type promosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * Filter, which promos to fetch.
     */
    where: promosWhereUniqueInput
  }

  /**
   * promos findFirst
   */
  export type promosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * Filter, which promos to fetch.
     */
    where?: promosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promos to fetch.
     */
    orderBy?: promosOrderByWithRelationInput | promosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promos.
     */
    cursor?: promosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promos.
     */
    distinct?: PromosScalarFieldEnum | PromosScalarFieldEnum[]
  }

  /**
   * promos findFirstOrThrow
   */
  export type promosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * Filter, which promos to fetch.
     */
    where?: promosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promos to fetch.
     */
    orderBy?: promosOrderByWithRelationInput | promosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for promos.
     */
    cursor?: promosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of promos.
     */
    distinct?: PromosScalarFieldEnum | PromosScalarFieldEnum[]
  }

  /**
   * promos findMany
   */
  export type promosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * Filter, which promos to fetch.
     */
    where?: promosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of promos to fetch.
     */
    orderBy?: promosOrderByWithRelationInput | promosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing promos.
     */
    cursor?: promosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` promos.
     */
    skip?: number
    distinct?: PromosScalarFieldEnum | PromosScalarFieldEnum[]
  }

  /**
   * promos create
   */
  export type promosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * The data needed to create a promos.
     */
    data: XOR<promosCreateInput, promosUncheckedCreateInput>
  }

  /**
   * promos createMany
   */
  export type promosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many promos.
     */
    data: promosCreateManyInput | promosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * promos createManyAndReturn
   */
  export type promosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * The data used to create many promos.
     */
    data: promosCreateManyInput | promosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * promos update
   */
  export type promosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * The data needed to update a promos.
     */
    data: XOR<promosUpdateInput, promosUncheckedUpdateInput>
    /**
     * Choose, which promos to update.
     */
    where: promosWhereUniqueInput
  }

  /**
   * promos updateMany
   */
  export type promosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update promos.
     */
    data: XOR<promosUpdateManyMutationInput, promosUncheckedUpdateManyInput>
    /**
     * Filter which promos to update
     */
    where?: promosWhereInput
    /**
     * Limit how many promos to update.
     */
    limit?: number
  }

  /**
   * promos updateManyAndReturn
   */
  export type promosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * The data used to update promos.
     */
    data: XOR<promosUpdateManyMutationInput, promosUncheckedUpdateManyInput>
    /**
     * Filter which promos to update
     */
    where?: promosWhereInput
    /**
     * Limit how many promos to update.
     */
    limit?: number
  }

  /**
   * promos upsert
   */
  export type promosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * The filter to search for the promos to update in case it exists.
     */
    where: promosWhereUniqueInput
    /**
     * In case the promos found by the `where` argument doesn't exist, create a new promos with this data.
     */
    create: XOR<promosCreateInput, promosUncheckedCreateInput>
    /**
     * In case the promos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<promosUpdateInput, promosUncheckedUpdateInput>
  }

  /**
   * promos delete
   */
  export type promosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
    /**
     * Filter which promos to delete.
     */
    where: promosWhereUniqueInput
  }

  /**
   * promos deleteMany
   */
  export type promosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which promos to delete
     */
    where?: promosWhereInput
    /**
     * Limit how many promos to delete.
     */
    limit?: number
  }

  /**
   * promos without action
   */
  export type promosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the promos
     */
    select?: promosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the promos
     */
    omit?: promosOmit<ExtArgs> | null
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


  export const ProductsScalarFieldEnum: {
    id: 'id',
    image: 'image',
    name: 'name',
    description: 'description',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    category_id: 'category_id'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    tax: 'tax',
    discount: 'discount',
    total_amount: 'total_amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const DetailedSalesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    product_name: 'product_name',
    product_price: 'product_price',
    sales_id: 'sales_id',
    quantity: 'quantity',
    total_price: 'total_price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DetailedSalesScalarFieldEnum = (typeof DetailedSalesScalarFieldEnum)[keyof typeof DetailedSalesScalarFieldEnum]


  export const PromosScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    discount: 'discount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromosScalarFieldEnum = (typeof PromosScalarFieldEnum)[keyof typeof PromosScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    image?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    description?: StringFilter<"products"> | string
    price?: IntFilter<"products"> | number
    createdAt?: DateTimeFilter<"products"> | Date | string
    updatedAt?: DateTimeFilter<"products"> | Date | string
    category_id?: IntNullableFilter<"products"> | number | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category_id?: SortOrderInput | SortOrder
    categories?: categoriesOrderByWithRelationInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    image?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    description?: StringFilter<"products"> | string
    price?: IntFilter<"products"> | number
    createdAt?: DateTimeFilter<"products"> | Date | string
    updatedAt?: DateTimeFilter<"products"> | Date | string
    category_id?: IntNullableFilter<"products"> | number | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category_id?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    image?: StringWithAggregatesFilter<"products"> | string
    name?: StringWithAggregatesFilter<"products"> | string
    description?: StringWithAggregatesFilter<"products"> | string
    price?: IntWithAggregatesFilter<"products"> | number
    createdAt?: DateTimeWithAggregatesFilter<"products"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"products"> | Date | string
    category_id?: IntNullableWithAggregatesFilter<"products"> | number | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    createdAt?: DateTimeFilter<"categories"> | Date | string
    updatedAt?: DateTimeFilter<"categories"> | Date | string
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    name?: StringFilter<"categories"> | string
    createdAt?: DateTimeFilter<"categories"> | Date | string
    updatedAt?: DateTimeFilter<"categories"> | Date | string
    products?: ProductsListRelationFilter
  }, "id">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"categories"> | Date | string
  }

  export type salesWhereInput = {
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    id?: IntFilter<"sales"> | number
    tax?: IntFilter<"sales"> | number
    discount?: IntNullableFilter<"sales"> | number | null
    total_amount?: IntFilter<"sales"> | number
    createdAt?: DateTimeFilter<"sales"> | Date | string
    updatedAt?: DateTimeFilter<"sales"> | Date | string
    status?: StringFilter<"sales"> | string
    detailedSales?: DetailedSalesListRelationFilter
  }

  export type salesOrderByWithRelationInput = {
    id?: SortOrder
    tax?: SortOrder
    discount?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    detailedSales?: detailedSalesOrderByRelationAggregateInput
  }

  export type salesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    tax?: IntFilter<"sales"> | number
    discount?: IntNullableFilter<"sales"> | number | null
    total_amount?: IntFilter<"sales"> | number
    createdAt?: DateTimeFilter<"sales"> | Date | string
    updatedAt?: DateTimeFilter<"sales"> | Date | string
    status?: StringFilter<"sales"> | string
    detailedSales?: DetailedSalesListRelationFilter
  }, "id">

  export type salesOrderByWithAggregationInput = {
    id?: SortOrder
    tax?: SortOrder
    discount?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: salesCountOrderByAggregateInput
    _avg?: salesAvgOrderByAggregateInput
    _max?: salesMaxOrderByAggregateInput
    _min?: salesMinOrderByAggregateInput
    _sum?: salesSumOrderByAggregateInput
  }

  export type salesScalarWhereWithAggregatesInput = {
    AND?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    OR?: salesScalarWhereWithAggregatesInput[]
    NOT?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sales"> | number
    tax?: IntWithAggregatesFilter<"sales"> | number
    discount?: IntNullableWithAggregatesFilter<"sales"> | number | null
    total_amount?: IntWithAggregatesFilter<"sales"> | number
    createdAt?: DateTimeWithAggregatesFilter<"sales"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sales"> | Date | string
    status?: StringWithAggregatesFilter<"sales"> | string
  }

  export type detailedSalesWhereInput = {
    AND?: detailedSalesWhereInput | detailedSalesWhereInput[]
    OR?: detailedSalesWhereInput[]
    NOT?: detailedSalesWhereInput | detailedSalesWhereInput[]
    id?: IntFilter<"detailedSales"> | number
    product_id?: IntFilter<"detailedSales"> | number
    product_name?: StringFilter<"detailedSales"> | string
    product_price?: IntFilter<"detailedSales"> | number
    sales_id?: IntFilter<"detailedSales"> | number
    quantity?: IntFilter<"detailedSales"> | number
    total_price?: IntFilter<"detailedSales"> | number
    createdAt?: DateTimeFilter<"detailedSales"> | Date | string
    updatedAt?: DateTimeFilter<"detailedSales"> | Date | string
    sales?: XOR<SalesScalarRelationFilter, salesWhereInput>
  }

  export type detailedSalesOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    product_price?: SortOrder
    sales_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales?: salesOrderByWithRelationInput
  }

  export type detailedSalesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detailedSalesWhereInput | detailedSalesWhereInput[]
    OR?: detailedSalesWhereInput[]
    NOT?: detailedSalesWhereInput | detailedSalesWhereInput[]
    product_id?: IntFilter<"detailedSales"> | number
    product_name?: StringFilter<"detailedSales"> | string
    product_price?: IntFilter<"detailedSales"> | number
    sales_id?: IntFilter<"detailedSales"> | number
    quantity?: IntFilter<"detailedSales"> | number
    total_price?: IntFilter<"detailedSales"> | number
    createdAt?: DateTimeFilter<"detailedSales"> | Date | string
    updatedAt?: DateTimeFilter<"detailedSales"> | Date | string
    sales?: XOR<SalesScalarRelationFilter, salesWhereInput>
  }, "id">

  export type detailedSalesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    product_price?: SortOrder
    sales_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: detailedSalesCountOrderByAggregateInput
    _avg?: detailedSalesAvgOrderByAggregateInput
    _max?: detailedSalesMaxOrderByAggregateInput
    _min?: detailedSalesMinOrderByAggregateInput
    _sum?: detailedSalesSumOrderByAggregateInput
  }

  export type detailedSalesScalarWhereWithAggregatesInput = {
    AND?: detailedSalesScalarWhereWithAggregatesInput | detailedSalesScalarWhereWithAggregatesInput[]
    OR?: detailedSalesScalarWhereWithAggregatesInput[]
    NOT?: detailedSalesScalarWhereWithAggregatesInput | detailedSalesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detailedSales"> | number
    product_id?: IntWithAggregatesFilter<"detailedSales"> | number
    product_name?: StringWithAggregatesFilter<"detailedSales"> | string
    product_price?: IntWithAggregatesFilter<"detailedSales"> | number
    sales_id?: IntWithAggregatesFilter<"detailedSales"> | number
    quantity?: IntWithAggregatesFilter<"detailedSales"> | number
    total_price?: IntWithAggregatesFilter<"detailedSales"> | number
    createdAt?: DateTimeWithAggregatesFilter<"detailedSales"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"detailedSales"> | Date | string
  }

  export type promosWhereInput = {
    AND?: promosWhereInput | promosWhereInput[]
    OR?: promosWhereInput[]
    NOT?: promosWhereInput | promosWhereInput[]
    id?: IntFilter<"promos"> | number
    name?: StringFilter<"promos"> | string
    description?: StringFilter<"promos"> | string
    discount?: IntFilter<"promos"> | number
    createdAt?: DateTimeFilter<"promos"> | Date | string
    updatedAt?: DateTimeFilter<"promos"> | Date | string
  }

  export type promosOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type promosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: promosWhereInput | promosWhereInput[]
    OR?: promosWhereInput[]
    NOT?: promosWhereInput | promosWhereInput[]
    name?: StringFilter<"promos"> | string
    description?: StringFilter<"promos"> | string
    discount?: IntFilter<"promos"> | number
    createdAt?: DateTimeFilter<"promos"> | Date | string
    updatedAt?: DateTimeFilter<"promos"> | Date | string
  }, "id">

  export type promosOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: promosCountOrderByAggregateInput
    _avg?: promosAvgOrderByAggregateInput
    _max?: promosMaxOrderByAggregateInput
    _min?: promosMinOrderByAggregateInput
    _sum?: promosSumOrderByAggregateInput
  }

  export type promosScalarWhereWithAggregatesInput = {
    AND?: promosScalarWhereWithAggregatesInput | promosScalarWhereWithAggregatesInput[]
    OR?: promosScalarWhereWithAggregatesInput[]
    NOT?: promosScalarWhereWithAggregatesInput | promosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"promos"> | number
    name?: StringWithAggregatesFilter<"promos"> | string
    description?: StringWithAggregatesFilter<"promos"> | string
    discount?: IntWithAggregatesFilter<"promos"> | number
    createdAt?: DateTimeWithAggregatesFilter<"promos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"promos"> | Date | string
  }

  export type productsCreateInput = {
    image: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    image: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category_id?: number | null
  }

  export type productsUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productsCreateManyInput = {
    id?: number
    image: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category_id?: number | null
  }

  export type productsUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categoriesCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type salesCreateInput = {
    tax: number
    discount?: number | null
    total_amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    detailedSales?: detailedSalesCreateNestedManyWithoutSalesInput
  }

  export type salesUncheckedCreateInput = {
    id?: number
    tax: number
    discount?: number | null
    total_amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    detailedSales?: detailedSalesUncheckedCreateNestedManyWithoutSalesInput
  }

  export type salesUpdateInput = {
    tax?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    detailedSales?: detailedSalesUpdateManyWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    detailedSales?: detailedSalesUncheckedUpdateManyWithoutSalesNestedInput
  }

  export type salesCreateManyInput = {
    id?: number
    tax: number
    discount?: number | null
    total_amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type salesUpdateManyMutationInput = {
    tax?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type salesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type detailedSalesCreateInput = {
    product_id: number
    product_name: string
    product_price: number
    quantity: number
    total_price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sales: salesCreateNestedOneWithoutDetailedSalesInput
  }

  export type detailedSalesUncheckedCreateInput = {
    id?: number
    product_id: number
    product_name: string
    product_price: number
    sales_id: number
    quantity: number
    total_price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type detailedSalesUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: salesUpdateOneRequiredWithoutDetailedSalesNestedInput
  }

  export type detailedSalesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_price?: IntFieldUpdateOperationsInput | number
    sales_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailedSalesCreateManyInput = {
    id?: number
    product_id: number
    product_name: string
    product_price: number
    sales_id: number
    quantity: number
    total_price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type detailedSalesUpdateManyMutationInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailedSalesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_price?: IntFieldUpdateOperationsInput | number
    sales_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type promosCreateInput = {
    name: string
    description: string
    discount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type promosUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    discount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type promosUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type promosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type promosCreateManyInput = {
    id?: number
    name: string
    description: string
    discount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type promosUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type promosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category_id?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category_id?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category_id?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetailedSalesListRelationFilter = {
    every?: detailedSalesWhereInput
    some?: detailedSalesWhereInput
    none?: detailedSalesWhereInput
  }

  export type detailedSalesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type salesCountOrderByAggregateInput = {
    id?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    total_amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type salesAvgOrderByAggregateInput = {
    id?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    total_amount?: SortOrder
  }

  export type salesMaxOrderByAggregateInput = {
    id?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    total_amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type salesMinOrderByAggregateInput = {
    id?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    total_amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type salesSumOrderByAggregateInput = {
    id?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    total_amount?: SortOrder
  }

  export type SalesScalarRelationFilter = {
    is?: salesWhereInput
    isNot?: salesWhereInput
  }

  export type detailedSalesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    product_price?: SortOrder
    sales_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type detailedSalesAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_price?: SortOrder
    sales_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type detailedSalesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    product_price?: SortOrder
    sales_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type detailedSalesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_name?: SortOrder
    product_price?: SortOrder
    sales_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type detailedSalesSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    product_price?: SortOrder
    sales_id?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type promosCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type promosAvgOrderByAggregateInput = {
    id?: SortOrder
    discount?: SortOrder
  }

  export type promosMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type promosMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    discount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type promosSumOrderByAggregateInput = {
    id?: SortOrder
    discount?: SortOrder
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type categoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type detailedSalesCreateNestedManyWithoutSalesInput = {
    create?: XOR<detailedSalesCreateWithoutSalesInput, detailedSalesUncheckedCreateWithoutSalesInput> | detailedSalesCreateWithoutSalesInput[] | detailedSalesUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: detailedSalesCreateOrConnectWithoutSalesInput | detailedSalesCreateOrConnectWithoutSalesInput[]
    createMany?: detailedSalesCreateManySalesInputEnvelope
    connect?: detailedSalesWhereUniqueInput | detailedSalesWhereUniqueInput[]
  }

  export type detailedSalesUncheckedCreateNestedManyWithoutSalesInput = {
    create?: XOR<detailedSalesCreateWithoutSalesInput, detailedSalesUncheckedCreateWithoutSalesInput> | detailedSalesCreateWithoutSalesInput[] | detailedSalesUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: detailedSalesCreateOrConnectWithoutSalesInput | detailedSalesCreateOrConnectWithoutSalesInput[]
    createMany?: detailedSalesCreateManySalesInputEnvelope
    connect?: detailedSalesWhereUniqueInput | detailedSalesWhereUniqueInput[]
  }

  export type detailedSalesUpdateManyWithoutSalesNestedInput = {
    create?: XOR<detailedSalesCreateWithoutSalesInput, detailedSalesUncheckedCreateWithoutSalesInput> | detailedSalesCreateWithoutSalesInput[] | detailedSalesUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: detailedSalesCreateOrConnectWithoutSalesInput | detailedSalesCreateOrConnectWithoutSalesInput[]
    upsert?: detailedSalesUpsertWithWhereUniqueWithoutSalesInput | detailedSalesUpsertWithWhereUniqueWithoutSalesInput[]
    createMany?: detailedSalesCreateManySalesInputEnvelope
    set?: detailedSalesWhereUniqueInput | detailedSalesWhereUniqueInput[]
    disconnect?: detailedSalesWhereUniqueInput | detailedSalesWhereUniqueInput[]
    delete?: detailedSalesWhereUniqueInput | detailedSalesWhereUniqueInput[]
    connect?: detailedSalesWhereUniqueInput | detailedSalesWhereUniqueInput[]
    update?: detailedSalesUpdateWithWhereUniqueWithoutSalesInput | detailedSalesUpdateWithWhereUniqueWithoutSalesInput[]
    updateMany?: detailedSalesUpdateManyWithWhereWithoutSalesInput | detailedSalesUpdateManyWithWhereWithoutSalesInput[]
    deleteMany?: detailedSalesScalarWhereInput | detailedSalesScalarWhereInput[]
  }

  export type detailedSalesUncheckedUpdateManyWithoutSalesNestedInput = {
    create?: XOR<detailedSalesCreateWithoutSalesInput, detailedSalesUncheckedCreateWithoutSalesInput> | detailedSalesCreateWithoutSalesInput[] | detailedSalesUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: detailedSalesCreateOrConnectWithoutSalesInput | detailedSalesCreateOrConnectWithoutSalesInput[]
    upsert?: detailedSalesUpsertWithWhereUniqueWithoutSalesInput | detailedSalesUpsertWithWhereUniqueWithoutSalesInput[]
    createMany?: detailedSalesCreateManySalesInputEnvelope
    set?: detailedSalesWhereUniqueInput | detailedSalesWhereUniqueInput[]
    disconnect?: detailedSalesWhereUniqueInput | detailedSalesWhereUniqueInput[]
    delete?: detailedSalesWhereUniqueInput | detailedSalesWhereUniqueInput[]
    connect?: detailedSalesWhereUniqueInput | detailedSalesWhereUniqueInput[]
    update?: detailedSalesUpdateWithWhereUniqueWithoutSalesInput | detailedSalesUpdateWithWhereUniqueWithoutSalesInput[]
    updateMany?: detailedSalesUpdateManyWithWhereWithoutSalesInput | detailedSalesUpdateManyWithWhereWithoutSalesInput[]
    deleteMany?: detailedSalesScalarWhereInput | detailedSalesScalarWhereInput[]
  }

  export type salesCreateNestedOneWithoutDetailedSalesInput = {
    create?: XOR<salesCreateWithoutDetailedSalesInput, salesUncheckedCreateWithoutDetailedSalesInput>
    connectOrCreate?: salesCreateOrConnectWithoutDetailedSalesInput
    connect?: salesWhereUniqueInput
  }

  export type salesUpdateOneRequiredWithoutDetailedSalesNestedInput = {
    create?: XOR<salesCreateWithoutDetailedSalesInput, salesUncheckedCreateWithoutDetailedSalesInput>
    connectOrCreate?: salesCreateOrConnectWithoutDetailedSalesInput
    upsert?: salesUpsertWithoutDetailedSalesInput
    connect?: salesWhereUniqueInput
    update?: XOR<XOR<salesUpdateToOneWithWhereWithoutDetailedSalesInput, salesUpdateWithoutDetailedSalesInput>, salesUncheckedUpdateWithoutDetailedSalesInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type categoriesCreateWithoutProductsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateWithoutCategoriesInput = {
    image: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    image: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: IntFilter<"products"> | number
    image?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    description?: StringFilter<"products"> | string
    price?: IntFilter<"products"> | number
    createdAt?: DateTimeFilter<"products"> | Date | string
    updatedAt?: DateTimeFilter<"products"> | Date | string
    category_id?: IntNullableFilter<"products"> | number | null
  }

  export type detailedSalesCreateWithoutSalesInput = {
    product_id: number
    product_name: string
    product_price: number
    quantity: number
    total_price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type detailedSalesUncheckedCreateWithoutSalesInput = {
    id?: number
    product_id: number
    product_name: string
    product_price: number
    quantity: number
    total_price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type detailedSalesCreateOrConnectWithoutSalesInput = {
    where: detailedSalesWhereUniqueInput
    create: XOR<detailedSalesCreateWithoutSalesInput, detailedSalesUncheckedCreateWithoutSalesInput>
  }

  export type detailedSalesCreateManySalesInputEnvelope = {
    data: detailedSalesCreateManySalesInput | detailedSalesCreateManySalesInput[]
    skipDuplicates?: boolean
  }

  export type detailedSalesUpsertWithWhereUniqueWithoutSalesInput = {
    where: detailedSalesWhereUniqueInput
    update: XOR<detailedSalesUpdateWithoutSalesInput, detailedSalesUncheckedUpdateWithoutSalesInput>
    create: XOR<detailedSalesCreateWithoutSalesInput, detailedSalesUncheckedCreateWithoutSalesInput>
  }

  export type detailedSalesUpdateWithWhereUniqueWithoutSalesInput = {
    where: detailedSalesWhereUniqueInput
    data: XOR<detailedSalesUpdateWithoutSalesInput, detailedSalesUncheckedUpdateWithoutSalesInput>
  }

  export type detailedSalesUpdateManyWithWhereWithoutSalesInput = {
    where: detailedSalesScalarWhereInput
    data: XOR<detailedSalesUpdateManyMutationInput, detailedSalesUncheckedUpdateManyWithoutSalesInput>
  }

  export type detailedSalesScalarWhereInput = {
    AND?: detailedSalesScalarWhereInput | detailedSalesScalarWhereInput[]
    OR?: detailedSalesScalarWhereInput[]
    NOT?: detailedSalesScalarWhereInput | detailedSalesScalarWhereInput[]
    id?: IntFilter<"detailedSales"> | number
    product_id?: IntFilter<"detailedSales"> | number
    product_name?: StringFilter<"detailedSales"> | string
    product_price?: IntFilter<"detailedSales"> | number
    sales_id?: IntFilter<"detailedSales"> | number
    quantity?: IntFilter<"detailedSales"> | number
    total_price?: IntFilter<"detailedSales"> | number
    createdAt?: DateTimeFilter<"detailedSales"> | Date | string
    updatedAt?: DateTimeFilter<"detailedSales"> | Date | string
  }

  export type salesCreateWithoutDetailedSalesInput = {
    tax: number
    discount?: number | null
    total_amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type salesUncheckedCreateWithoutDetailedSalesInput = {
    id?: number
    tax: number
    discount?: number | null
    total_amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type salesCreateOrConnectWithoutDetailedSalesInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutDetailedSalesInput, salesUncheckedCreateWithoutDetailedSalesInput>
  }

  export type salesUpsertWithoutDetailedSalesInput = {
    update: XOR<salesUpdateWithoutDetailedSalesInput, salesUncheckedUpdateWithoutDetailedSalesInput>
    create: XOR<salesCreateWithoutDetailedSalesInput, salesUncheckedCreateWithoutDetailedSalesInput>
    where?: salesWhereInput
  }

  export type salesUpdateToOneWithWhereWithoutDetailedSalesInput = {
    where?: salesWhereInput
    data: XOR<salesUpdateWithoutDetailedSalesInput, salesUncheckedUpdateWithoutDetailedSalesInput>
  }

  export type salesUpdateWithoutDetailedSalesInput = {
    tax?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type salesUncheckedUpdateWithoutDetailedSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    discount?: NullableIntFieldUpdateOperationsInput | number | null
    total_amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type productsCreateManyCategoriesInput = {
    id?: number
    image: string
    name: string
    description: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type productsUpdateWithoutCategoriesInput = {
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailedSalesCreateManySalesInput = {
    id?: number
    product_id: number
    product_name: string
    product_price: number
    quantity: number
    total_price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type detailedSalesUpdateWithoutSalesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailedSalesUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type detailedSalesUncheckedUpdateManyWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    product_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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