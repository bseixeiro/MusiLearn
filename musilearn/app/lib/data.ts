import { users } from "./placeholder-data";

export async function fetchUsers(){
    return users
}

export async function fetchFilteredUsers(
    query: string,
    currentPage: number,
  ){
    const data = users.filter(u => { if (u.name.includes(query) || u.email.includes(query) || u.role.includes(query)) return u})
    return data
}

export async function fetchUsersPages(query: string) {
    const ITEMS_PER_PAGE = 3
    
    try {
      const data = users.filter(u => { if (u.name.includes(query) || u.email.includes(query) || u.role.includes(query)) return u})
  
      const totalPages = Math.ceil(Number(data.length) / ITEMS_PER_PAGE);
      return totalPages;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of invoices.');
    }
  }