const URL = "http://localhost:8000";

async function api(method, path, data) {
  return fetch(URL + path, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

async function get(path, data) {
  return await api("GET", path, data);
}

async function post(path, data) {
  return await api("POST", path, data);
}

async function update(path, data) {
  return await api("UPDATE", path, data);
}

async function remove(path, data) {
  return await api("DELETE", path, data);
}

export async function getTasks() {
  return get("/api/tasks");
}

export async function createTask(data) {
  return post("/api/task", data);
}

export async function updateTask(id, data) {
  return update("/api/task/" + id, data);
}

export async function removeTask(id) {
  return remove("/api/task/" + id);
}
