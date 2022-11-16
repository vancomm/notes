const prefix = '/api'

const routes = {
  register: () => `${prefix}/register`,
  login: () => `${prefix}/login`,
  user: () => `${prefix}/user`,
  notes: () => `${prefix}/notes`,
  note: () => `${prefix}/note`,
}

export default routes