import { Pool, types } from 'pg'

types.setTypeParser(1082, (val: string) => val)
types.setTypeParser(1083, (val: string) => val)
types.setTypeParser(1114, (val: string) => val)
types.setTypeParser(1184, (val: string) => val)

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
})

export async function query<T = Record<string, unknown>>(text: string, params?: unknown[]): Promise<T[]> {
  const result = await pool.query(text, params)
  return result.rows as T[]
}

export async function queryOne<T = Record<string, unknown>>(text: string, params?: unknown[]): Promise<T | null> {
  const result = await pool.query(text, params)
  return (result.rows[0] as T) ?? null
}

export default pool
