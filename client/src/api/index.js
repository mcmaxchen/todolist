const URL = "http://localhost:8000";

// API functions

async function api(method, path, data) {
  return fetch(URL + path, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(async (res) => {
      return await res.json();
    })
    .catch((err) => {
      return err;
    });
}

async function get(path) {
  return await api("GET", path);
}

async function post(path, data) {
  return await api("POST", path, data);
}

async function update(path, data) {
  return await api("PUT", path, data);
}

async function remove(path, data) {
  return await api("DELETE", path, data);
}

// Tasks functions

export async function getTasks() {
  return get("/api/tasks");
}

export async function getTaskById(id) {
  return get("/api/tasks/" + id);
}

export async function createTask(data) {
  return post("/api/tasks", data);
}

export async function updateTask(id, data) {
  return update("/api/tasks/" + id, data);
}

export async function removeTask(id) {
  return remove("/api/tasks/" + id);
}
