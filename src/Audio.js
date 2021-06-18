import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeLabel } from './features/counterSlice'
import './Audio.css'

function Audio({ key, keyCode, id, drumpad, name, btns, audio }) {
  const dispatch = useDispatch(changeLabel)
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const playAudio = () => {
    const audioTag = document.getElementById(btns)
    audioTag.currentTime = 0
    audioTag.play()
    dispatch(changeLabel(id))
  }
  const handleKeyPress = (e) => {
    if (e.keyCode === keyCode) {
      playAudio()
    }
  }
  return (
    <button onClick={playAudio} className={drumpad} key={key} id={id}>
      <audio className={name} id={btns} src={audio} />
      {btns}
    </button>
  )
}

export default Audio
