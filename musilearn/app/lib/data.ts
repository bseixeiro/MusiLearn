import postgres from 'postgres';
import { User } from './definition';

// export async function fetchUsers(){
//     return users
// }

 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
const ITEMS_PER_PAGE = 3

export async function fetchFilteredUsers(
    query: string,
    currentPage: number,
  ){
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const users = await sql<User[]>`
      SELECT
        *
      FROM users
      WHERE
        name ILIKE ${`%${query}%`} OR
        email ILIKE ${`%${query}%`} OR
        createdat::text ILIKE ${`%${query}%`} OR
        role ILIKE ${`%${query}%`}
      ORDER BY role
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return users;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchUsersPages(query: string) {
  try {
    const data = await sql`SELECT COUNT(*)
    FROM users
      WHERE
        name ILIKE ${`%${query}%`} OR
        email ILIKE ${`%${query}%`} OR
        createdAt::text ILIKE ${`%${query}%`} OR
        role ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
  }