export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export const actions = {
  actionTest (a,b,c,d) {
    console.log('this',this)
    console.log('aa',a)
    console.log('bb',b)
    console.log('cc',c)
    console.log('dd',d)
  }
}
