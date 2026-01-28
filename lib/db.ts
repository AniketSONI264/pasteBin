/**
<<<<<<< HEAD
 * Database connection and schema management for Neon Postgres
 */

import { neonConfig, Pool } from '@neondatabase/serverless';

// Enable WebSocket for serverless edge runtime compatibility
neonConfig.fetchConnectionCache = true;

// Create a connection pool
let pool: Pool | null = null;

function getPool(): Pool {
  if (!pool) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}
=======
 * Database connection and schema management for Vercel Postgres
 */

import { sql } from '@vercel/postgres';
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab

/**
 * Paste data structure
 */
export interface Paste {
  id: string;
  content: string;
  created_at: Date;
  expires_at: Date | null;
  max_views: number | null;
  remaining_views: number | null;
}

/**
 * Initialize database schema
 * This runs automatically on first connection
 */
<<<<<<< HEAD
// export async function initDatabase(): Promise<void> {
//   const client = getPool();
  
//   try {
//     // Create pastes table if it doesn't exist
//     await client.query(`
//       CREATE TABLE IF NOT EXISTS pastes (
//         id VARCHAR(12) PRIMARY KEY,
//         content TEXT NOT NULL,
//         created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
//         expires_at TIMESTAMPTZ,
//         max_views INTEGER,
//         remaining_views INTEGER,
//         CHECK (max_views IS NULL OR max_views >= 1),
//         CHECK (remaining_views IS NULL OR remaining_views >= 0)
//       )
//     `);

//     // Create index for faster expiry checks
//     await client.query(`
//       CREATE INDEX IF NOT EXISTS idx_expires_at ON pastes(expires_at)
//       WHERE expires_at IS NOT NULL
//     `);

//     console.log('✅ Database schema initialized');
//   } catch (error) {
//     console.error('❌ Database initialization error:', error);
//     throw error;
//   }
// }
export async function initDatabase(): Promise<void> {
  const client = getPool();
  try {
    // Create pastes table if it doesn't exist
    await client.query(`
=======
export async function initDatabase(): Promise<void> {
  try {
    // Create pastes table if it doesn't exist
    await sql`
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab
      CREATE TABLE IF NOT EXISTS pastes (
        id VARCHAR(12) PRIMARY KEY,
        content TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        expires_at TIMESTAMPTZ,
        max_views INTEGER,
        remaining_views INTEGER,
        CHECK (max_views IS NULL OR max_views >= 1),
        CHECK (remaining_views IS NULL OR remaining_views >= 0)
      )
<<<<<<< HEAD
    `);

    // Create index for faster expiry checks
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_expires_at ON pastes(expires_at)
      WHERE expires_at IS NOT NULL
    `);
=======
    `;

    // Create index for faster expiry checks
    await sql`
      CREATE INDEX IF NOT EXISTS idx_expires_at ON pastes(expires_at)
      WHERE expires_at IS NOT NULL
    `;
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab

    console.log('✅ Database schema initialized');
  } catch (error) {
    console.error('❌ Database initialization error:', error);
    throw error;
  }
}

/**
 * Create a new paste
 */
export async function createPaste(
  id: string,
  content: string,
  expiresAt: Date | null,
  maxViews: number | null
): Promise<Paste> {
<<<<<<< HEAD
  const client = getPool();
  const remainingViews = maxViews;
  
  const result = await client.query<Paste>(
    `INSERT INTO pastes (id, content, expires_at, max_views, remaining_views)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [id, content, expiresAt, maxViews, remainingViews]
  );
=======
  const remainingViews = maxViews;
  
  const result = await sql<Paste>`
    INSERT INTO pastes (id, content, expires_at, max_views, remaining_views)
    VALUES (${id}, ${content}, ${expiresAt}, ${maxViews}, ${remainingViews})
    RETURNING *
  `;
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab

  return result.rows[0];
}

/**
 * Get a paste by ID
 * Returns null if not found
 */
export async function getPaste(id: string): Promise<Paste | null> {
<<<<<<< HEAD
  const client = getPool();
  
  const result = await client.query<Paste>(
    'SELECT * FROM pastes WHERE id = $1',
    [id]
  );
=======
  const result = await sql<Paste>`
    SELECT * FROM pastes
    WHERE id = ${id}
  `;
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab

  return result.rows.length > 0 ? result.rows[0] : null;
}

/**
 * Decrement remaining views atomically
 * Returns the updated paste or null if operation failed
 */
export async function decrementViews(id: string): Promise<Paste | null> {
<<<<<<< HEAD
  const client = getPool();
  
  const result = await client.query<Paste>(
    `UPDATE pastes
     SET remaining_views = remaining_views - 1
     WHERE id = $1
       AND remaining_views IS NOT NULL
       AND remaining_views > 0
     RETURNING *`,
    [id]
  );
=======
  const result = await sql<Paste>`
    UPDATE pastes
    SET remaining_views = remaining_views - 1
    WHERE id = ${id}
      AND remaining_views IS NOT NULL
      AND remaining_views > 0
    RETURNING *
  `;
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab

  return result.rows.length > 0 ? result.rows[0] : null;
}

/**
 * Delete a paste (for cleanup)
 */
export async function deletePaste(id: string): Promise<void> {
<<<<<<< HEAD
  const client = getPool();
  await client.query('DELETE FROM pastes WHERE id = $1', [id]);
=======
  await sql`
    DELETE FROM pastes
    WHERE id = ${id}
  `;
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab
}

/**
 * Check database health
 */
export async function checkDatabaseHealth(): Promise<boolean> {
  try {
<<<<<<< HEAD
    const client = getPool();
    await client.query('SELECT 1');
=======
    await sql`SELECT 1`;
>>>>>>> 033af332133643d5bf03cdad9f959e894b44a7ab
    return true;
  } catch {
    return false;
  }
}
