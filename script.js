const padlock = document.querySelector('.padlock')
const text = document.querySelector('.text')

const toggleMessageVis = () => text.classList.toggle("text_visible")
const permanentMessageVis = () => { text.className = "text_visible" }
const dimmerPadlock = () => { padlock.className = "padlock padlock_clicked" }

padlock.addEventListener("mouseenter", () => {
  toggleMessageVis()
})

padlock.addEventListener("mouseleave", () => {
  toggleMessageVis()
})

padlock.addEventListener("click", () => {
  permanentMessageVis()
  dimmerPadlock()
})