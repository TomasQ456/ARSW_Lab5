const blueprints = [
  {
    author: 'john',
    name: 'house',
    points: [
      { x: 30, y: 30 },
      { x: 120, y: 80 },
      { x: 200, y: 55 },
      { x: 240, y: 150 },
    ],
  },
  {
    author: 'john',
    name: 'garage',
    points: [
      { x: 50, y: 50 },
      { x: 200, y: 50 },
      { x: 200, y: 160 },
      { x: 50, y: 160 },
      { x: 50, y: 50 },
    ],
  },
  {
    author: 'ana',
    name: 'kitchen',
    points: [
      { x: 20, y: 20 },
      { x: 100, y: 60 },
      { x: 180, y: 110 },
    ],
  },
]

const wait = (ms = 50) => new Promise((resolve) => setTimeout(resolve, ms))

const service = {
  async getAll() {
    await wait()
    return [...blueprints]
  },

  async getByAuthor(author) {
    await wait()
    return blueprints.filter((bp) => bp.author === author)
  },

  async getByAuthorAndName(author, name) {
    await wait()
    return blueprints.find((bp) => bp.author === author && bp.name === name) || null
  },

  async create(payload) {
    await wait()
    const blueprint = {
      author: payload.author,
      name: payload.name,
      points: payload.points || [],
    }
    blueprints.push(blueprint)
    return blueprint
  },
}

export default service
