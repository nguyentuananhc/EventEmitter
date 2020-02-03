class EventEmitter {
  events = {};

  emit(eventName, eventData) {
    if (!this.events[eventName]) return
    this.events[eventName].forEach(fn => fn(eventData))
  }

  on(eventName, callbackFn) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callbackFn)
  }

  removeListener(eventName, callbackFn) {
    const idx = this.events[eventName].indexOf(callbackFn)
    if (idx === -1) return
    this.events[eventName].splice(idx, 1)
  }
}

export default new EventEmitter();
