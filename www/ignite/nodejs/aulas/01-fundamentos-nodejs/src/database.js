export class Database {
  database = {}

  select(table) {
    const data = this.database[table] ?? []

    return data
  }

  insert(tabela, data) {
    if (Array.isArray(this.database[table])){
      this.database[table].push(data)
    } else {
      this.database[table] = [data]
    }

    return data;
  }
}